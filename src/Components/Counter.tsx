import {Button} from './Button';

type CounterType = {
    set: () => void
    setMaxLocalValue: (maxValue: number) => void
    maxLocalValue: number
    setMinLocalValue: (minValue: number) => void
    minLocalValue: number
    setIsIncDisabled: (v: boolean) => void
    setIsResetDisabled: (v: boolean) => void
    setIsIncorrectValue: (v: boolean) => void
}

export const Counter = (props: CounterType) => {

    function onChangeMaxHandler(maxValue: number) {
        props.setMaxLocalValue(maxValue)
        props.setIsIncDisabled(true)
        props.setIsResetDisabled(true)
        if (maxValue < 0) props.setIsIncorrectValue(true)
    }
    function onChangeMinHandler(minValue: number) {
        props.setMinLocalValue(minValue)
        props.setIsIncDisabled(true)
        props.setIsResetDisabled(true)
        if (minValue < 0) props.setIsIncorrectValue(true)
    }

    return (
        <div>Counter
            <div>
                <div>
                    Max value: <input type="number"
                                      value={props.maxLocalValue}
                                      onChange={(e)=>onChangeMaxHandler(Number(e.currentTarget.value))}/>
                </div>
                <div>
                    Min Value: <input type="number"
                                      value={props.minLocalValue}
                                      onChange={(e)=>onChangeMinHandler(Number(e.currentTarget.value))}/>
                </div>
                <div>
                    <Button buttonTitle={'set'}
                            foo={props.set}/>
                </div>
            </div>
        </div>
    )
}