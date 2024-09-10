function showhide() {
    var article = document.getElementById("article");
  
    // Vérifie si l'article existe déjà
    if (article) {
      // Si l'article existe, il est supprimé
      article.remove();
    } else {
      // Si l'article n'existe pas, il est créé et ajouté à la page
      article = document.createElement("article");
      article.id = "article";
      article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
      document.body.appendChild(article);
    }
  }