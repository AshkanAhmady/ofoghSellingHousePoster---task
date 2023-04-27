import { yupResolver } from "@hookform/resolvers/yup";
import Input from "components/Input";
import MapComponent from "components/MapComponent";
import { useUser } from "context/authContext/UserProvider";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { saveNewPoster } from "requests/poster/posterRequests";
import { PosterType, LoginHookFormType } from "types";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
    name: Yup.string().required("نام را وارد کنید"),
    phoneNumber: Yup.string().required("شماره موبایل را وارد کنید"),
    homeDesc: Yup.string().required("مشخصات خانه را وارد کنید")
});

const CreatePoster = () => {
    const user = useUser()
    const Navigate = useNavigate()
    const [location, setLocation] = useState({
        address: "",
        latLong: null,
        validLocation: false,
    })
    const { register, handleSubmit, formState: { errors } }: LoginHookFormType = useForm({ mode: "onTouched", resolver: yupResolver(formSchema) });

    const onSubmit = (data: PosterType) => {
        if (!location.validLocation) {
            toast.warning("آدرس خود را به کمک نقشه وارد کنید")
        } else {
            saveNewPoster({ ...data, location: location.latLong, address: location.address, userId: user?.userId }).then((data) => {
                toast.success("آگهی با موفقیت ایجاد شد")
                Navigate("/")
            })
        }
    }

    return (<div className="mt-6 flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:text-white dark:bg-gray-800 duration-150 dark:shadow-gray-900 rounded-xl shadow-lg flex flex-col w-full md:w-[40%] p-3">
            <h1 className="text-2xl text-center">ثبت آگهی</h1>
            <hr className="my-4 duration-150 dark:border-black" />
            <Input
                label="نام"
                type="text"
                name="name"
                placeholder="نام خود را وارد کنید..."
                error={errors.name?.message}
                validation={{ ...register("name") }}
            />
            <Input
                label="نام خانوادگی"
                type="text"
                name="lastName"
                placeholder="نام خانوادگی خود را وارد کنید..."
                error={errors.lastName?.message}
                validation={{ ...register("lastName") }}
            />
            <Input
                label="شماره موبایل"
                type="number"
                name="phoneNumber"
                placeholder="شماره موبایل خود را وارد کنید..."
                error={errors.phoneNumber?.message}
                validation={{ ...register("phoneNumber") }}
            />
            <label className="text-stone-500 font-medium" htmlFor="homeDesc">
                مشخصات خانه
            </label>
            <textarea  {...register("homeDesc")} placeholder="مشخصات خانه را وارد کنید" name="homeDesc" rows={3} className="bg-transparent placeholder:text-stone-400 outline-none border border-stone-300 rounded px-2 py-1 mt-1" />
            <span className="text-red-500 text-xs py-1">{errors.homeDesc?.message}</span>
            <span className="text-stone-500 dark:text-white duration-150 text-xs pt-3">برای ثبت آدرس، موقعیت مکانی خود را روی نقشه تعیین کنید</span>
            <div className="pt-2 h-[300px] w-full min-h-[30px]">
                <MapComponent location={{
                    lat: 35.715298,
                    lng: 51.404343,
                }} zoom={10} isZoomable={true} isDrageble={true} setLocation={setLocation} />
            </div>
            <span className={`dark:text-white duration-150 text-md ${location.validLocation ? "text-black" : "text-red-500"}`}>{location.address}</span>
            <label className="text-stone-500 font-medium mt-3" htmlFor="description">
                توضیحات
            </label>
            <textarea  {...register("description")} placeholder="مشخصات خانه را وارد کنید" name="description" rows={3} className="bg-transparent placeholder:text-stone-400 outline-none border border-stone-300 rounded px-2 py-1 mt-1" />
            <span className="text-red-500 text-xs py-1">{errors.description?.message}</span>

            <div className="w-full flex gap-4 mt-4">
                <button
                    className="bg-blue-600 cursor-pointer flex-auto text-white px-7 py-1 rounded-md"
                >ثبت</button>
            </div>
        </form>
    </div>);
}

export default CreatePoster;