// TODO: add and export your own actions
import cities from '../data/cities'

// const city = { name: "Paris", address: "16 Villa Gaudelet, 75011 Paris", slug: "paris" };


export function setCities() {
    return { 
        type: 'SET_CITIES', 
        payload: cities  
    }
}

export function selectCity(city) {
    return {
        type: 'SELECT_CITY',
        payload: city || null
    }
}