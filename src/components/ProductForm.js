import './ProductForm.css'

import { useState } from 'react';

function ProductForm(props)
{
    // const[NewTitle,setTitle]=useState('');
    // const[NewDate,setDate]=useState('');
    const [newInfo,setNewInfo]=useState(
        {
            NewTitle:"",
            NewDate:""
        }
    );

    function NewInfo(e)
    {
        setNewInfo(prevState=>({ ...prevState, [e.target.name]: e.target.value }));
    }
    // function titleHandler(event)
    // {
    //     setTitle(event.target.value);
    // }

    // function dateHandler(event)
    // {
    //     setDate(event.target.value);
    // }

    function submitHandler(event)
    {
        event.preventDefault();
        let date=newInfo?.NewDate.split("-");
        let obj={
            item_name:newInfo.NewTitle,
            mfg_date:parseInt(date[2]),
            mfg_month:parseInt(date[1]),
            mfg_year:parseInt(date[0])
        }
        props.object(obj);
        setNewInfo({
            NewTitle:"",
            NewDate:""
        })

    }
    return (
        <form onSubmit={submitHandler}>
            <div className='input'>
                <label>Title </label>
                <input type="text" value={newInfo.NewTitle} onChange={NewInfo} name='NewTitle'></input>
            </div>

            <div className='input'>
                <label>Date </label>
                <input type="date" value={newInfo.NewDate} onChange={NewInfo} name='NewDate'></input>
            </div>

            <div className='btn'>
                <button type="submit">Add Item to List</button>
            </div>
        </form>
    )
}

export default ProductForm;