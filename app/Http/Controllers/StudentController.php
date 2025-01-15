<?php

namespace App\Http\Controllers;

use App\Models\Classroom;
use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function student_index()
    {
        $students = Student::get();
        return Inertia::render('student/index',[
            'students' => $students
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function student_create()
    {
        $classrooms = Classroom::get(['id','name']);
        return Inertia::render('student/create',[
            'classrooms' => $classrooms
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function student_store(Request $request)
    {
        $request->validate([
            'class_id' => 'required|integer',
            'name' =>  'required|string',
            'register_no' => 'required |integer',
            'date_of_admission' => 'required |date',
            'discount_fee' => 'required |integer',
            'mobile' => 'required|integer',
            'g_name' => 'required|string',
            'g_nid' => 'required|integer',
            'g_occupation' => 'required|string',
            


        ]);


        // $student = new Student();


    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        //
    }
}
