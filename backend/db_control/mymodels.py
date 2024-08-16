from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, LargeBinary

# ベースクラスの作成
Base = declarative_base()

# ユーザーテーブル
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    nickname = Column(String)
    pets = relationship("Pet", back_populates="owner")

# ペットテーブル
class Pet(Base):
    __tablename__ = "pets"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    gender = Column(String)  # 性別
    species = Column(String)  # 種類
    birthdate = Column(String)  # 生年月日
    profile_image = Column(String)  # プロフィール画像のパス
    owner_id = Column(Integer, ForeignKey("users.id"))
    records = relationship("Record", back_populates="pet")
    owner = relationship("User", back_populates="pets")


# ごはん記録テーブル
class Record(Base):
    __tablename__ = 'records'

    id = Column(Integer, primary_key=True, index=True)
    pet_id = Column(Integer, ForeignKey('pets.id'))
    date = Column(DateTime, default=lambda: datetime.now(timezone.utc))  # タイムゾーンを含む現在時刻
    text = Column(String)
    photo_url = Column(String)
    
    pet = relationship("Pet", back_populates="records")

# さんぽ記録テーブル
class SanpoRecord(Base):
    __tablename__ = 'sanpo_records'

    id = Column(Integer, primary_key=True, index=True)
    pet_id = Column(Integer, ForeignKey('pets.id'), nullable=False)
    date = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    duration = Column(String, nullable=False)
    photo_url = Column(String)

# フォトテーブル
class Photo(Base):
    __tablename__ = 'photos'
    photo_id = Column(Integer, primary_key=True)
    upload_date = Column(String, default=lambda: datetime.now().strftime('%Y-%m-%d %H:%M'))
    photo_data = Column(LargeBinary)  # 画像データをバイナリ形式で保存
