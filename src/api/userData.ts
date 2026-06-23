import axios from 'axios';

export const getAllDataClubs = async () => {
  try {
    const { data } = await axios.get('https://fitness-backend-67fy.onrender.com/api/offers/clubs');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getClubById = async (clubId?: string) => {
  if (!clubId) {
    console.warn('⚠️ ClubID is empty or undefined — skipping request');
    return null;
  }

  try {
    const data = await axios.get(`http://localhost:3000/api/offers/clubs/${clubId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const getAllPasses = async () => {
//   try {
//     const { data } = await axios.get(`http://localhost:3000/api/offers/passes`);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getPass = async (passType?: string) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/api/offers/passes/${passType}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// http://localhost:3000/api/offers/clubs
