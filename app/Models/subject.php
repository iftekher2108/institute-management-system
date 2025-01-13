<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class subject extends Model
{



    protected $fillable = [
        'class_id',
        'name',
        'mark',
    ];

}
