import os

# 24バイトのランダムなシークレットキーを生成
secret_key = os.urandom(24)
print(secret_key)
