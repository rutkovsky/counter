import React, {useState} from 'react';
import './App.css';
import {Board} from './Components/Board';
import {Counter} from './Components/Counter';

function App() {

    let [boardValue, setBoardValue] = useState(0)

    function inc () {
        setBoardValue(++boardValue)
    }

    return (<div className="App">
        <Board boardValue={boardValue} inc={inc}/>
        <Counter/>
    </div>);
}

export default App;