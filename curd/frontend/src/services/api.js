import axios from 'axios'

const API_URL="http://localhost:3000"

// fetch all users

export const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/users");
      console.log(response.data); // Log the response to check the structure
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  };
  

export const createUser=async()=>{
    const response=await axios.post(`${API_URL}/users`,user)
return response.data;
}

export const deleteUser=async ()=>{
const response=await axios.delete(`${API_URL}/users/${id}`);
return response.data;
}
