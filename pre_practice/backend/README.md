# Backend (Flask)

Flask 백엔드 서버입니다.

## 설치 및 실행

### 1. 가상환경 생성 및 활성화
```bash
python -m venv venv
source venv/bin/activate  # macOS/Linux
# 또는
venv\Scripts\activate     # Windows
```

### 2. 패키지 설치
```bash
pip install -r requirements.txt
```

### 3. 서버 실행
```bash
python app.py
```

- 서버가 `http://localhost:5001`에서 실행됩니다
- API 엔드포인트: `http://localhost:5001/api/hello`

## API 엔드포인트

- `GET /api/hello`: 간단한 인사 메시지 반환
