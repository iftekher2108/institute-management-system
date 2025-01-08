import InputError from '@/Components/from_elements/InputError';
import InputLabel from '@/Components/from_elements/InputLabel';
import PrimaryButton from '@/Components/from_elements/PrimaryButton';
import TextInput from '@/Components/from_elements/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { FloatLabel } from 'primereact/floatlabel';
// import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';


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
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        isFocused={true}
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <div className='mb-6'>
                        <FloatLabel>
                            <Password inputId="password" value={data.password} inputClassName='w-full' className='w-full' tooltip='password' feedback={false} onChange={(e) => setData('password', e.target.value)} />
                            <label htmlFor="password">Password</label>
                        </FloatLabel>
                        {errors.password && <span className='text-red-500'>{errors.password}</span>}
                    </div>

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 flex items-center justify-end">

                    <Button label='Reset Password' className='btn btn-primary' disabled={processing} />

                </div>
            </form>
        </GuestLayout>
    );
}
