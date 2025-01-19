<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class instituteProfile extends Model
{
    protected $fillable = [
        'logo',
        'name',
        'mobile_1',
        'mobile_2',
        'address',
        'country',
        'website',
        'district',
        'city',
        'zipcode',
        'rules_regulations',
    ];

}
