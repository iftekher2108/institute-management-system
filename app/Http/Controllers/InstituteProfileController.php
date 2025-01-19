<?php

namespace App\Http\Controllers;

use App\Models\instituteProfile;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InstituteProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function institute_profile()
    {
        $instituteProfile = instituteProfile::first();
        $instituteProfile->logo_url = $instituteProfile->logo ? asset('storage/'. $instituteProfile->logo) :  null;
        return Inertia::render('general_settings/institute_profile',[
            'instituteProfile' => $instituteProfile
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function institute_profile_store(Request $request,$id)
    {
        $request->validate([
            'logo' => 'nullable|image|max:512',
            'name' => 'required',
            'mobile_1' => 'required',
        ]);

        if($request->hasFile('logo')) {
            $file_name = 'logo_'.time().'_'.date('Y-m-d').'.'.$request->logo->extension();
            $file_path = 'logo/';
            $request->logo->storeAs($file_path,$file_name,'public');
            $logo = $file_path . $file_name;
        } else {
            $logo = null;
        }

        instituteProfile::where('id',$id)->update([
            'logo' => $logo,
            'name' => $request->name,
            'mobile_1' => $request->mobile_1,
            'mobile_2' => $request->mobile_2,
            'email_1' => $request->email_1,
            'email_2' => $request->email_2,
            'address' => $request->address,
            'country' => $request->country,
            'website' => $request->website,
            'district' => $request->district,
            'city' => $request->city,
            'zipcode' => $request->zipcode,
            'rules_regulations' => $request->rules_regulations
        ]);

        return redirect()->route('dashboard')->with('success','Institute Profile updated successfully');


    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(instituteProfile $instituteProfile)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(instituteProfile $instituteProfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, instituteProfile $instituteProfile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(instituteProfile $instituteProfile)
    {
        //
    }
}
