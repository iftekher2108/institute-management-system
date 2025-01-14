import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

export default function Dashboard({student_total,employee_total}) {
    return (
        <AuthenticatedLayout
            header={
                'Dashboard'
            }
        >
            <Head title="Dashboard" />

            <div>
                <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-2'>
                    <div className='card col bg-sky-600'>
                        <div className='card-body'>
                            <h3 className='card-title text-base pb-2'>Total Student</h3>
                            <hr />
                            <div className='flex gap-2 justify-between items-center'>
                                <span><i className='pi p-3 bg-black rounded pi-user'></i></span>
                                <span>{student_total}</span>
                            </div>

                            {/* <hr />
                            <div className='flex gap-2 justify-between items-center'>
                                <span className='text-bold'>This Month:</span>
                                <span>{student_total}</span>
                            </div> */}

                        </div>
                    </div>

                    <div className='card p-2 bg-green-600 col'>
                        <div className='card-body'>
                        <h3 className='card-title text-base pb-2'>Total Employee</h3>
                            <hr />
                            <div className='flex gap-2 justify-between items-center'>
                                <span><i className='pi p-3 bg-black rounded pi-user'></i></span>
                                <span>{employee_total}</span>
                            </div>

                            {/* <hr />
                            <div className='flex gap-2 justify-between items-center'>
                                <span className='text-bold'>This Month:</span>
                                <span>{student_total}</span>
                            </div> */}
                        </div>
                    </div>

                    <Card className='p-2 bg-indigo-400 col'>
                        <div className=''>
                            <h1>Card 3</h1>
                            <Button className='btn' label="Click" />
                        </div>
                    </Card>

                    <Card className='p-2 col bg-slate-700'>
                        <div className=''>
                            <h1>Card 3</h1>
                            <Button className='btn' label="Click" />
                        </div>
                    </Card>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
