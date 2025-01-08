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
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->bigInteger('role');
            $table->string('password');
            $table->string('mobile')->nullable();
            $table->string('picture')->nullable();
            $table->date('join_date');
            $table->float('salary');
            $table->enum('gender', ["male","female"]);
            $table->string('experience')->nullable();
            $table->string('nid')->nullable();
            $table->string('religion')->nullable();
            $table->string('Last_edu')->nullable();
            $table->string('blood')->nullable();
            $table->date('dob')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('zip')->nullable();
            $table->bigInteger('status')->nullable();
            $table->date('paid_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
