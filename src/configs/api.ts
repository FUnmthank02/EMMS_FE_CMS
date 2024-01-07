import { getLocalStorage } from "@/utilities/helper";
import STORAGE from "@/utilities/storage";
import Http from "./http";
import { ENDPOINT_API } from "@/utilities/enums";
import HttpAuth from "./httpAuth";
import { ChangePasswordModel, RegisterModel, SignInModel, TokenModel, UpdateUserProfileModel } from "@/utilities/interfaces";

export const BearerToken = () => {
  return `Bearer ${getLocalStorage(STORAGE.accessToken)}`;
};

const API = {
  signIn: (data: SignInModel) => Http.post(ENDPOINT_API.signIn, {
    params: {
      username: data.username,
      password: data.password
    }
  }),
  register: (data: RegisterModel) => Http.post(ENDPOINT_API.register, data),
  refreshToken: (data: any) => Http.get(ENDPOINT_API.refreshToken, data),
  forgotPassword: (email: string) =>
    Http.post(ENDPOINT_API.forgotPassword, {
      params: {
        email
      }
    }),
  validateResetCode: (code: string) =>
    Http.post(ENDPOINT_API.validateResetCode, {
      params: {
        code
      }
    }),
  resetPassword: (password: string) =>
    Http.put(ENDPOINT_API.resetPassword, {
      params: {
        password
      }
    }),
  changePassword: (userId:number, data: ChangePasswordModel) =>
    HttpAuth.put(ENDPOINT_API.changePassword+ `/${userId}`, {
      params: {
        oldPassword: data.oldPassword,
        newPassword: data.newPassword
      }
    }),
  editProfile: (data: UpdateUserProfileModel) =>
    HttpAuth.put(ENDPOINT_API.user + `/${data.userId}`, data),
  uploadAvatar: (userId: number, file: FormData) =>
    HttpAuth.post(`${ENDPOINT_API.uploadAvatar}/${userId}`, file, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }}),
  getUsers: (searchValue?: string) =>
    HttpAuth.get(`${ENDPOINT_API.user}`, {
      params: {
        searchValue
      }
    }),
  getSingleUser: (userId: number) =>
    HttpAuth.get(`${ENDPOINT_API.user}/${userId}`),
  
}

export default API;