import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector((state) => state.cart.showCart);
  const cartEmpty = useSelector((state) => state.cart.cartEmpty);
  console.log(cartEmpty)
  return (
    <Layout>
      {showCart && !cartEmpty && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
