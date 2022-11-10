import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const productQuality = useSelector((state) => state.cart.productQuality);
  const listOfProduct = useSelector((state) => {
    return {
      price: state.cart.listOfProduct[0].price,
      title: state.cart.listOfProduct[0].title,
    };
  });
  const totalPrice = productQuality * listOfProduct.price;
  console.log(totalPrice);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{
            title: listOfProduct.title,
            quantity: productQuality,
            total: totalPrice,
            price: 6,
          }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
