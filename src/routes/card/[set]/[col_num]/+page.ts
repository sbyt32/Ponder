interface RootMessage  {
    price: {
      name: string,
      set: string,
      id: string,
      price_history: [{
        date: string,
        usd: number,
        usd_foil: number,
        euro: number,
        euro_foil: number,
        tix: number  
      }]
    },
    sale: {
      name: string,
      set: string,
      id: string,
      data: [{
        day: string,
        sales: number,
        avg_cost: number
      }]
  }
}

export async function load( {data} : {data: RootMessage}) {        
    return data
}
