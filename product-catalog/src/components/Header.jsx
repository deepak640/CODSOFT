import React from "react";
import { ShoppingOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { useSelector } from "react-redux";
const Header = () => {
  const { cart } = useSelector((state) => state.cart);
  console.log("🚀 ~ Header ~ cart:", cart);
  return (
    <div className="header">
      <h2 className="header-title">Product Catalog</h2>
      <div className="header-cart">
        <Badge count={cart.length}>
          <ShoppingOutlined
            style={{ fontSize: 24, cursor: "pointer" }}
            className="header-cart-icon"
            onClick={() => (window.location.href = "/cart")}
          />
        </Badge>
      </div>
    </div>
  );
};

export default Header;
