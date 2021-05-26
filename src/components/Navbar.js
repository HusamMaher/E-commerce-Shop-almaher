import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navbar = ({ click }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const logOut = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
    localStorage.removeItem("profile");
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img
          style={{ width: "300px", height: "50px" }}
          src="images/logo2.png"
        />
      </div>
      <div style={{ color: "red" }}>
        {" "}
        {user ? <h1>{user.email || user.result.email}</h1> : null}
      </div>
      <ul className="navbar__links">
        {user && (
          <li>
            <Link to="/cart" className="cart__link">
              <i className="fas fa-shopping-cart"></i>
              <span>
                Cart <span className="cartlogo__badge">{getCartCount()}</span>
              </span>
            </Link>
          </li>
        )}
        {user ? (
          <li>
            <Link to="/">
              <div onClick={logOut}>logout</div>
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/auth">login</Link>
          </li>
        )}

        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
