import { USER_DATA } from "Configs/constants/global";
import {
    createContext,
    useContext,
    useReducer,
} from "react";
import { getStorage } from "storage/localStorage";
import { ChildsComponentsType, UserType } from "../../types";
import userReducer from "./userReducer";

const UserContext = createContext<UserType | null>(null);
const UserContextDispatcher = createContext({});

const initialValue: UserType = getStorage(USER_DATA)

const UserProvider: React.FC<ChildsComponentsType> = ({ children }) => {
    const [user, dispatch] = useReducer(userReducer, initialValue);

    return (
        <UserContext.Provider value={user}>
            <UserContextDispatcher.Provider value={dispatch}>
                {children}
            </UserContextDispatcher.Provider>
        </UserContext.Provider>
    );
};

export default UserProvider;
export const useUser = () => useContext(UserContext);
export const useUserActions = () => useContext(UserContextDispatcher)