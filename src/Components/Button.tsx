type ButtonPropsType = {
    buttonTitle: string
    foo: () => void
    isBoardButtonsDisabled?: boolean
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button disabled={props.isBoardButtonsDisabled} onClick={props.foo}>{props.buttonTitle}</button>
    )
}