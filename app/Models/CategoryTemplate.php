<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryTemplate extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $table = 'category_templates';
    protected $fillable = [
        'name',
    ];
}
