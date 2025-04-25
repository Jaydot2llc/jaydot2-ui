interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required: boolean
}

export default function Input({type, placeholder, value, onChange, ...props}: InputProps) {
    return (
        <input type={type} placeholder={placeholder} className="border border-gray-300 rounded-md p-2 w-full" value={value} onChange={onChange} {...props} />
    )
}