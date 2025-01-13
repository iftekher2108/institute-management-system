<?php

namespace App\Http\Controllers;

use App\Models\Classroom;
use App\Models\subject;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function sub_in_class()
    {
        $classrooms = Classroom::with('subject')->get();
        return Inertia::render('subject/index',[
            'classrooms' => $classrooms
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function sub_create()
    {
        $classrooms = Classroom::get(['id','name']);
        return Inertia::render('subject/create',[
           'classrooms' => $classrooms
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function subject_store(Request $request)
    {
        $request->validate([
            'class' => 'required|string',
            'subjects' => 'required|array',
            'subjects.*.name' => 'required|string',
            'subjects.*.marks' => 'required|integer',
        ]);

        foreach($request->subjects as $sub) {
        $subject = new subject();
        $subject->class_id = $request->class_id;
        $subject->name = $sub['name'];
        $subject->mark = $sub['mark'];
        $subject->save();
        }

        return redirect()->route('subject.index')->with('success', 'Subject Assign Successfully');

    }

    /**
     * Display the specified resource.
     */
    public function show(subject $subject)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(subject $subject)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, subject $subject)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(subject $subject)
    {
        //
    }
}
