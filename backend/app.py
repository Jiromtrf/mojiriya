from flask import Flask, request, jsonify, session
from flask_cors import CORS
from db_control.crud import create_user, create_pet
import db_control.mymodels
from werkzeug.security import check_password_hash

from datetime import datetime
import os
from werkzeug.utils import secure_filename
from db_control.mymodels import User
from db_control import db

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY')  # .envからSECRET_KEYを取得
CORS(app)

# アップロードフォルダの絶対パスを設定
UPLOAD_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'uploads')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route("/")
def index():
    return "<p>Flask top page!</p>"

@app.route("/user-register", methods=['POST'])
def register_user():
    values = request.get_json()
    create_user(values)
    return jsonify({"message": "User registered successfully!"}), 201

@app.route("/login", methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')
    
    # データベースからユーザーを取得
    user = db.session.query(User).filter_by(email=email).first()
    
    if user and check_password_hash(user.password, password):
        session['user_id'] = user.user_id  # セッションにユーザーIDを保存
        return jsonify({"message": "Login successful", "user_id": user.user_id}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401

@app.route("/pet-register", methods=['POST'])
def register_pet():
    if 'user_id' not in session:
        return jsonify({"message": "Unauthorized"}), 401

    user_id = session['user_id']
    name = request.form.get('name')
    gender = request.form.get('gender')
    breed = request.form.get('breed')
    birthdate_str = request.form.get('birthdate')
    
    if birthdate_str:
        birthdate = datetime.strptime(birthdate_str, "%Y-%m-%d").date()
    else:
        birthdate = None

    photo = request.files['photo']

    if photo:
        filename = secure_filename(photo.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        photo.save(filepath)
    else:
        filepath = None

    values = {
        'name': name,
        'gender': gender,
        'breed': breed,
        'birthdate': birthdate,
        'photo': filepath,
        'user_id': user_id  # セッションから取得したuser_idを使う
    }

    create_pet(values)
    return jsonify({"message": "Pet registered successfully!"}), 201

if __name__ == '__main__':
    app.run(debug=True)