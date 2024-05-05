
type InputProps = {
    type?: 'text' | 'number' | 'datetime',
    id?: string,
    className?: string,
    label?: string,
    required?: boolean,
    placeholder?: string,
    name?: string,
}

export default function Input({ 
    type = 'text',
    id,
    className,
    label,
    required = false,
    placeholder,
    name,

}: InputProps
){
    return(
        <div className="flex flex-col w-full">
            { label && <label className="text-xs mb-1" htmlFor={id ?? ''}>{label} {required && '*'}</label> }
            <input
                type={type}
                id={id}
                required={required}
                placeholder={placeholder}
                name={name}
                className={`${className} w-full bg-white focus:ring-0 focus:outline-none rounded-md focus:border-primary border-secondary duration-150 border-2 text-primary px-2 py-2`}
            />
        </div>
    )
}