import { XMarkIcon } from "@heroicons/react/24/outline"
import { ReactNode } from "@tanstack/react-router"
import { RefObject } from "react"

type ModalProps = {
  dialogRef: RefObject<HTMLDialogElement>;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Modal({dialogRef, title, subtitle, children}:ModalProps){

  return (
    <dialog ref={dialogRef} className="rounded-md text-primary w-[95%] sm:w-[500px] h-fit min-h-[400px] shadow bg-white">
      <div className="flex border-b-[1.5px] border-bgGreen px-4 py-3 sm:px-6 items-center gap-4 justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold">{title}</h2>
          { subtitle && <p className="font-light text-md truncate">{subtitle}</p>}
        </div>
        <div onClick={()=> dialogRef.current!.close()} className="w-[40px] h-[40px] bg-bgGreen text-primary hover:bg-primary hover:text-bgGreen duration-150 grid place-items-center rounded-full">
          <XMarkIcon className="w-5" />
        </div>
      </div>
      <div className="p-4 sm:p-6">{children}</div>
    </dialog>
  )
}
