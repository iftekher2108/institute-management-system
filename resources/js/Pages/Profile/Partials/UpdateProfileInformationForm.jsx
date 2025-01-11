import InputError from '@/Components/from_elements/InputError';
import InputLabel from '@/Components/from_elements/InputLabel';
import PrimaryButton from '@/Components/from_elements/PrimaryButton';
import TextInput from '@/Components/from_elements/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-white">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">

                <div className='my-6'>
                    <FloatLabel>
                        <InputText id="name" value={data.name} tooltip='Name' className='w-full mb-1' onChange={(e) => setData('name', e.target.value)} />
                        <label htmlFor="name">Name</label>
                    </FloatLabel>
                    {errors.name && <span className='text-red-500'>{errors.name}</span>}
                </div>

                <div className='my-6'>
                    <FloatLabel>
                        <InputText id="email" value={data.email} tooltip='Email' className='w-full mb-1' onChange={(e) => setData('email', e.target.value)} />
                        <label htmlFor="email">Email</label>
                    </FloatLabel>
                    {errors.email && <span className='text-red-500'>{errors.email}</span>}
                </div>


                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-white">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">

                    <Button label='Save' className='btn btn-primary md:w-1/2 w-full' disabled={processing} />

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
