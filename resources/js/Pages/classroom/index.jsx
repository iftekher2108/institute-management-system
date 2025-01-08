import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

function Classroom() {
    return(
        <AuthenticatedLayout
        header={
            'Classroom'
        }>
            <h1>class room</h1>
        </AuthenticatedLayout>
    )
}

export default Classroom
