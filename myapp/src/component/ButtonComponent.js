import React from 'react'

function ButtonComponent({isLoading=true,children,...rest}) {

  //const[children, ...rest] = props;
  

//   function handleClick(){
//     alert("Vous avez clicker sur le boutton");
//   }


  return (

    <button {...rest}>
        {isLoading ? children:"on chargement"}
    </button>


    // <button disabled={props.disabled} onClick={props.onClick}
    //  id = {props.id} type={props.type}>
    //     {props.children}
    // </button>

    
  )
}

export default ButtonComponent
