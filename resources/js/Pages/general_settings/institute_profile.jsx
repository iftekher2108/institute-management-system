import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"
import { useForm } from "@inertiajs/react"
import { InputTextarea } from "primereact/inputtextarea"
import { Button } from "primereact/button"
import { useState } from "react"

function Institute_profile({ instituteProfile }) {

    const { data, setData, processing, post, errors, reset } = useForm({
        logo: undefined,
        name: instituteProfile?.name || 'Default Name',
        mobile_1: instituteProfile?.mobile_1 || 'Default Mobile 1',
        mobile_2: instituteProfile?.mobile_2 || 'Default Mobile 2',
        email_1: instituteProfile?.email_1 || 'default_email1@example.com',
        email_2: instituteProfile?.email_2 || 'default_email2@example.com',
        address: instituteProfile?.address || 'Default Address',
        country: instituteProfile?.country || 'Default Country',
        website: instituteProfile?.website || 'https://defaultwebsite.com',
        district: instituteProfile?.district || 'Default District',
        city: instituteProfile?.city || 'Default City',
        zipcode: instituteProfile?.zipcode || '000000',
        rules_regulations: instituteProfile?.rules_regulations || 'Default Rules and Regulations',

    })

    const [logo_url,setLogo_url] = useState(instituteProfile?.logo_url)

    const Submit = () => {
        post(route('setting.institute_profile.store'), {
            onSuccess: () => reset(),
        })
    }

    return (
        <AuthenticatedLayout
            header={
                'General Profile'
            }
        >


            <div className="lg:grid grid-cols-2">
                <div className="col-span-1">

                    {logo_url && <div className="my-5">
                        <span>Logo</span>
                        <img src={logo_url} className="w-52 rounded" alt="Logo" />
                    </div>}


                    <div className='my-3'>
                        <FloatLabel>
                            <input id="logo" type="file" accept="image/*" className='file-input focus:outline-0 w-full mb-1' onChange={(e) =>{ setData('logo', e.target.files[0]); setLogo_url(URL.createObjectURL(e.target.files[0])) }} />
                            <label htmlFor="logo">Logo </label>
                        </FloatLabel>
                        {errors.logo && <span className='text-red-500'>{errors.logo}</span>}
                    </div>
                </div>
            </div>

            <div className="lg:grid grid-cols-2 gap-3">

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText value={data.name} className='w-full mb-1' onChange={(e) => setData('name', e.target.value)} />
                            <label >Institute Name <span className="text-red-500">*</span></label>
                        </FloatLabel>
                        {errors.name && <span className='text-red-500'>{errors.name}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText value={data.mobile_1} keyfilter={'int'} className='w-full mb-1' onChange={(e) => setData('mobile_1', e.target.value)} />
                            <label >Mobile_1 <span className="text-red-500">*</span></label>
                        </FloatLabel>
                        {errors.mobile_1 && <span className='text-red-500'>{errors.mobile_1}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText value={data.mobile_2} keyfilter={'int'} className='w-full mb-1' onChange={(e) => setData('mobile_2', e.target.value)} />
                            <label >Mobile_2 </label>
                        </FloatLabel>
                        {errors.mobile_2 && <span className='text-red-500'>{errors.mobile_2}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText value={data.email_1} className='w-full mb-1' onChange={(e) => setData('email_1', e.target.value)} />
                            <label >Email_1 </label>
                        </FloatLabel>
                        {errors.email_1 && <span className='text-red-500'>{errors.email_1}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText value={data.email_2} className='w-full mb-1' onChange={(e) => setData('email_2', e.target.value)} />
                            <label >Email_2 </label>
                        </FloatLabel>
                        {errors.email_2 && <span className='text-red-500'>{errors.email_2}</span>}
                    </div>
                </div>

                <div className="col-span-2">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputTextarea className="w-full mb-1" value={data.address} onChange={(e) => setData('address', e.target.value)} rows={2} />
                            <label htmlFor="address">Address</label>
                        </FloatLabel>
                        {errors.address && <span className='text-red-500'>{errors.address}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText value={data.country} className='w-full mb-1' onChange={(e) => setData('country', e.target.value)} />
                            <label >Country </label>
                        </FloatLabel>
                        {errors.country && <span className='text-red-500'>{errors.country}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText value={data.website} className='w-full mb-1' onChange={(e) => setData('website', e.target.value)} />
                            <label >Website </label>
                        </FloatLabel>
                        {errors.website && <span className='text-red-500'>{errors.website}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText value={data.district} className='w-full mb-1' onChange={(e) => setData('district', e.target.value)} />
                            <label >District </label>
                        </FloatLabel>
                        {errors.district && <span className='text-red-500'>{errors.district}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText value={data.city} className='w-full mb-1' onChange={(e) => setData('city', e.target.value)} />
                            <label >City </label>
                        </FloatLabel>
                        {errors.city && <span className='text-red-500'>{errors.city}</span>}
                    </div>
                </div>

                <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText value={data.zipcode} className='w-full mb-1' onChange={(e) => setData('zipcode', e.target.value)} />
                            <label >Zipcode </label>
                        </FloatLabel>
                        {errors.zipcode && <span className='text-red-500'>{errors.zipcode}</span>}
                    </div>
                </div>

                {/* <div className="col-span-1">
                    <div className='my-3'>
                        <FloatLabel>
                            <InputText value={data.zipcode} className='w-full mb-1' onChange={(e) => setData('zipcode', e.target.value)} />
                            <label >Zipcode </label>
                        </FloatLabel>
                        {errors.zipcode && <span className='text-red-500'>{errors.zipcode}</span>}
                    </div>
                </div> */}

            </div>

            <div className="flex justify-end">
                <Button icon='pi pi-save' onClick={Submit}  disabled={processing} className="btn btn-primary" label="Submit" />
            </div>


        </AuthenticatedLayout>
    )
}

export default Institute_profile
