export default function Button (props) {

    return (
        <button onClick={props.click} style={{backgroundColor: props.color }}>{props.texto}</button>
    )
}