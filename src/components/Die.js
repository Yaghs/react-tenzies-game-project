export default function Die(props){
    return(
        <button onClick={() => props.hold(props.id)} style={{backgroundColor: props.isHeld === true ? "green" : "white"}}>{props.number}</button>
    )
}