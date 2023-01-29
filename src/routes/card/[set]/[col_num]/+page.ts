interface RootMessage  {
    name: string,
    set: number,
    collector_id: string,
    price_history: [{
      date: string,
      usd: number,
      usd_foil: number,
      euro: number,
      euro_foil: number,
      tix: number  
    }]
}

export async function load( {data} : {data: RootMessage}) {        
    return data
}
