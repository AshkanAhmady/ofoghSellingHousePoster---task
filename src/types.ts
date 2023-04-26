import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form/dist/types";

export interface ChildsComponentsType {
  children: React.ReactNode;
}

export interface RegisterDataType {
  confirmPassword?: string;
  email: string;
  password: string;
}

export interface RegisterHookFormType {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<any>;
  formState:
    | {
        errors: {
          confirmPassword?: {
            message: string;
            type: string;
            ref: HTMLInputElement;
          };
          email?: { message: string; type: string; ref: HTMLInputElement };
          password?: { message: string; type: string; ref: HTMLInputElement };
        };
      }
    | { errors: any };
}

export interface LoginHookFormType {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<any>;
  formState:
    | {
        errors: {
          email?: { message: string; type: string; ref: HTMLInputElement };
          password?: { message: string; type: string; ref: HTMLInputElement };
        };
      }
    | { errors: any };
}

export interface UserType {
  userId: number;
  accessToken: string;
  email: string;
  userName: string;
}

export interface useUserActionsDispatchType {
  type: string;
  payload: UserType;
}

export interface InputPropsType {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  error: string;
  validation: any;
}

export interface SinglePosterType {
  lat: number;
  long: number;
  description: string;
  mobileNumber: string;
  address: string;
  id: number;
}

export interface PosterListType {
  data: Array<SinglePosterType>;
}

export interface CreatePosterType {
  description: string;
  homeDesc: string;
  lastName: string;
  name: string;
  phoneNumber: string;
  address?: string;
  mapInfo?: any;
}

export interface MapLocationType {
  lat: number;
  lng: number;
}
