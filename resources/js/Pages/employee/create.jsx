
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"
import { useForm } from "@inertiajs/react"
import { Dropdown } from "primereact/dropdown"
import { Calendar } from "primereact/calendar"
import { InputTextarea } from "primereact/inputtextarea"
import { Button } from "primereact/button"
function Employee_create() {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        mobile: '',
        role: '',
        register_no:'',
        picture: undefined,
        join_date: '',
        salary: '',

        g_name: '',
        gender: '',
        experience: '',
        nid: '',
        religion: '',
        last_edu: '',
        blood: '',
        dob: '',
        address: '',
        city: '',
        district: '',
        zipcode: '',

        email: '',
        password: '',
        // password_confirm: '',



    })

    // roles
    const roles = [
        { label: 'Principal', value: 'principal' },
        { label: 'Management Staff', value: 'management-staff' },
        { label: 'Teacher', value: 'teacher' },
        { label: 'Accountant', value: 'accountant' },

    ]
    // 'Store Manager'

    // genders
    const genders = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },

    ]

    // religion
    const religions = [
        { label: 'Islam', value: 'islam' },
        { label: 'Christian', value: 'christian' },
        { label: 'Hindu', value: 'hindu' },
        { label: 'Buddhism', value: 'buddhism' },
        { label: 'Chinese Tradition', value: 'chinese-tradition' },
        { label: 'Shinto', value: 'shinto' },
        { label: 'Sikhi', value: 'sikhi' },
        { label: 'Secular', value: 'secular' },
        { label: 'Jainism', value: 'jainism' },
        { label: 'Juche', value: 'juche' },
        { label: 'Judaism', value: 'judaism' },
        { label: 'Others', value: 'others' },

    ]

    // blood group
    const blood_groups = [
        { label: 'A+', value: 'a+' },
        { label: 'A-', value: 'a-' },
        { label: 'B+', value: 'b+' },
        { label: 'B-', value: 'b-' },
        { label: 'O+', value: 'o+' },
        { label: 'O-', value: 'o-' },
        { label: 'AB+', value: 'ab+' },
        { label: 'AB-', value: 'ab-' },
    ]

    function reset_form() {
        reset()
    }

    function Submit() {
        post(route('employee.store'), {
            onSuccess: () => reset()
        })
    }

    return (

        <AuthenticatedLayout
            header={
                'Employee Create'
            }
        >
                <h3 className="text-lg text-white/85 border-b border-primary py-2 mb-3">
                    <span className="p-3 bg-primary rounded-t">General Information</span>
                </h3>
                <div className="lg:grid grid-cols-3 gap-2 mb-3">

                    <div className="col-span-1">
                        <div className='my-3'>
                            <FloatLabel>
                                <InputText id="name" value={data.name} className='w-full mb-1' onChange={(e) => setData('name', e.target.value)} />
                                <label htmlFor="name">Name <span className="text-red-500">*</span></label>
                            </FloatLabel>
                            {errors.name && <span className='text-red-500'>{errors.name}</span>}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className='my-3'>
                            <FloatLabel>
                                <InputText id="mobile" type="number" value={data.mobile} className='w-full mb-1' onChange={(e) => setData('mobile', e.target.value)} />
                                <label htmlFor="mobile">Mobile / Whatsapp </label>
                            </FloatLabel>
                            {errors.mobile && <span className='text-red-500'>{errors.mobile}</span>}
                        </div>
                    </div>


                    <div className="col-span-1">
                        <div className='my-3'>
                            <FloatLabel>
                                <Dropdown
                                    value={data.role}
                                    onChange={(e) => setData('role', e.target.value)} optionValue={roles.value} id="role" options={roles} optionLabel={roles.label}
                                    className="w-full mb-1" />

                                <label htmlFor="role">Role <span className="text-red-500">*</span></label>
                            </FloatLabel>
                            {errors.role && <span className='text-red-500'>{errors.role}</span>}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className='my-3'>
                            <FloatLabel>
                                <input id="picture" type="file" accept="image/*" className='file-input focus:outline-0 w-full mb-1' onChange={(e) => setData('picture', e.target.files[0])} />
                                <label htmlFor="picture">Picture <span className="text-red-500">*</span></label>
                            </FloatLabel>
                            {errors.picture && <span className='text-red-500'>{errors.picture}</span>}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="my-3">
                            <FloatLabel>
                                <Calendar id="join_date" value={data.join_date} onChange={(e) => setData('join_date', e.target.value)} className="w-full mb-1" />
                                <label htmlFor="join_date">Joining Date <span className="text-red-500">*</span></label>
                            </FloatLabel>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className='my-3'>
                            <FloatLabel>
                                <InputText id="salary" type="number" value={data.salary} className='w-full mb-1' onChange={(e) => setData('salary', e.target.value)} />
                                <label htmlFor="salary">Salary <span className="text-red-500">*</span></label>
                            </FloatLabel>
                            {errors.salary && <span className='text-red-500'>{errors.salary}</span>}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className='my-3'>
                            <FloatLabel>
                                <InputText id="register_no" type="number" value={data.register_no} className='w-full mb-1' onChange={(e) => setData('register_no', e.target.value)} />
                                <label htmlFor="register_no">Register Number <span className="text-red-500">*</span></label>
                            </FloatLabel>
                            {errors.register_no && <span className='text-red-500'>{errors.register_no}</span>}
                        </div>
                    </div>


                </div>

                <h3 className="text-lg text-white/85 border-b border-primary py-2 mb-3">
                    <span className="p-3 bg-primary rounded-t">Optional Information</span>
                </h3>

                <div className="lg:grid grid-cols-3 gap-3 mb-3">

                    <div className="col-span-1">
                        <div className='my-3'>
                            <FloatLabel>
                                <InputText id="g_name" value={data.g_name} className='w-full mb-1' onChange={(e) => setData('g_name', e.target.value)} />
                                <label htmlFor="g_name">Father / Husband Name</label>
                            </FloatLabel>
                            {errors.g_name && <span className='text-red-500'>{errors.g_name}</span>}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className='my-3'>
                            <FloatLabel>
                                <Dropdown
                                    value={data.gender}
                                    onChange={(e) => setData('gender', e.target.value)} optionValue={genders.value} id="gender" options={genders} optionLabel={genders.label}
                                    className="w-full mb-1" />

                                <label htmlFor="gender">Gender</label>
                            </FloatLabel>
                            {errors.gender && <span className='text-red-500'>{errors.gender}</span>}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className='my-3'>
                            <FloatLabel>
                                <InputText id="experience" type="number" value={data.experience} className='w-full mb-1' onChange={(e) => setData('experience', e.target.value)} />
                                <label htmlFor="experience">Experience</label>
                            </FloatLabel>
                            {errors.experience && <span className='text-red-500'>{errors.experience}</span>}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className='my-3'>
                            <FloatLabel>
                                <InputText id="nid" value={data.nid} type="number" className='w-full mb-1' onChange={(e) => setData('nid', e.target.value)} />
                                <label htmlFor="nid">National ID</label>
                            </FloatLabel>
                            {errors.nid && <span className='text-red-500'>{errors.nid}</span>}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className='my-3'>
                            <FloatLabel>
                                <Dropdown
                                    value={data.religion}
                                    onChange={(e) => setData('religion', e.target.value)} optionValue={religions.value} id="religion" options={religions} optionLabel={religions.label}
                                    filter className="w-full mb-1" />

                                <label htmlFor="religion">Religion</label>
                            </FloatLabel>
                            {errors.religion && <span className='text-red-500'>{errors.religion}</span>}
                        </div>
                    </div>


                    <div className="col-span-1">
                        <div className='my-3'>
                            <FloatLabel>
                                <InputText id="last_edu" value={data.last_edu} className='w-full mb-1' onChange={(e) => setData('last_edu', e.target.value)} />
                                <label htmlFor="last_edu">Last Education</label>
                            </FloatLabel>
                            {errors.last_edu && <span className='text-red-500'>{errors.last_edu}</span>}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className='my-3'>
                            <FloatLabel>
                                <Dropdown
                                    value={data.blood}
                                    onChange={(e) => setData('blood', e.target.value)} optionValue={blood_groups.value} id="blood" options={blood_groups} optionLabel={blood_groups.label}
                                    filter className="w-full mb-1" />

                                <label htmlFor="blood">Blood Group</label>
                            </FloatLabel>
                            {errors.blood && <span className='text-red-500'>{errors.blood}</span>}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="my-3">
                            <FloatLabel>
                                <Calendar id="dob" value={data.dob} onChange={(e) => setData('dob', e.target.value)} className="w-full mb-1" />
                                <label htmlFor="dob">Date of Birth</label>
                            </FloatLabel>
                        </div>
                    </div>

                    <div className="col-span-3">
                        <div className="my-3">
                            <FloatLabel>
                                <InputTextarea className="w-full mb-1" value={data.address} onChange={(e) => setData('address', e.target.value)} rows={2} />
                                <label htmlFor="address">Address</label>
                            </FloatLabel>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className='my-3'>
                            <FloatLabel>
                                <InputText id="city" value={data.city} className='w-full mb-1' onChange={(e) => setData('city', e.target.value)} />
                                <label htmlFor="city">City</label>
                            </FloatLabel>
                            {errors.city && <span className='text-red-500'>{errors.city}</span>}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className='my-3'>
                            <FloatLabel>
                                <InputText id="district" value={data.district} className='w-full mb-1' onChange={(e) => setData('district', e.target.value)} />
                                <label htmlFor="district">District</label>
                            </FloatLabel>
                            {errors.district && <span className='text-red-500'>{errors.district}</span>}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className='my-3'>
                            <FloatLabel>
                                <InputText id="zipcode" type="number" value={data.zipcode} className='w-full mb-1' onChange={(e) => setData('zipcode', e.target.value)} />
                                <label htmlFor="zipcode">Zipcode</label>
                            </FloatLabel>
                            {errors.zipcode && <span className='text-red-500'>{errors.zipcode}</span>}
                        </div>
                    </div>

                </div>

                <h3 className="text-lg text-white/85 border-b border-primary py-2 mb-3">
                    <span className="p-3 bg-primary rounded-t">Account Information</span>
                </h3>

                <div className="lg:grid grid-cols-2 gap-3 mb-3">

                    <div className="col-span-1">
                        <div className='my-3'>
                            <FloatLabel>
                                <InputText id="email" value={data.email} className='w-full mb-1' onChange={(e) => setData('email', e.target.value)} />
                                <label htmlFor="email">Email <span className="text-red-500">*</span></label>
                            </FloatLabel>
                            {errors.email && <span className='text-red-500'>{errors.email}</span>}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className='my-3'>
                            <FloatLabel>
                                <InputText id="password" value={data.password} className='w-full mb-1' onChange={(e) => setData('password', e.target.value)} />
                                <label htmlFor="password">Password <span className="text-red-500">*</span></label>
                            </FloatLabel>
                            {errors.password && <span className='text-red-500'>{errors.password}</span>}
                        </div>
                    </div>

                    {/* <div className="col-span-1">
                        <div className='my-3'>
                            <FloatLabel>
                                <InputText id="password_confirm" value={data.password_confirm} className='w-full mb-1' onChange={(e) => setData('password_confirm', e.target.value)} />
                                <label htmlFor="password_confirm">Password Confirm <span className="text-red-500">*</span></label>
                            </FloatLabel>
                            {errors.password_confirm && <span className='text-red-500'>{errors.password_confirm}</span>}
                        </div>
                    </div> */}

                </div>

                <div className="flex flex-wrap gap-3 justify-between mb-3">
                        <Button label="Reset" icon='pi pi-replay' onClick={() => reset_form()} className="btn btn-error" />
                        <Button label="Submit" icon='pi pi-save' onClick={Submit} disabled={processing} className="btn btn-primary" />

                </div>


        </AuthenticatedLayout>
    )
}

export default Employee_create
