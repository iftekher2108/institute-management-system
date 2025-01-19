import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import { Button } from 'primereact/button';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Confirm Password" />

            <div className="mb-4 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </div>

            <form onSubmit={submit}>

                <div className="my-3">
                    <FloatLabel>
                        <InputText value={data.password} className='w-full mb-1' onChange={(e) => setData('password', e.target.value)} />
                        <label>Password</label>
                    </FloatLabel>
                    {errors.password && <span className='text-red-500'>{errors.password}</span>}
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Button icon='pi pi-save' className='btn btn-primary' disabled={processing} label='Confirm' />
                </div>
            </form>
        </GuestLayout>
    );
}
