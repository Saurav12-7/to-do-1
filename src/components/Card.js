import './Card.css'
function Card(props)
{
    const cardStyle = {
        backgroundColor: props.color,
        display:props.display,
        color:props.text,
        flexDirection:props.direction,
        gap:props.gap,
        justifyContent:props.justify
      };
    return(<div  style={cardStyle}>
        {props.children}
    </div>);
}
export default Card;