import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Item = () =>
    <Card className="mx-auto" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="zapatilla.png" />
        <Card.Body>
            <Card.Title>$ 12.500</Card.Title>
            <Card.Text>Zapatillas Nike</Card.Text>
            <Row>
                <Col>
                    <Button variant="success">+</Button>
                </Col>
                <Col xs={6} className="d-flex justify-content-center">
                    <Form.Control type="email" placeholder="1" />
                </Col>
                <Col className="d-flex justify-content-center">
                    <Button variant="danger">-</Button>
                </Col>
            </Row>
        </Card.Body>
    </Card>

export default Item