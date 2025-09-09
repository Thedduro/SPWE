# React + Flask 연동 연습 프로젝트

React 프론트엔드와 Flask 백엔드를 연동한 간단한 웹 애플리케이션입니다.

## 📁 프로젝트 구조

```
react-flask-practice/
├── backend/                 # Flask 백엔드 서버
│   ├── app.py             # Flask 메인 애플리케이션
│   ├── requirements.txt   # Python 의존성
│   └── README.md         # 백엔드 설명
├── frontend/              # React 프론트엔드 앱
│   ├── src/
│   │   ├── App.js        # React 메인 컴포넌트
│   │   └── App.css       # 스타일 파일
│   ├── public/           # 정적 파일들
│   ├── package.json      # Node.js 의존성
│   └── README.md        # 프론트엔드 설명
└── README.md            # 전체 프로젝트 설명
```
## 🛠️ 설치 및 설정

### 1. Flask 백엔드 설정

#### Python 가상환경 생성 및 활성화
```bash
cd backend
python -m venv venv
source venv/bin/activate  # macOS/Linux
# 또는
venv\Scripts\activate     # Windows
```

#### Flask 및 필요한 패키지 설치 > 의존성 패키지 목록 생성
```bash
pip install flask flask-cors
pip freeze > requirements.txt
```

### 2. React 프론트엔드 설정

#### Node.js 의존성 설치
```bash
cd frontend
npm install
```

## 🚀 빠른 시작

### 1. 백엔드 실행 (Flask)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # macOS/Linux
pip install -r requirements.txt
python app.py
```
- 서버가 `http://localhost:5001`에서 실행됩니다
- API 엔드포인트: `http://localhost:5001/api/popuplist`

### 2. 프론트엔드 실행 (React)

새 터미널에서:
```bash
cd frontend
npm install
npm start
```
- React 앱이 `http://localhost:3000`에서 실행됩니다

## 🌐 접속 정보

- **React 앱**: http://localhost:3000
- **Flask API**: http://localhost:5001/api/popuplist

## 📋 파일별 역할

### Backend (Flask)
- **`backend/app.py`**: Flask 서버의 메인 파일
  - `/api/popuplist` 엔드포인트 제공
  - CORS 설정으로 React 앱에서의 요청 허용
  - JSON 형태로 메시지 응답

### Frontend (React)
- **`frontend/src/App.js`**: React 메인 컴포넌트
  - Flask 서버의 `/api/popuplist` 엔드포인트 호출
  - 받은 메시지를 화면에 표시
  - 로딩 상태 관리

- **`frontend/src/App.css`**: 스타일 파일
  - React 로고 애니메이션
  - 전체적인 레이아웃 스타일링

## 🌐 실행된 내용

### Flask 서버 (포트 5001)
- `http://localhost:5001/api/popuplist` 엔드포인트 제공
- CORS 설정으로 React 앱에서 접근 허용
- JSON 응답: `popuplist 메세지`

### React 앱 (포트 3000)
- Flask 서버의 `/api/popuplist` 엔드포인트를 호출
- 받은 메시지를 화면에 표시
- React 로고가 회전하며 애니메이션 표시

## 📋 기능

- React 앱에서 Flask 서버의 API 호출
- Flask 서버에서 JSON 형태로 메시지 응답
- CORS 설정으로 크로스 오리진 요청 허용
- React 로고 애니메이션 표시

## 🔗 연동 방식

1. **CORS 설정**: Flask에서 React 앱의 요청 허용
2. **API 호출**: React에서 `fetch()` 사용하여 Flask API 호출
3. **데이터 전송**: JSON 형태로 데이터 주고받기

## 📱 화면 구성

브라우저에서 `http://localhost:3000` 접속 시:
- React 로고가 회전하며 표시
- "React 앱이 성공적으로 실행되었습니다." 메시지
- Flask 서버에서 받은 "안녕하세요! 여기는 Flask 백엔드 서버 5001번 포트입니다!" 메시지

## 🛑 서버 중지

- **Flask 서버**: `Ctrl + C`
- **React 앱**: `Ctrl + C`

## 📝 학습 목적

이 프로젝트는 다음을 학습하기 위한 연습용입니다:
- React와 Flask의 기본 연동 방법
- CORS 설정과 API 호출
- 프론트엔드와 백엔드 분리 개발
- JSON 데이터 주고받기

## 🔧 개발 환경

- **Backend**: Python 3.11, Flask 3.1.2, Flask-CORS 6.0.1
- **Frontend**: React 18, Node.js

## 📝 참고사항

- 이 프로젝트는 학습용으로 제작되었습니다
- 개발 서버이므로 프로덕션 환경에서는 사용하지 마세요
- Flask 서버는 디버그 모드로 실행됩니다