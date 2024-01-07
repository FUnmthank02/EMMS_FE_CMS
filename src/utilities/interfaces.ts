export interface SignInModel {
  username: string;
  password: string;
}
export interface RegisterModel {
  username: string;
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
}
export interface ChangePasswordModel {
  oldPassword: string;
  newPassword: string;
}
export interface TokenModel {
  accessToken: string;
  refreshToken: string;
}
export interface UpdateUserProfileModel {
  userId: number;
  username: string;
  email: string;
  name: string;
  password?: string;
  gender?: boolean;
  phoneNumber?: string;
  bio?: string;
  avatar?: string;
  status?: boolean;
}