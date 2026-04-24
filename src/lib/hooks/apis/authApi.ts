const baseURL = process.env.NEXT_PUBLIC_API_URL || "";

import { ApiResponse, User } from "@/lib/types";
import axios from "axios";

export async function apiLoadAllUsers(): Promise<User[]> {
  const res = await axios.get<ApiResponse<User[]>>(`${baseURL}/auth/users`);
  return res.data.data;
}
