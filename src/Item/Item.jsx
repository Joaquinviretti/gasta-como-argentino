import {useState} from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import formatMoney from "../index"

const Item = ({nombre,precio,onAdd}) => {

    const [cantidad, setCantidad] = useState(0)

    const sumar = () => {
        onAdd(-precio)
        setCantidad(cantidad + 1)
    }

    const restar = () => {
        if(cantidad > 1){
            setCantidad(cantidad - 1)
            onAdd(precio)
        }
    }

   return (
    <Card className="mx-auto" style={{ width: '18rem' }}>
    <Card.Img variant="top" src="zapatilla.png" />
    <Card.Body>
        <Card.Title>{formatMoney(precio)}</Card.Title>
        <Card.Text>{nombre}</Card.Text>
        <Row>
            <Col>
                <Button variant="success" onClick={sumar}>+</Button>
            </Col>
            <Col xs={6} className="d-flex justify-content-center">
                <Form.Control type="email" placeholder={cantidad} disabled />
            </Col>
            <Col className="d-flex justify-content-center">
                <Button  variant="danger" onClick={restar}>-</Button>
            </Col>
        </Row>
    </Card.Body>
</Card>
   )
}

export default Item