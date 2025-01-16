<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\subject;
use App\Models\employee;
use App\Models\Classroom;
use Illuminate\Http\Request;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function subject_index()
    {
        $classrooms = Classroom::with('subject.teacher')->get();
        return Inertia::render('subject/index', [
            'classrooms' => $classrooms
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function subject_create()
    {
        $classrooms = Classroom::get(['id', 'name']);
        $teachers = employee::where('role','teacher')->where('status',1)->get(['id','name']);
        return Inertia::render('subject/create', [
            'classrooms' => $classrooms,
            'teachers' => $teachers,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function subject_store(Request $request)
    {
        $request->validate([
            'class_id' => 'required',
            'subjects' => 'required|array',
            'subjects.*.name' => 'required',
            'subjects.*.mark' => 'required|numeric',
        ]);

        // dd($request->all());

        foreach ($request->subjects as $sub) {
            $subject = new subject();
            $subject->class_id = $request->class_id;
            $subject->name = $sub['name'];
            $subject->mark = $sub['mark'];
            $subject->teacher_id = $sub['teacher_id'];
            $subject->save();
        }

        return redirect()->route('subject.index')->with('success', 'Subject Created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function subject_edit($id)
    {
        $classroom = Classroom::with('subject')->find($id);
        $teachers = employee::where('role','teacher')->where('status',1)->get(['id','name']);
        $classrooms = Classroom::get(['id', 'name']);
        return Inertia::render('subject/edit', [
            'classroom' => $classroom,
            'classrooms' => $classrooms,
            'teachers' => $teachers,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function subject_update(Request $request,$id)
    {
        $request->validate([
            'class_id' => 'required|exists:classrooms,id',
            'subjects' => 'required|array',
            'subjects.*.id' => 'nullable|exists:subjects,id',
            'subjects.*.name' => 'required|string|max:255',
            'subjects.*.mark' => 'required|integer|min:0',
        ]);

        // Update or create subjects
        foreach ($request->subjects as $sub) {
            if (isset($sub['id'])) {
                // Update existing subject
                $subject = Subject::find($sub['id']);
                $subject->class_id = $request->class_id;
                $subject->name = $sub['name'];
                $subject->mark = $sub['mark'];
                $subject->teacher_id = $sub['teacher_id'];
                $subject->save();
            } else {
                // Create new subject
                $subject = new Subject();
                $subject->class_id = $request->class_id;
                $subject->name = $sub['name'];
                $subject->mark = $sub['mark'];
                $subject->teacher_id = $sub['teacher_id'];
                $subject->save();
            }
        }

        return redirect()->route('subject.index')
            ->with('success', 'Subjects Updated Successfully');
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
