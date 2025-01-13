<?php

use App\Http\Controllers\ClassroomController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\SubjectController;
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
        Route::get('employee/{id}/view-detail', 'employee_view_detail')->name('employee.view_detail');
        Route::post('employee/store','employee_store')->name('employee.store');
        Route::get('employee/{id}/edit','employee_edit')->name('employee.edit');
    });

    Route::controller(ClassroomController::class)->group(function () {
        Route::get('classroom', 'classroom_index')->name('classroom.index');
        Route::get('classroom/create', 'classroom_create')->name('classroom.create');
        Route::post('classroom/store', 'classroom_store')->name('classroom.store');
        Route::get('classroom/{id}/edit', 'classroom_edit')->name('classroom.edit');
        Route::put('classroom/{id}/update', 'classroom_update')->name('classroom.update');
        Route::delete('classroom/{id}/delete', 'classroom_delete')->name('classroom.delete');
    });

    Route::controller(SubjectController::class)->group(function(){
        Route::get('subject','subject_index')->name('subject.index');
        Route::get('subject/create','subject_create')->name('subject.create');
        Route::post('subject/store','subject_store')->name('subject.store');
        Route::get('subject/{id}/edit','subject_edit')->name('subject.edit');
        Route::put('subject/{id}/update','subject_update')->name('subject.update');
    });

});
