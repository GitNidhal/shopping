import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeProduct } from "../redux/action/productsAction";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { id, title, price, image, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeProduct());
    };
  }, [productId]);

  return (
    <div
      style={{ display: "flex", flexWrap: "center", justifyContent: "center" }}
    >
      <Card style={{ width: "20rem", marginBottom: "3rem" }} key={id}>
        <Card.Img variant="top" src={image} style={{ height: "18rem" }} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{title}</Card.Title>
          <Card.Text style={{ color: "black" }}>{category}</Card.Text>
          <Button variant="" style={{ backgroundColor: "#ffc000" }}>
            {price} $
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetail;
