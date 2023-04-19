import { useState } from "react";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value })
    }

    const submitHandler = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        console.log("form data =>", formData)
    }

    return (<div className="mt-6 flex justify-center">
        <form className="bg-white rounded-xl shadow-lg flex flex-col w-full md:w-[40%] p-3">
            <h1 className="text-2xl text-center">ورود</h1>
            <hr className="my-4" />
            <label className="text-stone-500 font-medium" htmlFor="email">
                ایمیل
            </label>
            <input
                placeholder="ایمیل خود را وارد کنید..."
                className="bg-transparent placeholder:text-stone-400 outline-none border border-stone-300 rounded px-2 py-1 mb-5 mt-1"
                onChange={(e) => changeHandler(e)}
                name="email"
                type="email"
                value={formData.email}
                id="email"
            />
            <label className="text-stone-500 font-medium" htmlFor="password">
                رمز عبور
            </label>
            <input
                placeholder="رمز خود را وارد کنید..."
                className="bg-transparent placeholder:text-stone-400 outline-none border border-stone-300 rounded px-2 py-1 mb-5 mt-1"
                onChange={(e) => changeHandler(e)}
                name="password"
                type="password"
                value={formData.password}
                id="password"
            />
            <div className="w-full flex gap-4">
                <input
                    onClick={submitHandler}
                    className="bg-blue-600 cursor-pointer flex-auto text-white px-7 py-1 rounded-md"
                    type="submit"
                    value="ورود"
                />
            </div>
        </form>
    </div>);
}

export default LoginPage;