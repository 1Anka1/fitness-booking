import axios from 'axios';
// http://localhost:3000/api/offers/clubs

//CLUB
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
    const data = await axios.get(
      `https://fitness-backend-67fy.onrender.com/api/offers/clubs/${clubId}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

//USER

type UpdateUserParams = {
  fullName?: string;
  email?: string;
  avatar?: string | null;
};

export const getUserById = async (userId?: string) => {
  try {
    const data = await axios.get(`http://localhost:3000/api/users/${userId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateByID = async (userId: string, params: UpdateUserParams) => {
  const { data } = await axios.put(`http://localhost:3000/api/users/${userId}`, params);

  return data;
};

//PASS
export const getPass = async (passType?: string) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/api/offers/passes/${passType}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
