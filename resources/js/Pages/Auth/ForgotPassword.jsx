import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import { Button } from 'primereact/button';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-600">
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </div>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div className="my-3">
                    <FloatLabel>
                        <InputText value={data.email} className='w-full mb-1' onChange={(e) => setData('email', e.target.value)} />
                        <label>Email</label>
                    </FloatLabel>
                    {errors.email && <span className='text-red-500'>{errors.email}</span>}
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Button icon='pi pi-save' className='btn btn-primary' disabled={processing} label='Email Password Reset Link' />
                </div>
            </form>
        </GuestLayout>
    );
}
