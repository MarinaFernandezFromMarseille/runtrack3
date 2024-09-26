<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LaPlateforme</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">LPTF</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="https://laplateforme.io">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Units</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Jobs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Skills</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <div class="container mt-4">
        <div class="row">
            <!-- Left Panel -->
            <div class="col-lg-3 col-md-4 mb-4">
                <div class="side-panel">
                    <img src="./assets/PICS/papillon.PNG" class="img-fluid" alt="Papillon">
                    <h5>Un Papillon</h5>
                    <p>Un papillon, c'est un peu comme une chenille, mais avec des ailes. Ne pas ingérer.</p>
                    <button id="buyPapillonBtn" class="btn btn-primary w-100" data-bs-toggle="modal"
                        data-bs-target="#papillonModal">Commander votre propre papillon</button>
                </div>
            </div>

            <!-- Main Section -->
            <div class="col-lg-6 col-md-8 mb-4">
                <div id="jumbotronText">
                    <h1>Bonjour, monde!</h1>
                    <p>Il existe plusieurs visions du terme :</p>
                    <p>Le monde est la matière, l’espace et les phénomènes qui nous sont accessibles par les sens,
                        l’expérience ou la raison.</p>
                    <p>Le sens le plus courant désigne notre planète, la Terre, avec ses habitants, et son environnement
                        plus ou moins naturel.</p>
                    <p>Le sens étendu désigne l’univers dans son ensemble.</p>
                </div>
                <button id="rebootBtn" class="btn btn-danger">Rebooter le Monde</button>

                <!-- Pagination -->
                <nav aria-label="Page navigation">
                    <ul class="pagination justify-content-center mt-4">
                        <li class="page-item"><a class="page-link" href="#" id="page1">1</a></li>
                        <li class="page-item"><a class="page-link" href="#" id="page2">2</a></li>
                        <li class="page-item"><a class="page-link" href="#" id="page3">3</a></li>
                    </ul>
                </nav>

                <!-- Progress Bar -->
                <div class="mt-4">
                    <p>Installation de AI 9000</p>
                    <button id="decreaseProgress" class="btn btn-secondary">-</button>
                    <div class="progress d-inline-block w-75 mx-2">
                        <div id="progressBar" class="progress-bar progress-bar-striped" role="progressbar"
                            style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <button id="increaseProgress" class="btn btn-secondary">+</button>
                </div>
            </div>

            <!-- Right Panel -->
            <div class="col-lg-3 col-md-12">
                <div class="limbes-panel mb-4">
                    <h5>Limbes</h5>
                    <ul id="limbesList" class="list-group">
                        <li class="list-group-item active">Luxure</li>
                        <li class="list-group-item">Gourmandise</li>
                        <li class="list-group-item">Avarice</li>
                        <li class="list-group-item">Colère</li>
                        <li class="list-group-item">Hérésie</li>
                        <li class="list-group-item">Violence</li>
                        <li class="list-group-item">Ruse et Tromperie</li>
                        <li class="list-group-item">Trahison</li>
                        <li class="list-group-item">Internet Explorer</li>
                    </ul>
                </div>

                <!-- Form Section -->
                <form id="internetForm">
                    <h5>Recevez votre copie gratuite d'internet 2!</h5>
                    <div class="mb-3">
                        <label for="login" class="form-label">@ Login</label>
                        <input type="text" class="form-control" id="login" placeholder="Login">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Mot de Passe</label>
                        <input type="password" class="form-control" id="password" placeholder="Mot de Passe">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="@example.com">
                    </div>
                    <div class="mb-3">
                        <label for="url" class="form-label">URL des Internets 2 et 2.1 Beta</label>
                        <input type="url" class="form-control" id="url" value="https://133t/lptf/dkwb/berlusconimkt/">
                    </div>
                    <div class="mb-3">
                        <label for="dogecoin" class="form-label">Dogecoin</label>
                        <input type="number" class="form-control" id="dogecoin" placeholder=".00">
                    </div>
                    <div class="form-check mb-3">
                        <input class="form-check-input" type="checkbox" id="check">
                        <label class="form-check-label" for="check">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="papillonModal" tabindex="-1" aria-labelledby="papillonModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="papillonModalLabel">Confirmation d'achat</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">Vous avez commandé un papillon avec succès !</div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal for D, G, C keys -->
    <div class="modal fade" id="formRecapModal" tabindex="-1" aria-labelledby="formRecapModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="formRecapModalLabel">Récapitulatif du formulaire</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p id="recapContent"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Inclure votre fichier JavaScript -->
    <script src="./assets/JS/index.js"></script>
</body>

</html>
