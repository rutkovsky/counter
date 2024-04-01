type ButtonPropsType = {
    buttonTitle: string
    foo: () => void
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button onClick={props.foo}>{props.buttonTitle}</button>
    )
}