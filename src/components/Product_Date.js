import Card from "./Card";
import './Product_Date.css'
function Product_Date(props)
{ 
    const classname=props.className;
    return(
        <Card color="#00008b" text="white">
        <p>
            {props.date}/
        </p>
        
        <p>
            {props.month}/
        </p>
        <p>
            {props.year}
        </p>
    </Card>
    )
    
}

export default Product_Date;