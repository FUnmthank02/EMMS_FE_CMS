import SignInSlice from "./slices/SignInSlice";
import RegisterSlice from "./slices/RegisterSlice";
import ResetPasswordSlice from "./slices/ResetPasswordSlice";
import ForgotPasswordSlice from "./slices/ForgotPasswordSlice";
import ValidateResetCodeSlice from "./slices/ValidateResetCodeSlice";
import ChangePasswordSlice from "./slices/ChangePasswordSlice";
import AuthSlice from "./slices/AuthSlice";
import EditProfileSlice from "./slices/EditProfileSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    signIn: SignInSlice,
    register: RegisterSlice,
    resetPassword: ResetPasswordSlice,
    forgotPassword: ForgotPasswordSlice,
    validateResetCode: ValidateResetCodeSlice,
    changePassword: ChangePasswordSlice,
    editProfile: EditProfileSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;