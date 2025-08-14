export const baseUrlApi = `${process.env.NEXT_APP_BASE_URL}/api`;

export const endpoints = {
  auth: {
    signup: "/sign-up",
    login: "/login",
  },
};

export const sucessNotificationEndPoints = [
  endpoints.auth.login
];
