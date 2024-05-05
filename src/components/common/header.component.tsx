import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "@tanstack/react-router";
import Button from "./Button.component";
import { useRef } from "react";
import Modal from "./modal.component";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import Input from "./Input.component";

export default function HeaderComponent(){
  const addNewBillModalRef = useRef<HTMLDialogElement>(null)
  
  const validationSchema = Yup.object({
    title: Yup.string().required("Bill title is required").min(3,"Title is too short").max(50, "Title is too long"),
    total: Yup.number().required('Bill total is required').min(0, "Total cannot be less than GHS0.00").max(100000, 'Total cannot be more than GHS100,000.00'),
    items: Yup.array().of(Yup.object({
      title: Yup.string().required("Item title is required").min(3, "Item title is too short").max(100, 'Item title is too long.'),
      cost: Yup.number().required('Item cost is required').min(0, "Cost cannot be less than GHS0.00").max(100000, 'Cost cannot be more than GHS100,000.00')
    }).required('Item is required.'))
      .required('Bill items are required')
      .min(1, 'Cannot have less than one item')
      .max(50, "Cannot have more than 50 items"),
    group: Yup.number().required(),
  })

  const initialValues ={
    title: '',
    cost: 0,
    items: [{
      title: '',
      cost: 0,
    }],
    group: '',
  }

  function handleFormSubmit(values: any){
    alert(JSON.stringify(values));
  }

  return (
    <>
      <Modal dialogRef={addNewBillModalRef} title='Add A New Bill' subtitle='Add a new expense and assign it to a group.'>
        <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={validationSchema}
        >
          <Form className="flex flex-col gap-2">
            <div>
              <Input type='text' />
            </div>

          </Form>
        </Formik>Hello World!
      </Modal>
      <nav className="w-screen h-[70px] bg-bgGreen flex items-center justify-between gap-4">
        <Link to="/" className="p-4 w-[250px] text-primary text-lg font-semibold grid place-items-center">
          XPENSE
        </Link>
        <div className="p-4 flex items-center justify-end">
          <Button onClick={() => addNewBillModalRef.current!.showModal()}>
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
