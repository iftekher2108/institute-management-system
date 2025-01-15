import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { useForm } from "@inertiajs/react";
import { FloatLabel } from "primereact/floatlabel";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function Subject_edit({ classroom, classrooms, teachers }) {
    const { data, setData, processing, put, reset, errors } = useForm({
        class_id: classroom.id,
        subjects: classroom.subject.map((subject) => ({
            id: subject.id,
            name: subject.name,
            mark: subject.mark,
            teacher_id: subject.teacher_id
        })),
    });

    function handleAddMore() {
        setData("subjects", [
            ...data.subjects,
            { id: null, name: "", mark: "",teacher_id:'' },
        ]);
    }

    function handleRemove(index) {
        const newSubjects = data.subjects.filter((_, i) => i !== index);
        setData("subjects", newSubjects);
    }

    function handleChange(index, field, value) {
        const newSubjects = [...data.subjects];
        newSubjects[index][field] = value;
        setData("subjects", newSubjects);
    }

    function reset_form() {
        reset();
    }

    function handleSubmit() {
        put(route("subject.update", classroom.id), {
            onSuccess: () => reset(),
        });
    }

    return (
        <AuthenticatedLayout header={"Subject Edit & Assign"}>
            <div className="lg:grid grid-cols-2 gap-2 mb-3">
                <div className="col-span-1">
                    <div className="my-3">
                        <FloatLabel>
                            <Dropdown
                                value={data.class_id}
                                onChange={(e) =>
                                    setData("class_id", e.target.value)
                                }
                                filter
                                optionValue="id"
                                id="classroom"
                                options={classrooms}
                                optionLabel="name"
                                className="w-full mb-1"
                            />

                            <label htmlFor="classroom">
                                Class Room{" "}
                                <span className="text-red-500">*</span>
                            </label>
                        </FloatLabel>
                        {errors.class_id && (
                            <span className="text-red-500">
                                {errors.class_id}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <h3 className="text-lg text-white/85 border-b border-primary py-2 mb-6">
                <span className="p-3 bg-primary rounded-t">Subject</span>
            </h3>

            {data.subjects.map((subject, index) => (
                <div
                    key={index}
                    className="grid grid-cols-7 gap-2 items-center"
                >
                    <div className="col-span-2">
                        <div className="my-3">
                            <FloatLabel>
                                <InputText
                                    id="name"
                                    value={subject.name}
                                    className="w-full mb-1"
                                    onChange={(e) =>
                                        handleChange(
                                            index,
                                            "name",
                                            e.target.value
                                        )
                                    }
                                />
                                <label htmlFor="name">
                                    Subject Name{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                            </FloatLabel>
                            {errors[`subjects.${index}.name`] && (
                                <span className="text-red-500">
                                    {errors[`subjects.${index}.name`]}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="my-3">
                            <FloatLabel>
                                <InputText
                                    id="mark"
                                    type="number"
                                    value={subject.mark}
                                    className="w-full mb-1"
                                    onChange={(e) =>
                                        handleChange(
                                            index,
                                            "mark",
                                            e.target.value
                                        )
                                    }
                                />
                                <label htmlFor="mark">
                                    Mark <span className="text-red-500">*</span>
                                </label>
                            </FloatLabel>
                            {errors[`subjects.${index}.mark`] && (
                                <span className="text-red-500">
                                    {errors[`subjects.${index}.mark`]}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="my-3">
                            <FloatLabel>
                                <Dropdown
                                    value={subject.teacher_id}
                                    onChange={(e) =>
                                        handleChange(
                                            index,
                                            "teacher_id",
                                            e.target.value
                                        )
                                    }
                                    filter
                                    optionValue="id"
                                    options={teachers}
                                    optionLabel="name"
                                    className="w-full mb-1"
                                />

                                <label>
                                    Teacher
                                    <span className="text-red-500">*</span>
                                </label>
                            </FloatLabel>
                            {errors[`subjects.${index}.teacher_id`] && (
                                <span className="text-red-500">
                                    {errors[`subjects.${index}.teacher_id`]}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="my-3">
                            {index > 0 && (
                                <Button
                                    icon="pi pi-trash"
                                    onClick={() => handleRemove(index)}
                                    className="btn pt-4 btn-error"
                                />
                            )}
                        </div>
                    </div>
                </div>
            ))}

            <div className="flex gap-4 justify-end mb-10">
                <Button
                    icon="pi pi-plus"
                    label="Add More"
                    onClick={handleAddMore}
                    className="btn btn-secondary"
                />
            </div>

            <div className="flex flex-wrap gap-3 justify-between mb-3">
                <Button
                    label="Reset"
                    icon="pi pi-replay"
                    onClick={() => reset_form()}
                    className="btn btn-error"
                />
                <Button
                    label="Update"
                    icon="pi pi-save"
                    onClick={handleSubmit}
                    disabled={processing}
                    className="btn btn-primary"
                />
            </div>
        </AuthenticatedLayout>
    );
}

export default Subject_edit;
