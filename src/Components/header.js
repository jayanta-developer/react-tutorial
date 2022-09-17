import React from 'react'
import Headerch from './headerch';


const Header = (props)=>{
  console.log(props)
    return(
        <div>          
      <h1>Your name is Mr/ms.{props.File.name}</h1>      
      <p>So hello {props.File.name}. I think you are {props.File.age} years old <br/> and you are from {props.File.Location}</p>
      <Headerch/>
    </div>
    )
}

export default Header;