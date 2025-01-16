import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Button } from "primereact/button"
import { Link } from "@inertiajs/react"
import { Ripple } from "primereact/ripple"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Image } from "primereact/image";
import { useRef, useState } from "react";
import { Menu } from 'primereact/menu';

function TableImage(RowData) {
    return (
        <>
            <Image src={RowData.image_url} imageClassName="rounded-lg size-14" className="rounded-lg" preview />
        </>
    )
}


function TableStatus(RowData) {

    function StatusUpdate() {

    }

    return (
        <>
            <Button label={RowData.status == 1 ? "active" : "In-active"}
                className={`btn ${RowData.status == 1 ? "btn-success" : "btn-error"}`}
            />
        </>
    )

}

function TableAction(RowData) {

    const menu = useRef()

    const itemRender = (item) => (
        <div className='p-menuitem-content'>
            <Link href={item.url} className="flex align-items-center p-menuitem-link">
                <span className={item.icon} />
                <span className="mx-2">{item.label}</span>
                {/* {item.badge && <Badge className="ml-auto" value={item.badge} />}
                {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>} */}
            </Link>
        </div>
    )

    const items = [
        {
            icon: 'pi pi-eye',
            label: 'View Details',
            url: route('employee.view_detail',RowData.id),
            template: itemRender
        },
        {
            icon: 'pi pi-pen-to-square',
            label: 'Edit',
            url: route('employee.edit',RowData.id),
            template: itemRender
        },
        {
            icon: 'pi pi-trash',
            label: "Delete",
            url: route('employee.delete',RowData.id),
            template: itemRender
        }
    ]

    return (
        <>
            <Menu model={items} popup ref={menu} id="popup_menu_left" />
            <Button icon='pi pi-ellipsis-h' className="btn ps-2 btn-circle" onClick={(e) => menu.current.toggle(e)} />
        </>
    )
}




function Employee({ employees }) {

    const [selectedProducts, setSelectedProducts] = useState([null])
    // const toast = useRef()

    function allDelete() {

    }

    return (
        <AuthenticatedLayout header={
            'Employee'
        }>
            <div className="flex justify-between mb-4">
                <Button label="All Delete" icon="pi pi-trash" className="btn btn-error" />
                <Link href={route('employee.create')} className='btn p-ripple btn-primary overflow-hidden'><i className="pi pi-pen-to-square"></i> Create <Ripple /></Link>
            </div>

            <div>

                {/* <Button type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
                <Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
                <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" /> */}

                <DataTable
                    showGridlines paginator
                    removableSort
                    value={employees}
                    paginatorRight
                    rowHover={true}
                    rows={5} rowsPerPageOptions={[5, 10, 25, 50, 100, 150]}
                    style={{ minWidth: '100%' }}
                    // scrollable scrollHeight="600px"
                    // virtualScrollerOptions={{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, loadingTemplate }}
                    selection={selectedProducts}
                    onSelectionChange={(e) => setSelectedProducts(e.value)}
                    dataKey="id"
                >
                    <Column selectionMode="multiple" headerClassName="bg-primary/80" headerStyle={{ width: '1.5rem' }}></Column>
                    <Column field='id' headerClassName="bg-primary/80" filter filterPlaceholder="Search by Id" header="Id"></Column>
                    <Column body={TableImage} headerClassName="bg-primary/80" align="center" filter filterPlaceholder="Search by Name" sortable header="Picture"></Column>
                    <Column field='name' headerClassName="bg-primary/80" filter filterPlaceholder="Search by Name" sortable header="Name"></Column>
                    <Column field="register_no" headerClassName="bg-primary/80" filter filterPlaceholder="Search by Register Number" sortable header="Register Number"></Column>
                    <Column field="role" headerClassName="bg-primary/80" filter filterPlaceholder="Search by Role" sortable header="Designation"></Column>
                    {/* <Column field="status" headerClassName="bg-primary/80" body={TableStatus} sortable filter filterPlaceholder="Search by Status" header="Status"   ></Column> */}
                    <Column headerClassName="bg-primary/80" header="Action" body={TableAction} ></Column>

                </DataTable>
            </div>

        </AuthenticatedLayout>
    )
}

export default Employee

