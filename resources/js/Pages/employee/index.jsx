import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Button } from "primereact/button"
import { Link } from "@inertiajs/react"
import { Ripple } from "primereact/ripple"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
function Employee() {
    return (
        <AuthenticatedLayout header={
            'Employee'
        }>
            <div className="flex justify-between mb-4">
                <Button label="All Delete" className="btn btn-error" />
                <Link href={route('employee.create')} className='btn p-ripple btn-primary overflow-hidden'>Create <Ripple /></Link>
            </div>

            <div>

                {/* <Button type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
                <Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
                <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" /> */}

                <DataTable
                    showGridlines paginator
                    removableSort resizableColumns
                    paginatorRight
                    // rowHover={true}
                    rows={5} rowsPerPageOptions={[5, 10, 25, 50, 100, 150]}
                    style={{ minWidth: '100%' }}
                // scrollable scrollHeight="600px"
                // virtualScrollerOptions={{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, loadingTemplate }}
                // selectionMode={rowClick ? null : 'checkbox'}
                // selection={selectedProducts}
                // onSelectionChange={(e) => setSelectedProducts(e.value)}
                //  dataKey="id"
                >
                    {/* <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column> */}
                    <Column field="id" headerClassName="bg-primary/80" filter filterPlaceholder="Search by Id" header="Id"></Column>
                    <Column field="code" headerClassName="bg-primary/80" filter filterPlaceholder="Search by Code" sortable header="Code"></Column>
                    <Column field="name" headerClassName="bg-primary/80" filter filterPlaceholder="Search by Name" sortable header="Name"></Column>
                    <Column field="category" headerClassName="bg-primary/80" filter filterPlaceholder="Search by Category" sortable header="Category"></Column>
                    <Column field="quantity" headerClassName="bg-primary/80" sortable header="Quantity"></Column>
                    <Column field="status" headerClassName="bg-primary/80" sortable filter filterPlaceholder="Search by Status" header="Status" body={''}  ></Column>
                    <Column field="link" headerClassName="bg-primary/80" header="Action" body={''}  ></Column>
                </DataTable>

            </div>

        </AuthenticatedLayout>
    )
}

export default Employee

