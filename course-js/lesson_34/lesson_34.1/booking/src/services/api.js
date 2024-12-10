import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getDestinations = async () => {
  try {
    const response = await axios.get(`${API_URL}/destination`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching destinations');
  }
};

export const postHotelSearch = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/hotels`, data);
    return response.data;
  } catch (error) {
    throw new Error('Error posting hotel search');
  }
};

export const getHotels = async () => {
  try {
    const response = await axios.get(`${API_URL}/hotels`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching hotels');
  }
};
