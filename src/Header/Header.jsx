import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import "./Header.scss"

let date = new Date();
let dateString = date.getDate() + "-"+ (date.getMonth()+1)+ "-" +date.getFullYear();

const Header = ({precio}) => 
<Container className="coverContainer mt-4">
    <Row>
        <Col className="d-flex flex-column py-2 align-items-center text-center">
            <h1 className="fs-2 mb-3 pt-2">Gastá un sueldo en Argentina</h1>
            <p className="mb-1">Salario Mínimo, Vital y Móvil al {dateString}:</p>
            <h2>{precio}</h2>
            <div>
            <Button variant="secondary me-2 my-2">Promedio</Button>
            <Button variant="secondary ms-2 my-2 px-3">Mínimo</Button>
            </div>
        </Col>
    </Row>
</Container>

export default Header