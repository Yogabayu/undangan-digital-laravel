<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MarriageWhises extends Model
{
    use HasFactory;

    protected $table = 'marriage_whises';
    protected $fillable = [
        'marriage_id',
        'name',
        'whises',
        'presence',
    ];

    public function marriage()
    {
        return $this->belongsTo(MarriageData::class, 'marriage_id', 'id');
    }
}
