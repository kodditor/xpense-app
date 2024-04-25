import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "@tanstack/react-router";
import Button from "./Button.component";


export default function HeaderComponent(){
  return (
    <>
      <nav className="w-screen h-[70px] bg-bgGreen flex items-center justify-between gap-4">
        <Link to="/" className="p-4 w-[250px] text-primary text-lg font-semibold grid place-items-center">
          XPENSE
        </Link>
        <div className="p-4 flex items-center justify-end">
          <Button>
            <div className="flex gap-2 items-center">
              <PlusCircleIcon className="w-5" />
              Add a new bill
            </div> 
          </Button>
        </div>
      </nav>
    </>
  )  

}
