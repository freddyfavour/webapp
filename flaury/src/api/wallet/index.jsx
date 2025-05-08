import api from '../axiosConfig';
import { toast } from 'react-toastify';

// TODO: Remove console.log statements and replace with proper error handling

const addFunds = async (data) => {
    try {
        const response = await api.post(`/wallet/add-funds`, data);
        return response.data;
    } catch (err) {
        console.log("Error adding funds: ", err);
        toast.error("Error adding funds: ", err);
    }
}

const getBalance = async () => {
    try {
        const response = await api.get(`/wallet/balance`);
        return response.data;
    } catch (err) {
        console.log("Error fetching balance: ", err);
        toast.error("Error fetching balance: ", err);
    }
}

const getTransactions = async () => {
    try {
        const response = await api.get(`/wallet/transactions`);
        return response.data;
    } catch (err) {
        console.log("Error fetching transactions: ", err);
        toast.error("Error fetching transactions: ", err);
    }
}

const withdrawFunds = async (data) => {
    try {
        const response = await api.post(`/wallet/withdraw`, data);
        return response.data;
    } catch (err) {
        console.log("Error withdrawing funds: ", err);
        toast.error("Error withdrawing funds: ", err);
    }
}

export default {
    addFunds,
    getBalance,
    getTransactions,
    withdrawFunds,
}