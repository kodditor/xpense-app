import { ReactNode } from "@tanstack/react-router"


interface ButtonProps {
  variant?: 'primary' |'outline',
  children: ReactNode,
  className?: string,
  onClick?: (...args: unknown[]) =>void,
}

export default function Button({
    variant = 'primary',
    children,
    className,
    onClick,
  }: ButtonProps){
  return (
    <>
      <button
        className={`${className} h-[35px] duration-150 rounded-md hover:shadow px-4 border-[1.5px] ` +
          (variant === 'primary' ? 'bg-primary hover:opacity-70 text-white border-primary' : '') +
          (variant === 'outline' ? 'bg-transparent hover:bg-primary hover:opacity-70 text-primary hover:text-white border-primary' : '')
        }
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}
