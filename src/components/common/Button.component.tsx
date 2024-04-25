import { ReactNode } from "@tanstack/react-router"


interface ButtonProps {
  variant?: 'Primary',
  children: ReactNode,
  className?: string  
}

export default function Button({
    variant,
    children,
    className,
  }: ButtonProps){
  
    switch(variant){
    
    default: 
      return (
        <button
          className={`${className} h-[35px] rounded-md px-4 bg-primary text-white `}
        >
          {children}
        </button>
      )
        
    }

}
