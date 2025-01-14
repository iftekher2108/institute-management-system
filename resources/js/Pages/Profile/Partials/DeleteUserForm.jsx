import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { FloatLabel } from 'primereact/floatlabel';
import { Password } from 'primereact/password';

import { Dialog } from 'primereact/dialog';

export default function DeleteUserForm({ className = '' }) {
    const passwordInput = useRef();
    const [visible, setVisible] = useState(false);


    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });


    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = (e) => {
        e.preventDefault()
        if (!visible) return; setVisible(false);
        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-white">
                    Delete Account
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </p>
            </header>


            <Button label="Delete Account" className='btn btn-error' onClick={() => setVisible(true)} />
            <Dialog header="Delete Account" maximizable visible={visible} style={{ width: '50vw' }} onHide={(e) => closeModal(e)}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-white">
                        Are you sure you want to delete your account?
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Once your account is deleted, all of its resources and
                        data will be permanently deleted. Please enter your
                        password to confirm you would like to permanently delete
                        your account.
                    </p>

                    <div className="mt-6">

                        <div className='mb-6'>
                            <FloatLabel>
                                <Password inputId="password" ref={passwordInput} value={data.password} inputClassName='w-full' className='w-full' feedback={false} onChange={(e) => setData('password', e.target.value)} />
                                <label htmlFor="password">Password</label>
                            </FloatLabel>
                            {errors.password && <span className='text-red-500'>{errors.password}</span>}
                        </div>

                    </div>

                    <div className="mt-6 flex flex-wrap gap-2 justify-between">

                        <Button className='btn btn-secondary' onClick={(e) => closeModal(e)} label='Cancel' />

                        <Button className='btn btn-error' label='Delete Account' disabled={processing} />


                    </div>
                </form>

            </Dialog>


            <dialog id="my_modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>



                    {/* <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
                </div>
            </dialog>
        </section>
    );
}
