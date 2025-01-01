import { Link } from "@inertiajs/react";
function AppBar({title, user}) {
    return (

        <div className="navbar bg-primary sticky top-0 z-50">
            <div className="flex-1">
                <Link href={route('home')} className="btn btn-ghost text-xl">Laravel</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><a>Link</a></li> */}
                    <li className="btn p-0 m-0">
                        <details>
                            <summary className="m-0">
                                <img src="" className="rounded size-6 me-2" alt="" />
                                 {user.name}
                            </summary>
                            <ul className="w-full p-2">
                                <li className="p-1"><Link href={route('profile.edit')}>Profile Settings</Link></li>
                                <li className="p-1"><Link href={route('logout')} method="post" >Logout</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default AppBar;
