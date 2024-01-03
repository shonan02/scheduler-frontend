const Input = (props) => {

    return (
        <div>
            {props.label}
            <input 
                value={props.value}
                onChange={({target}) => {props.setValue(target.value)}}
                />
        </div>
    )
}

export default Input;