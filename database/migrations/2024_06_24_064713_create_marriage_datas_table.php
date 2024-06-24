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
        Schema::create('marriage_datas', function (Blueprint $table) {
            $table->id();
            $table->uuid('user_id');
            $table->string('slug');
            $table->string('male_partner');
            $table->string('female_partner');

            $table->string('male_partner_photo');
            $table->string('female_partner_photo');

            $table->string('male_address');
            $table->string('female_address');

            $table->string('father_male');
            $table->string('mother_male');

            $table->string('father_female');
            $table->string('mother_female');

            $table->string('marriage_date_akad');
            $table->string('marriage_date_resepsi');

            $table->string('place_marriage_akad');
            $table->string('place_marriage_resepsi');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('marriage_datas');
    }
};
