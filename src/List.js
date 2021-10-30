import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

import {FaTrash} from 'react-icons/fa'

function List() {
    const [name, setName] = useState('');
    const [itemname, setItemname] = useState('');
    const [amount, setAmount] = useState('');
    const LOCAL_STORAGE_KEY = "item";
    const [item, setItem] = useState([]);
   
    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && amount && itemname) {
            let singleItem = { name,amount,itemname,id: new Date().getTime().toString() }
            setItem([...item, singleItem]);
           
        }
    }
    const removeitem = (id) => {
        const filteritems = item.filter((item) => item.id !== id)
        return setItem(filteritems)
    }
    useEffect(() => {
        const retriveitems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retriveitems) setItem(retriveitems);
    }, []);
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(item));
    }, [item]);
    return (
        <div className="section">

            <form className="container">
                <h4 className="design_item">Grocery item</h4><br/>
                <label className="item">Item name </label>
                <input className="int" type="text" value={name} placeholder="name" onChange={
                    (e) => setName(e.target.value)}></input><br />

<label className="design">Give To</label><br/>
                <input className="int" type="text" value={itemname} placeholder="name" onChange={
                    (e) => setItemname(e.target.value)}></input><br />

                <label className="design">Amount</label><br/>
                <input className="int" type="number" value={amount} placeholder="amount" onChange={
                    (e) => setAmount(e.target.value)}></input><br />


            </form>
            <button className="btn1" type="submit" onClick={handleSubmit}>Add</button>
        <div className="list_items">

        <h2 style={{backgroundColor:'lightgrey',width:'40vw'}}><center>List</center></h2><hr/>
            
            {
                item.map((items, index) => {
                    const { name,amount,itemname ,id } = items;
                    return <div className ="single_list">
                    
                        <h3 className="mod"> {index+1} {name} <br/> {itemname}  <br/>{amount}  <button className="btn3" onClick={() => removeitem(id)}><FaTrash/></button>  </h3>
                       
                        </div>
                   
                    

                })
               
            }
              
         </div>
         <button className="clear-btn" onClick={()=>setItem([])}>Clear All</button>
        </div>
    






    );
}

export default List;
