import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "./Input";
import MapComponent from "./MapComponent";
import * as Yup from "yup";
import { useState } from "react";
import { toast } from "react-toastify";
import { updateSinglePoster } from "requests/poster/posterRequests";
import { useUser } from "context/authContext/UserProvider";

const formSchema = Yup.object().shape({
    name: Yup.string().required("نام را وارد کنید"),
    phoneNumber: Yup.string().required("شماره موبایل را وارد کنید"),
    homeDesc: Yup.string().required("مشخصات خانه را وارد کنید")
});

export default function UpdatePosterModal({ setLoading, showUpdateModal, setShowUpdateModal, poster }: any) {
    const user = useUser()
    const { register, handleSubmit, formState: { errors } }: any = useForm({ mode: "onTouched", defaultValues: poster, resolver: yupResolver(formSchema) });
    const [location, setLocation] = useState({
        address: poster?.address,
        latLong: poster?.location,
        validLocation: true,
    })

    const cancelUpdateHandler = () => {
        setShowUpdateModal(false)
        setLocation({
            address: "",
            latLong: null,
            validLocation: true,
        })
    }

    const onSubmit = (data: any) => {
        if (!location.validLocation) {
            toast.warning("آدرس خود را به کمک نقشه وارد کنید")
        } else {
            setLoading(true)
            updateSinglePoster(poster.id, { ...data, location: location.latLong, address: location.address, userId: user?.userId }).then(() => {
                setLoading(false)
                setShowUpdateModal(false);
                toast.success("آگهی با موفقیت ویرایش شد")
            })
        }
    }

    return (
        <>
            {showUpdateModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[60] outline-none focus:outline-none"
                    >
                        <div className="relative w-[400px] my-7 mt-[270px]">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-800 duration-150 dark:shadow-gray-900 dark:text-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 rounded-t">
                                    <h3 className="text-xl font-semibold">
                                        ویرایش آگهی
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowUpdateModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative px-6 py-2 flex-auto">
                                    <form onSubmit={handleSubmit(onSubmit)} className="rounded-xl flex flex-col w-full">
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
                                        <div className="pt-2 h-[250px] w-full min-h-[30px]">
                                            <MapComponent location={poster.location} zoom={17} isZoomable={true} isDrageble={true} setLocation={setLocation} />
                                        </div>
                                        <span className={`dark:text-white duration-150 text-md ${location.validLocation ? "text-black" : "text-red-500"}`}>{location.address}</span>
                                        <label className="text-stone-500 font-medium mt-3" htmlFor="description">
                                            توضیحات
                                        </label>
                                        <textarea  {...register("description")} placeholder="مشخصات خانه را وارد کنید" name="description" rows={3} className="bg-transparent placeholder:text-stone-400 outline-none border border-stone-300 rounded px-2 py-1 mt-1" />
                                        <span className="text-red-500 text-xs py-1">{errors.description?.message}</span>

                                        <div className="w-full flex gap-4 mt-4">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={cancelUpdateHandler}
                                            >
                                                انصراف
                                            </button>
                                            <button
                                                className="bg-emerald-500 flex-1 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="submit"
                                            >
                                                ویرایش
                                            </button>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}