<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GiftMarriageData extends Model
{
    use HasFactory;

    protected $table = 'gift_marriage_datas';
    protected $fillable = [
        'marriage_id',
        'credit_card_number',
        'bank_type_gift',
    ];

    public function marriage()
    {
        return $this->belongsTo(MarriageData::class, 'marriage_id', 'id');
    }
}
