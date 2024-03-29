import {Button} from './Button';

type BoardPropsType = {
    boardValue: number
    inc: () => void
}

export const Board = (props: BoardPropsType) => {
    return (
        <div>
            {props.boardValue}
            <div>
                <Button buttonTitle={'inc'} inc={props.inc}/>
                <Button buttonTitle={'reset'}/>
            </div>
        </div>
    )
}