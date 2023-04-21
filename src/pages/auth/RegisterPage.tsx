import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterHookFormType, RegisterDataType } from "../../types";
import { userRegister } from "../../actions/authActions";
import { toast } from "react-toastify";
import { useUserActions } from "../../context/authContext/UserProvider";
import { useNavigate } from "react-router";

const formSchema = Yup.object().shape({
    username: Yup.string()
        .required("نام کاربری را وارد کنید")
        .min(4, "نام کاربری شما باید حداقل 4 کاراکتر باشد"),
    email: Yup.string()
        .required("ایمیل را وارد کنید")
        .email("فرمت ایمیل را به درستی وارد کنید"),
    password: Yup.string()
        .required("رمز را وارد کنید")
        .min(4, "رمز شما باید حداقل 4 کاراکتر باشد"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "رمزها مطابقت ندارند")
});

const RegisterPage = () => {
    const dispatch: any = useUserActions()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } }: RegisterHookFormType = useForm({ mode: "onTouched", resolver: yupResolver(formSchema) });
    
    const onSubmit = (data: RegisterDataType) => {
        delete data['confirmPassword']
        userRegister(data).then((data) => {
            toast.success("registered successfully")
            dispatch({ type: "SAVE_USER_DATA", payload: data });
            navigate("/")
        })
    };

    return (
        <div className="mt-6 flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-lg flex flex-col w-full md:w-[40%] p-3">
                <h1 className="text-2xl text-center">ثبت نام</h1>
                <hr className="my-4" />
                <label className="text-stone-500 font-medium" htmlFor="username">
                    نام کاربری
                </label>
                <input
                    placeholder="نام کاربری را وارد کنید..."
                    className="bg-transparent placeholder:text-stone-400 outline-none border border-stone-300 rounded px-2 py-1 mt-1"
                    {...register("username")}
                    name="username"
                    type="username"
                    id="username"
                />
                <span className="text-red-500 text-xs py-1">{errors.username?.message}</span>
                <label className="text-stone-500 font-medium mt-4" htmlFor="email">
                    ایمیل
                </label>
                <input
                    placeholder="ایمیل خود را وارد کنید..."
                    className="bg-transparent placeholder:text-stone-400 outline-none border border-stone-300 rounded px-2 py-1 mt-1"
                    {...register("email")}
                    name="email"
                    type="email"
                    id="email"
                />
                <span className="text-red-500 text-xs py-1">{errors.email?.message}</span>
                <label className="text-stone-500 font-medium mt-4" htmlFor="password">
                    رمز عبور
                </label>
                <input
                    placeholder="رمز خود را وارد کنید..."
                    className="bg-transparent placeholder:text-stone-400 outline-none border border-stone-300 rounded px-2 py-1 mt-1"
                    {...register("password")}
                    name="password"
                    type="password"
                    id="password"
                />
                <span className="text-red-500 text-xs py-1">{errors.password?.message}</span>
                <label className="text-stone-500 font-medium mt-4" htmlFor="confirmPassword">
                    تکرار رمز عبور
                </label>
                <input
                    placeholder="رمز را دوباره وارد کنید..."
                    className="bg-transparent placeholder:text-stone-400 outline-none border border-stone-300 rounded px-2 py-1 mt-1"
                    {...register("confirmPassword")}
                    name="confirmPassword"
                    type="password"
                    id="confirmPassword"
                />
                <span className="text-red-500 text-xs py-1">{errors.confirmPassword?.message}</span>
                <div className="w-full flex gap-4 mt-4">
                    <input
                        className="bg-blue-600 cursor-pointer flex-auto text-white px-7 py-1 rounded-md"
                        type="submit"
                        value="ثبت نام"
                    />
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;