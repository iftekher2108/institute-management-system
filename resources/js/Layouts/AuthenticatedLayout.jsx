
import Dropdown from '@/Components/from_elements/Dropdown';
import NavLink from '@/Components/from_elements/NavLink';
import ResponsiveNavLink from '@/Components/from_elements/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import AppBar from '@/Layouts/admin/AppBar';
import AppSideBar from '@/Layouts/admin/AppSideBar';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

const AuthenticatedLayout = ({ header, children }) => {
    const user = usePage().props.auth.user;
    const { props } = usePage();
    const { success, error } = props.flash || {};
    const toast = useRef(null);
    useEffect(() => {
        if (success) {
            toast.current.show({ severity: 'success', summary: 'Success', detail: success, life: 3000 });
        }
        if (error) {
            toast.current.show({ severity: 'error', summary: 'Error', detail: error, life: 3000 });
        }
    }, [success, error]);

    return (

        <>
            <AppBar title={'parvez'} user={user} />
            <Toast ref={toast} position='top-right' />
            <div className='grid grid-cols-12 gap-3 p-2'>
                <div className="col-span-3">
                    <AppSideBar />
                </div>
                <Card className="col-span-9">
                    <div className="card">
                        {header && (
                            <div className="bg-primary p-4 rounded mb-4">
                                <h2 className="text-xl font-semibold leading-tight text-white">
                                    {header}
                                </h2>
                            </div>
                        )}
                        {children}
                    </div>
                </Card>
            </div>

        </>
    );
}

export default AuthenticatedLayout;
