import Product_Item from "./Product_Item";
import Card from "./Card";
import './Products.css'

function Products(props)
{
    
    return(
    
            <Card color="yellow" display="flex" align="center"  direction="column">
        
           {
           props.items.map((i)=>(<Product_Item title={i.item_name} date={i.mfg_date} month={i.mfg_month} year={i.mfg_year}/>))
           }

            </Card>
        
    )
}

export default Products;