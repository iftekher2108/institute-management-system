
import { Link } from '@inertiajs/react';

const GuestLayout =({ children }) => {
    return (
        <div className="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
            {/* <div>
                <Link href="/">
                    <span className="sr-only h-20 w-20 fill-current text-gray-500">Laravel</span>

                </Link>
            </div> */}

            {/* <div className="card bg-neutral mt-6 w-full overflow-hidden px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg"> */}
                {children}
            {/* </div> */}
        </div>
    );
}

export default GuestLayout;

