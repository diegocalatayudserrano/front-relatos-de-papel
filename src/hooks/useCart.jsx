import React, { useState } from "react";

function useCart() {
    const [cart, setCart] = useState([]); // inicializo array vacío

    const addItemToCart = (book) => {
        // const result = {
        //     quantity: 1, 
        //     book: book, 
        // }

        setCart((prevCart) => {
            console.log("antes de añadir: ", cart);
            const bookIsAlreadyInCart = prevCart?.find(item => item.book.id === book.id)
            if (bookIsAlreadyInCart) {
                let modifiedQuantityItem = prevCart.map(item => {
                    if (item.book.id === book.id) {
                        return {quantity: item.quantity+1, book: item.book}
                    } else {
                        return item
                    }
                })
                console.log("carro actualizado: ", modifiedQuantityItem);
                return modifiedQuantityItem
            } else {
                console.log("carro actualizado: ", [...prevCart, {quantity: 1, book: book}]);
                return [...prevCart, {quantity: 1, book: book}]
            }
        })
    }

    const removeItemFromCart = (book) => {
        setCart((prevCart) => {
            return prevCart?.filter(item => item.book.id !== book.id) || [];
        })
    }

    const editQuantity = (book, action) => {
        setCart((prevCart) => {
            let modifiedQuantityItem = prevCart.map(item => {
                if (item.book.id === book.id) {
                    if (action === '+') {
                        return {quantity: item.quantity+1, book: item.book}
                    }

                    if (action === '-') {
                        if (item.quantity === 1) {
                            return null
                        }
                        return {quantity: item.quantity-1, book: item.book}
                    }

                } else {
                    return item
                }
            }).filter(item => item !== null)

            return modifiedQuantityItem
        })
    }

    const totalPrice = () => {
        let accum = 0
        cart.forEach(item => {
            accum = accum + (item.book.price * item.quantity)
        })
        return accum
    }

    const totalItems = () => {
        let accum = 0
        cart.forEach(item => {
            accum = accum + item.quantity
        })
        console.log("total libros: ", accum);
        return accum
    }    

    return { cart, addItemToCart, removeItemFromCart, editQuantity, totalPrice, totalItems }
}

export default useCart;