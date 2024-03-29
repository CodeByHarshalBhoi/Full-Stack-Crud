import axios from "axios";

const URL = "http://localhost:8000";
export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("Error Occured", error);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (err) {
    console.log("Error while calling getUser API", err);
  }
};

export const getUser = async (id) => {
  try{
    return await axios.get(`${URL}/${id}`)
  }catch(err){
    console.log("Error while load data", err)
  }
};

export const editUser= async(user, id)=>{
  try{
      return await axios.put((`${URL}/${id}`, user))
  }catch(err){
console.log("Error ehile edit data", err)
  }
}

export const deleteUser=async(id)=>{
  try{
    return await axios.delete(`${URL}/${id}`)
  }catch(err){
    console.log("Error while delete data", err)
  }
}
