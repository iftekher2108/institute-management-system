import { Link } from "@inertiajs/react";
function AppBar({ user }) {
    return (

        <div className="navbar bg-primary sticky top-0 z-50">
            <div className="flex-1">
                <Link href={route('home')} className="btn btn-white text-xl">School</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><a>Link</a></li> */}
                    <li>
                        <details>
                            <summary className="p-4 bg-slate-900 focus:bg-slate-900 active:bg-slate-900 hover:bg-slate-900">
                                <img src="" className="rounded size-6 me-2" alt="" />
                                {user.name}
                            </summary>
                            <ul className="w-full p-2">
                                <li className="p-1"><Link className="p-3" href={route('profile.edit')}>
                                    <i className="pi p-2 bg-primary text-white rounded pi-user"></i> Profile Settings</Link>
                                </li>
                                <li className="p-1"><Link className="p-3" href={route('logout')} method="post" >
                                    <i className="pi p-2 bg-primary text-white rounded pi-sign-out"></i> Logout</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default AppBar;
