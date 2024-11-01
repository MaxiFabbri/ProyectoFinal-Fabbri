import './CartItem.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = (data)=>{
    const { removeItem } = useContext(CartContext)

    return (
        <div className="CartItem">
            <h3>{data.name}</h3>
            <p>Cantidad: {data.quantity}</p>
            <p>Precio: $ {data.price}</p>
            <p>Subtotal: $ {(data.price*data.quantity)}</p>
            <button onClick={() => removeItem(data.id)} className='CartItemButton'>X</button>
        </div>
    )
}

export default CartItem