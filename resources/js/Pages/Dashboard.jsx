import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                'Dashboard'
            }
        >
            <Head title="Dashboard" />

            <div>
                <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-2'>
                    <Card className='p-2 col bg-sky-600'>
                        <div className=''>
                            <h1>Card 1</h1>
                            <Button className='btn' label="Click" />
                        </div>
                    </Card>

                    <Card className='p-2 bg-green-600 col'>
                        <div className=''>
                            <h1>Card 2</h1>
                            <Button className='btn' label="Click" />
                        </div>
                    </Card>

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
