<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('formdatas', 'FormDataController@getJSON');
Route::get('formdatas', function () {
    $path = storage_path() . "/json/dummy.json"; // ie: /var/www/laravel/app/storage/json/filename.json
    $jsonfile = file_get_contents($path);
    $json = json_decode($jsonfile, true);
    return $json;
});