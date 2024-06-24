<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = DB::table('roles')->pluck('id');
        $users = [
            [
                'id' => Str::uuid(),
                'role_id' => $roles[0],
                'username' => 'admin',
                'email' => 'lZ5DZ@example.com',
                'password' => Hash::make('12345678'),
                'activeUntil' => now()->addYears(10), // seribu tahun (1000 years)
                'isAdmin' => true,
            ],
            [
                'id' => Str::uuid(),
                'role_id' => $roles[1],
                'username' => 'user-tester',
                'email' => 'user-tester@example.com',
                'password' => Hash::make('12345678'),
                'activeUntil' => now()->addYears(10), // 1 year
                'isAdmin' => false,
            ],
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}
