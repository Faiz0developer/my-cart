import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/store/StoreItem";
import storeItem from "../data/Item.json";

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} className="g-3">
        {storeItem.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
