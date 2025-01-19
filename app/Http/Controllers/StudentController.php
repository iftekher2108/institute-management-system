<?php

namespace App\Http\Controllers;

use App\Models\Classroom;
use App\Models\Student;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function student_index()
    {
        $students = Student::with('classroom')->get()->map(function($student){
           $student->image_url = $student->picture ? asset('storage/' . $student->picture) : null;
            return $student;
        });

        return Inertia::render('student/index', [
            'students' => $students
        ]);
    }

    public function student_view_detail($id)
    {
        $student = student::with('classroom.subject.teacher')->find($id);
        $student->image_url = $student->picture ? asset('storage/' . $student->picture) : null;
        dd($student);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function student_create()
    {
        $classrooms = Classroom::get(['id', 'name']);
        return Inertia::render('student/create', [
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
            'mobile' => 'nullable',
            'roll' => 'nullable',
            'register_no' => 'required |integer',
            'date_of_admission' => 'required |date',
            'picture' => 'nullable|image|max:512',
            'discount_fee' => 'required |integer',

            'g_name' => 'nullable|string',
            'g_nid' => 'nullable|integer',
            'g_occupation' => 'nullable|string',
            'g_mobile' => 'nullable',
            'g_edu' => 'nullable|string',
            'g_profession' => 'nullable|string',
            'g_income' => 'nullable|integer',

            'm_name' => 'nullable|string',
            'm_nid' => 'nullable|integer',
            'm_occupation' => 'nullable|string',
            'm_mobile' => 'nullable',
            'm_edu' => 'nullable|string',
            'm_profession' => 'nullable|string',
            'm_income' => 'nullable|integer',

            'gender' => 'nullable',
            'religion' => 'nullable|string',
            'prev_school' => 'nullable|string',
            'prev_stu_reg' => 'nullable|integer',
            'prev_stu_roll' => 'nullable|integer',
            'massage_note' => 'nullable|string',
            'dob' => 'nullable|date',
            'bid' => 'nullable',
            'blood' => 'nullable|string',
            'identical_mark' => 'nullable|string',
            'orphan' => 'nullable|string',

            'address' => 'nullable|string',
            'city' => 'nullable|string',
            'district' => 'nullable|string',
            'zipcode' => 'nullable',


            'email' => 'required',
            'password' => 'required',

        ]);


        $student = new Student();

        if ($request->hasFile('picture')) {
            $file_path = 'student/';
            $file_name = 'student_' . time() . '_' . date('d-m-Y') . '.' . $request->picture->extension();
            $request->picture->storeAs($file_path, $file_name, 'public');
            $student->picture = $file_path . $file_name;
        }

        $student->class_id = $request->class_id;
        $student->name = $request->name;
        $student->mobile = $request->mobile;
        $student->roll = $request->roll;
        $student->register_no = $request->register_no;
        $student->date_of_admission = Carbon::parse($request->date_of_admission)->format('Y-m-d');
        $student->discount_fee = $request->discount_fee;

        $student->g_name = $request->g_name;
        $student->g_nid = $request->g_nid;
        $student->g_occupation = $request->g_occupation;
        $student->g_mobile = $request->g_mobile;
        $student->g_edu = $request->g_edu;
        $student->g_profession = $request->g_profession;
        $student->g_income = $request->g_income;

        $student->m_name = $request->m_name;
        $student->m_nid = $request->m_nid;
        $student->m_occupation = $request->m_occupation;
        $student->m_mobile = $request->m_mobile;
        $student->m_edu = $request->m_edu;
        $student->m_profession = $request->m_profession;
        $student->m_income = $request->m_income;

        $student->gender = $request->gender;
        $student->religion = $request->religion;
        $student->prev_school = $request->prev_school;
        $student->prev_stu_reg = $request->prev_stu_reg;
        $student->prev_stu_roll = $request->prev_stu_roll;
        $student->massage_note = $request->massage_note;
        $student->dob = Carbon::parse($request->dob)->format('Y-m-d');
        $student->bid = $request->bid;
        $student->blood = $request->blood;
        $student->identical_mark = $request->identical_mark;
        $student->orphan = $request->orphan;
        $student->address = $request->address;
        $student->city = $request->city;
        $student->district = $request->district;
        $student->zipcode = $request->zipcode;

        $student->email = $request->email;
        $student->password = $request->password;


        $student->paid_date = date('Y-m-d');

        $fees_amount = Classroom::where('id', $request->class_id)->first();
        $student->paid_fees = $fees_amount->fees;

        $student->save();
        return redirect()->route('student.index')->with('success', 'Student Created Successfully');
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function student_edit($id)
    {
        $student = student::find($id);
        $classrooms = classroom::get(['id', 'name']);
        return Inertia::render('student/edit', [
            'student' => $student,
            'classrooms' => $classrooms,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function student_update(Request $request, $id)
    {
        $request->validate([
            'class_id' => 'required|integer',
            'name' =>  'required|string',
            'register_no' => 'required',
            'date_of_admission' => 'required |date',
            'mobile' => 'nullable',
            'roll' => 'nullable',
            'picture' => 'nullable|image|max:512',
            'discount_fee' => 'required',

            'g_name' => 'nullable|string',
            'g_nid' => 'nullable',
            'g_occupation' => 'nullable|string',
            'g_mobile' => 'nullable',
            'g_edu' => 'nullable|string',
            'g_profession' => 'nullable|string',
            'g_income' => 'nullable',

            'm_name' => 'nullable|string',
            'm_nid' => 'nullable',
            'm_occupation' => 'nullable|string',
            'm_mobile' => 'nullable',
            'm_edu' => 'nullable|string',
            'm_profession' => 'nullable|string',
            'm_income' => 'nullable',

            'gender' => 'nullable',
            'religion' => 'nullable',
            'prev_school' => 'nullable|string',
            'prev_stu_reg' => 'nullable',
            'prev_stu_roll' => 'nullable',
            'massage_note' => 'nullable|string',
            'dob' => 'nullable|date',
            'bid' => 'nullable',
            'blood' => 'nullable',
            'identical_mark' => 'nullable|string',
            'orphan' => 'nullable',

            'address' => 'nullable|string',
            'city' => 'nullable|string',
            'district' => 'nullable|string',
            'zipcode' => 'nullable',


            'email' => 'required',
            'password' => 'required',


        ]);

        $student = student::find($id);

        if ($request->hasFile('picture')) {
            $file_path = 'student/';
            $file_name = 'student_' . time() . '_' . date('d-m-Y') . '.' . $request->picture->extension();
            $request->picture->storeAs($file_path, $file_name, 'public');
            $student->picture = $file_path . $file_name;
        }

        $student->class_id = $request->class_id;
        $student->name = $request->name;
        $student->register_no = $request->register_no;
        $student->mobile = $request->mobile;
        $student->roll = $request->roll;
        $student->date_of_admission = Carbon::parse($request->date_of_admission)->format('Y-m-d');
        $student->discount_fee = $request->discount_fee;

        $student->g_name = $request->g_name;
        $student->g_nid = $request->g_nid;
        $student->g_occupation = $request->g_occupation;
        $student->g_mobile = $request->g_mobile;
        $student->g_edu = $request->g_edu;
        $student->g_profession = $request->g_profession;
        $student->g_income = $request->g_income;

        $student->m_name = $request->m_name;
        $student->m_nid = $request->m_nid;
        $student->m_occupation = $request->m_occupation;
        $student->m_mobile = $request->m_mobile;
        $student->m_edu = $request->m_edu;
        $student->m_profession = $request->m_profession;
        $student->m_income = $request->m_income;

        $student->gender = $request->gender;
        $student->religion = $request->religion;
        $student->prev_school = $request->prev_school;
        $student->prev_stu_reg = $request->prev_stu_reg;
        $student->prev_stu_roll = $request->prev_stu_roll;
        $student->massage_note = $request->massage_note;
        $student->dob = Carbon::parse($request->dob)->format('Y-m-d');
        $student->bid = $request->bid;
        $student->blood = $request->blood;
        $student->identical_mark = $request->identical_mark;
        $student->orphan = $request->orphan;
        $student->address = $request->address;
        $student->city = $request->city;
        $student->district = $request->district;
        $student->zipcode = $request->zipcode;

        $student->email = $request->email;
        $student->password = $request->password;


        $student->paid_date = date('Y-m-d');

        $fees_amount = Classroom::where('id', $request->class_id)->first();
        $student->paid_fees = $fees_amount->fees;

        $student->save();
        return redirect()->route('student.index')->with('success', 'Student Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        //
    }
}
