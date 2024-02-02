import Image from "../assets/fruit.png";
import "./display-card.scss";
import { useNavigate } from "react-router-dom";

export default function DisplayCard() {

  const navigate = useNavigate()

  return (
    <div className="product-card">
      <div className="image-container">
        <button className="add-to-cart" onClick={() => navigate("cart")}>Add to cart</button>
        <img src={Image} alt="" />
      </div>
      <h3 className="product-name">Cabbage</h3>
      <p className="product-type">vegetable</p>
      <h3 className="price">$ 25.00</h3>
    </div>
  )
}
