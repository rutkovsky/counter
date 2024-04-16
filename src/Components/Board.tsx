import {Button} from './Button';

type BoardPropsType = {
    boardValue: number
    inc: () => void
    reset: () => void
    maxLocalValue: number
    isIncDisabled: boolean
    isResetDisabled: boolean
    isIncorrectValue: boolean
}

export const Board = (props: BoardPropsType) => {

    return (
        <div>
            Board
            <div className={
                Number(localStorage.getItem('boardValue')) ===
                props.maxLocalValue ? 'disabled' : ''}>
                {props.isIncDisabled && props.isResetDisabled ? 'enter values and press set' :
                    props.isIncorrectValue ? 'Incorrect value!' : Number(localStorage.getItem('boardValue'))}
            </div>
            <div>
                <Button buttonTitle={'inc'} foo={props.inc} isBoardButtonsDisabled={props.isIncDisabled}/>
                <Button buttonTitle={'reset'} foo={props.reset} isBoardButtonsDisabled={props.isResetDisabled}/>
            </div>
        </div>
    )
}