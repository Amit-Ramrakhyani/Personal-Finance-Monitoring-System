import axios from 'axios';
import {auth} from "../init/firebase";
const TOKEN_STORAGE_KEY = 'firebaseAuthToken';
const TOKEN_EXPIRATION_CHECK_WINDOW = 55 * 60 * 1000; // 55 minutes in milliseconds

const getFirebaseIdToken = async () => {
    let cachedToken = getCachedToken();

    if (!cachedToken || isTokenExpired(cachedToken)) {
        const idToken = await auth.currentUser.getIdToken();
        console.log("ID Token: ", idToken);
        cachedToken = { token: idToken, timestamp: Date.now() };
        cacheToken(cachedToken);
    }

    return cachedToken.token;
}

const getCachedToken = () => {
    const tokenData = localStorage.getItem(TOKEN_STORAGE_KEY);
    return tokenData ? JSON.parse(tokenData) : null;
}

const cacheToken = (tokenData) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(tokenData));
}

const isTokenExpired = (tokenData) => {
    const { timestamp } = tokenData;
    return Date.now() - timestamp > TOKEN_EXPIRATION_CHECK_WINDOW;
}

const listAllTranscations = async (event) => {
    try{
        // Add Firebase ID token to the request headers.

        const idToken = await getFirebaseIdToken();
        console.log("ID Token: ", idToken)
        return axios.get('transaction/list', {
            headers: {
                Authorization: `Bearer ${idToken}`
            }
        }).then((response) => {
            return response.data;
        }).catch((error) => {
            return error;
        })

    }catch(error){
        console.error('Error fetching transcations:', error);
        alert('Error fetching transcations:', error);
        throw error;
    }
}


export default { 
    listAllTranscations: listAllTranscations
}