import { Link } from '@inertiajs/react';
function AppSideBar() {


    return (
        <div className="card bg-neutral min-h-screen p-1">
            <ul className="menu rounded-box">
                <li className='mb-1'>
                    <Link className='btn' href={route('dashboard')}>Dashboard</Link>
                </li>

                <li className='mb-1'>
                    <details className=''>
                        <summary className=' mb-1 p-4'>Classes</summary>
                        <ul>
                            <li><a className='btn mb-1'>All Classes</a></li>
                            <li><a className='btn mb-1'>Add class</a></li>
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-4'>Subjects</summary>
                        <ul>
                            <li><a className='btn mb-1'>Subjects in Class</a></li>
                            <li><a className='btn mb-1'>Assign Subjects</a></li>
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-4'>Students</summary>
                        <ul>
                            <li><a className='btn mb-1'>All Students</a></li>
                            <li><a className='btn mb-1'>Add Student</a></li>
                            <li><a className='btn mb-1' href="">Admission Letter</a></li>
                            <li><a className='btn mb-1' href="">Student Id Card</a></li>
                            {/* <li><a href="">Print basic list</a></li> */}
                            {/* <li><a href="">Manage Login</a></li> */}
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-4'>Employee</summary>
                        <ul>
                            <li><a className='btn mb-1'>All Employees</a></li>
                            <li><a className='btn mb-1'>Add New</a></li>
                            <li><a className='btn mb-1' href="">Job Letter</a></li>
                            {/* <li><a href="">Manage Login</a></li> */}
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-4'>Accounts</summary>
                        <ul>
                            <li><a className='btn mb-1'>chart of accounts</a></li>
                            <li><a className='btn mb-1'>Add income</a></li>
                            <li><a className='btn mb-1' href="">Add expense</a></li>
                            {/* <li><a href="">Account statement</a></li> */}
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-4'>Fees</summary>
                        <ul>
                            <li><a className='btn mb-1'>Generate Fees Invoice</a></li>
                            <li><a className='btn mb-1'>Collect Fees</a></li>
                            <li><a className='btn mb-1' href="">Collect Fees</a></li>
                            {/* <li><a href="">Fee Defaulters</a></li> */}
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-4'>Salary</summary>
                        <ul>
                            <li><a className='btn mb-1'>Pay Salary</a></li>
                            <li><a className='btn mb-1'>Salary Slip</a></li>
                            {/* <li><a href="">Collect Fees</a></li> */}
                            {/* <li><a href="">Fee Defaulters</a></li> */}
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-4'>Attendance</summary>
                        <ul>
                            <li><a className='btn mb-1'>Student Attendance</a></li>
                            <li><a className='btn mb-1'>Teacher Attendance</a></li>
                            <li><a className='btn mb-1' href="">Class Wise Report</a></li>
                            <li><a className='btn mb-1'>Student Attendance Report</a></li>
                            <li><a className='btn mb-1'>Teacher Attendance Report</a></li>
                            {/* <li><a href="">Fee Defaulters</a></li> */}
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <Link href=''>Homework</Link>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-4'>Exam</summary>
                        <ul>
                            <li><a className='btn mb-1'>Create New</a></li>
                            <li><a className='btn mb-1'>Edit/Delete</a></li>
                            <li><a className='btn mb-1' href="">Add/Update Exam Mark</a></li>
                            <li><a className='btn mb-1' href="">Result Card</a></li>
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-4'>Class Tests</summary>
                        <ul>
                            <li><a className='btn mb-1'>Create New</a></li>
                            <li><a className='btn mb-1'>Text Result</a></li>
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-4'>Results</summary>
                        <ul>
                            <li><a className='btn mb-1'>Students Report Card</a></li>
                            <li><a className='btn mb-1'>Student Info Report</a></li>
                            <li><a className='btn mb-1'>Parents Info Report</a></li>
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-4'>Certificates</summary>
                        <ul>
                            <li><a className='btn mb-1'>Leave Certificate</a></li>
                            <li><a className='btn mb-1'>Character Certificate</a></li>
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary className=' mb-1 p-4'>Genarel Settings</summary>
                        <ul>
                            <li><a className='btn mb-1'>Institute Profile</a></li>
                            <li><a className='btn mb-1'>Fee management</a></li>
                            <li><a className='btn mb-1' href="">Account information</a></li>
                            <li><a className='btn mb-1' href="">Rules and Regulation</a></li>
                            <li><a className='btn mb-1' href="">Mark Grading</a></li>
                            <li><a className='btn mb-1' href="">Theme Settings</a></li>
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
