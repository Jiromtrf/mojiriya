from sqlalchemy.orm import Session
from . import mymodels
from datetime import datetime
from sqlalchemy import or_, text

# ユーザーの作成
def create_user(db: Session, email: str, hashed_password: str, nickname: str):
    db_user = mymodels.User(email=email, hashed_password=hashed_password, nickname=nickname)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


# ユーザーの取得
def get_user_by_email(db: Session, email: str):
    return db.query(mymodels.User).filter(mymodels.User.email == email).first()

# 全てのユーザーを取得
def get_users(db: Session, skip: int = 0, limit: int = 10):
    return db.query(mymodels.User).offset(skip).limit(limit).all()

# ペットの作成
def create_pet(db: Session, name: str, owner_id: int, gender: str, species: str, birthdate: str, profile_image: str):
    db_pet = mymodels.Pet(
        name=name,
        owner_id=owner_id,
        gender=gender,  # 新しい引数を追加
        species=species,  # 新しい引数を追加
        birthdate=birthdate,  # 新しい引数を追加
        profile_image=profile_image  # 新しい引数を追加
    )
    db.add(db_pet)
    db.commit()
    db.refresh(db_pet)
    return db_pet

def get_pets_by_user_id(db: Session, user_id: int):
    return db.query(mymodels.Pet).filter(mymodels.Pet.owner_id == user_id).all()



# ペットの取得
def get_pets(db: Session, owner_id: int):
    return db.query(mymodels.Pet).filter(mymodels.Pet.owner_id == owner_id).all()

# 記録の作成
def create_record(db: Session, pet_id: int, date, text: str, photo_url: str):
    db_record = mymodels.Record(pet_id=pet_id, date=date, text=text, photo_url=photo_url)
    db.add(db_record)
    db.commit()
    db.refresh(db_record)
    return db_record

# ペットの記録を取得
def get_records(db: Session, pet_id: int):
    return db.query(mymodels.Record).filter(mymodels.Record.pet_id == pet_id).all()

def create_eat_record(db: Session, pet_id: int, date: str, amount: str, photo: str):
    db_record = mymodels.Record(
        pet_id=pet_id,
        date=datetime.strptime(date, '%Y-%m-%dT%H:%M'),  # 分単位で日時を保存
        text=amount,
        photo_url=photo
    )
    db.add(db_record)
    db.commit()
    db.refresh(db_record)
    return db_record

def create_sanpo_record(db: Session, pet_id: int, date: str, duration: str, photo: str):
    db_record = mymodels.SanpoRecord(
        pet_id=pet_id,
        date=datetime.strptime(date, '%Y-%m-%dT%H:%M'),  # 分単位で日時を保存
        duration=duration,
        photo_url=photo
    )
    db.add(db_record)
    db.commit()
    db.refresh(db_record)
    return db_record

# アルバムの作成
def create_photo(db: Session, upload_date: str, photo_data: bytes):
    db_photo = mymodels.Photo(upload_date=upload_date, photo_data=photo_data)
    db.add(db_photo)
    db.commit()
    db.refresh(db_photo)
    return db_photo

# def get_dogs(db: Session, size_id: int, personality_id: str):
#     sql = text("""
#         SELECT * FROM dogs
#         WHERE size_id = :size_id
#         AND (
#             personality_id = :personality_id
#             OR personality_id LIKE :personality_id_with_comma
#             OR personality_id LIKE :personality_id_prefix
#             OR personality_id LIKE :personality_id_suffix
#         )
#     """)
#     result = db.execute(sql, {
#         'size_id': size_id,
#         'personality_id': personality_id,
#         'personality_id_with_comma': f'{personality_id},%',
#         'personality_id_prefix': f'%,{personality_id}',
#         'personality_id_suffix': f'%,{personality_id},%'
#     })
#     return result.fetchall()
#     print(f"Results fetched: {results}")
