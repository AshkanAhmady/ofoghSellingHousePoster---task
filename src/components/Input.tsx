import { InputPropsType } from "types";

const Input = ({ label, name, type, placeholder, error, validation }: InputPropsType) => {

    return (
        <>
            <label className="text-stone-500 duration-150 dark:text-white font-medium" htmlFor={name}>
                {`${label}`}
            </label>
            <input
                placeholder={`${placeholder}`}
                className="bg-transparent duration-150 border-0 border-b-2 border-grey-dark dark:border-gray-600 placeholder:text-stone-400 outline-none border-stone-300 px-2 py-1 mt-1"
                {...validation}
                name={name}
                type={type}
                id={name}
            />
            <span className="text-red-500 text-xs py-1">{error}</span>
        </>
    );
}

export default Input;