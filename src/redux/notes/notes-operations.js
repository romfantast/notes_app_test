import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/API";

const getNotes = createAsyncThunk("notes/get", async (_, thunkApi) => {
  try {
    const { data } = await API.getNotes();
    return data;
  } catch (error) {
    thunkApi.rejectWithValue();
  }
});

const addNote = createAsyncThunk("notes/add", async (note, thunkApi) => {
  try {
    const { data } = await API.addNote(note);
    return data;
  } catch (error) {
    thunkApi.rejectWithValue();
  }
});

const deleteNote = createAsyncThunk("notes/delete", async (id, thunkApi) => {
  try {
    const { data } = await API.deleteNote(id);
    return data;
  } catch (error) {
    thunkApi.rejectWithValue();
  }
});
const editNote = createAsyncThunk("notes/edit", async (note, thunkApi) => {
  try {
    const { data } = await API.editNote(note);
    return data;
  } catch (error) {
    thunkApi.rejectWithValue();
  }
});
const filter = createAsyncThunk("notes/filter", async (obj, thunkApi) => {
  try {
    const { data } = await API.filter(obj);
    return data;
  } catch (error) {
    thunkApi.rejectWithValue();
  }
});

const notesOperations = {
  getNotes,
  addNote,
  deleteNote,
  editNote,
  filter,
};
export default notesOperations;
