import { fetchAPI } from '../api.js'

export const initializeTimes = (date) => {
    return fetchAPI(date);
};