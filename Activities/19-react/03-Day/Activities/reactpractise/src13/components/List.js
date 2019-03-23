import React from "react";

const List = props => {
  console.log(props);
    const newArr = props.groceries.filter((value)=>{
      return value.purchased;   
    });
    console.log(newArr);
 return (<ul className="list-group">
    {newArr.map((value)=>{
      return <li className="list-group-item" key={value.id}>{value.name} </li>
    })
    }
  </ul>);
};

export default List;
