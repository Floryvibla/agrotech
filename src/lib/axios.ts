import axios, { AxiosInstance } from 'axios';

export const baseURLApi= process.env.NEXTAUTH_URL+'/api'

export const API: AxiosInstance = axios.create({
  baseURL: baseURLApi, 
});