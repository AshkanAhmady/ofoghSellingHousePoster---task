import request from "../Configs/request";

export const userRegister = async (body: any) => {
  return await request.post("/users", body).then((data: any) => {
    let userData = {
      userId: data.user.id,
      email: data.user.email,
      userName: data.user.username,
      accessToken: data.accessToken,
    };
    return userData;
  });
};

export const userLogin = async (body: any) => {
  return await request.post("/login", body).then((data: any) => {
    let userData = {
      userId: data.user.id,
      email: data.user.email,
      userName: data.user.username,
      accessToken: data.accessToken,
    };
    return userData;
  });
};
