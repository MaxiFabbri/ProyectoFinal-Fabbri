import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem.jsx';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} { ...p}/>) }
            <h3 className='CartTotal'>Total: ${total}</h3>
            <button onClick={() => clearCart()} className='CartButton'>Limpiar Carrito</button>
            <button className='CheckoutButton'><Link to='/checkout' >Checkout</Link></button>
        </div>
    )
}

export default Cart