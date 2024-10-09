// import axios from "axios";

// // MENU API
// export const getIkan = () => {
//   return axios.get("http://localhost:3001/Ikan").then((response) => response);
// };

// export const postIkan = async (a) => {
//   try {
//     const response = await axios.post("http://localhost:3001/Ikan/create", a);
//     return response;
//   } catch (error) {
//     throw error;
//   }
// };

// export const updateMenu = async (data, id) => {
//   return await axios
//     .put(`http://localhost:3001/Ikan/update/` + id, data)
//     .then((res) => res.data);
// };

// export const deleteIkan = async (id) => {
//   return await axios
//     .delete(`http://localhost:3001/Ikan/delete/${id}`)
//     .then((res) => res.data);
// };
