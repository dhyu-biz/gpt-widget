import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div style={{ background: '#eee', padding: '20px' }}>
      <h1>이건 CDN으로 불린 컴포넌트입니다.</h1>
    </div>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.createRoot(root).render(<App />);
