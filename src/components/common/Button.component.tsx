import { ReactNode } from "@tanstack/react-router"


interface ButtonProps {
  variant?: 'Primary',
  children: ReactNode,
  className?: string,
  onClick?: (...args: unknown[]) =>void,
}

export default function Button({
    variant,
    children,
    className,
    onClick,
  }: ButtonProps){
  
    switch(variant){
    
    default: 
      return (
        <button
          className={`${className} h-[35px] rounded-md px-4 bg-primary text-white `}
          onClick={onClick}
        >
          {children}
        </button>
      )
        
    }

}
