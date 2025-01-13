import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { DataTable } from "primereact/datatable";
import { Ripple } from "primereact/ripple";
import { Column } from "primereact/column";
import { Menu } from "primereact/menu";
import { Link } from "@inertiajs/react";
import { Button } from "primereact/button";
import { useState,useRef } from "react";



// function TableImage(RowData) {
//     return (
//         <>
//             <Image src={RowData.image_url} imageClassName="rounded-lg size-14" className="rounded-lg" preview />
//         </>
//     )
// }


function TableAction(RowData) {

    const menu = useRef()

    const itemRender = (item) => (
        <div className='p-menuitem-content'>
            <Link href={item.url} className="flex align-items-center p-menuitem-link" method={item.method} >
                <span className={item.icon} />
                <span className="mx-2">{item.label}</span>
                {/* {item.badge && <Badge className="ml-auto" value={item.badge} />}
                {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>} */}
            </Link>
        </div>
    )

    const items = [
        // {
        //     icon: 'pi pi-eye',
        //     label: 'View Details',
        //     url: route('employee.view_detail',RowData.id),
        //     template: itemRender
        // },
        {
            icon: 'pi pi-pen-to-square',
            label: 'Edit',
            url: route('classroom.edit',RowData.id),
            method: 'GET',
            template: itemRender
        },
        {
            icon: 'pi pi-trash',
            label: "Delete",
            url: route('classroom.delete',RowData.id),
            method:'DELETE',
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




function Classroom({classrooms}) {

    const [selectedProducts, setSelectedProducts] = useState([null])

    return(
        <AuthenticatedLayout
        header={
            'Class room'
        }>
            <div className="flex justify-between mb-4">
                <Button label="All Delete" icon="pi pi-trash" className="btn btn-error" />
                <Link href={route('classroom.create')} className='btn p-ripple btn-primary overflow-hidden'><i className="pi pi-pen-to-square"></i> Create <Ripple /></Link>
            </div>

            <div>

                {/* <Button type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
                <Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
                <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" /> */}

                <DataTable
                    showGridlines paginator
                    removableSort
                    value={classrooms}
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
                    <Column field='id' headerClassName="bg-primary/80" style={{ width:'2rem' }} filter filterPlaceholder="Search by Id" header="Id"></Column>
                    <Column field='name' headerClassName="bg-primary/80" filter filterPlaceholder="Search by Name" sortable header="Name"></Column>
                    <Column field='teacher.name' headerClassName="bg-primary/80" filter filterPlaceholder="Search by Teacher" sortable header="Assigned Teacher"></Column>
                    <Column field='fees' headerClassName="bg-primary/80" filter headerStyle={{ width: '1.5rem' }} filterPlaceholder="Search by Fees" header="Fees"></Column>
                    <Column headerClassName="bg-primary/80" header="Action" body={TableAction} ></Column>

                </DataTable>
            </div>
        </AuthenticatedLayout>
    )
}

export default Classroom
