import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  const countUp = () => {
    setCount((c) => c + 1);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300); // アニメーション一時的に有効
  };

  const reset = () => {
    setCount(0);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };

  const bgColor = count % 2 === 0 ? '#f0f8ff' : '#ffe4e1';

  return (
    <div className="content" style={{ backgroundColor: bgColor }}>
      <div id="count" className={animate ? 'count animate' : 'count'}>
        {count}
      </div>
      <button id="countUp" onClick={countUp}>
        カウント！
      </button>
      <hr />
      <button id="reset" onClick={reset}>
        リセット
      </button>
    </div>
  );
}

export default App;
