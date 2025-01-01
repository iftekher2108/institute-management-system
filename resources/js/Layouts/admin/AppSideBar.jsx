import { Link } from '@inertiajs/react';
import { PanelMenu } from 'primereact/panelmenu';
function AppSideBar() {


    return (
        <div className="card bg-neutral min-h-screen p-1">
            <ul className="menu rounded-box">
                <li className='mb-1'>
                    <Link href={route('dashboard')}>Dashboard</Link>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary>Genarel Settings</summary>
                        <ul>
                            <li><a>Institute Profile</a></li>
                            <li><a>Fee management</a></li>
                            <li><a href="">Account information</a></li>
                            <li><a href="">Rules and Regulation</a></li>
                            <li><a href="">Mark Grading</a></li>
                            <li><a href="">Theme Settings</a></li>
                            <li><a href=""></a></li>
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary>Classes</summary>
                        <ul>
                            <li><a>All Classes</a></li>
                            <li><a>Add class</a></li>
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary>Subjects</summary>
                        <ul>
                            <li><a>Subjects in Class</a></li>
                            <li><a>Assign Subjects</a></li>
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary>Students</summary>
                        <ul>
                            <li><a>All Students</a></li>
                            <li><a>Add Student</a></li>
                            <li><a href="">Admission Letter</a></li>
                            <li><a href="">Student Id Card</a></li>
                            {/* <li><a href="">Print basic list</a></li> */}
                            {/* <li><a href="">Manage Login</a></li> */}
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary>Employee</summary>
                        <ul>
                            <li><a>All Employees</a></li>
                            <li><a>Add New</a></li>
                            <li><a href="">Job Letter</a></li>
                            {/* <li><a href="">Manage Login</a></li> */}
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary>Accounts</summary>
                        <ul>
                            <li><a>chart of accounts</a></li>
                            <li><a>Add income</a></li>
                            <li><a href="">Add expense</a></li>
                            {/* <li><a href="">Account statement</a></li> */}
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary>Fees</summary>
                        <ul>
                            <li><a>Generate Fees Invoice</a></li>
                            <li><a>Collect Fees</a></li>
                            <li><a href="">Collect Fees</a></li>
                            {/* <li><a href="">Fee Defaulters</a></li> */}
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary>Salary</summary>
                        <ul>
                            <li><a>Pay Salary</a></li>
                            <li><a>Salary Slip</a></li>
                            {/* <li><a href="">Collect Fees</a></li> */}
                            {/* <li><a href="">Fee Defaulters</a></li> */}
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary>Attendance</summary>
                        <ul>
                            <li><a>Student Attendance</a></li>
                            <li><a>Teacher Attendance</a></li>
                            <li><a href="">Class Wise Report</a></li>
                            <li><a>Student Attendance Report</a></li>
                            <li><a>Teacher Attendance Report</a></li>
                            {/* <li><a href="">Fee Defaulters</a></li> */}
                        </ul>
                    </details>
                </li>

                <li className='mb-1'>
                    <Link href=''>Item 2</Link>
                </li>
                <li className='mb-1'>
                    <Link href=''>Item 3</Link>
                </li>

                <li className='mb-1'>
                    <details>
                        <summary>Parent</summary>
                        <ul>
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>

                        </ul>
                    </details>
                </li>



            </ul>
        </div>
    )
}

export default AppSideBar;
