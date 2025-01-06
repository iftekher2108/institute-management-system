
import Dropdown from '@/Components/from_elements/Dropdown';
import NavLink from '@/Components/from_elements/NavLink';
import ResponsiveNavLink from '@/Components/from_elements/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import AppBar from '@/Layouts/admin/AppBar';
import AppSideBar from '@/Layouts/admin/AppSideBar';
import { Card } from 'primereact/card';

const AuthenticatedLayout = ({ header, children }) => {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);


    return (

        <>

            <AppBar title={'parvez'} user={user} />

            <div className='grid grid-cols-12 gap-3 p-2'>
                <div className="col-span-3">
                    <AppSideBar />
                </div>
                <Card className="col-span-9">
                    <div className="card">
                        {header && (
                            <div className="shadow">
                                <div className="mb-6">
                                    <h2 className="text-xl font-semibold leading-tight text-white">
                                        {header}
                                    </h2>
                                </div>
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
