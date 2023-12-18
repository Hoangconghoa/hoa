import React from "react";
// import styles from "./Button.module.css" 
type TButton ={
    lable : string;
    icon? : React.ReactNode;
    StyleObject?: React.ReactNode;
}

function Button({lable ,icon  }:TButton ){
    return (
    <button  className="">{icon} {lable}</button>
    )
    
}
Button.defaultProps = {
    lable : "No Name",
    // StyleObject : ""
}
export default Button