import { InputPropsType } from "types";

const Input = ({ label, name, type, placeholder, error, validation }: InputPropsType) => {

    return (
        <>
            <label className="text-stone-500 font-medium" htmlFor={name}>
                {`${label}`}
            </label>
            <input
                placeholder={`${placeholder}`}
                className="bg-transparent placeholder:text-stone-400 outline-none border border-stone-300 rounded px-2 py-1 mt-1"
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