<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <form action="index.php" method="get">
        <label for="id">id</label>
        <input type="text" id="id" name="id"><br>
        <label for="nom">Nom</label>
        <input type="text" id="nom" name="nom"><br>
        <label for="type">Type</label>
        <select id="type" name="type">
            <option value="">-- Choisir --</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="bug">Bug</option>
            <option value="normal">Normal</option>
            <option value="poison">Poison</option>
            <option value="electric">Electric</option>
            <option value="ground">Ground</option>
            <option value="fairy">Fairy</option>
            <option value="fighting">Fighting</option>
            <option value = "flying">Flying</option>
            <option value = "psychic">Psychic</option>
            <option value = "rock">Rock</option>
            <option value = "ghost">Ghost</option>
            <option value = "ice">Ice</option>
            <option value = "dragon">Dragon</option>
            <option value = "dark">Dark</option>
            <option value = "steel">Steel</option>

        </select><br>
        <button type="button" id="filtrer">Filtrer</button>
    </form>
    <h2>Résultats</h2>
    <ul id="results"></ul>
    

<script src = "./script.js"></script>
</body>
</html>