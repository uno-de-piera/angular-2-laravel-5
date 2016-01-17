<?php

Route::get('/', function () {
    return view("bootstrap");
});

Route::get("/api/animals", function() {
    return response()->json([['name' => 'dog'], ['name' => 'cat'], ['name' => 'elephant'], ['name' => 'elk'], ['name' => 'spider']]);
});

Route::group(['middleware' => ['web']], function () {
    //
});

Route::group(['middleware' => 'web'], function () {
    Route::auth();

    Route::get('/home', 'HomeController@index');
});
