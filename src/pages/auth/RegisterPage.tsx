import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterHookFormType, RegisterDataType } from "../../types";
import { userRegister } from "../../actions/authActions";
import { toast } from "react-toastify";
import { useUserActions } from "../../context/authContext/UserProvider";
import { useNavigate } from "react-router";
import { saveUserData } from "actions/actions";
import Input from "components/Input";

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
            dispatch(saveUserData(data))
            navigate("/")
        })
    };

    return (
        <div className="mt-6 flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-lg flex flex-col w-full md:w-[40%] p-3">
                <h1 className="text-2xl text-center">ثبت نام</h1>
                <hr className="my-4" />
                <Input
                    label="نام کاربری"
                    type="text"
                    name="username"
                    placeholder="نام کاربری را وارد کنید..."
                    error={errors.username?.message}
                    validation={{ ...register("username") }}
                />
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
                <Input
                    label="تکرار رمز عبور"
                    type="password"
                    name="confirmPassword"
                    placeholder="رمز خود را وارد کنید..."
                    error={errors.confirmPassword?.message}
                    validation={{ ...register("confirmPassword") }}
                />
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