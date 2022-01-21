// import './App.css';
import React from 'react';

const { useState } = React;

// 定義 inline-style 行內樣式
const shadow = {
  boxShadow: '0 0 10px 10px #eaeaea',
  padding: 20, // 省略 px，樣式會自動帶入單位變成 '20px'
};
function Counter() {
    const [count, setCount] = useState(5);
    const handleChevron = (type) => () => {
        if (type === 'up') {
            setCount(count + 1)
        } else if(type === 'down') {
            setCount(count - 1);
        }
    }

    const limtUP = 10;
    const limtDown = 0;

    return (
        <div className="container" style={shadow}>
            {count < limtUP && 
              <div className="chevron chevron-up" onKeyPress={handleChevron('up')} role="presentation" />
            }
            <div className="number">{count}</div>
            {count > limtDown &&
                <div className="chevron chevron-down" onKeyPress={handleChevron('down')} role="presentation" />
            }
            <div
              onClick={handleChevron}
              onKeyPress={handleChevron}
              role="button"
              tabIndex="0">
              Save
            </div>
        </div>
    )
}

function App() {
    return (
        <Counter />
    )
}

export default App;
