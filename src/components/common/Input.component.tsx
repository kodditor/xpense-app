
type InputProps = {
    type: 'text' | 'number' | 'datetime',

}

export default function Input({ 
    type, 
}: InputProps
){
    return(
        <input
            type={type || "text"}
            className="bg-white text-primary px-4 py-2"
         />
    )
}