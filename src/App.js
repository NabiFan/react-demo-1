// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';

const { useState } = React;

// 定義 inline-style 行內樣式
const shadow = {
  boxShadow: '0 0 10px 10px #eaeaea',
  padding: 20, // 省略 px，樣式會自動帶入單位變成 '20px'
};

const Counter = () => {
    const [count, setCount] = useState(256);
    const [testObj, setTestObj] = useState({
        id:'test',
        pric: 100,
    })
    console.log(`nabi test: ${JSON.stringify(testObj)}`)
    return (
        <div className="container" style={shadow}>
            <div className="chevron chevron-up" onClick={()=>{
                setCount(count + 1);
                setTestObj({
                    id: 'aaa'
                })
            }}></div>
            <div className="number">{count}</div>
            <div className="chevron chevron-down" onClick={()=> {
                setCount(count - 1);
                setTestObj({
                    ...testObj,
                    id: 'bbb'
                })
            }}></div>
        </div>
    )
}

const App = () => {
    return (
        <Counter />
    )
}

export default App;
