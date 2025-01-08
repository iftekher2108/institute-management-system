import InputError from '@/Components/from_elements/InputError';
import InputLabel from '@/Components/from_elements/InputLabel';
import PrimaryButton from '@/Components/from_elements/PrimaryButton';
import TextInput from '@/Components/from_elements/TextInput';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { useRef } from 'react';
import { FloatLabel } from 'primereact/floatlabel';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-white">
                    Update Password
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Ensure your account is using a long, random password to stay
                    secure.
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">

                <div className='mb-6 mt-3'>
                    <FloatLabel>
                        <InputText id="password" ref={currentPasswordInput} value={data.current_password} className='w-full' tooltip='Password' onChange={(e) => setData('current_password', e.target.value)} />
                        <label htmlFor="password">Password</label>
                    </FloatLabel>
                    {errors.current_password && <span className='text-red-500'>{errors.current_password}</span>}
                </div>

                <div className='mb-6 mt-3'>
                    <FloatLabel>
                        <InputText id="password" ref={passwordInput} value={data.password} className='w-full' tooltip='New Password' onChange={(e) => setData('password', e.target.value)} />
                        <label htmlFor="password">New Password</label>
                    </FloatLabel>
                    {errors.password && <span className='text-red-500'>{errors.password}</span>}
                </div>


                    <div className='mb-6 mt-3'>
                        <FloatLabel>
                            <InputText id="confirm_password" value={data.password_confirmation} className='w-full' tooltip='Confirm Password' onChange={(e) => setData('password_confirmation', e.target.value)} />
                            <label htmlFor="confirm_password">Confirm Password</label>
                        </FloatLabel>
                        {errors.password_confirmation && <span className='text-red-500'>{errors.password_confirmation}</span>}
                    </div>

                <div className="flex items-center gap-4">

                    <Button className='btn btn-primary md:w-1/2 w-full' label='Save' disabled={processing} />

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">
                            Saved.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
