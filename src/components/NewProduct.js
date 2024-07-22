import ProductForm from "./ProductForm";

function NewProduct(props)
{
    function objectCreation(obj)
    {
        props.object(obj);
    }
    return(
        <ProductForm object={objectCreation}/>
    )
}

export default NewProduct;