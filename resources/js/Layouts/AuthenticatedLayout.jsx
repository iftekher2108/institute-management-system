import { Link, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import AppBar from "@/Layouts/admin/AppBar";
import AppSideBar from "@/Layouts/admin/AppSideBar";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import NProgress from 'nprogress'
import { router } from '@inertiajs/react'

function Loading() {
    return (
        <div className="fixed top-0 left-0 z-50 h-screen w-full bg-black/60 flex items-center justify-center">
            <ProgressSpinner
                style={{ width: "50px", height: "50px" }}
                strokeWidth="8"
                // fill="var(--surface-ground)"
                animationDuration="infinite"
            />
        </div>
    );
}

const AuthenticatedLayout = ({ header, children }) => {
    const user = usePage().props.auth.user;
    const { props } = usePage();
    const { success, error } = props.flash || {};
    const toast = useRef(null);
    useEffect(() => {
        if (success) {
            toast.current.show({
                severity: "success",
                summary: "Success",
                detail: success,
                life: 3000,
            });
        }
        if (error) {
            toast.current.show({
                severity: "error",
                summary: "Error",
                detail: error,
                life: 3000,
            });
        }
    }, [success, error]);

    const [transition, setTransition] = useState(null);
    useEffect(() => {
            router.on("start", () => setTransition(true));
            router.on("finish", (event) =>{
                        setTransition(false)
                } );
    },[transition]);




    return (
        <>

            {
                transition ? <Loading /> : null
            }

            <AppBar user={user} />
            <Toast ref={toast} position="top-right" />
            <div className="grid grid-cols-12 gap-3 p-3">
                <div className="col-span-3">
                    <AppSideBar />
                </div>
                <Card className="col-span-9">
                    <div className="card">
                        {header && (
                            <div className="bg-primary p-4 rounded mb-4">
                                <h2 className="text-xl font-semibold leading-tight text-white">
                                    {header}
                                </h2>
                            </div>
                        )}

                        {children}
                    </div>
                </Card>
            </div>
        </>
    );
};

export default AuthenticatedLayout;
