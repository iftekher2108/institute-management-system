<?php

namespace App\Http\Controllers;

use App\Models\Classroom;
use App\Models\employee;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClassroomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function classroom_index()
    {
        $classrooms = Classroom::with('teacher')->get();
        return Inertia::render('classroom/index',[
            'classrooms' => $classrooms
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function classroom_create()
    {
        $teachers = employee::where('role','teacher')->where('status',1)->get();
        return Inertia::render('classroom/create',[
            'teachers' => $teachers
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function classroom_store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'fees' => 'required',
            'teacher_id' => 'required',
        ]);

        $classroom = new Classroom();
        $classroom->name = $request->name;
        $classroom->fees = $request->fees;
        $classroom->teacher_id = $request->teacher_id;
        $classroom->save();
        return redirect()->route('classroom.index')->with('success','Class room Created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Classroom $classroom)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Classroom $classroom)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Classroom $classroom)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Classroom $classroom)
    {
        //
    }
}
