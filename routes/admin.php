<?php

use App\Http\Controllers\EmployeeController;
use Illuminate\Support\Facades\Route;


Route::controller(EmployeeController::class)->group(function(){
    Route::get('employee','employee')->name('employee.index');
});





