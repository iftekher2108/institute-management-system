<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class employee extends Model
{

    protected $fillable = [
        'name',
        'email',
        'role',
        'password',
        'mobile',
        'picture',
        'join_date',
        'salary',
        'gender',
        'experience',
        'nid',
        'religion',
        'Last_edu',
        'blood',
        'dob',
        'address',
        'city',
        'district',
        'zipcode',
        'status',
        'paid_date',

    ];




}
