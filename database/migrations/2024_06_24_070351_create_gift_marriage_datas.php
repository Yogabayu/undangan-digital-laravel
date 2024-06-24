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
        Schema::create('gift_marriage_data', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('marriage_id');
            $table->string('credit_card_number');
            $table->string('bank_type_gift');
            $table->timestamps();

            $table->foreign('marriage_id')->references('id')->on('marriage_datas');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gift_marriage_data');
    }
};
