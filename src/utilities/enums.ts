export enum ROUTE_PATH {
  dashboard = "/",
  notFound = "*",
  signIn = "/sign-in",
  logout = "/logout",
  register = "/register",
  forgotPassword = "/forgot-password",
  resetPassword = "/forgot-password/reset",
  validationResetCode= "/forgot-password/validation",
  changePassword = "/account/change-password",
  editProfile = "/account/edit",
  patients = "/patients",
  doctors = "/doctors",
  appointments = "/appointments",
  medicine = "/medicine",
  content = "/content",
}

export enum PAGE_NOT_LOGIN {
  signIn = "/sign-in",
  register = "/register",
  forgotPassword = "/forgot-password",
  validationResetCode= "/forgot-password/validation",
  resetPassword = "/forgot-password/reset",
}

export enum HTTP_STATUS_CODE {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  PROXY_AUTHENTICATION_REQUIRED = 407,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
  PAYMENT_REQUIRED = 402,
}

export enum IMAGE_TYPES {
  jpeg = "image/jpeg",
  png = "image/png",
  jpg = "image/jpg",
}

export enum VIDEO_TYPES {
  MP4 = "video/mp4",
  AVI = "video/avi"
}

export enum ENDPOINT_API {
  signIn = "/user/sign-in",
  register = "/user/register",
  forgotPassword = "/user/forgot-password",
  validateResetCode = "/user/validate-reset-code",
  resetPassword = "/user/reset-password",
  refreshToken = "/user/refresh-token",
  changePassword = "/user/change-password",
  user = "/user",
  getUserByUsername = "/user/by-username",
  uploadAvatar = "/user/upload-image",
}

export enum MEDIA_TYPE {
  image = "image",
  video = "video",
}