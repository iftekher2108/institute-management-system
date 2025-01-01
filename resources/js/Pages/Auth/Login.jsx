// import Checkbox from '@/Components/from_elements/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Password } from 'primereact/password';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}


            <Card title={
                <div className='flex justify-center'>
                    {/* <img src='/img/logo.png' alt='logo' className='w-20 h-20' />     */}
                    <span>Laravel</span>
                </div>
            }
                className="md:w-[27rem] md:p-3">
                <form onSubmit={submit}>
                    <div className='mb-6'>
                        <FloatLabel>
                            <InputText id="email" value={data.email} tooltip='Email' className='w-full mb-1' onChange={(e) => setData('email', e.target.value)} />
                            <label htmlFor="email">Email</label>
                        </FloatLabel>
                        {errors.email && <span className='text-red-500'>{errors.email}</span>}
                    </div>

                    <div className='mb-6'>
                        <FloatLabel>
                            <Password inputId="password" value={data.password} inputClassName='w-full' className='w-full' tooltip='password' feedback={false} onChange={(e) => setData('password', e.target.value)} />
                            <label htmlFor="password">Password</label>
                        </FloatLabel>
                        {errors.password && <span className='text-red-500'>{errors.password}</span>}
                    </div>
                    <div className='flex justify-between items-center mb-6'>
                        <Checkbox className='checkbox checkbox-primary border-0' checked={data.remember} id='remember' onChange={e => setData('remember', e.checked)} />
                        <label htmlFor="remember" className="label">Remember me</label>
                    </div>


                    <Button label='Login' className='w-full btn btn-primary' />

                </form>
            </Card>

        </GuestLayout>
    );
}
