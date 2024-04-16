import React, {useState} from 'react';
import './App.css';
import {Board} from './Components/Board';
import {Counter} from './Components/Counter';

function App() {

    let [boardValue, setBoardValue] = useState(
        Number(localStorage.getItem('boardValue')))

    let [maxLocalValue, setMaxLocalValue] = useState(
        Number(localStorage.getItem('maxValue')))

    let [minLocalValue, setMinLocalValue] = useState(
        Number(localStorage.getItem('minValue')))

    let [isIncDisabled, setIsIncDisabled] = useState(false)

    let [isResetDisabled, setIsResetDisabled] = useState(false)

    let [isIncorrectValue, setIsIncorrectValue] = useState(false)

    function inc() {
        setBoardValue(++boardValue)
        localStorage.setItem('boardValue', JSON.stringify(boardValue))
        if (Number(localStorage.getItem('boardValue')) === maxLocalValue) {
            setIsIncDisabled(true)
        }
    }

    function reset() {
        setIsIncDisabled(false)
        setBoardValue(0)
        localStorage.setItem('boardValue', JSON.stringify(minLocalValue))
    }

    function set() {
        if (Number(localStorage.getItem('maxValue')) < 0 || Number(localStorage.getItem('minValue')) < 0) {
            setIsIncorrectValue(true)
        } else {
            setIsIncorrectValue(false)
        }
        localStorage.setItem('maxValue', JSON.stringify(maxLocalValue))
        localStorage.setItem('minValue', JSON.stringify(minLocalValue))
        setBoardValue(minLocalValue)
        localStorage.setItem('boardValue', JSON.stringify(minLocalValue))
        setIsIncDisabled(false)
        setIsResetDisabled(false)
    }

    return (<div className="App">
        <Board boardValue={boardValue}
               reset={reset}
               inc={inc}
               maxLocalValue={maxLocalValue}
               isIncDisabled={isIncDisabled}
               isResetDisabled={isResetDisabled}
               isIncorrectValue={isIncorrectValue}
        />
        <Counter set={set}
                 setMaxLocalValue={setMaxLocalValue}
                 maxLocalValue={maxLocalValue}
                 setMinLocalValue={setMinLocalValue}
                 minLocalValue={minLocalValue}
                 setIsIncDisabled={setIsIncDisabled}
                 setIsResetDisabled={setIsResetDisabled}
                 setIsIncorrectValue={setIsIncorrectValue}
        />
    </div>);
}

export default App;