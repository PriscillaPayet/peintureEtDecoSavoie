<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
       // Valider les données du formulaire 
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'message' => 'required|string',
        ]);

         // Extraire les données validées
        $data = [
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'phone' => $validatedData['phone'],
            'message' => $validatedData['message'],
        ];

        // Envoyer l'email
        Mail::send('contact.blade.php', $data, function ($message) use ($data) {
            $message->from(env('MAIL_FROM_ADDRESS', 'default-email@example.com'), env('MAIL_FROM_NAME', 'Default Name'));
            $message->to(env('STORE_EMAIL')) // Adresse email du magasin
                    ->subject('Un nouveau formulaire a été envoyé');
        });

        // Répondre avec un message JSON indiquant que l'email a été envoyé avec succès
        return response()->json(['message' => 'Email sent successfully'], 200);
    }
}