
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"
import { useForm } from "@inertiajs/react"
import { Dropdown } from "primereact/dropdown"
import { Calendar } from "primereact/calendar"
import { Tooltip } from "primereact/tooltip"
import { FileUpload } from "primereact/fileupload"
function Employee_create() {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        mobile: '',
        role: '',
        picture: [],
        join_date: '',
        salary: '',

    })

    function handleFile(e){
        const file = e.target.files[0];
        const name = URL.createObjectURL(file)

        setData('picture', name)
    }

    function Submit(e){
        e.preventDefault()
        console.log('form data submitted')
    }

    const roles = [
        'Principal',
        'Management Staff',
        'Teacher',
        'Accountant',
        // 'Store Manager'
    ]

    return (

        <AuthenticatedLayout
            header={
                'Employee Create'
            }
        >
            <form onSubmit={Submit} encType='multipart/form-data' >
                <div className="lg:grid grid-cols-2 gap-3">
                    <div className="col-span-1">

                        <div className='my-4'>
                            <FloatLabel>
                                <InputText id="name" value={data.name} className='w-full mb-1' onChange={(e) => setData('name', e.target.value)} />
                                <label htmlFor="name">Name</label>
                            </FloatLabel>
                            {errors.name && <span className='text-red-500'>{errors.name}</span>}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className='my-4'>
                            <FloatLabel>
                                <InputText id="email" value={data.email} className='w-full mb-1' onChange={(e) => setData('email', e.target.value)} />
                                <label htmlFor="email">Email</label>
                            </FloatLabel>
                            {errors.email && <span className='text-red-500'>{errors.email}</span>}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className='my-4'>
                            <FloatLabel>
                                <InputText id="mobile" keyfilter='num' value={data.mobile} validateOnly className='w-full mb-1' onChange={(e) => setData('mobile', e.target.value)} />
                                <label htmlFor="mobile">Mobile</label>
                            </FloatLabel>
                            {errors.mobile && <span className='text-red-500'>{errors.mobile}</span>}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className='my-4'>
                            <FloatLabel>
                                <Dropdown
                                    value={data.role}
                                    onChange={(e) => setData('role', e.target.value)} options={roles} optionLabel="name" placeholder="Role"
                                    filter className="w-full mb-1" />

                                <label htmlFor="email">Role</label>
                            </FloatLabel>
                            {errors.email && <span className='text-red-500'>{errors.email}</span>}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <p>{data.picture}</p>
                        <div className='my-4'>
                            <FloatLabel>
                                <InputText id="picture" type="file" accept="image/*" className='w-full mb-1' onChange={(e) => setData('picture',e.target.value)} />
                                <label htmlFor="picture">Picture</label>
                            </FloatLabel>
                            {errors.picture && <span className='text-red-500'>{errors.picture}</span>}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="my-4">
                            <FloatLabel>
                                <Calendar id="join_date" value={data.join_date} onChange={(e) => setData('join_date', e.target.value)} className="w-full mb-1" />
                                <label htmlFor="join_date">Joining Date</label>
                            </FloatLabel>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className='my-4'>
                            <FloatLabel>
                                <InputText id="salary" name="picture" keyfilter='num' value={data.salary} validateOnly className='w-full mb-1' onChange={(e) => setData('salary', e.target.value)} />
                                <label htmlFor="salary">Salary</label>
                            </FloatLabel>
                            {errors.salary && <span className='text-red-500'>{errors.salary}</span>}
                        </div>
                    </div>






                </div>
            </form>

        </AuthenticatedLayout>
    )
}

export default Employee_create
