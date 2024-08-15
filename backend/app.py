from flask import Flask, request, jsonify
from db_control.create_tables import *
from db_control.connect import SessionLocal  # ここでimport
from db_control import crud
import hashlib
from sqlalchemy.orm import Session
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
from flask import send_from_directory
from db_control import mymodels

# Flaskアプリケーションのインスタンスを作成
app = Flask(__name__)
CORS(app)

# データベースセッションの作成
def get_db() -> Session:  # 型アノテーションを追加
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ルーティング（例：ホームページ）
@app.route("/")
def home():
    return "Welcome to PawJourney!"

# ユーザー登録エンドポイント
@app.route("/register", methods=["POST"])
def register_user():
    try:
        data = request.json
        email = data.get("email")
        password = data.get("password")
        nickname = data.get("nickname")
        hashed_password = hashlib.sha256(password.encode()).hexdigest()
        
        db = next(get_db())
        
        # 既にメールアドレスが存在するかチェック
        existing_user = crud.get_user_by_email(db, email=email)
        if existing_user:
            return jsonify({"error": "このメールアドレスは既に登録されています。"}), 400
        
        user = crud.create_user(db, email=email, hashed_password=hashed_password, nickname=nickname)
        
        return jsonify({"id": user.id, "email": user.email})
    except Exception as e:
        return jsonify({"error": str(e)}), 500



# ユーザーログインエンドポイント
@app.route("/login", methods=["POST"])
def login_user():
    data = request.json
    email = data.get("email")
    password = data.get("password")
    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    
    db = next(get_db())
    user = crud.get_user_by_email(db, email=email)
    
    if user and user.hashed_password == hashed_password:
        return jsonify({"message": "Login successful", "user_id": user.id})
    else:
        return jsonify({"message": "Invalid credentials"}), 401
    
@app.route("/test-db", methods=["GET"])
def test_db():
    db = next(get_db())
    try:
        # ここではユーザーがデータベースに存在するかを確認します
        users = crud.get_users(db)
        return jsonify([{"id": user.id, "email": user.email} for user in users])
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route("/register-pet", methods=["POST"])
def register_pet():
    try:
        user_id = request.form.get("user_id")
        name = request.form.get("name")
        gender = request.form.get("gender")
        species = request.form.get("species")
        birthdate = request.form.get("birthdate")

        # プロフィール画像の処理
        file = request.files.get("profile_image")
        if file:
            # 'uploads'ディレクトリが存在するか確認、なければ作成
            if not os.path.exists("uploads"):
                os.makedirs("uploads")

            filename = secure_filename(file.filename)
            file_path = os.path.join("uploads", filename)
            file.save(file_path)

            # パスの区切り文字を変換してデータベースに保存
            file_path = file_path.replace("\\", "/")
        else:
            file_path = None

        db = next(get_db())
        pet = crud.create_pet(db, name=name, owner_id=user_id, gender=gender, species=species, birthdate=birthdate, profile_image=file_path)
        
        return jsonify({"message": "ペット情報が登録されました。"})
    except Exception as e:
        print(f"Error: {str(e)}")  # エラーをコンソールに出力
        return jsonify({"error": str(e)}), 500


@app.route("/get-pets", methods=["GET"])
def get_pets():
    try:
        user_id = request.args.get("user_id")
        db = next(get_db())
        pets = crud.get_pets_by_user_id(db, user_id=user_id)
        return jsonify([{"name": pet.name, "profile_image": pet.profile_image} for pet in pets])
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": str(e)}), 500

# 'uploads'ディレクトリからファイルを提供するルート
@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory('uploads', filename)

@app.route("/save-eat-record", methods=["POST"])
def save_eat_record():
    try:
        user_id = request.form.get("user_id")
        
        # ペットIDを取得
        db = next(get_db())
        pet = db.query(mymodels.Pet).filter(mymodels.Pet.owner_id == user_id).first()
        if not pet:
            return jsonify({"error": "ペットが見つかりませんでした"}), 400
        
        pet_id = pet.id
        date = request.form.get("date")
        amount = request.form.get("amount")

        # 写真の処理
        file = request.files.get("photo")
        if file:
            if not os.path.exists("uploads"):
                os.makedirs("uploads")
            filename = secure_filename(file.filename)
            file_path = os.path.join("uploads", filename)
            file.save(file_path)
            file_path = file_path.replace("\\", "/")
        else:
            file_path = None

        record = crud.create_eat_record(db, pet_id=pet_id, date=date, amount=amount, photo=file_path)
        
        return jsonify({"message": "記録が保存されました。"})
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": str(e)}), 500



if __name__ == "__main__":
    app.run(debug=True)
