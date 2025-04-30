<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        // return response()->json(User::all());
    }

    public function store(Request $request)
    {
        // $user = User::create($request->all());
        // return response()->json($user, 201);
    }

    public function show($id)
    {
        // return response()->json(User::findOrFail($id));
    }

    public function update(Request $request, $id)
    {
        // $user = User::findOrFail($id);
        // $user->update($request->all());
        // return response()->json($user);
    }

    public function destroy($id)
    {
        // User::destroy($id);
        // return response()->json(null, 204);
    }
}
