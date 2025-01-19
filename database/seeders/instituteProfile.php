<?php

namespace Database\Seeders;

use App\Models\instituteProfile as ModelsInstituteProfile;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class instituteProfile extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ModelsInstituteProfile::create([
                'name' => 'example Institute',
                'mobile_1' => '01833453445',
                'mobile_2' => '01833453445',
                'email_1' => 'example1@example.com',
                'email_2' => 'example2@example.com',
                'address' => 'Kushtia, Dhaka',
                'country' => 'Kushtia',
                'website' => 'examplewebsite.com',
                'district' => 'Kushtia',
                'city' => 'Kushtia',
                'zipcode' => '7040',
                'rules_regulations' => 'example rules goes here',
        ]);
    }
}
