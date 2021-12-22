import './App.css';
import React from 'react';

const { useState } = React;

// 定義 inline-style 行內樣式
const shadow = {
  boxShadow: '0 0 10px 10px #eaeaea',
  padding: 20, // 省略 px，樣式會自動帶入單位變成 '20px'
};
const Counter = () => {
    const [count, setCount] = useState(5);
    const handleChevron = (type) => () => {
        if (type === 'up') {
            setCount(count + 1)
        } else if(type === "down") {
            setCount(count - 1);
        }
    }

    const limtUP = 10;
    const limtDown = 0;

    return (
        <div className="container" style={shadow}>
            {count < limtUP && 
                <div className="chevron chevron-up" onClick={handleChevron('up')}></div>
            }
            <div className="number">{count}</div>
            {count > limtDown &&
                <div className="chevron chevron-down" onClick={handleChevron('down')}></div>
            }
        </div>
    )
}

const App = () => {
    return (
        <Counter />
    )
}

export default App;
