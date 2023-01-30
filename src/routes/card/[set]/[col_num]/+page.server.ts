import type { PageServerLoad } from "./$types"
export const load = (async ({params}) => {
    // Use this one for regular stuff
    // let post = await fetch(`http://127.0.0.1:8000/card/search/${params.set}/${params.col_num}?access=testing`, {
    
    // Testing w/ Scryfall
    // let post = await fetch(`https://api.scryfall.com/cards/search?q=set:${params.set}+cn:${params.col_num}`, {

    let priceHistory = await fetch(`http://127.0.0.1:8000/price/${params.set}/${params.col_num}?max=25&access=testing`, {
    headers: {
        'price-access': 'testing',
        'accept': 'application/json'
    }
    })

    priceHistory = await priceHistory.json()

    let saleTable = await fetch(`http://127.0.0.1:8000/sales/card/${params.set}/${params.col_num}?access=testing`, {
    headers: {
        'price-access': 'testing',
        'accept': 'application/json'
    }
    })

    saleTable = await saleTable.json()
    return {
        price: priceHistory,
        sale: saleTable
    }
}) satisfies PageServerLoad
