import React ,{ useState } from "react";
import Card from "./Card";
import Product_Date from "./Product_Date";
import './Product_Item.css'
function Product_Item(props)
{
    const [title,setTitle]=useState(props.title);
    function clickHandler()
    {
        setTitle("hi");
    }
    return(
        <Card color="aqua" display="flex">
        <Product_Date date={props.date} month={props.month} year={props.year}></Product_Date>
        <h2>
        {title}
        </h2>
        <button onClick={clickHandler}>Add to cart</button>
        </Card>
    )
}

export default Product_Item;