// https://learn-lingo-backend-2.onrender.com/api/teachers //auth/signup  //auth/signin

import axios from "axios";

export interface Teacher {
  _id: string;
  name: string;
  surname?: string;
  languages: string[];
  levels: string[];
  rating: number;
  reviews: string[];
  price_per_hour: number;
  lessons_done: number;
  avatar_url?: string;
  lesson_info?: string;
  conditions: string[];
  experience?: string;
}

export interface SuccessResponse<T> {
  success: boolean;
  data: T;
}

export const BASE_URL = "https://learn-lingo-backend-2.onrender.com/api";
const $instance = axios.create({ baseURL: BASE_URL });

export const fetchTeachers = async (
  page = 1,
  limit = 4
): Promise<SuccessResponse<Teacher[]>> => {
  const { data } = await $instance.get<SuccessResponse<Teacher[]>>(
    "/teachers",
    {
      params: {
        page: page,
        limit: limit,
      },
    }
  );

  return data;
};
