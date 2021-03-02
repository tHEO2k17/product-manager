import React, { useState } from 'react';
import ProductHistory from "./components/product.history"
import {
    Container,
    Col, Row,
    Button,
    InputGroup,
    InputGroupAddon, InputGroupText,
    Input, Modal, ModalHeader, ModalFooter, ModalBody,
    Form, FormGroup, Label
} from 'reactstrap';

import { useDispatch } from 'react-redux';
import { addNewProduct } from '../../viewmodel/product.viewmodel';

const ProductView = () => {

    const [modal, setModal] = useState(false);
    const [input, setInput] = useState({});
    const dispatch = useDispatch();

    const toggle = () => setModal(!modal);
    const addProduct = (event) => {
        if (event) {
            event.preventDefault();
        }
        
        var product = {
            name: input.name,
            prices: [
                {
                    id: 0,
                    price: input.price,
                    date: Date.now()
                }
            ]
        };

        dispatch(addNewProduct(product));
        setInput(_ => ({}));
        toggle();
    }

    const formFieldChange = (e) => {
        e.persist();
        setInput(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
    }

    return (
        <>
            <Container className="py-5">
                <Row className="pb-5">
                    <Col sm={8}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>Search</InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Search item here" />
                        </InputGroup>
                    </Col>
                    <Col className="text-right">
                        <Button color="primary" onClick={toggle}> + Add new product</Button>
                    </Col>
                </Row>
                <ProductHistory />
            </Container>

            <Modal isOpen={modal} toggle={toggle}>
                <Form>
                    <ModalHeader toggle={toggle}>New Product</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="exampleEmail">Product name: </Label>
                            <Input
                                type="text"
                                name="name"
                                value={input.name}
                                onChange={formFieldChange}
                                placeholder="Enter product name" />
                        </FormGroup>

                        <FormGroup>
                            <Label>Price</Label>
                            <Input
                                type="text"
                                name="price"
                                value={input.price}
                                onChange={formFieldChange}
                                placeholder="Enter price" />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={addProduct}>Save</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </>
    );
}

export default ProductView;