import { Link } from '@inertiajs/react';
import { Ripple } from 'primereact/ripple';
function AppSideBar() {


    return (
        <div className="card bg-neutral min-h-screen p-1">
            <ul className="menu">
                <li className='mb-1'>
                    <Link className='p-3 p-ripple' href={route('dashboard')}>
                        <i className='pi p-2 bg-primary text-white rounded pi-home'></i> Dashboard<Ripple />
                    </Link>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className='mb-1 p-3 p-ripple'>
                            <i className='pi p-2 bg-primary text-white rounded pi-book'></i> Classes<Ripple />
                        </summary>
                        <ul>
                            <li>
                                <Link href={route('classroom.index')} className='p-4 mb-1 p-ripple'>
                                    <i className='pi p-2 bg-primary text-white rounded pi-file-edit'></i> All Classes<Ripple /></Link>
                            </li>
                            <li><Link href={route('classroom.create')} className='p-4 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-plus'></i> Add class<Ripple /></Link></li>
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-3 p-ripple'>
                            <i className='pi p-2 bg-primary text-white rounded  pi-objects-column'></i>
                            Subjects<Ripple />
                        </summary>
                        <ul>
                            <li><a className='p-3 mb-1 p-ripple'>
                                <i className='pi p-2 bg-primary text-white rounded pi-clone'></i>
                                Subjects in Class<Ripple /></a>
                            </li>
                            <li><a className='p-3 mb-1 p-ripple'>
                                <i className='pi p-2 bg-primary text-white rounded pi-external-link'></i>
                                Assign Subjects<Ripple /></a>
                            </li>
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-3 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-users'></i> Students<Ripple /></summary>
                        <ul>
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-user'></i> All Students<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-user-plus'></i> Add New<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple' href=""><i className='pi p-2 bg-primary text-white rounded pi-file'></i> Admission Letter<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple' href=""><i className='pi p-2 bg-primary text-white rounded pi-file'></i> Student Id Card<Ripple /></a></li>
                            {/* <li><a href="">Print basic list</a></li> */}
                            {/* <li><a href="">Manage Login</a></li> */}
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-3 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-users'></i> Employee<Ripple /></summary>
                        <ul>
                            <li><Link className='p-3 mb-1 p-ripple' href={route('employee.index')}><i className='pi p-2 bg-primary text-white rounded pi-user'></i> All Employees<Ripple /></Link></li>
                            <li><Link href={route('employee.create')} className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-user-plus'></i> Add New<Ripple /></Link></li>
                            <li><a className='p-3 mb-1 p-ripple' href=""><i className='pi p-2 bg-primary text-white rounded pi-file'></i> Job Letter<Ripple /></a></li>
                            {/* <li><a href="">Manage Login</a></li> */}
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className='mb-1 p-3 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-wallet'></i> Accounts<Ripple /></summary>
                        <ul>
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-chart-line'></i> chart of accounts<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-plus'></i> Add income<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple' href=""><i className='pi p-2 bg-primary text-white rounded pi-minus'></i> Add expense<Ripple /></a></li>
                            {/* <li><a href="">Account statement</a></li> */}
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-3 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-credit-card'></i> Fees<Ripple /></summary>
                        <ul>
                            <li><a className='p-3 mb-1 p-ripple'> Generate Fees Invoice<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple'> Collect Fees<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple' href=""> Collect Fees<Ripple /></a></li>
                            {/* <li><a href="">Fee Defaulters</a></li> */}
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-3 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-money-bill'></i> Salary<Ripple /></summary>
                        <ul>
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-external-link'></i> Pay Salary<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-file-arrow-up'></i> Salary Slip<Ripple /></a></li>
                            {/* <li><a href="">Collect Fees</a></li> */}
                            {/* <li><a href="">Fee Defaulters</a></li> */}
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-4 p-ripple'>Attendance<Ripple /></summary>
                        <ul>
                            <li><a className='btn mb-1 p-ripple'>Student Attendance<Ripple /></a></li>
                            <li><a className='btn mb-1 p-ripple'>Teacher Attendance<Ripple /></a></li>
                            <li><a className='btn mb-1 p-ripple' href="">Class Wise Report<Ripple /></a></li>
                            <li><a className='btn mb-1 p-ripple'>Student Attendance Report<Ripple /></a></li>
                            <li><a className='btn mb-1 p-ripple'>Teacher Attendance Report<Ripple /></a></li>
                            {/* <li><a href="">Fee Defaulters</a></li> */}
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <Link href='' className='btn p-ripple'>Homework<Ripple /></Link>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-4 p-ripple'>Exam<Ripple /></summary>
                        <ul>
                            <li><a className='btn mb-1 p-ripple'>Create New<Ripple /></a></li>
                            <li><a className='btn mb-1 p-ripple'>Edit/Delete<Ripple /></a></li>
                            <li><a className='btn mb-1 p-ripple' href="">Add/Update Exam Mark<Ripple /></a></li>
                            <li><a className='btn mb-1 p-ripple' href="">Result Card<Ripple /></a></li>
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-4 p-ripple'>Class Tests<Ripple /></summary>
                        <ul>
                            <li><a className='btn mb-1 p-ripple'>Create New<Ripple /></a></li>
                            <li><a className='btn mb-1 p-ripple'>Text Result<Ripple /></a></li>
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-4 p-ripple'>Results<Ripple /></summary>
                        <ul>
                            <li><a className='btn mb-1 p-ripple'>Students Report Card<Ripple /></a></li>
                            <li><a className='btn mb-1 p-ripple'>Student Info Report<Ripple /></a></li>
                            <li><a className='btn mb-1 p-ripple'>Parents Info Report<Ripple /></a></li>
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-4 p-ripple'>Certificates<Ripple /></summary>
                        <ul>
                            <li><a className='btn mb-1 p-ripple'>Leave Certificate<Ripple /></a></li>
                            <li><a className='btn mb-1 p-ripple'>Character Certificate<Ripple /></a></li>
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-4 p-ripple'>Genarel Settings<Ripple /></summary>
                        <ul>
                            <li><a className='btn mb-1 p-ripple'>Institute Profile<Ripple /></a></li>
                            <li><a className='btn mb-1 p-ripple'>Fee management<Ripple /></a></li>
                            <li><a className='btn mb-1 p-ripple' href="">Account information<Ripple /></a></li>
                            <li><a className='btn mb-1 p-ripple' href="">Rules and Regulation<Ripple /></a></li>
                            <li><a className='btn mb-1 p-ripple' href="">Mark Grading<Ripple /></a></li>
                            <li><a className='btn mb-1 p-ripple' href="">Theme Settings<Ripple /></a></li>
                            {/* <li><a className='btn mb-1' href=""></a></li> */}
                        </ul>
                    </details>
                </li>

                {/* <li className='mb-1'>
                    <Link href=''>Item 3</Link>
                </li> */}

            </ul>
        </div>
    )
}

export default AppSideBar;
