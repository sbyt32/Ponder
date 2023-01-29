import type { PageServerLoad } from "./$types"
export const load = (async ({params}) => {
    // Use this one for regular stuff
    // let post = await fetch(`http://127.0.0.1:8000/card/search/${params.set}/${params.col_num}?access=testing`, {
    
    // Testing w/ Scryfall
    // let post = await fetch(`https://api.scryfall.com/cards/search?q=set:${params.set}+cn:${params.col_num}`, {
    let post = await fetch(`http://127.0.0.1:8000/price/${params.set}/${params.col_num}?max=25&access=testing`, {
    headers: {
        'price-access': 'testing',
        'accept': 'application/json'
    }
    })

    post = await post.json()
    return post
}) satisfies PageServerLoad
