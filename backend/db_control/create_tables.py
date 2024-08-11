# create_tables.pyの修正
from mymodels import Base
from connect import engine

# テーブルを強制的に削除
print("Dropping existing tables >>>")
Base.metadata.drop_all(bind=engine)

# 新しいテーブルを作成
print("Creating new tables >>>")
Base.metadata.create_all(bind=engine)

print("Tables created successfully.")
