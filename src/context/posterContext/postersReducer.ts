import { SAVE_NEW_POSTER } from "Configs/constants/global";
import { PosterListType } from "types";

const posterReducer = (state: PosterListType, action: any) => {
  switch (action.type) {
    case SAVE_NEW_POSTER: {
      return state;
    }
    // case REMOVE_POSTERS: {
    //   removeStorage(POSTERS_DATA);
    //   return null;
    // }

    default:
      return state;
  }
};

export default posterReducer;
