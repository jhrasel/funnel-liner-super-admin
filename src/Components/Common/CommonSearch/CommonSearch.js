import React, { useState } from 'react'

const CommonSearch = () => {


    return (

        <>

            <div className="common__search">

                <div className="custom__input">
                    <input type="text" placeholder='search Here' />
                    <button className='search'>
                        <i className='flaticon-search-interface-symbol'></i>
                    </button>
                </div>

            </div>

        </>

    )

}

export default CommonSearch
