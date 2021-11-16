
//const fetch = require('node-fetch');
import { fetch } from 'node-fetch';
export async function handler() {
    
    const API = "https://pokeapi.co/api/v2/pokedex/kanto";
    const response = await fetch(API)
    const data = await response.json();
    
    return {
        statusCode: 200,
        body: JSON.stringify( { 
            message: JSON.stringify(data)
        })
    }
}

