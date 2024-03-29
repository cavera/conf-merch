import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import { FaTrash } from 'react-icons/fa'
import '../styles/components/Checkout.css'

const Checkout = () => {
	const { state, removeFromCart } = useContext(AppContext)
	const { cart } = state

	const handleRemove = product => {
		removeFromCart(product)
	}

	const handleSumTotal = () => {
		const reducer = (accumulator, currentValue) => {
			return accumulator + currentValue.price
		}
		const sum = cart.reduce(reducer, 0)
		return sum
	}

	return (
		<div className='Checkout'>
			<div className='Checkout-content'>
				<h3>{cart.length === 0 ? 'Sin pedidos' : 'Lista de Pedidos'}</h3>
				{cart.map(item => (
					<div
						className='Checkout-item'
						key={item.cartId}>
						<div className='Checkout-element'>
							<h4>{item.title}</h4>
							<span>${item.price}</span>
						</div>

						<button
							type='button'
							onClick={() => handleRemove(item)}>
							<FaTrash />
						</button>
					</div>
				))}
			</div>
			{cart.length > 0 && (
				<div className='Checkout-sidebar'>
					<h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>

					<Link to='/checkout/information'>
						<button type='button'>Continuar pedido</button>
					</Link>
				</div>
			)}
		</div>
	)
}

export default Checkout
