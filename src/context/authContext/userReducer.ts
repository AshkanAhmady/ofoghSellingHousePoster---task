import {
  REMOVE_USER_DATA,
  SAVE_USER_DATA,
  USER_DATA,
} from "Configs/constants/global";
import { removeStorage, setStorage } from "storage/localStorage";
import { UserType } from "types";

const userReducer = (state: UserType, action: any) => {
  switch (action.type) {
    case SAVE_USER_DATA: {
      setStorage(USER_DATA, action.payload);
      return action.payload;
    }
    case REMOVE_USER_DATA: {
      removeStorage(USER_DATA);
      return null;
    }
    default:
      return state;
  }
};

export default userReducer;
