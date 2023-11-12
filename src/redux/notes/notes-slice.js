import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { fetchStatus } from "../../helpers/fetchStatus";
import notesOperations from "./notes-operations";

const initialState = {
  notes: null,
  isMaxNotes: false,
  isLoading: false,
  isLoadingAdd: false,
  isLoadingDelete: false,
  isLoadingEdit: false,
  status: fetchStatus.idle,
  error: "",
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setMaxNotes: (state) => {
      state.isMaxNotes = true;
    },
    resetMaxNotes: (state) => {
      state.isMaxNotes = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(notesOperations.getNotes.pending, (state, _) => {
        state.isLoading = true;
        state.status = fetchStatus.pending;
      })
      .addCase(notesOperations.getNotes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = fetchStatus.fullfield;
        state.notes = action.payload;
      })
      .addCase(notesOperations.getNotes.rejected, (state, action) => {
        state.isLoading = false;
        state.status = fetchStatus.rejected;
      })
      .addCase(notesOperations.addNote.pending, (state, _) => {
        state.isLoadingAdd = true;
        state.status = fetchStatus.pending;
      })
      .addCase(notesOperations.addNote.fulfilled, (state, action) => {
        state.isLoadingAdd = false;
        state.status = fetchStatus.fullfield;
        state.notes = [...state.notes, action.payload];
      })
      .addCase(notesOperations.addNote.rejected, (state, action) => {
        state.isLoadingAdd = false;
        state.status = fetchStatus.rejected;
      })
      .addCase(notesOperations.deleteNote.pending, (state, action) => {
        state.isLoadingDelete = true;
        state.status = fetchStatus.pending;
      })
      .addCase(notesOperations.deleteNote.fulfilled, (state, action) => {
        state.isLoadingDelete = false;
        state.status = fetchStatus.fullfield;
        state.notes = state.notes.filter(
          (note) => note.id !== action.payload.id
        );
      })
      .addCase(notesOperations.deleteNote.rejected, (state, action) => {
        state.isLoadingDelete = false;
        state.status = fetchStatus.rejected;
      })
      .addCase(notesOperations.editNote.pending, (state, action) => {
        state.isLoadingEdit = true;
        state.status = fetchStatus.pending;
      })
      .addCase(notesOperations.editNote.fulfilled, (state, action) => {
        state.isLoadingEdit = false;
        state.status = fetchStatus.fullfield;
        state.notes = [...state.notes].map((note) => {
          if (note.id === action.payload.id) {
            return { ...note, ...action.payload };
          }
          return note;
        });
      })
      .addCase(notesOperations.editNote.rejected, (state, action) => {
        state.isLoadingEdit = false;
        state.status = fetchStatus.rejected;
      })
      .addCase(notesOperations.filter.pending, (state, action) => {
        state.isLoading = true;
        state.status = fetchStatus.pending;
        state.notes = null;
      })
      .addCase(notesOperations.filter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = fetchStatus.fullfield;
        state.notes = action.payload;
      })
      .addCase(notesOperations.filter.rejected, (state, action) => {
        state.isLoading = false;
        state.status = fetchStatus.rejected;
      });
  },
});

const persistConfigNotes = {
  key: "notes",
  storage,
  whitelist: ["notes"],
};

export const notesReducer = persistReducer(
  persistConfigNotes,
  notesSlice.reducer
);

export const { setMaxNotes, resetMaxNotes } = notesSlice.actions;
