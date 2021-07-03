import React, { useState } from 'react';
import "./form.css";
const Hello = () => {
    const[data,setData]= useState({
        fname:"",
        lname:"",
        age:"",
        email:"",
        college:""
    })
    const myfun=(e)=>{
        const name =e.target.name;
        const value= e.target.value;
        setData({...data, [name]:value})
    }
    const myfunction = async(e)=>{
        e.preventDefault();
        const maindata = await fetch('/student',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                ...data
            })   
        })
        const anodata = await maindata.json();
        if(anodata.status===422|| !anodata){
            window.alert("invalid registration");
            console.log('invalid');
        }else{
            window.alert("valid registration");
            console.log('valid');
        }
    }

    return (
        <div>
            <form onSubmit={myfunction} className="formreact">
                <div>
                <label>name</label>
                <br></br>
                <input type="text" placeholder="enter name" name="fname" onChange={myfun}></input>
                </div>
                
                <div>
                <label>last name </label>
                <br></br>
                <input type="text" placeholder="enter last name"name="lname"onChange={myfun} ></input>
                </div>
                <div>
                <label>age</label>
                <br></br>
                <input type="text" placeholder="enter age" name="age" onChange={myfun}></input>
                </div>
                <div>
                <label>email</label>
                <br></br>
                <input type="text" placeholder="enter email" name="email" onChange={myfun}></input>
                </div>
                 <div>
                <label>college</label>
                <br></br>
                <input type="text" placeholder="enter college"name="college" onChange={myfun}></input>
                </div>
                <button type="submit">click</button>
            </form>
        </div>
    );
}

export default Hello;
