import { Link } from '@inertiajs/react';
import { Ripple } from 'primereact/ripple';
function AppSideBar() {


    return (
            <div className="card bg-neutral min-h-screen p-1">
                <ul className="menu">
                    <li className='mb-1'>
                        <Link className='btn p-ripple' href={route('dashboard')}>Dashboard<Ripple /></Link>
                    </li>

                    <li className='mb-1'>
                        <details>
                            <summary className='mb-1 p-4 p-ripple'>Classes<Ripple /></summary>
                            <ul>
                                <li><Link href={route('classroom.index')} className='btn mb-1 p-ripple'>All Classes<Ripple /></Link></li>
                                <li><Link href={route('classroom.create')} className='btn mb-1 p-ripple'>Add class<Ripple /></Link></li>
                            </ul>
                        </details>
                    </li>

                    <li className='mb-1'>
                        <details>
                            <summary className=' mb-1 p-4 p-ripple'>Subjects<Ripple /></summary>
                            <ul>
                                <li><a className='btn mb-1 p-ripple'>Subjects in Class<Ripple /></a></li>
                                <li><a className='btn mb-1 p-ripple'>Assign Subjects<Ripple /></a></li>
                            </ul>
                        </details>
                    </li>

                    <li className='mb-1'>
                        <details>
                            <summary className=' mb-1 p-4 p-ripple'>Students<Ripple /></summary>
                            <ul>
                                <li><a className='btn mb-1 p-ripple'>All Students<Ripple /></a></li>
                                <li><a className='btn mb-1 p-ripple'>Add Student<Ripple /></a></li>
                                <li><a className='btn mb-1 p-ripple' href="">Admission Letter<Ripple /></a></li>
                                <li><a className='btn mb-1 p-ripple' href="">Student Id Card<Ripple /></a></li>
                                {/* <li><a href="">Print basic list</a></li> */}
                                {/* <li><a href="">Manage Login</a></li> */}
                            </ul>
                        </details>
                    </li>

                    <li className='mb-1'>
                        <details>
                            <summary className=' mb-1 p-4 p-ripple'>Employee<Ripple /></summary>
                            <ul>
                                <li><Link className='btn mb-1 p-ripple' href={route('employee.index')}>All Employees<Ripple /></Link></li>
                                <li><Link href={route('employee.create')} className='btn mb-1 p-ripple'>Add New<Ripple /></Link></li>
                                <li><a className='btn mb-1 p-ripple' href="">Job Letter<Ripple /></a></li>
                                {/* <li><a href="">Manage Login</a></li> */}
                            </ul>
                        </details>
                    </li>

                    <li className='mb-1'>
                        <details>
                            <summary className=' mb-1 p-4 p-ripple'>Accounts<Ripple /></summary>
                            <ul>
                                <li><a className='btn mb-1 p-ripple'>chart of accounts<Ripple /></a></li>
                                <li><a className='btn mb-1 p-ripple'>Add income<Ripple /></a></li>
                                <li><a className='btn mb-1 p-ripple' href="">Add expense<Ripple /></a></li>
                                {/* <li><a href="">Account statement</a></li> */}
                            </ul>
                        </details>
                    </li>

                    <li className='mb-1'>
                        <details>
                            <summary className=' mb-1 p-4 p-ripple'>Fees<Ripple /></summary>
                            <ul>
                                <li><a className='btn mb-1 p-ripple'>Generate Fees Invoice<Ripple /></a></li>
                                <li><a className='btn mb-1 p-ripple'>Collect Fees<Ripple /></a></li>
                                <li><a className='btn mb-1 p-ripple' href="">Collect Fees<Ripple /></a></li>
                                {/* <li><a href="">Fee Defaulters</a></li> */}
                            </ul>
                        </details>
                    </li>

                    <li className='mb-1'>
                        <details>
                            <summary className=' mb-1 p-4 p-ripple'>Salary<Ripple /></summary>
                            <ul>
                                <li><a className='btn mb-1 p-ripple'>Pay Salary<Ripple /></a></li>
                                <li><a className='btn mb-1 p-ripple'>Salary Slip<Ripple /></a></li>
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
