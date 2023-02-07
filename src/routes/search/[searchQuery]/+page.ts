// goto(`card/${search_result.data[0].set}/${search_result.data[0].id}`)
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// export const load = () => {
// 	throw redirect(302, '/');
// };

export const load = (({data}) => {
    if (data.data.length === 1) {
        throw redirect(302, `/card/${data.data[0].set}/${data.data[0].id}`);
    }
    else {
        return data
    }
}) satisfies PageLoad
