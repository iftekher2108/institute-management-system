<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('classrooms', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('teacher_id');
            $table->foreign('teacher_id')->references('id')->on('employee')->onDelete('cascade');
            $table->string('name');
            $table->float('fees');
            $table->timestamps();
        });

        Schema::create('teachers_in_classrooms',function(Blueprint $table) {
            $table->id();
            $table->string('teacher_id');
            $table->string('classroom_id');
         });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('classrooms');
        Schema::dropIfExists('teachers_in_classrooms');
    }
};
