<?php

use App\Http\Controllers\ClassroomController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EmployeeController;
use Inertia\Inertia;

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';

Route::middleware('auth')->group(function () {

    Route::controller(ProfileController::class)->group(function () {
        Route::get('/profile', 'edit')->name('profile.edit');
        Route::patch('/profile', 'update')->name('profile.update');
        Route::delete('/profile', 'destroy')->name('profile.destroy');
    });

    Route::controller(EmployeeController::class)->group(function () {
        Route::get('employee', 'employee_index')->name('employee.index');
        Route::get('employee/create', 'employee_create')->name('employee.create');
    });

    Route::controller(ClassroomController::class)->group(function () {
        Route::get('classroom', 'classroom_index')->name('classroom.index');
        Route::get('classroom/create', 'classroom_create')->name('classroom.create');
    });

});
