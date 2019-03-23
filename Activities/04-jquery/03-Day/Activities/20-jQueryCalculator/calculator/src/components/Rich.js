import React from "react";
const buttons = [1,2,3,4,5,6,7,8,9,0,"+","-","*","/","=","clear"];

const Rich = () =>{
    return buttons.map((value,index) =>{
        return <button key ={index} className="btn btn-primary number" data-value={value}><h1>{value}</h1></button>
    })
};

export default Rich;