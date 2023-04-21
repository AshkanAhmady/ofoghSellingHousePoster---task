import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginHookFormType, RegisterDataType } from "../../types";
import { userLogin } from "../../actions/authActions";
import { useNavigate } from "react-router";
import { useUserActions } from "../../context/authContext/UserProvider";
import { toast } from "react-toastify";
import { saveUserData } from "actions/actions";

const formSchema = Yup.object().shape({
    email: Yup.string()
        .required("ایمیل را وارد کنید")
        .email("فرمت ایمیل را به درستی وارد کنید"),
    password: Yup.string()
        .required("رمز را وارد کنید")
});

const LoginPage = () => {
    const dispatch: any = useUserActions()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } }: LoginHookFormType = useForm({ mode: "onTouched", resolver: yupResolver(formSchema) });
    const onSubmit = (data: RegisterDataType) => {
        userLogin(data).then((data) => {
            toast.success("loged in successfully")
            dispatch(saveUserData(data));
            navigate("/")
        })
    };


    return (<div className="mt-6 flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-lg flex flex-col w-full md:w-[40%] p-3">
            <h1 className="text-2xl text-center">ورود</h1>
            <hr className="my-4" />
            <label className="text-stone-500 font-medium" htmlFor="email">
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
            <div className="w-full flex gap-4 mt-4">
                <input
                    className="bg-blue-600 cursor-pointer flex-auto text-white px-7 py-1 rounded-md"
                    type="submit"
                    value="ورود"
                />
            </div>
        </form>
    </div>);
}

export default LoginPage;