import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import formatMoney from "../index"
import "./Header.scss"

let date = new Date();
let dateString = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();



const Header = ({ money}) => {

    let moneyClass = "high"

    if (money < 0) {
        moneyClass = "low"
    }

    return (
        <Container className="coverContainer mt-4">
            <Row>
                <Col className="d-flex flex-column py-2 align-items-center text-center">
                    <h1 className="fs-2 mb-3 pt-2">Gastá un sueldo en Argentina</h1>
                    <p className="mb-1">Salario Mínimo, Vital y Móvil al {dateString}: $22.200</p>
                    <h2 className={moneyClass}>{formatMoney(money)}</h2>
                    <p>Necesitas {} sueldo/s para comprar los productos seleccionados.</p>
                    <div>
                        <Button className="me-2 my-2 px-3" variant="secondary">Mínimo</Button>
                        <Button className="ms-2 my-2" variant="secondary">Promedio</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )

}

export default Header