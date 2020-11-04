import React, {useState} from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const ItemCount = ({initial = 0, min = 0, max = 10, onAdd = () => {}}) => {

    const [amount, setAmount] = useState(initial);
    
    const decrement = () => {
        setAmount(amount > min ? amount - 1 : min);
    }

    const increment = () => {
        setAmount(amount < max ? amount + 1 : max);
    }

    const onAddItem = () => {
        onAdd(amount);
    }

    return (
        <Container style={{width:200}} >
            <Row style={{border: 1, backgroundColor: "white"}}>
                <Col>
                    <Button onClick={decrement} > - </Button>
                </Col>
                <Col style={{alignItems:"center", justifyItems:"baseline"}}>
                    {amount}
                </Col>
                <Col>
                    <Button onClick={increment}> + </Button>
                </Col>
            </Row>
            <Row >
                <Col style={{marginTop:10}} className="d-flex justify-content-center">
                    <Button onClick={onAddItem} >Agregar al carrito</Button>
                </Col>   
            </Row>
            <div></div>
        </Container>
    );
}

export default ItemCount;