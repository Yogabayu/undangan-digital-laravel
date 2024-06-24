<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    use HasFactory;
    protected $fillable = [
        'catTemp_id',
        'name',
        'desc',
    ];

    public function catTemp()
    {
        return $this->belongsTo(CategoryTemplate::class, 'catTemp_id', 'id');
    }
}
