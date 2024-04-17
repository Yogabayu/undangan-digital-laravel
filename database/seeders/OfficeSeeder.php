<?php

namespace Database\Seeders;

use App\Models\Office;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class OfficeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $offices = [
            ['id' => Str::uuid(), 'code' => 'KPCBN', 'name' => 'Kantor Pusat Caruban'],
            ['id' => Str::uuid(), 'code' => 'KCPON', 'name' => 'Kantor Cabang Ponorogo'],
            ['id' => Str::uuid(), 'code' => 'KCMDN', 'name' => 'Kantor Cabang Madiun'],
            ['id' => Str::uuid(), 'code' => 'KCMTN', 'name' => 'Kantor Cabang Magetan'],
        ];

        foreach ($offices as $office) {
            Office::create($office);
        }
    }
}
