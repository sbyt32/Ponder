import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { goto } from '$app/navigation';
export const load = (async ({ params }) => {
  // ! IMPLEMENT THE SEARCH FEATURE
  let search = await fetch(`http://127.0.0.1:8000/search/${params.searchQuery}`)

  if (search.status === 200) {
    let response = search.json()
    // if (response.data.length === 1) {
    //   goto(`card/${response.data[0].set}/${response.data[0].id}`)
    // }
    return response
  }

  throw error(404, `No search results results for "${params.searchQuery}"`);
}) satisfies PageServerLoad;


