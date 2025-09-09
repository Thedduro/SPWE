

import React, { useEffect, useState } from 'react';
import './App.css';

// 지도 배경 샘플 이미지 (구글맵 스타일 무료 이미지)
const MAP_IMAGE = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80';

// 임의의 좌표값 (0~100%)
const markerPositions = [
  { left: '32%', top: '38%' },
  { left: '62%', top: '54%' },
  { left: '48%', top: '72%' },
];

function App() {
  const [popuplist, setPopuplist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    fetch('/api/popuplist')
      .then((res) => {
        if (!res.ok) throw new Error('API 응답 오류');
        return res.json();
      })
      .then((data) => {
        setPopuplist(data.popuplist || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // 팝업 위치를 마커 근처로 동적으로 배치
  const getPopupStyle = (idx) => {
    const pos = markerPositions[idx];
    return {
      left: `calc(${pos.left} + 40px)`,
      top: `calc(${pos.top} - 10px)`
    };
  };

  return (
    <div className="App">
      <h2>React + Flask Popup 지도 예시</h2>
      <div className="map-area" style={{backgroundImage: `url(${MAP_IMAGE})`}}>
        {popuplist.map((popup, idx) => (
          <div
            key={popup.name}
            className="marker"
            style={markerPositions[idx]}
            onClick={() => setSelected({ ...popup, idx })}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            📍
            {hovered === idx && (
              <div className="marker-tooltip">{popup.name}</div>
            )}
          </div>
        ))}
        {selected && (
          <div className="popup-info" style={getPopupStyle(selected.idx)}>
            <strong>{selected.name}</strong><br/>
            위치: {selected.location}<br/>
            시간: {selected.open_close}<br/>
            태그: {selected.tags}
            <br/>
            <button onClick={() => setSelected(null)}>닫기</button>
          </div>
        )}
      </div>

      {/* 리스트 카드 */}
      <div className="popup-list">
        {popuplist.map((popup, idx) => (
          <div className="popup-card" key={popup.name}>
            <div className="popup-card-title">{popup.name}</div>
            <div>위치: {popup.location}</div>
            <div>시간: {popup.open_close}</div>
            <div>태그: {popup.tags}</div>
            <button onClick={() => setSelected({ ...popup, idx })}>지도에서 보기</button>
          </div>
        ))}
      </div>

      {loading && <p>Flask 서버에서 데이터를 불러오는 중...</p>}
      {error && <p style={{color: 'red'}}>에러: {error}</p>}
    </div>
  );
}

export default App;
