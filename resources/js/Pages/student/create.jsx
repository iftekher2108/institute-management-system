import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"
import { useForm } from "@inertiajs/react"
import { Dropdown } from "primereact/dropdown"
import { Calendar } from "primereact/calendar"
import { InputTextarea } from "primereact/inputtextarea"
import { Button } from "primereact/button"

function Student_create({ classrooms }) {


    const { data, setData, post, processing, errors, reset } = useForm({
        class_id: '',
        name: '',
        register_no: '',
        picture: undefined,
        date_of_admission: '',
        discount_fee: '',
        mobile: '',

        g_name: '',
        g_nid: '',
        g_occupation: '',
        g_edu: '',
        g_mobile: '',
        g_profession: '',
        g_income: '',

        m_name: '',
        m_nid: '',
        m_occupation: '',
        m_edu: '',
        m_mobile: '',
        m_profession: '',
        m_income: '',

        gender: '',
        religion: '',
        prev_school: '',
        prev_stu_reg: '',
        prev_stu_roll: '',
        massage_note: '',
        dob: '',
        bid: '',
        blood: '',
        identical_mark: '',
        orphan: '',

        address: '',
        city: '',
        district: '',
        zipcode: '',

        email: '',
        password: '',
        password_confirm: '',


    })


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

    // orphan
    const orphans = [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 }
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
        post(route('student.store'), {
            onSuccess: () => reset()
        })
        console.log('form data submitted')
    }


    return (
        <AuthenticatedLayout
            header={
                'Student Create'
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
                            <InputText id="register_no" type="number" value={data.register_no} className='w-full mb-1' onChange={(e) => setData('register_no', e.target.value)} />
                            <label htmlFor="register_no">Register Number <span className="text-red-500">*</span></label>
                        </FloatLabel>
                        {errors.register_no && <span className='text-red-500'>{errors.register_no}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <Dropdown
                                value={data.class_id}
                                onChange={(e) => setData('class_id', e.target.value)} optionValue='id' id="classroom" options={classrooms} optionLabel='name'
                                className="w-full mb-1" />

                            <label htmlFor="classroom">Classroom <span className="text-red-500">*</span></label>
                        </FloatLabel>
                        {errors.role && <span className='text-red-500'>{errors.role}</span>}
                    </div>
                </div>





                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <input id="picture" type="file" accept="image/*" className='file-input focus:outline-0 w-full mb-1' onChange={(e) => setData('picture', e.target.files[0])} />
                            <label htmlFor="picture">Picture</label>
                        </FloatLabel>
                        {errors.picture && <span className='text-red-500'>{errors.picture}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className="my-3">
                        <FloatLabel>
                            <Calendar id="date_of_admission" value={data.date_of_admission} onChange={(e) => setData('date_of_admission', e.target.value)} className="w-full mb-1" />
                            <label htmlFor="date_of_admission">Admission Date <span className="text-red-500">*</span></label>
                        </FloatLabel>
                        {errors.date_of_admission && <span className='text-red-500'>{errors.date_of_admission}</span>}

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
                            <InputText id="discount_fee" type="number" value={data.discount_fee} className='w-full mb-1' onChange={(e) => setData('discount_fee', e.target.value)} />
                            <label htmlFor="discount_fee">Discount Fee <span className="text-red-500">*</span></label>
                        </FloatLabel>
                        {errors.discount_fee && <span className='text-red-500'>{errors.discount_fee}</span>}
                    </div>
                </div>


            </div>

            <h3 className="text-lg text-white/85 border-b border-primary py-2 mb-3">
                <span className="p-3 bg-primary rounded-t">Optional Information</span>
            </h3>

            <div className="lg:grid grid-cols-3 gap-3 mb-3">

                <div className="col-span-1">
                    <div className="my-3">
                        <FloatLabel>
                            <Calendar id="dob" value={data.dob} onChange={(e) => setData('dob', e.target.value)} className="w-full mb-1" />
                            <label htmlFor="dob">Date of Birth</label>
                        </FloatLabel>
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText id="bid" value={data.bid} type="number" className='w-full mb-1' onChange={(e) => setData('bid', e.target.value)} />
                            <label htmlFor="bid">Birth ID</label>
                        </FloatLabel>
                        {errors.bid && <span className='text-red-500'>{errors.bid}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <Dropdown
                                value={data.orphan}
                                onChange={(e) => setData('orphan', e.target.value)} optionValue={orphans.value} id="gender" options={orphans} optionLabel={orphans.label}
                                className="w-full mb-1" />

                            <label htmlFor="orphan">Orphan</label>
                        </FloatLabel>
                        {errors.orphan && <span className='text-red-500'>{errors.orphan}</span>}
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
                            <InputText id="identical_mark" value={data.identical_mark} className='w-full mb-1' onChange={(e) => setData('identical_mark', e.target.value)} />
                            <label htmlFor="identical_mark">Any Identification Mark?</label>
                        </FloatLabel>
                        {errors.identical_mark && <span className='text-red-500'>{errors.identical_mark}</span>}
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
                            <InputText id="prev_school" value={data.prev_school} className='w-full mb-1' onChange={(e) => setData('prev_school', e.target.value)} />
                            <label htmlFor="prev_school">Previous School</label>
                        </FloatLabel>
                        {errors.prev_school && <span className='text-red-500'>{errors.prev_school}</span>}
                    </div>
                </div>


                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText id="prev_stu_reg" type="number" value={data.prev_stu_reg} className='w-full mb-1' onChange={(e) => setData('prev_stu_reg', e.target.value)} />
                            <label htmlFor="prev_stu_reg">Previous Register Number</label>
                        </FloatLabel>
                        {errors.prev_stu_reg && <span className='text-red-500'>{errors.prev_stu_reg}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText id="prev_stu_roll" type="number" value={data.prev_stu_roll} className='w-full mb-1' onChange={(e) => setData('prev_stu_roll', e.target.value)} />
                            <label htmlFor="prev_stu_roll">Previous Roll Number</label>
                        </FloatLabel>
                        {errors.prev_stu_roll && <span className='text-red-500'>{errors.prev_stu_roll}</span>}
                    </div>
                </div>

                <div className="col-span-3">
                    <div className="my-3">
                        <FloatLabel>
                            <InputTextarea className="w-full mb-1" value={data.massage_note} onChange={(e) => setData('massage_note', e.target.value)} rows={2} />
                            <label htmlFor="massage_note">Additional Massage Note</label>
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


            </div>

            <h3 className="text-lg text-white/85 border-b border-primary py-2 mb-3">
                <span className="p-3 bg-primary rounded-t">Father / Garden Information</span>
            </h3>

            <div className="lg:grid grid-cols-3 gap-2 mb-3">

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText id="g_name" value={data.g_name} className='w-full mb-1' onChange={(e) => setData('g_name', e.target.value)} />
                            <label htmlFor="g_name">Father / Garden Name</label>
                        </FloatLabel>
                        {errors.g_name && <span className='text-red-500'>{errors.g_name}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText id="g_nid" type="number" value={data.g_nid} className='w-full mb-1' onChange={(e) => setData('g_nid', e.target.value)} />
                            <label htmlFor="g_nid">Father / Garden NID</label>
                        </FloatLabel>
                        {errors.g_nid && <span className='text-red-500'>{errors.g_nid}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText id="g_occupation" value={data.g_occupation} className='w-full mb-1' onChange={(e) => setData('g_occupation', e.target.value)} />
                            <label htmlFor="g_occupation">Father / Garden Occupation</label>
                        </FloatLabel>
                        {errors.g_occupation && <span className='text-red-500'>{errors.g_occupation}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText id="g_edu" value={data.g_edu} className='w-full mb-1' onChange={(e) => setData('g_edu', e.target.value)} />
                            <label htmlFor="g_edu">Father / Garden Education</label>
                        </FloatLabel>
                        {errors.g_edu && <span className='text-red-500'>{errors.g_edu}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText id="g_mobile" type="number" value={data.g_mobile} className='w-full mb-1' onChange={(e) => setData('g_mobile', e.target.value)} />
                            <label htmlFor="g_mobile">Father / Garden Mobile</label>
                        </FloatLabel>
                        {errors.g_mobile && <span className='text-red-500'>{errors.g_mobile}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText id="g_profession" value={data.g_profession} className='w-full mb-1' onChange={(e) => setData('g_profession', e.target.value)} />
                            <label htmlFor="g_profession">Father / Garden Profession</label>
                        </FloatLabel>
                        {errors.g_profession && <span className='text-red-500'>{errors.g_profession}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText id="g_income" type="number" value={data.g_income} className='w-full mb-1' onChange={(e) => setData('g_income', e.target.value)} />
                            <label htmlFor="g_income">Father / Garden Income</label>
                        </FloatLabel>
                        {errors.g_income && <span className='text-red-500'>{errors.g_income}</span>}
                    </div>
                </div>

            </div>


            <h3 className="text-lg text-white/85 border-b border-primary py-2 mb-3">
                <span className="p-3 bg-primary rounded-t">Mother Information</span>
            </h3>

            <div className="lg:grid grid-cols-3 gap-2 mb-3">

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText id="m_name" value={data.m_name} className='w-full mb-1' onChange={(e) => setData('m_name', e.target.value)} />
                            <label htmlFor="m_name">Mother Name</label>
                        </FloatLabel>
                        {errors.m_name && <span className='text-red-500'>{errors.m_name}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText id="m_nid" type="number" value={data.m_nid} className='w-full mb-1' onChange={(e) => setData('m_nid', e.target.value)} />
                            <label htmlFor="m_nid">Mother NID</label>
                        </FloatLabel>
                        {errors.m_nid && <span className='text-red-500'>{errors.m_nid}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText id="m_occupation" value={data.m_occupation} className='w-full mb-1' onChange={(e) => setData('m_occupation', e.target.value)} />
                            <label htmlFor="m_occupation">Mother Occupation</label>
                        </FloatLabel>
                        {errors.m_occupation && <span className='text-red-500'>{errors.m_occupation}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText id="m_edu" value={data.m_edu} className='w-full mb-1' onChange={(e) => setData('m_edu', e.target.value)} />
                            <label htmlFor="m_edu">Mother Education</label>
                        </FloatLabel>
                        {errors.m_edu && <span className='text-red-500'>{errors.m_edu}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText id="m_mobile" type="number" value={data.m_mobile} className='w-full mb-1' onChange={(e) => setData('m_mobile', e.target.value)} />
                            <label htmlFor="m_mobile">Mother Mobile</label>
                        </FloatLabel>
                        {errors.m_mobile && <span className='text-red-500'>{errors.m_mobile}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText id="m_profession" value={data.m_profession} className='w-full mb-1' onChange={(e) => setData('m_profession', e.target.value)} />
                            <label htmlFor="m_profession">Mother Profession</label>
                        </FloatLabel>
                        {errors.m_profession && <span className='text-red-500'>{errors.m_profession}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText id="m_income" type="number" value={data.m_income} className='w-full mb-1' onChange={(e) => setData('m_income', e.target.value)} />
                            <label htmlFor="m_income">Mother Income</label>
                        </FloatLabel>
                        {errors.m_income && <span className='text-red-500'>{errors.m_income}</span>}
                    </div>
                </div>

            </div>


            <h3 className="text-lg text-white/85 border-b border-primary py-2 mb-3">
                <span className="p-3 bg-primary rounded-t">Account Information</span>
            </h3>

            <div className="lg:grid grid-cols-3 gap-3 mb-3">

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

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText id="password_confirm" value={data.password_confirm} className='w-full mb-1' onChange={(e) => setData('password_confirm', e.target.value)} />
                            <label htmlFor="password_confirm">Password Confirm <span className="text-red-500">*</span></label>
                        </FloatLabel>
                        {errors.password_confirm && <span className='text-red-500'>{errors.password_confirm}</span>}
                    </div>
                </div>

            </div>

            <div className="flex flex-wrap gap-3 justify-between mb-3">
                <Button label="Reset" icon='pi pi-replay' onClick={(e) => reset_form(e)} className="btn btn-error" />
                <Button label="Submit" icon='pi pi-save' onClick={Submit} disabled={processing} className="btn btn-primary" />

            </div>


        </AuthenticatedLayout>
    )
}

export default Student_create

