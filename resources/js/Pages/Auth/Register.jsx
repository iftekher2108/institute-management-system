
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <Card title={
                <div className='flex justify-center'>
                    {/* <img src='/img/logo.png' alt='logo' className='w-20 h-20' />     */}
                    <span>Laravel</span>
                </div>
            }
                className="md:w-[27rem] md:p-3">
                <form onSubmit={submit}>

                    <div className='mb-7'>
                        <FloatLabel>
                            <InputText id="name" value={data.name} className='w-full mb-1' onChange={(e) => setData('name', e.target.value)} />
                            <label htmlFor="name">Name</label>
                        </FloatLabel>
                        {errors.email && <span className='text-red-500'>{errors.name}</span>}
                    </div>

                    <div className='mb-7'>
                        <FloatLabel>
                            <InputText id="email" value={data.email} className='w-full mb-1' onChange={(e) => setData('email', e.target.value)} />
                            <label htmlFor="email">Email</label>
                        </FloatLabel>
                        {errors.email && <span className='text-red-500'>{errors.email}</span>}
                    </div>

                    <div className='mb-7'>
                        <FloatLabel>
                            <InputText id="password" type="password" value={data.password} className='w-full mb-1' onChange={(e) => setData('password', e.target.value)} />
                            <label htmlFor="password">Password</label>
                        </FloatLabel>
                        {errors.password && <span className='text-red-500'>{errors.password}</span>}

                    </div>

                    <div className='mb-7'>
                        <FloatLabel>
                            <InputText id="password" type="password" value={data.password_confirmation} className='w-full mb-1' onChange={(e) => setData('password_confirmation', e.target.value)} />
                            <label htmlFor="password">Confirm Password</label>
                        </FloatLabel>
                        {errors.password_confirmation && <span className='text-red-500'>{errors.password_confirmation}</span>}

                    </div>


                    <Button label='Register' className='btn btn-primary w-full' disabled={processing} />

                </form>
            </Card>

        </GuestLayout>
    );
}
