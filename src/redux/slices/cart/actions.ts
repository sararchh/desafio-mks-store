import { AnyAction, ThunkAction } from "@reduxjs/toolkit"
import { CartProps } from "../../../@types/cart.interface";
import { ProductProps } from "../../../@types/product.interface";
import { RootState } from "../../store"
import { getCart, setCart, setLoadingCart } from "./slice"


export const addProductToCard = (product: ProductProps): ThunkAction<void, RootState, unknown, AnyAction> => {

    return async (dispatch, getState) => {

        const currentCart = getState().cart.cart;

        const alreadyExists = currentCart.find((i: CartProps) => i.id == product?.id);

        let updateCart;

        if (alreadyExists) {
            const restant = currentCart.filter((i: CartProps) => i.id != product?.id);
            updateCart = [
                ...restant,
                { ...alreadyExists, qtd: alreadyExists.qtd + 1, subtotal: (Number(product?.price) * (alreadyExists.qtd + 1)) }
            ]
        } else {
            updateCart = [
                ...currentCart,
                { ...product, qtd: 1, subtotal: (Number(product?.price) * 1) }
            ]
        }


        dispatch(setCart(updateCart))


    }
}

export const UpdateQtdProductToCard = (id: number, qtd: number): ThunkAction<void, RootState, unknown, AnyAction> => {

    return async (dispatch, getState) => {

        const currentCart = getState().cart.cart;

        const selected = currentCart.find((i: CartProps) => i.id == id);
        const restant = currentCart.filter((i: CartProps) => i.id != id);

        const updateCart:any = [
            ...restant,
            { ...selected, qtd: qtd, subtotal: Number(selected?.price) * qtd }
        ];


        dispatch(setCart(updateCart));


    }
}

export const removeProductToCard = (id: number): ThunkAction<void, RootState, unknown, AnyAction> => {

    return async (dispatch, getState) => {

        const currentCart = getState().cart.cart;

        const updateCart = currentCart.filter((i: CartProps) => i.id != id);

        dispatch(setCart(updateCart));


    }
}
