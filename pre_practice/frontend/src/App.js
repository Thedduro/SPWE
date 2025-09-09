import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Flask 서버에서 메시지 가져오기
    fetch('http://localhost:5001/api/hello')
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch(error => {
        console.error('서버 연결 실패:', error);
        setMessage('서버 연결에 실패했습니다.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="App">로딩 중...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React 앱이 성공적으로 실행되었습니다.</p>
        <p className="message">{message}</p>
      </header>
    </div>
  );
}

export default App;
