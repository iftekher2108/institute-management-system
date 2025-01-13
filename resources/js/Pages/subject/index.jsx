import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Card } from "primereact/card"
import { Link } from "@inertiajs/react"
function Sub_in_class({ }) {
    return (
        <AuthenticatedLayout
            header={
                'Sub-in-class'
            }
        >

            <div className="grid grid-flow-dense grid-cols-4 p-4 gap-3">

                <div className="col-span-1">
                    <Link>
                        <Card header={
                            <h3 className="text-lg font-bold capitalize text-white">
                                hello world!
                            </h3>
                        }
                        className="card btn">
                            <div>
                            
                            </div>
                        </Card>
                    </Link>

                </div>
            </div>

        </AuthenticatedLayout>
    )
}

export default Sub_in_class

