import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../../assets/Lurk-Logo.png";
import Input from "./Input";
const Header = ({ position }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <Navbar
      bg="light"
      style={{
        boxShadow: " 0px 3px 2px 0px rgba(0,0,0,0.44)",
        position: `${position}`,
        padding: 0,
        top: "0",
        zIndex: "999",
      }}>
      <Row
        style={{
          width: "100%",
          maxWidth: "1300px",
          margin: "auto",
          paddingTop: "10px",
        }}>
        <Col xs={6} md={4} className="m-auto order-1 order-md-1">
          <Navbar.Brand href="/">
            <img src={Logo} height="30px" alt="fireSpot" />
          </Navbar.Brand>
        </Col>
        <Col
          xs={0}
          md={6}
          className="p-3 order-3 order-md-2"
          style={{ margin: 0, padding: 0 }}>
          <Input />
        </Col>
        <Col
          xs={6}
          md={2}
          className="m-auto text-right text-right order-2 order-md-3"
          style={{ paddingRight: "10px" }}>
          <Nav className="mr-0" style={{ float: "right" }}>
            <LinkContainer to="/cart">
              <Nav.Link>
                <i
                  class="fas fa-shopping-cart fa-2x"
                  style={{ position: "relative" }}>
                  <div
                    style={{
                      background: "red",
                      color: "white",
                      padding: "0",
                      borderRadius: "25px",
                      width: "25px",
                      height: "25px",
                      fontSize: "15px",
                      border: "2px solid white",
                      textAlign: "center",
                      position: "absolute",
                      top: "-8px",
                      left: "15px",
                    }}>
                    <small className="text-center">
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                    </small>
                  </div>
                </i>
              </Nav.Link>
            </LinkContainer>
            <Nav.Item></Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Navbar>
  );
};

export default Header;
