import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity =useSelector(state=>state.cart.totalQuantity);

  const handleToggleCart = () => {
    dispatch (uiActions.toggleCart());
  }
  
  return (
    <button className={classes.button}>
      <span onClick={handleToggleCart}>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
