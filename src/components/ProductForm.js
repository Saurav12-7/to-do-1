import './ProductForm.css'

import { useState } from 'react';

function ProductForm(props)
{
    const[NewTitle,setTitle]=useState('');
    const[NewDate,setDate]=useState('');

    function titleHandler(event)
    {
        setTitle(event.target.value);
    }

    function dateHandler(event)
    {
        setDate(event.target.value);
    }

    function submitHandler(event)
    {
        event.preventDefault();
        let date=NewDate.split("-");
        let obj={
            item_name:NewTitle,
            mfg_date:parseInt(date[2]),
            mfg_month:parseInt(date[1]),
            mfg_year:parseInt(date[0])
        }
        props.object(obj);
        setTitle('');
        setDate('');

    }
    return (
        <form onSubmit={submitHandler}>
            <div className='input'>
                <label>Title </label>
                <input type="text" value={NewTitle} onChange={titleHandler}></input>
            </div>

            <div className='input'>
                <label>Date </label>
                <input type="date" value={NewDate} onChange={dateHandler}></input>
            </div>

            <div className='btn'>
                <button type="submit">Add Item to List</button>
            </div>
        </form>
    )
}

export default ProductForm;