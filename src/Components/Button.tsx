type ButtonPropsType = {
    buttonTitle: string
    inc: () => void
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button onClick={props.inc}>{props.buttonTitle}</button>
    )
}