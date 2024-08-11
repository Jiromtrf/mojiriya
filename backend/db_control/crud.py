import platform
print("platform", platform.uname())

from sqlalchemy import insert, delete, update, select
from sqlalchemy.orm import sessionmaker
import json
from db_control.connect import engine
from db_control.mymodels import User, Pet

Session = sessionmaker(bind=engine)

def create_user(values):
    session = Session()
    query = insert(User).values(values)
    try:
        with session.begin():
            session.execute(query)
    except Exception as e:
        print("Error:", e)
        session.rollback()
    finally:
        session.close()

def create_pet(values):
    session = Session()
    query = insert(Pet).values(values)
    try:
        with session.begin():
            session.execute(query)
    except Exception as e:
        print("Error:", e)
        session.rollback()
    finally:
        session.close()

# 他のCRUD関数も同様に定義します
