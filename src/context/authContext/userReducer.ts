import { removeStorage, setStorage } from "../../storage/localStorage";

const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SAVE_USER_DATA": {
      setStorage("USER_DATA", action.payload);
      return action.payload;
    }
    case "REMOVE_USER_DATA": {
      removeStorage("USER_DATA")
      return null;
    }
    default:
      return state;
  }
};

export default userReducer;
