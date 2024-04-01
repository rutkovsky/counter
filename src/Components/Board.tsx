import {Button} from './Button';

type BoardPropsType = {
    boardValue: number
    inc: () => void
    reset: () => void
}

export const Board = (props: BoardPropsType) => {
    return (
        <div>
            Board
            <div>{localStorage.getItem("boardValue")}</div>
            <div>
                <Button buttonTitle={'inc'} foo={props.inc}/>
                <Button buttonTitle={'reset'} foo={props.reset}/>
            </div>
        </div>
    )
}