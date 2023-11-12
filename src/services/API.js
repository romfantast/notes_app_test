import axios from "axios";

axios.defaults.baseURL = "https://654e3f8ecbc3253557429a2f.mockapi.io/api/v1";

const getNotes = async () => {
  return await axios.get("/notes?sortby=createdAt&order=desc");
};

const addNote = async (note) => {
  return await axios.post("/notes", note);
};
const deleteNote = async (id) => {
  return await axios.delete(`/notes/${id}`);
};
const editNote = async (note) => {
  return await axios.put(`/notes/${note.id}`, note);
};

const filter = async (obj) => {
  return await axios.get(
    `/notes?category=${obj.cat || ""}&sortby=createdAt&order=${
      obj.time || "desc"
    }`
  );
};

const API = {
  getNotes,
  addNote,
  deleteNote,
  editNote,
  filter,
};
export default API;
