import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "./Product/Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={7} lg={6}>
            <h4 className="mb-5">products: {products.length}</h4>

            {products.map((product) => (
              <Product product={product} key={product.id}></Product>
            ))}
          </Col>
          <Col sm={12} md={5} lg={6}>
            2
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
