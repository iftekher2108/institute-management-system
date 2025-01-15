<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Classroom extends Model
{







    // public function teacher() {
    //     return $this->hasOne(employee::class,'id','teacher_id')->where('role','teacher');
    // }


    public function subject() {
        return $this->hasMany(subject::class,'class_id','id');
    }

    public function student() {
        return $this->hasMany(student::class,'class_id','id');
    }

}
