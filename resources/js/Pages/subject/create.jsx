import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { useForm } from "@inertiajs/react"
import { FloatLabel } from "primereact/floatlabel";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function Assign_subject({ classrooms }) {

    const { data, setData, processing, post, reset, errors } = useForm({
        class_id: '',
        subjects: [{ name: '', mark: '' }]

    })

    const handleAddMore = () => {
        setData('subjects', [...data.subjects, { name: '', mark: '' }])
    }

    const handleRemove = (index) => {
        const newSubjects = data.subjects.filter((_, i) => i !== index)
        setData('subjects', newSubjects)
    }

    const handleChange = (index, field, value) => {
        const newSubjects = [...data.subjects]
        newSubjects[index][field] = value
        setData('subjects', newSubjects)
    }

    function reset_form() {
        reset()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('subjects.store'), {
            onSuccess: () => reset()
        })
    }



    return (
        <AuthenticatedLayout
            header={
                'Assign Subject'
            }
        >
            <div className="lg:grid grid-cols-2 gap-2 mb-3">
                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <Dropdown
                                value={data.class_id}
                                onChange={(e) => setData('class_id', e.target.value)} filter optionValue='id' id="classroom" options={classrooms} optionLabel='name'
                                className="w-full mb-1" />

                            <label htmlFor="classroom">Class Room <span className="text-red-500">*</span></label>
                        </FloatLabel>
                        {errors.class_id && <span className='text-red-500'>{errors.class_id}</span>}
                    </div>
                </div>

            </div>

            <h3 className="text-lg text-white/85 border-b border-primary py-2 mb-6">
                <span className="p-3 bg-primary rounded-t">Subject</span>
            </h3>

            {data.subjects.map((subject, index) => (

                <div key={index} className="grid grid-cols-5 gap-2 items-center" >

                    <div className="col-span-2">
                        <div className='my-3'>
                            <FloatLabel>
                                <InputText id="name" value={subject.name} className='w-full mb-1' onChange={(e) => handleChange(index, 'name', e.target.value)} />
                                <label htmlFor="name">Subject Name <span className="text-red-500">*</span></label>
                            </FloatLabel>
                            {errors[`subjects.${index}.name`] && <span className='text-red-500'>{errors[`subjects.${index}.name`]}</span>}
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className='my-3'>
                            <FloatLabel>
                                <InputText id="mark" type="number" value={subject.mark} className='w-full mb-1' onChange={(e) => handleChange(index, 'mark', e.target.value)} />
                                <label htmlFor="mark">Mark <span className="text-red-500">*</span></label>
                            </FloatLabel>
                            {errors[`subjects.${index}.mark`] && <span className='text-red-500'>{errors[`subjects.${index}.mark`]}</span>}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="my-3">
                            {index > 0 &&
                                <Button icon='pi pi-trash' onClick={() => handleRemove(index)} className="btn pt-4 btn-error" />
                            }
                        </div>

                    </div>

                </div>
            ))}

            <div className="flex gap-4 justify-end mb-10">
                <Button icon='pi pi-plus' label="Add More" onClick={handleAddMore} className="btn btn-secondary" />
            </div>


            <div className="flex flex-wrap gap-3 justify-between mb-3">
                <Button label="Reset" icon='pi pi-replay' onClick={(e) => reset_form(e)} className="btn btn-error" />
                <Button label="Submit" icon='pi pi-save' onClick={handleSubmit} disabled={processing} className="btn btn-primary" />

            </div>



        </AuthenticatedLayout>
    )
}

export default Assign_subject

