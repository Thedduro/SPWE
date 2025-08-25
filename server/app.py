# server/app.py
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
# React(3000번)에서 오는 요청 허용
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

@app.route("/api/hello")
def hello():
    return jsonify({"message": "안녕하세요! 여기는 Flask 백엔드 서버 5001번 포트입니다!"})

if __name__ == "__main__":
    app.run(port=5001, debug=True)