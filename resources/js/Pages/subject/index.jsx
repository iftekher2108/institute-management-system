import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Card } from "primereact/card";
import { Link } from "@inertiajs/react";
import { Tooltip } from "primereact/tooltip";
import { Ripple } from "primereact/ripple/ripple.esm";
function Sub_in_class({ classrooms }) {
    return (
        <AuthenticatedLayout header={"Subject in Class"}>
            <div className="flex justify-end gap-3">
                <Link
                    href={route("subject.create")}
                    className="btn p-ripple btn-primary"
                >
                    <i className="pi pi-pen-to-square"></i> Create
                    <Ripple />
                </Link>
            </div>

            <div className="grid grid-flow-dense grid-cols-2 p-4 gap-3">
                {classrooms.map((classroom) => (
                    <div key={classroom.id} className="col-span-1">
                        <div className="card w-full shadow-lg border border-primary overflow-hidden bg-accent">
                            <div className="flex justify-between gap-3 items-center text-lg p-4 font-bold w-full capitalize text-white">
                                <span className="text-xl">
                                    {classroom.name}
                                </span>
                                <div className="flex gap-3">
                                    <Link
                                        href={route(
                                            "subject.edit",
                                            classroom.id
                                        )}
                                    >
                                        <i className="pi p-3 bg-primary rounded p-ripple pi-pencil">
                                            <Ripple />
                                        </i>
                                    </Link>
                                    {/* <Link
                                        href={route(
                                            "subject.detail",
                                            classroom.id
                                        )}
                                    >
                                        <i className="pi p-3 bg-error rounded p-ripple pi-trash">
                                            <Ripple />
                                        </i>
                                    </Link> */}
                                    {/* <Link
                                        href={route(
                                            "subject.edit",
                                            classroom.id
                                        )}
                                    >
                                        <i className="pi p-3 bg-error rounded p-ripple pi-trash">
                                            <Ripple />
                                        </i>
                                    </Link> */}
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="flex justify-between gap-2 mb-1">
                                    <span>Total Subject: </span>
                                    {classroom.subject.length}
                                </div>

                                <hr />

                                <div className="lg:grid grid-cols-3 gap-3 p-1 justify-between">
                                    <div className="col-span-1">
                                        <h3 className="text-primary">
                                            Subject
                                        </h3>
                                    </div>

                                    <div className="col-span-1">
                                        <h3 className="text-primary">Mark</h3>
                                    </div>

                                    <div className="col-span-1">
                                        <h3 className="text-primary">Teacher</h3>
                                    </div>
                                </div>
                                {classroom.subject.map((subject) => (
                                    <div
                                        key={subject.id}
                                        className="lg:grid grid-cols-3 gap-5  p-1 justify-between"
                                    >
                                        <div className="col-span-1">
                                            <p>{subject.name}</p>
                                        </div>

                                        <div className="col-span-1">
                                            <p>{subject.mark}</p>
                                        </div>

                                        <div className="col-span-1">
                                            <p>{subject.teacher?.name || 'No Teacher Assigned' }</p>
                                        </div>
                                    </div>
                                ))}

                                <hr />

                                <div className="flex justify-between gap-2 p-1 mb-1">
                                    <span>Total Marks: </span>
                                    {classroom.subject.reduce(
                                        (total, subject) =>
                                            total + Number(subject.mark),
                                        0
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}

export default Sub_in_class;
