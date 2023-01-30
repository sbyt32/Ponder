import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  // ! IMPLEMENT THE SEARCH FEATURE
  let search = await fetch('/')

  if (search.status === 200) {
    
  }
  // if (params.searchQuery === ) {
  //   return {
  //     title: 'Hello world!',
  //     content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
  //   };
  // }

  throw error(404, 'Not found');
}) satisfies PageServerLoad;


