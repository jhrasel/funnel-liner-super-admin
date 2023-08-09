import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/router";

const menuItems = [
  { title: 'Dashboard', path: '/', value: 'dashboard', icon: 'flaticon-home' },
  { title: 'Client List', path: '/client-list', value: 'client-list', icon: 'flaticon-people' },
  { title: 'Billing', path: '/billing', value: 'billing', icon: 'flaticon-wallet-1' },
  { title: 'Staff List', path: '/staff-list', value: 'staff-list', icon: 'flaticon-team' },
  { title: 'Support List', path: '/support-list', value: 'support-list', icon: 'flaticon-customer-care' }
]


const Sidebar = () => {

  const router = useRouter();

  const activeMenu = (value) => {
    if(router.pathname === '/' && value === 'dashboard') return true
    if(router.pathname?.includes(value)){
      return true
    }else{
      return false;
    }
  }

  return (

    <>

      <div className="sidebar">

        <div className="login__logo">
          <Image
            src="/images/logo.png"
            width={150}
            height={50}
            alt="Picture of the author"
          />
        </div>

        <div className="Sidebar__menu">

          <ul>

            {React.Children.toArray(menuItems?.map(item => (
              <li>
                <Link href={item?.path} className={activeMenu(item?.value) ? 'active' : ''}> <i className={item?.icon}></i> {item?.title}</Link>
              </li>
            )))}

          </ul>

        </div>

      </div>

    </>

  )

}

export default Sidebar
