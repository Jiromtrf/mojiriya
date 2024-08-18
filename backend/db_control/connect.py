# uname() error回避
import platform
print(platform.uname())

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session  
import sqlalchemy
import os

# ディレクトリパスを設定
main_path = os.path.dirname(os.path.abspath(__file__))
db_path = os.path.join(main_path, 'app.db')

# SQLiteデータベースへの接続
engine = create_engine(f"sqlite:///{db_path}", echo=True)
print(f"Database engine created: {engine}")

# セッションローカルクラスの作成
SessionLocal: sessionmaker = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# dog_data.dbへの接続
DOG_DATABASE_URL = "sqlite:///db_control/dog_data.db"
engine_dog = create_engine(DOG_DATABASE_URL)
SessionDog = sessionmaker(bind=engine_dog)

def get_dog_data_db():
    return engine_dog
