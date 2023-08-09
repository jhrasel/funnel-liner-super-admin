import React from 'react'
import Sidebar from '../Common/Sidebar/Sidebar'
import Menu from '../Common/Menu/Menu'

const Layout = ( {children } ) => {

    return (

        <>
            <Menu />
            <Sidebar />
            <main>{children}</main>
        </>

    )
}

export default Layout
