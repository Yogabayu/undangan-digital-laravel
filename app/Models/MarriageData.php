<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MarriageData extends Model
{
    use HasFactory;
    protected $table = 'marriage_datas';
    protected $fillable = [
        'user_id',
        'slug',
        'male_partner',
        'female_partner',
        'male_partner_photo',
        'female_partner_photo',
        'male_address',
        'female_address',
        'father_male',
        'mother_male',
        'father_female',
        'mother_female',
        'marriage_date_akad',
        'marriage_date_resepsi',
        'place_marriage_akad',
        'place_marriage_resepsi',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
