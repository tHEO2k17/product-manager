import {
    Card,
    CardBody,
    Row,
    Col,
    Button,
    UncontrolledCollapse,
    ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText
} from "reactstrap"

import { useSelector, useDispatch } from 'react-redux';
import { currentProductList, deleteProduct } from '../../../viewmodel/product.viewmodel';

const ProductHistory = () => {
    const productList = useSelector(currentProductList);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        var isDelete = window.confirm('Do you really want to delete this product?');
        if (isDelete) {
            dispatch(deleteProduct(id));
        }
    }

    return <div>
        <h4>Products</h4>
        {productList.map(item => (
            <Card className="my-2" key={item.id}>
                <CardBody >
                    <Row>
                        <Col>
                            <h5>
                                {item.name}
                                <span className="text-muted float-right fs-6">
                                    <small>Latest Price: GHS {item.prices[0].price}</small>
                                </span>
                            </h5>
                        </Col>
                        <Col className="text-right" sm="auto">
                            <Button color="link" id={'item' + item.id}>History</Button>
                            <Button color="link">Edit</Button>
                            <Button color="link" onClick={() => handleDelete(item.id)}>Delete</Button>
                        </Col>
                    </Row>
                </CardBody>
                <UncontrolledCollapse toggler={'#item' + item.id}>
                    <ListGroup horizontal className="mx-4 my-3">
                        {
                            item.prices.map((priceItem) => (
                                <ListGroupItem key={priceItem.id}>
                                    <ListGroupItemHeading>Ghs {priceItem.price}</ListGroupItemHeading>
                                    <ListGroupItemText>
                                        {
                                            new Intl.DateTimeFormat("en-GB", {
                                                year: "numeric",
                                                month: "long",
                                                day: "2-digit"
                                            }).format(new Date(priceItem.date))
                                        }
                                    </ListGroupItemText>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </UncontrolledCollapse>
            </Card>
        ))
        }


    </div>
}

export default ProductHistory;