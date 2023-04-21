import request from "../Configs/request";

export const userRegister = (body: any) => {
  return new Promise((resolve, reject) => {
    request
      .post("/users", body)
      .then((data: any) => {
        let userData = {
          userId: data.user.id,
          email: data.user.email,
          userName: data.user.username,
          accessToken: data.accessToken,
        };
        resolve(userData);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};

export const userLogin = (body: any) => {
  return new Promise((resolve, reject) => {
    request
      .post("/login", body)
      .then((data: any) => {
        let userData = {
          userId: data.user.id,
          email: data.user.email,
          userName: data.user.username,
          accessToken: data.accessToken,
        };
        resolve(userData);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};
