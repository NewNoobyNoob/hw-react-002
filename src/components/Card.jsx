const PersonCard = function(props) {
    return (
        <div className="card">
            <h1 className="card-title">{props.name}</h1>
            <div className="img-box">
                <img className="img-box-img" src={props.image} alt={props.name}></img>
            </div>
            <p>{props.description}</p>
            {props.words?.map((word) => <div>{word}</div>)}
            <button onClick={props.action} className="btn">Click</button>
        </div>
    )
}

export default PersonCard;
