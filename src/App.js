import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
import { useState } from 'react';
function App() {

  let items=[
    {
      item_name:"Nirma",
      mfg_date:21,
      mfg_month:8,
      mfg_year:2001
    },
    {
      item_name:"Surf Excel",
      mfg_date:21,
      mfg_month:8,
      mfg_year:2001
    },
    {
      item_name:"Tide",
      mfg_date:21,
      mfg_month:8,
      mfg_year:2001
    },
    {
      item_name:"Ariel",
      mfg_date:21,
      mfg_month:8,
      mfg_year:2001
    }
  ]

  const[item ,setItem]=useState(items);
  function objectCreation(obj){
    const updatedItems = [...item, obj];
    console.log(updatedItems);
    setItem(updatedItems);
  
  }
  return (
    <div className="App">
    <NewProduct object={objectCreation}/>
    <Products items={item}></Products>
    </div>
  );
}

export default App;
