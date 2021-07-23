import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container  from "react-bootstrap/Container";
import Item from "../Item/Item"

const ItemContainer = () =>
<Container className="pt-4">
    <Row xs={1} md={2} lg={3} className="g-4">
       <Col>
            <Item></Item>
       </Col>
       <Col>
            <Item></Item>
       </Col>
       <Col>
            <Item></Item>
       </Col>
    </Row>
</Container>

export default ItemContainer
