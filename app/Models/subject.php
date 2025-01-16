<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class subject extends Model
{



    protected $fillable = [
        'class_id',
        'name',
        'mark',
        'teacher_id',
    ];



    public function teacher() {
        return $this->belongsTo(employee::class,'teacher_id','id');
    }

}
