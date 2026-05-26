import axios from 'axios';

export const getAllDataClubs = async () => {
  try {
    const { data } = await axios.get(`http://localhost:3000/api/offers/clubs`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
