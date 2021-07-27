import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Item from "../Item/Item"

const arrayObjetos = [
     {
          "id": 1,
          "nombre": "zapatillas Nike",
          "precio": 12500
     },
     {
          "id": 2,
          "nombre": "iphone 7 Plus",
          "precio": 75000
     },
     {
          "id": 3,
          "nombre": "Mayonesa Heinz",
          "precio": 75000
     }

]

const ItemContainer = ({onAdd}) =>
     <Container className="pt-4">
          <Row xs={1} md={2} lg={3} className="g-4">
               {arrayObjetos.map(p =>
                    <Col>
                         <Item
                              nombre = {p.nombre}
                              precio = {p.precio}
                              onAdd = {onAdd}
                         />
                    </Col>)}
          </Row>
     </Container>

export default ItemContainer
