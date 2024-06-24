<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            ['name' => 'administrator', 'canAccess' => true],
            ['name' => 'user', 'canAccess' => true],
        ];

        foreach ($roles as $roles) {
            Role::create($roles);
        }
    }
}
