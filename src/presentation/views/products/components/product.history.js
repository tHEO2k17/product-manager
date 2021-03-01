import {
    Card,
    CardBody,
    Row,
    Col,
    Button
} from "reactstrap"

import { useSelector } from 'react-redux';
import { currentProductList } from '../../../viewmodel/product.viewmodel';

const ProductHistory = () => {
    const productList = useSelector(currentProductList);

    return <div>
        <h4>Products</h4>
        {
            productList.map(item => (
                <Card className="my-2">
                    <CardBody>
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
                                <Button color="link">Edit</Button>
                                <Button color="link">Delete</Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            ))
        }


    </div>
}

export default ProductHistory;