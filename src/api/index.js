import axios from 'axios';
import dotenv from 'dotenv';
// dotenv.config();
import AuthAPIService from './auth/index';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;;

// Export the AUTH API
export const AuthAPI = AuthAPIService;
