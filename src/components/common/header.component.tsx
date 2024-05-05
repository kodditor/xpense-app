import { PlusCircleIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "@tanstack/react-router";
import Button from "./Button.component";
import { useRef } from "react";
import Modal from "./modal.component";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from 'yup';
import Input from "./Input.component";

const groupOptions = [
  {
    title: 'New Boys',
    id: 1,
  },
  {
    title: 'Old Boys',
    id: 2,
  },
]

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
    group: 0,
  }

  function handleFormSubmit(values: any){
    alert(JSON.stringify(values));
    // TODO: Implement this
  }

  return (
    <>
      <Modal dialogRef={addNewBillModalRef} title='\Add A New Bill' subtitle='Add a new expense and assign it to a group.'>
        <Formik
        initialValues={initialValues}
        onSubmit={ (values) => handleFormSubmit(values)}
        validationSchema={validationSchema}
        >
          {( { values }) => ( 
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="col-span-2 mb-4">
                <Input 
                  type='text'
                  id='title'
                  required
                  label="Title"
                  />
              </div>
              <FieldArray
                name='items'
                
              >
                {
                  ({ remove,  push }) => (
                    <>
                      <div className="w-full col-span-2 mb-1" >
                        { 
                          values.items.length > 0 &&
                          values.items.map((item, idx) => (
                            <div className="flex items-center mb-2 last:mb-0 ">
                              <Button onClick={()=> { remove(idx)}} className="grid place-items-center !bg-secondary !text-primary border-0 mt-4 mr-3 !p-0 text-secondary h-8 aspect-square !rounded-full">
                                  <XMarkIcon className="w-4" />
                                </Button>
                                <div className="w-full flex gap-3">
                                  <span className="w-4/5">
                                    <Input
                                      name={`items.${idx}.title`}
                                      label="Item Title"
                                      required
                                    />
                                  </span>
                                  <span className="w-1/5">
                                    <Input
                                      name={`items.${idx}.title`}
                                      label="Price"
                                      required
                                    />
                                  </span>
                                </div>
                            </div>
                          ))
                        }
                      </div>
                      <div className="w-full col-span-2 justify-end flex">
                        <Button 
                          type='button'
                          onClick={() => push({ title: '', cost: 0 })}
                          className="w-fit px-2"
                        >
                          <div className="flex items-center gap-1">
                            <PlusIcon className="w-4" /> Add Item
                          </div>
                        </Button>
                      </div>
                    </>
                  )
                }

              </FieldArray>
              <div className="w-full mb-4 col-span-2 flex flex-col">
                <label className="text-xs text-primary mb-2">Assigned group</label>
                <select className="px-4 py-2 rounded-md focus:ring-0 focus:outline-none focus:border-primary border-secondary border-2 bg-white" required>
                  {
                    groupOptions.map(({ title, id }, idx) => (
                      <option
                        value={id}
                        key={idx}
                      >
                        {title}
                      </option>
                    ))
                  }
                </select>
              </div>
              <div className="col-span-2 flex justify-end">
                <Button type="submit">Create a new bill</Button>
              </div>
            </Form>
          ) }
        </Formik>
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
