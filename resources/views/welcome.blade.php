<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Mangoding Starting Template</title>
    <script src="{{ asset('js/app.js') }}" defer></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:500,600,700">
    <link rel="stylesheet" href="{{ asset('css/app.css')}}">
</head>

<body>
    <div id="app">
        <my-app></my-app>
    </div>
</body>

</html>