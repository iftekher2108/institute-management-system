import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
// import { Image } from "primereact/image";


function Classroom_create() {

    const { data, setData, processing, post, reset, errors } = useForm({
        name: '',
        fees:'',

    })

    function reset_form() {
        reset()
    }

    function Submit() {
        post(route('classroom.store'), {
            onSuccess: () => reset()
        })
        console.log('form data submitted')
    }



    return (
        <AuthenticatedLayout
            header={
                'Classroom Create'
            }
        >
            <div className="lg:grid grid-cols-2 gap-2 mb-3">

                {/* <div className="col-span-1">
                    <div className='my-6'>
                        <FloatLabel>
                            <input id="picture" type="file" accept="image/*" className='p-inputtext w-full mb-1' onChange={(e) => setData('picture', e.target.files[0])} />
                            <label htmlFor="picture">Picture</label>
                        </FloatLabel>
                        {errors.picture && <span className='text-red-500'>{errors.picture}</span>}
                    </div>

                    <div className="my-6">
                        <Image  preview />
                    </div>
                </div> */}

                <div className="col-span-1">

                    <div className='my-6'>
                        <FloatLabel>
                            <InputText id="name" value={data.name} className='w-full mb-1' onChange={(e) => setData('name', e.target.value)} />
                            <label htmlFor="name">Class Name <span className="text-red-500">*</span></label>
                        </FloatLabel>
                        {errors.name && <span className='text-red-500'>{errors.name}</span>}
                    </div>

                    <div className='my-6'>
                        <FloatLabel>
                            <InputText id="fees" type="number" value={data.fees} className='w-full mb-1' onChange={(e) => setData('fees', e.target.value)} />
                            <label htmlFor="fees">Class Fees <span className="text-red-500">*</span></label>
                        </FloatLabel>
                        {errors.fees && <span className='text-red-500'>{errors.fees}</span>}
                    </div>
{/*
                    <div className='my-3'>
                        <FloatLabel>
                            <Dropdown
                                value={data.teacher_id}
                                onChange={(e) => setData('teacher_id', e.target.value)} filter optionValue='id' id="teacher" options={teachers} optionLabel='name'
                                className="w-full mb-1" />

                            <label htmlFor="teacher">Teacher <span className="text-red-500">*</span></label>
                        </FloatLabel>
                        {errors.teacher_id && <span className='text-red-500'>{errors.teacher_id}</span>}
                    </div> */}


                    <div className="flex flex-wrap gap-3  justify-between mb-3">
                        <Button label="Reset" icon='pi pi-replay' onClick={(e) => reset_form(e)} className="btn btn-error" />
                        <Button label="Submit" icon='pi pi-save' onClick={Submit} disabled={processing} className="btn btn-primary" />
                    </div>
                </div>
            </div>




        </AuthenticatedLayout>
    )
}

export default Classroom_create

