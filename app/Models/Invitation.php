<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invitation extends Model
{
    use HasFactory;

    protected $table = 'invitations';
    protected $fillable = [
        'marriage_id',
        'name',
    ];

    public function marriage()
    {
        return $this->belongsTo(MarriageData::class, 'marriage_id', 'id');
    }
}
