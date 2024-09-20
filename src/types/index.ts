export type menuItem = {
    id : number,
    name : string
    price : number
}

export type OrderItem = menuItem & {
    quantity : number
}