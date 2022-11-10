import classes from './CartButton.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/CartReducer'; 
const CartButton = (props) => {
 
  const dispatch = useDispatch()
  const cartQuantity = useSelector(state => state.cart.listOfProduct.length)
   
  function cartBtnClick(){
    if(cartQuantity === 0){
       alert("You don't have any item in the cart")
    }
    else{
      dispatch(cartActions.togglecart())
    }
  }
  return (
    <button className={classes.button} onClick={() => cartBtnClick()} >
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
