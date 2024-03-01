export interface Register {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  address: string;
}

export interface Login {
  userName: string;
  password: string;
}

export interface UserInfo {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  createdAt: string;
  roles: string[];
}

export interface LoginResponse {
  token: string;
  userInfo: UserInfo;
}

export interface UpdateRole {
  userName: string;
  newRole: string;
}
