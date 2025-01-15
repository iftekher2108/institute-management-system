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
            method: 'get',
            template: itemRender
        },
        {
            icon: 'pi pi-trash',
            label: "Delete",
            url: route('classroom.delete',RowData.id),
            method:'delete',
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

            <div>

                {/* <Button type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
                <Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
                <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" /> */}

                {/* <DataTable
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

                </DataTable> */}
            </div>

            <div className="flex justify-end gap-3">

                <Link href={route('classroom.create')}  className="btn btn-primary p-ripple"><i className="pi pi-pen-to-square"></i> Create <Ripple /></Link>
            </div>

            <div className="grid grid-flow-dense grid-cols-3 p-4 gap-3">

                {
                    classrooms.map((classroom) => (
                        <div key={classroom.id} className="col-span-1">
                            <div className="card w-full shadow-lg border border-primary overflow-hidden bg-accent">
                            <div className="flex justify-between gap-3 text-lg items-center p-4 font-bold w-full capitalize text-white">
                                    <span className="text-xl">{classroom.name}</span>
                                    <div className="flex gap-3">
                                        <Link href={route('classroom.edit', classroom.id)} ><i className="pi p-3 bg-primary rounded p-ripple pi-pencil"><Ripple/></i></Link>
                                        <Link href={route('classroom.delete', classroom.id)} method="delete" ><i className="pi p-3 bg-error rounded p-ripple pi-trash"><Ripple/></i></Link>
                                    </div>
                                </div>
                                <div className="card-body">

                                    <div className="flex justify-between gap-2 mb-1">
                                        {/* <span>Total Subject: </span> <span>{classroom.subject.length}</span> */}
                                    </div>

                                    <hr />

                                    <div className="lg:grid grid-cols-3 gap-5 p-1 justify-between">
                                        <div className="col-span-1">
                                            <h3 className="text-primary">
                                                Student
                                            </h3>
                                        </div>

                                        <div className="col-span-1">
                                            <p>-</p>
                                        </div>

                                        <div className="col-span-1">
                                            <h3 className="text-primary">
                                                Total
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="lg:grid grid-cols-3 gap-5  p-1 justify-between">
                                            <div className="col-span-1">
                                                <p>
                                                    Boys
                                                </p>
                                            </div>

                                            <div className="col-span-1">
                                                <p>-</p>
                                            </div>

                                            <div className="col-span-1">
                                                <p>
                                                    { classroom.student.filter(student => student.gender === 'male').length }
                                                </p>
                                            </div>
                                        </div>

                                        <div className="lg:grid grid-cols-3 gap-5  p-1 justify-between">
                                            <div className="col-span-1">
                                                <p>
                                                    Girls
                                                </p>
                                            </div>

                                            <div className="col-span-1">
                                                <p>-</p>
                                            </div>

                                            <div className="col-span-1">
                                                <p>
                                                { classroom.student.filter(student => student.gender === 'female').length }
                                                </p>
                                            </div>
                                        </div>
                                    {/* {classroom.subject.map((subject) => (
                                        <div key={subject.id} className="lg:grid grid-cols-3 gap-5  p-1 justify-between">
                                            <div className="col-span-1">
                                                <p>
                                                    {subject.name}
                                                </p>
                                            </div>

                                            <div className="col-span-1">
                                                <p>-</p>
                                            </div>

                                            <div className="col-span-1">
                                                <p>
                                                    {subject.mark}
                                                </p>
                                            </div>
                                        </div>
                                    ))} */}

                                    <hr />

                                    <div className="flex justify-between gap-2 mb-1">
                                        <span>Total: </span>{classroom.student.reduce((total, subject) => total + Number(subject.mark), 0)}
                                    </div>

                                </div>
                            </div>

                        </div>
                    ))
                }

            </div>

        </AuthenticatedLayout>
    )
}

export default Classroom
