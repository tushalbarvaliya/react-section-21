import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";
const CartItem = (props) => {
  const { id, description, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();
  function addHandler() {
    // dispatch(cartActions.addItemToCart(props.item));
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        description,
      }),
    );
  }
  function removeHandler() {
    dispatch(cartActions.removeItemFromCart(props.item.id));
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total} <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={addHandler}>+</button>
          <button onClick={removeHandler}>-</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
