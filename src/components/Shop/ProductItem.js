import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/CartReducer';
const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch()
  const list = useSelector(state => state.cart.listOfProduct)
 console.log(list)
   function add(){
    const itemObj = {
      title :  title,
      price : price.toFixed(2) ,
      description : description
    } 
    if(list.length ===0 ){
      dispatch(cartActions.addItemInList(itemObj))
    }
     list.filter(item => {
      if(item.title != itemObj.title){
        dispatch(cartActions.addItemInList(itemObj))
      }
      if(item.title == itemObj.title){
        dispatch(cartActions.increaseProductQuality())
      }
      
    })
   }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={add}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
