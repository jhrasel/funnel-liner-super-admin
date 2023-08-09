import CommonSearch from '@/Components/Common/CommonSearch/CommonSearch'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ClientList = () => {

  return (

    <>

      <div className="client__list__page side__gaps">

        <Container>

          <Row>

            <Col>

              <div className="client__list__header">

                <CommonSearch />

              </div>

            </Col>

          </Row>

        </Container>

      </div>

    </>

  )
}

export default ClientList
