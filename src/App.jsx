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

  return (
    <div className="content">
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
