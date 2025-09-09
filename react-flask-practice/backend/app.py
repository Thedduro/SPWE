# server/app.py
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
# React(3000번)에서 오는 요청 허용
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

@app.route("/api/popuplist")
def show_list():
    popuplist = [
        {
            "name": "popup1",
            "location": "대전 유성구",
            "open_close": "10:00 - 18:00",
            "tags": "fashion"
        },
        {
            "name": "popup2",
            "location": "대전 유성구",
            "open_close": "10:00 - 18:00",
            "tags": "fashion"
        },
        {
            "name": "popup3",
            "location": "대전 유성구",
            "open_close": "10:00 - 18:00",
            "tags": "fashion"
        }
    ]
    return jsonify({"popuplist": popuplist})

if __name__ == "__main__":
    app.run(port=5001, debug=True)