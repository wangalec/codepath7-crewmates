

const PlayerCard = (props) => {
    return(
        <div>
            <h2> {props.name} </h2>
            <h2> {props.role} </h2>
            <h3> {props.description} </h3>
        </div>
    )
}

export default PlayerCard;