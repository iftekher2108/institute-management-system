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
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->bigInteger('register_no');
            $table->unsignedBigInteger('class_id');
            $table->foreign('class_id')->references('id')->on('classrooms')->onDelete('cascade');
            $table->string('picture')->nullable();
            $table->date('date_of_admission');
            $table->bigInteger('discount_fee')->default(0);

            $table->string('mobile')->nullable();
            $table->date('dob')->nullable();
            $table->string('bid')->nullable();
            $table->boolean('orphan')->nullable()->default(0);
            $table->enum('gender', ["male","female"])->nullable();
            $table->string('identical_mark')->nullable();
            $table->string('prev_school')->nullable();
            $table->string('religion')->nullable();
            $table->string('blood')->nullable();
            $table->bigInteger('prev_stu_reg')->nullable();
            $table->bigInteger('prev_stu_roll')->nullable();
            $table->text('massage_note')->nullable();
            $table->string('g_name')->nullable();
            $table->bigInteger('g_nid')->nullable();
            $table->text('g_occupation');
            $table->string('g_edu')->nullable();
            $table->string('g_mobile')->nullable();
            $table->string('g_profession')->nullable();
            $table->float('g_income')->nullable();
            $table->string('m_name')->nullable();
            $table->bigInteger('m_nid')->nullable();
            $table->text('m_occupation')->nullable();
            $table->string('m_edu')->nullable();
            $table->string('m_mobile')->nullable();
            $table->string('m_profession')->nullable();
            $table->string('m_income')->nullable();

            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('district')->nullable();
            $table->string('zipcode')->nullable();

            $table->string('email');
            $table->string('password');
            $table->bigInteger('status')->default(1);

            $table->date('paid_date')->nullable();
            $table->bigInteger('paid_fees')->nullable();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
