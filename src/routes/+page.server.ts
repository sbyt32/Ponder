import { error } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load = (async () => {
    
    let post = await fetch(`http://127.0.0.1:8000/card/`, {
    headers: {
        // 'price-access': 'testing',
        'accept': 'application/json'
    }
    })
    if (post.status == 200) {
        
        let data = await post.json()
        return data
    }
    throw error(404, 'Not Found')
}) satisfies PageServerLoad



