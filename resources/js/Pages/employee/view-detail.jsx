import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

function Employee_view_detail({employee}) {
    return(
        <AuthenticatedLayout
        header={
            'employee information'
        }
        >
            <h1>
                {employee.name}
            </h1>

            <img src={employee.image_url} alt="" />

        </AuthenticatedLayout>
    )
}

export default Employee_view_detail
