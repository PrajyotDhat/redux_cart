export const BUY_PRODUCT='BUY_PRODUCT'


export const buyProduct = (number=1) => {
    return {
        type: BUY_PRODUCT,
        payload:number
    }
}