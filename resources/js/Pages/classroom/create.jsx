import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

function Classroom_create() {
    return(
        <AuthenticatedLayout
            header={
                'Classroom Create'
            }
        >
            <h1>class room create</h1>
        </AuthenticatedLayout>
    )
}

export default Classroom_create

