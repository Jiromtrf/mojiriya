# uname() error回避
import platform
print(platform.uname())

from sqlalchemy import create_engine
import sqlalchemy
import os

# ディレクトリパスを設定
main_path = os.path.dirname(os.path.abspath(__file__))
os.chdir(main_path)
print(f"Changed directory to: {main_path}")

# SQLiteデータベースへの接続
engine = create_engine("sqlite:///app.db", echo=True)
print("Database engine created:", engine)