import { Dispatch, useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

type OrderTotalProps = {
    order: OrderItem[]
    tip : number
    dispatch: Dispatch<OrderActions>
}

export default function OrderTotals({order, tip, dispatch} : OrderTotalProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity*item.price), 0), [order])
    const tipAmount = useMemo(() => subtotalAmount*tip,[tip, subtotalAmount])
    const totalAmount = useMemo(() => subtotalAmount+tipAmount, [subtotalAmount, tipAmount])

    return (
    <>
        <div className='space-y-10'>
            <h2 className='font-black text-2xl'>Totales y propina</h2>
            <p>
                Subtotal a pagar: {''}
                <span>${formatCurrency(subtotalAmount)}</span>
            </p>
            <p className=''>
                Propina: {''}
                <span>{formatCurrency(tipAmount)}</span>
            </p>
            <p className=''>
                Total a pagar: {''} 
                <span>{formatCurrency(totalAmount)}</span>
            </p>
        </div>
        <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
                disabled ={totalAmount === 0}
                onClick={() => dispatch({type : 'place-order'})}>
            Guardar Orden
        </button>
    </>
    )
}
