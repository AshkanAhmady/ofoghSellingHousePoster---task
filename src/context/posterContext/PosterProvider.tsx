import { POSTERS_DATA } from "Configs/constants/global";
import {
    createContext,
    useContext,
    useReducer,
} from "react";
import { getStorage } from "storage/localStorage";
import { ChildsComponentsType, PosterListType } from "../../types";
import postersReducer from "./postersReducer";

const PostersContext = createContext<PosterListType | null>(null);
const PostersContextDispatcher = createContext({});

const initialValue: PosterListType = getStorage(POSTERS_DATA)

const PostersProvider: React.FC<ChildsComponentsType> = ({ children }) => {
    const [Posters, dispatch] = useReducer(postersReducer, initialValue);

    return (
        <PostersContext.Provider value={Posters}>
            <PostersContextDispatcher.Provider value={dispatch}>
                {children}
            </PostersContextDispatcher.Provider>
        </PostersContext.Provider>
    );
};

export default PostersProvider;
export const usePosters = () => useContext(PostersContext);
export const usePostersActions = () => useContext(PostersContextDispatcher)