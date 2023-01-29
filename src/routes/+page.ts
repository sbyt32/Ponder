import type { PageLoad } from "./$types"
export const load = (async ({params}) => {
    
    let post = await fetch(`http://127.0.0.1:8000/card/search/?access=testing`, {
    headers: {
        'price-access': 'testing',
        'accept': 'application/json'
    }
    })
    if (post.status == 200) {
        post = await post.json()
        return post    
    }

    return false
}) satisfies PageLoad


// import prices from '$lib/thalia.json'

// export function load() {
    
//     return {
//         price_usd: parseFloat(prices.prices.usd),
//         price_eur: parseFloat(prices.prices.eur),
//         price_tix: parseFloat(prices.prices.tix),
//     }
// }

// //         cardInfo: {
//     // price_usd: prices.prices.usd,
//     // price_eur: prices.prices.eur,
//     // price_tix: prices.prices.tix
//     // }


