import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { axiosInstance } from "../config/axiosInstance";
import {
  LoginResponse,
  Register,
  UpdateRole,
  UserInfo,
} from "../../interfaces/user.interface";

export class AuthService {
  static login = async (
    userName: string,
    password: string
  ): Promise<LoginResponse> => {
    try {
      const { data } = await axiosInstance.post<LoginResponse>("/auth/login", {
        userName,
        password,
      });
      console.log(data);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
        throw new Error(error.response?.data);
      }
      throw new Error("Unable to login");
    }
  };

  static register = async (user: Register): Promise<Register> => {
    try {
      const { data } = await axiosInstance.post<Register>(
        "/auth/register",
        user
      );
      console.log(data);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data.statusCode === 409) {
          toast.error("The username is already in use");
        }
        console.log(error.response?.data);
        throw new Error(error.response?.data);
      }
      console.log(error);
      throw new Error("Unable to register user");
    }
  };

  static roleOwner = async () => {
    try {
      const { data } = await axiosInstance.get("/test/get-owner-role");
      return data;
    } catch (error) {
      throw new Error("Unable to get data unauthorized");
    }
  };

  static getUsers = async (): Promise<UserInfo[]> => {
    try {
      const { data } = await axiosInstance.get<UserInfo[]>("/auth/users");
      return data;
    } catch (error) {
      throw new Error("Unable to get data unauthorized");
    }
  };

  static updateRole = async (user: UpdateRole): Promise<UpdateRole> => {
    try {
      const { data } = await axiosInstance.post<UpdateRole>(
        "/auth/update-role",
        user
      );
      console.log(data);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
        throw new Error(error.response?.data);
      }
      console.log(error);
      throw new Error("Unable to udpdate role");
    }
  };
}
