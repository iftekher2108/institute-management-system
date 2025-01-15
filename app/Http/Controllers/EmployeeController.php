<?php

namespace App\Http\Controllers;

use App\Models\employee;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function employee_index()
    {
        $employees = employee::get()->map(function ($employee) {
            $employee->image_url = $employee->picture ? asset('storage/' . $employee->picture) : null;
            return $employee;
        });
        return Inertia::render('employee/index',[
            'employees' => $employees
        ]);
    }

    public function employee_view_detail($id) {
        $employee = employee::find($id);
        $employee->image_url = $employee->picture ? asset('storage/' . $employee->picture) : null;
        return Inertia::render('employee/view-detail',[
            'employee' => $employee
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

      $request->validate([
            'name' => 'required|string',
            'register_no' => 'required|integer',
            'role' => 'required|string',
            'picture' => 'required|image|max:2048',
            'join_date' => 'required|date',
            'salary' => 'required|integer',

            'g_name' => 'nullable|string',
            'gender' => 'nullable|string',
            'experience' => 'nullable|integer',
            'nid' => 'nullable|integer',
            'religion' => 'nullable|string',
            'Last_edu' => 'nullable|string',
            'blood' => 'nullable|string',
            'dob' => 'nullable|date',
            'address' => 'nullable|string',
            'city' => 'nullable|string',
            'district' => 'nullable|string',
            'zipcode' => 'nullable',



            'email' => 'required',
            'password' => 'required',
       ]);

    //    dd($request->all());

        $employee = new employee();

        if($request->hasFile('picture')) {
            $file_path = 'employee/';
            $file_name = 'employee_'.time().'_'.date('d-m-Y').'.'.$request->picture->extension();
            $request->picture->storeAs($file_path,$file_name,'public');
            $employee->picture = $file_path . $file_name;
        }

        $employee->register_no = $request->register_no;
        $employee->name = $request->name;
        $employee->mobile = $request->mobile;
        $employee->role = $request->role;
        $employee->join_date = Carbon::parse($request->join_date)->format('Y-m-d');
        $employee->salary = $request->salary;

        $employee->g_name = $request->g_name;
        $employee->gender = $request->gender;
        $employee->experience = $request->experience;
        $employee->nid = $request->nid;
        $employee->religion = $request->religion;
        $employee->Last_edu = $request->last_edu;
        $employee->blood = $request->blood;
        $employee->dob = Carbon::parse($request->dob)->format('Y-m-d');
        $employee->address = $request->address;
        $employee->city = $request->city;
        $employee->district = $request->district;
        $employee->zipcode = $request->zipcode;

        $employee->email = $request->email;
        $employee->password = $request->password;
        // $employee->status =
        $employee->paid_date = date('Y-m-d');

        $employee->save();
        return redirect()->route('employee.index')->with('success','Employee Created Successfully!');


    }


    /**
     *  Update the specified resource
     */
    public function employee_edit($id)
    {
        $employee = employee::find($id);
        return Inertia::render('employee/edit',[
            'employee' => $employee
        ]);
    }


    /**
     * Update the specified resource in storage.
     */
    public function employee_update(Request $request,$id)
    {

        $request->validate([
            'name' => 'required|string',
            'register_no' => 'required|integer',
            'role' => 'required|string',
            'picture' => 'nullable|image|max:2048',
            'join_date' => 'required|date',
            'salary' => 'required|integer',

            'g_name' => 'nullable|string',
            'gender' => 'nullable|string',
            'experience' => 'nullable|integer',
            'nid' => 'nullable|integer',
            'religion' => 'nullable|string',
            'Last_edu' => 'nullable|string',
            'blood' => 'nullable|string',
            'dob' => 'nullable|date',
            'address' => 'nullable|string',
            'city' => 'nullable|string',
            'district' => 'nullable|string',
            'zipcode' => 'nullable',


            'email' => 'required',
            'password' => 'required',
       ]);


       $employee =employee::find($id);

        if($request->hasFile('picture')) {
            $file_path = 'employee/';
            $file_name = 'employee_'.time().'_'.date('d-m-Y').'.'.$request->picture->extension();
            $request->picture->storeAs($file_path,$file_name,'public');
            $employee->picture = $file_path . $file_name;
        }

        $employee->register_no = $request->register_no;
        $employee->name = $request->name;
        $employee->mobile = $request->mobile;
        $employee->role = $request->role;
        $employee->join_date = Carbon::parse($request->join_date)->format('Y-m-d');
        $employee->salary = $request->salary;

        $employee->g_name = $request->g_name;
        $employee->gender = $request->gender;
        $employee->experience = $request->experience;
        $employee->nid = $request->nid;
        $employee->religion = $request->religion;
        $employee->Last_edu = $request->last_edu;
        $employee->blood = $request->blood;
        $employee->dob = Carbon::parse($request->dob)->format('Y-m-d');
        $employee->address = $request->address;
        $employee->city = $request->city;
        $employee->district = $request->district;
        $employee->zipcode = $request->zipcode;

        $employee->email = $request->email;
        $employee->password = $request->password;
        // $employee->status =
        $employee->paid_date = date('Y-m-d');

        $employee->save();
        return redirect()->route('employee.index')->with('success','Employee Updated Successfully!');




    }

    /**
     * Remove the specified resource from storage.
     */
    public function employee_delete($id)
    {
        $employee = employee::find($id);
        $employee->delete();
        return redirect()->route('employee.index')->with('error','Employee Deleted Successfully!');
    }
}
