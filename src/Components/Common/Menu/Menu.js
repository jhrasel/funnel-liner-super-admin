import React from 'react'
import { useRouter } from 'next/router';
import { Col, Container, Row, Dropdown } from 'react-bootstrap';
import Image from 'next/image';

const Menu = ({ menuTitle }) => {

  const router = useRouter();

  const menuItems = [
    { label: 'Dashboard', path: '/' },
    { label: 'Client List', path: '/client-list' },
    { label: 'Billing', path: '/billing' },
    { label: 'Staff List', path: '/staff-list' },
    { label: 'Support List', path: '/support-list' },
    { label: 'About', path: '/about' },
  ];

  return (

    <>

      <div className="menu">

        <Container>

          <Row>

            <Col lg={12} className='d_flex d_justify'>

              {/* left */}
              <div className="menu__left">

                {menuItems.map((item) => (
                  <h2 key={item.path} className={router.pathname === item.path ? 'active' : ''}>
                    {router.pathname === item.path ? item.label : ''}
                  </h2>
                ))}

              </div>

              {/* right */}

              <div className="menu__right">

                <Dropdown>

                  <Dropdown.Toggle id="dropdown-basic">
                    <Image 
                      src='/images/user.png'
                      width={40}
                      height={40}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3"> <i className='flaticon-logout'></i> Logout </Dropdown.Item>
                  </Dropdown.Menu>

                </Dropdown>

              </div>

            </Col>

          </Row>

        </Container>

      </div>

    </>

  )

}

export default Menu
