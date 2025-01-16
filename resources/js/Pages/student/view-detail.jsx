import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

function Employee_view_detail({student}) {
    return(
        <AuthenticatedLayout
        header={
            'Student information'
        }
        >
            <h1>
                {student.name}
            </h1>

            <img src={student.image_url} alt="" />

        </AuthenticatedLayout>
    )
}

export default Employee_view_detail
