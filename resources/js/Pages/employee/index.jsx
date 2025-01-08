import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Button } from "primereact/button"
import { Link } from "@inertiajs/react"
import { Ripple } from "primereact/ripple"
function Employee() {
    return(
        <AuthenticatedLayout header={
            'Employee'
        }>
            <div className="flex justify-between">
                <Button label="All Delete" className="btn btn-error" />

                <Link  className='btn p-ripple btn-primary overflow-hidden'>Create <Ripple/></Link>

            </div>

        </AuthenticatedLayout>
    )
}

export default Employee

