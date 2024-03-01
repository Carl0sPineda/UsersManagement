import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { UserInfo } from "../interfaces/user.interface";
import { AuthService } from "../api/services/auth.service";

export interface AuthState {
  token?: string;
  user?: UserInfo;

  loginUser: (userName: string, password: string) => Promise<void>;
  logoutUser: () => void;
}

const storeApi: StateCreator<AuthState> = (set) => ({
  // Obtener el estado como segundo argumento de storeApi
  token: undefined,
  user: undefined,

  loginUser: async (userName: string, password: string) => {
    try {
      const { token, userInfo } = await AuthService.login(userName, password);
      const user: UserInfo = userInfo;
      set({ token, user });
    } catch (error) {
      set({ token: undefined, user: undefined });
      throw "Unauthorized";
    }
  },

  logoutUser: () => {
    set({ token: undefined, user: undefined });
  },
});

export const useAuthStore = create<AuthState>()(
  persist(storeApi, { name: "auth-storage", version: 1 })
);
