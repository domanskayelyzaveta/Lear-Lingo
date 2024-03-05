import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTeachers } from "../service/Api";

export const getTeachersThunk = createAsyncThunk(
    "teachers/fetchTeachers",
    async (_, thunkAPI) => {
      try {
        const response = await fetchTeachers();
        return response;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
