import {Button} from './Button';

type ButtonType = {
    set: () => void
    setMaxLocalValue: (maxValue: number) => void
    maxLocalValue: number
}



function onChangeMinHandler() {
    alert('min')
}

export const Counter = (props: ButtonType) => {

    function onChangeMaxHandler(maxValue: number) {
        setMaxLocalValue(maxValue)
    }

    return (
        <div>Counter
            <div>
                <div>
                    Max value: <input type="number" onChange={(e)=>onChangeMaxHandler(Number(e.currentTarget.value))}/>
                </div>
                <div>
                    Min Value: <input type="number" onChange={onChangeMinHandler}/>
                </div>
                <div>
                    <Button buttonTitle={'set'} foo={props.set}/>
                </div>
            </div>
        </div>
    )
}