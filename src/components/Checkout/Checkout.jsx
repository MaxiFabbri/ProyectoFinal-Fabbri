
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { db } from '../../services/firebase/firebaseConfig.js'
import { collection, Timestamp, writeBatch, getDocs, query, where, documentId, addDoc } from 'firebase/firestore'
import CheckOutForm from '../CheckOutForm/CheckOutForm.jsx'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) =>{
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []
            
            const ids = cart.map(prod => prod.id)

            const productRef = collection(db, 'products')

            const productsAddedFromFirestorm = await getDocs(query(productRef, where(documentId(), 'in', ids  )))
            const { docs } = productsAddedFromFirestorm

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const productQuantity = productAddedToCart?.quantity

                if(stockDb >= productQuantity) {
                    batch.update(doc.ref, { stock: stockDb - productQuantity })
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }

            });

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Hay productos que estan fuera de Stock')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        
    }

    if(loading) {
        return <h1>Se está generando la Orden</h1>
    }

    if(orderId) {
        return <h1>El id de la orden es: {orderId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckOutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout