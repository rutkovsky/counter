import React, {useState} from 'react';
import './App.css';
import {Board} from './Components/Board';
import {Counter} from './Components/Counter';

function App() {

    let [boardValue, setBoardValue] = useState(0)

    let [maxValue, setMaxValue] = useState(0)

    let [minValue, setMinValue] = useState(0)

    let [maxLocalValue, setMaxLocalValue] = useState(0)

    let [minLocalValue, setMinLocalValue] = useState(0)

    function inc() {
        setBoardValue(++boardValue)
        localStorage.setItem('boardValue', JSON.stringify(boardValue))
    }

    function reset() {
        setBoardValue(0)
        localStorage.setItem('boardValue', '0')
    }

    function set() {
        setMaxValue(maxLocalValue)
        setMinValue(minLocalValue)
    }

    return (<div className="App">
        <Board boardValue={boardValue} reset={reset} inc={inc}/>
        <Counter set={set} setMaxLocalValue={setMaxLocalValue} maxLocalValue={maxLocalValue}/>
    </div>);
}

export default App;