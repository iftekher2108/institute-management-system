import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';


export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Reset Password" />

            <form onSubmit={submit}>
                <div className='my-3'>
                    <FloatLabel>
                        <InputText value={data.email} className='w-full mb-1' onChange={(e) => setData('email', e.target.value)} />
                        <label>Email</label>
                    </FloatLabel>
                </div>

                <div className="my-3">
                    <FloatLabel>
                        <InputText value={data.password} className='w-full mb-1' onChange={(e) => setData('password', e.target.value)} />
                        <label>Password</label>
                    </FloatLabel>
                    {errors.password && <span className='text-red-500'>{errors.password}</span>}
                </div>

                <div className="mt-4">
                    <FloatLabel>
                        <InputText value={data.password_confirmation} className='w-full mb-1' onChange={(e) => setData('password_confirmation', e.target.value)} />
                        <label>Password confirm</label>
                    </FloatLabel>
                    {errors.password_confirmation && <span className='text-red-500'>{errors.password_confirmation}</span>}
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Button label='Reset Password' className='btn btn-primary' disabled={processing} />
                </div>
            </form>
        </GuestLayout>
    );
}
