import { SAVE_USER_DATA } from "Configs/constants/global";
import { UserType } from "types";

export const saveUserData = (data: UserType) => ({
  type: SAVE_USER_DATA,
  payload: data,
});
