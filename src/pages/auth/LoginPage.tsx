import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginHookFormType, RegisterDataType } from "../../types";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { saveUserData } from "requests/auth/actions";
import Input from "components/Input";
import { useUserActions } from "context/authContext/UserProvider";
import { userLogin } from "requests/auth/authRequests";

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
            toast.success("ورود با موفقیت انجام شد")
            dispatch(saveUserData(data));
            navigate("/")
        })
    };

    return (<div className="mt-6 flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-lg flex flex-col w-full md:w-[40%] p-3">
            <h1 className="text-2xl text-center">ورود</h1>
            <hr className="my-4" />
            <Input
                label="ایمیل"
                type="email"
                name="email"
                placeholder="ایمیل خود را وارد کنید..."
                error={errors.email?.message}
                validation={{ ...register("email") }}
            />
            <Input
                label="رمز عبور"
                type="password"
                name="password"
                placeholder="رمز خود را وارد کنید..."
                error={errors.password?.message}
                validation={{ ...register("password") }}
            />
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