const BASE_URL = import.meta.env.VITE_BASE_API_KEY;
import axios from 'axios';

export const login = async ({
	phoneNumber,
	password,
}: {
	phoneNumber: string;
	password: string;
}) => {
	try {
		const response = await axios.post(`${BASE_URL}auth/log-in`, {
			phoneNumber,
			password,
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};
