from sqlalchemy import ForeignKey
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from datetime import date

class Base(DeclarativeBase):
    pass

class User(Base):
    __tablename__ = 'users'
    user_id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    nickname: Mapped[str] = mapped_column()
    email: Mapped[str] = mapped_column(unique=True)
    password: Mapped[str] = mapped_column()

class Pet(Base):
    __tablename__ = 'pets'
    pet_id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column()
    gender: Mapped[str] = mapped_column()
    breed: Mapped[str] = mapped_column()
    birthdate: Mapped[date] = mapped_column()
    photo: Mapped[str] = mapped_column()  # 追加: 写真のパスを保存するカラム
    user_id: Mapped[int] = mapped_column(ForeignKey('users.user_id'))