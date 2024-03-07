import { createAsyncThunk } from "@reduxjs/toolkit";
import { SuccessResponse, Teacher, fetchTeachers } from "../service/Api";

export const getTeachersThunk = createAsyncThunk<
  SuccessResponse<Teacher[]>,
  void
>("teachers/fetchTeachers", async (_, thunkAPI) => {
  try {
    const response = await fetchTeachers();
    return response;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
