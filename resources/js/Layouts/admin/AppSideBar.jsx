import { Link } from '@inertiajs/react';
import { Ripple } from 'primereact/ripple';
function AppSideBar() {


    return (
        <div className="card bg-neutral h-screen overflow-y-scroll sticky top-16 z-30 p-1">
            <ul className="menu sticky">
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
                            <li>
                                <Link href={route('subject.index')} className='p-3 mb-1 p-ripple'>
                                    <i className='pi p-2 bg-primary text-white rounded pi-clone'></i>
                                    Subjects in Class<Ripple />
                                </Link>
                            </li>
                            <li>
                                <Link href={route('subject.create')} className='p-3 mb-1 p-ripple'>
                                    <i className='pi p-2 bg-primary text-white rounded pi-external-link'></i>
                                    Assign Subjects<Ripple />
                                </Link>
                            </li>
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-3 p-ripple'>
                            <i className='pi p-2 bg-primary text-white rounded pi-users'></i> Students<Ripple />
                        </summary>
                        <ul>
                            <li><Link href={route('student.index')} className='p-3 mb-1 p-ripple'>
                                <i className='pi p-2 bg-primary text-white rounded pi-user'></i>
                                All Students<Ripple /></Link>
                            </li>
                            <li><Link href={route('student.create')} className='p-3 mb-1 p-ripple'>
                                <i className='pi p-2 bg-primary text-white rounded pi-user-plus'></i>
                                Add New<Ripple /></Link>
                            </li>
                            <li><a className='p-3 mb-1 p-ripple' href="">
                                <i className='pi p-2 bg-primary text-white rounded pi-file'></i>
                                Admission Letter<Ripple /></a>
                            </li>
                            <li><a className='p-3 mb-1 p-ripple' href="">
                                <i className='pi p-2 bg-primary text-white rounded pi-file'></i>
                                Student Id Card<Ripple /></a>
                            </li>
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
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-file-pdf'></i> Generate Fees Invoice<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-clipboard'></i> Collect Fees<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple' href=""><i className='pi p-2 bg-primary text-white rounded pi-file-edit'></i>Fees Slip<Ripple /></a></li>
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
                        <summary className=' mb-1 p-3 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-calendar-plus'></i> Attendance<Ripple /></summary>
                        <ul>
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-calendar-clock'></i> Student Attendance<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-calendar-clock'></i> Teacher Attendance<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple' href=""><i className='pi p-2 bg-primary text-white rounded pi-chart-bar'></i> Class Wise Report<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-chart-line'></i> Student Attendance Report<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-chart-line'></i> Teacher Attendance Report<Ripple /></a></li>
                            {/* <li><a href="">Fee Defaulters</a></li> */}
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <Link href='' className='p-3 p-ripple'>
                        <i className='pi p-2 bg-primary text-white rounded pi-book'></i> Homework<Ripple />
                    </Link>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-3 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-file-plus'></i> Exam<Ripple /></summary>
                        <ul>
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-file'></i> Edit/Delete<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-plus'></i> Create New<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple' href=""><i className='pi p-2 bg-primary text-white rounded pi-file-edit'></i> Add/Update Exam Mark<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple' href=""><i className='pi p-2 bg-primary text-white rounded pi-bookmark'></i> Result Card<Ripple /></a></li>
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-3 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-clone'></i> Class Tests<Ripple /></summary>
                        <ul>
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-plus'></i> Create New<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-chart-scatter'></i> Text Result<Ripple /></a></li>
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-3 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-chart-bar'></i> Results<Ripple /></summary>
                        <ul>
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-chart-line'></i> Students Report Card<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-id-card'></i> Student Info Report<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-chart-scatter'></i> Parents Info Report<Ripple /></a></li>
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-3 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-receipt'></i> Certificates<Ripple /></summary>
                        <ul>
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-file-export'></i> Leave Certificate<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-file-plus'></i> Character Certificate<Ripple /></a></li>
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-3 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-cog'></i> Genarel Settings<Ripple /></summary>
                        <ul>
                            <li><Link href={route('setting.institute_profile')} className='p-3 mb-1 p-ripple'>
                                <i className='pi p-2 bg-primary text-white rounded pi-building-columns'></i>
                                Institute Profile<Ripple /></Link>
                            </li>
                            <li><a className='p-3 mb-1 p-ripple'><i className='pi p-2 bg-primary text-white rounded pi-wallet'></i> Fee management<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple' href=""><i className='pi p-2 bg-primary text-white rounded pi-credit-card'></i> Account information<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple' href=""><i className='pi p-2 bg-primary text-white rounded pi-flag'></i> Rules and Regulation<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple' href=""><i className='pi p-2 bg-primary text-white rounded pi-gauge'></i> Mark Grading<Ripple /></a></li>
                            <li><a className='p-3 mb-1 p-ripple' href=""><i className='pi p-2 bg-primary text-white rounded pi-palette'></i> Theme Settings<Ripple /></a></li>
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
