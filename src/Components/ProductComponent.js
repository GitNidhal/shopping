import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allproducts.products);
  const mapProducts = products.map((product) => {
    const { id, title, price, image, category } = product;
    return (
      <div>
        <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
          <Card style={{ width: "18rem", marginBottom: "3rem" }} key={id}>
            <Card.Img variant="top" src={image} style={{ height: "18rem" }} />
            <Card.Body>
              <Card.Title style={{ color: "black" }}>{title}</Card.Title>
              <Card.Text style={{ color: "black" }}>{category}</Card.Text>
              <Button variant="" style={{ backgroundColor: "#ffc000" }}>
                {price} $
              </Button>
            </Card.Body>
          </Card>
        </Link>
      </div>
    );
  });
  //   const { id, title } = products[0];
  return <> {mapProducts} </>;
};

export default ProductComponent;
