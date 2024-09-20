import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducer"
import type { menuItem } from "../types"

type MenuItemProps = {
    item : menuItem,
    dispatch: Dispatch<OrderActions>
}
export default function MenuItem({item, dispatch} : MenuItemProps) {
    return (
        <button
            className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
            onClick={() => dispatch({type : 'add-item' , payload : {item: item}})}
        >
            <p>{item.name}</p>
            <p className="font-black">$ {item.price}</p>
        </button>
    )
}
