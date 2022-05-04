import React from "react";
// import { AiFillDelete } from "react-icons/ai";
import { Container, FormControl, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

export const Header = () => {
  const { state, productDispatch } = CartState();

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
            onClick={(e) =>
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }
          />
        </Navbar.Text>
        <Nav>
          <Link to="/cart">
            <div className="cart">
              <div className="cartItem">
                <FaShoppingCart className="cartItemImg" />
                <span className="cartVal"> {state.cart.length}</span>
              </div>
            </div>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
