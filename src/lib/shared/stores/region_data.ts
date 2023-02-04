import { browser } from "$app/environment";
import { writable } from "svelte/store";

export let shopInfo = [
    {
        region: "USA",
        shop: "TCGPlayer",
        link: "https://www.tcgplayer.com/search/all/product?q=",
        short: "tcgplayer",
        locale: "en-US", 
        currency: "USD",
        colors: {
            rgb: {
                store: "rgb(77 124 15)",
                store_foil: ""
            },
            tw: {
                store: "bg-lime-600",
                store_foil: ""
            }
        }
    },
    {
        region: "EU",
        shop: "CardMarket",
        link: "https://www.cardmarket.com/en/Magic/Products/Search?searchString=",
        short: "mkm",
        locale: "de-DE",
        currency: "EUR",
        colors: {
            rgb: {
                store: "rgb(2 132 199)",
                store_foil: ""
            },
            tw: {
                store: "bg-sky-600",
                store_foil: ""
            }
        },
    },
    {
        region: "MTGO",
        shop: "Cardhoarder",
        link: "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=",
        short: "cardhoarder",
        locale: "en-US",
        currency: "TIX",
        colors: {
            rgb: {
                store: "rgb(234 88 12)",
                store_foil: ""
            },
            tw: {
                store: "bg-orange-600",
                store_foil: ""
            }
        }
    } 
]

const defaultValue = '0';
const initialValue = browser ? window.localStorage.getItem('regionVal') ?? defaultValue : defaultValue;

const regionVal = writable<string>(initialValue);

regionVal.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('regionVal', value)
    }
});

export default regionVal;