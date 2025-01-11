<?php

namespace App\Http\Controllers;

use App\Models\employee;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function employee_index()
    {
        $employees = employee::get();
        return Inertia::render('employee/index',[
            'employees' => $employees
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function employee_create()
    {
        return Inertia::render('employee/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function employee_store(Request $request)
    {
       $validator = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'mobile' => 'nullable',
            'role' => 'required',
            'picture' => 'nullable|image|max:2048',
            'join_date' => 'required',
            'salary' => 'required',
            'gender' => 'nullable',
            'experience' => 'nullable',
            'nid' => 'nullable',
            'religion' => 'nullable',
            'Last_edu' => 'nullable',
            'blood' => 'nullable',
            'dob' => 'nullable',
            'address' => 'nullable',
            'city' => 'nullable',
            'state' => 'nullable',
            'zip' => 'nullable',
            'status' => 'nullable',
            'paid_date' => 'required',

        ]);

        if(isset($validator['picture'])) {
            $file_name = 'Employees'.time().'_'.date('d-m-Y').$validator['picture']->extension();
            $file_path = 'employees/';
            $validator['picture']->storeAs($file_path,$file_name,'public');
            
        }




    }


    /**
     * Display the specified resource.
     */
    public function show(employee $employee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, employee $employee)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(employee $employee)
    {
        //
    }
}
