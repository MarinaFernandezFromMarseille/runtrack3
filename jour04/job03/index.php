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
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Grass">Grass</option>
            <option value="Bug">Bug</option>
            <option value="Normal">Normal</option>
            <option value="Poison">Poison</option>
            <option value="Electric">Electric</option>
            <option value="Ground">Ground</option>
            <option value="Fairy">Fairy</option>
            <option value="Fighting">Fighting</option>
            <option value = "Flying">Flying</option>
            <option value = "Psychic">Psychic</option>
            <option value = "Rock">Rock</option>
            <option value = "Ghost">Ghost</option>
            <option value = "Ice">Ice</option>
            <option value = "Dragon">Dragon</option>
            <option value = "Dark">Dark</option>
            <option value = "Steel">Steel</option>

        </select><br>
        <button type="button" id="filtrer">Filtrer</button>
    </form>
    <h2>Résultats</h2>
    <ul id="results"></ul>
    

<script src = "./script.js?_<?= time() ?>"></script>
</body>
</html>