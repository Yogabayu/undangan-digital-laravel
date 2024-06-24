<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OtherMarriageData extends Model
{
    use HasFactory;

    protected $table = 'other_marriage_datas';
    protected $fillable = [
        'marriage_id',
        'others',
    ];

    public function marriage()
    {
        return $this->belongsTo(MarriageData::class, 'marriage_id', 'id');
    }
}
