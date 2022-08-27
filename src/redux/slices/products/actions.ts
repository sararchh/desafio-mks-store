import { AnyAction, ThunkAction } from "@reduxjs/toolkit"
import { api } from "../../../services/api"
import { RootState } from "../../store"
import { setProductList, setLoadingProducts } from "./slice"


export const fecthProducts = (): ThunkAction<void, RootState, unknown, AnyAction> => {

    return async (dispatch, getState) => {
        dispatch(setLoadingProducts(true))

        const { data: { products } } = await api.get('/products?page=1&rows=30&sortBy=name&orderBy=ASC')

        dispatch(setProductList(products))

        setTimeout(() => {
            dispatch(setLoadingProducts(false))
        }, 1200)

    }
}

export const changeLoadingProducts = (bool: boolean): ThunkAction<void, RootState, unknown, AnyAction> => {

    return async (dispatch, getState) => {
        dispatch(setLoadingProducts(bool))

    }
}