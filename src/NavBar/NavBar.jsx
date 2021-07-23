import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import WidgetMoney from "../WidgetMoney/WidgetMoney"
import formatMoney from "../index"

const NavBar = ({money}) =>
  <Navbar style={{position: "sticky"}} bg="dark" variant="dark" fixed="top">
    <Container fluid>
      <Navbar.Brand href="#home">
        <p className="mb-0 fs-5">Gastá un Sueldo</p>
      </Navbar.Brand>
      <WidgetMoney money={formatMoney(money)} className="ms-auto" />
    </Container>
  </Navbar>

export default NavBar