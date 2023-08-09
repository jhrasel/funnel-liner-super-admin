import CommonCart from "@/Components/Common/CommonCart/CommonCart";
import { Col, Container, Row } from "react-bootstrap";


export default function Home() {

  return (

    <>

      <div className="home__page side__gaps">

        <Container>

          <Row>

            <Col lg={3}>
              <CommonCart cartIcon='flaticon-people' cartTitle='Active Client' cartCounter='50000' />
            </Col>

            <Col lg={3}>
              <CommonCart cartIcon='flaticon-people' cartTitle='Inactive Client' cartCounter='50000' />
            </Col>

            <Col lg={3}>
              <CommonCart cartIcon='flaticon-people' cartTitle='Expired Client' cartCounter='50000' />
            </Col>

            <Col lg={3}>
              <CommonCart cartIcon='flaticon-people' cartTitle='Active Ticket' cartCounter='50000' />
            </Col>

            <Col lg={3}>
              <CommonCart cartIcon='flaticon-people' cartTitle='Active Client' cartCounter='50000' />
            </Col>

            <Col lg={3}>
              <CommonCart cartIcon='flaticon-people' cartTitle='Inactive Client' cartCounter='50000' />
            </Col>

            <Col lg={3}>
              <CommonCart cartIcon='flaticon-people' cartTitle='Expired Client' cartCounter='50000' />
            </Col>

            <Col lg={3}>
              <CommonCart cartIcon='flaticon-people' cartTitle='Active Ticket' cartCounter='50000' />
            </Col>

          </Row>

        </Container>

      </div>

    </>

  )
}
