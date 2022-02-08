export function Card(props){
    return (
        <div>
            <img src={props.image} alt="icon" />
            <h2>{props.title}</h2>
            <span><p>{props.text}</p></span>
        </div>
    );
}

export default Card; 
