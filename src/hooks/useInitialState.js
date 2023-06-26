import { useState } from 'react'

import initialstate from '../initialState'

const useInitialState = () => {
	const [state, setState] = useState(initialstate)

	const addToCart = payload => {
		setState({ ...state, cart: [...state.cart, payload] })
	}

	const removeFromCart = payload => {
		setState({
			...state,
			cart: state.cart.filter(items => items.cartId !== payload.cartId),
		})
	}

	const addToBuyer = payload => {
		setState({
			...state,
			buyer: [...state.buyer, payload],
		})
	}

	return { addToCart, removeFromCart, state, addToBuyer }
}

export default useInitialState
