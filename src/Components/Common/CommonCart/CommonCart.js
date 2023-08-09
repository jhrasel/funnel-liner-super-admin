import React from 'react'


const CommonCart = ({ cartIcon, cartTitle, cartCounter }) => {

  return (

    <>

      <div className="common__cart box__shadow">

        <h4> <i className={cartIcon}></i> {cartTitle}</h4>
        
        <h3> {cartCounter} </h3>

      </div>

    </>

  )

}

export default CommonCart
