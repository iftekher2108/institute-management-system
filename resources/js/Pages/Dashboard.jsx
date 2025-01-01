import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div>
                <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-2'>
                    <Card className='col p-2 bg-sky-600'>
                        <div className=''>
                            <h1>Card 1</h1>
                            <Button className='btn' label="Click" />
                        </div>
                    </Card>

                    <Card className='col p-2 bg-green-600'>
                        <div className=''>
                            <h1>Card 2</h1>
                            <Button className='btn' label="Click" />
                        </div>
                    </Card>

                    <Card className='col p-2 bg-indigo-400'>
                        <div className=''>
                            <h1>Card 3</h1>
                            <Button className='btn' label="Click" />
                        </div>
                    </Card>

                    <Card className='col p-2 bg-slate-700'>
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
