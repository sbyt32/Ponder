import type { PageServerLoad } from "./$types"
export const load = (async ({params}) => {
    let priceHistory = await fetch(`http://127.0.0.1:8000/price/${params.set}/${params.col_num}?max=25`, {
    headers: {
        // 'price-access': 'testing',
        'accept': 'application/json'
    }
    })

    priceHistory = await priceHistory.json()

    let saleTable = await fetch(`http://127.0.0.1:8000/sales/daily/${params.set}/${params.col_num}`, {
    headers: {
        // 'price-access': 'testing',
        'accept': 'application/json'
    }
    })

    saleTable = await saleTable.json()
    const return_val = {
        price: priceHistory,
        sale: saleTable
    } 
    // console.log(return_val);
    
    return return_val
}) satisfies PageServerLoad
