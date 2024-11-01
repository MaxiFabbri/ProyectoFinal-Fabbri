import './CheckOutForm.css'
import { useState } from 'react'

const CheckOutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()
        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className='CheckoutContainer'>
            <form onSubmit={handleConfirm} className='CheckoutForm'>
                <label className='CheckoutLabel'>
                    Nombre: 
                    <input
                        className='CheckoutInput'
                        type="text" 
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        />
                </label>
                <label className='CheckoutLabel'>
                    Telefono:
                    <input
                        className='CheckoutInput'
                        type="text" 
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                        />
                </label>
                <label className='CheckoutLabel'>
                    Email: 
                    <input
                        className='CheckoutInput'
                        type="email" 
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        />
                </label>
                <div className='CheckoutButtonLabel'>
                    <button type='submit' className='CheckoutButton'>Crear Orden</button>
                </div>              
            </form>
        </div>
    )
}

export default CheckOutForm
