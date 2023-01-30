import { error } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load = (async () => {
    
    let post = await fetch(`http://127.0.0.1:8000/card/search/?access=testing`, {
    headers: {
        // 'price-access': 'testing',
        'accept': 'application/json'
    }
    })
    if (post.status == 200) {
        
        let data = await post.json()
        console.log(data.data.length);
        
        let price_data = []
        for (let i = 0; i < data.data.length; i++) {
            const element = data.data[i];
            price_data.push({
                name: element.name,
                set: element.set,
                id: element.id,
                usd: element.usd,
                euro: element.euro,
                tix: element.tix
            })
        }
        return {
            resp: data.resp,
            status: data.status,
            data: price_data
        }
    }
    throw error(404, 'Not Found')
}) satisfies PageServerLoad



