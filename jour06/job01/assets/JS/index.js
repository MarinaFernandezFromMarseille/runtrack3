
      $(document).ready(function () {
    
    const bladeRunnerQuotes = [
      "I've seen things you people wouldn't believe.",
      "All those moments will be lost in time, like tears in rain.",
      "Wake up, time to die.",
      "The light that burns twice as bright burns half as long.",
      "Quite an experience to live in fear, isn't it? That's what it is to be a slave."
    ];

    // Button to Reboot the World with a random Blade Runner quote
    $('#rebootBtn').click(function () {
      const randomQuote = bladeRunnerQuotes[Math.floor(Math.random() * bladeRunnerQuotes.length)];
      $('#jumbotronText').html(`
        <h1>Blade Runner Quote</h1>
        <p>${randomQuote}</p>
      `);
    });

    // Pagination changing content of jumbotron
    $('#page1').click(function () {
      $('#jumbotronText').html(`<h1>INSOLITE</h1><p>Voici la capture d'un moment rare ou l'on voit Mr Degabriel féliciter un de ses élèves.</p><img src = "./assets/PICS/severus.gif">`);
    });

    $('#page2').click(function () {
      $('#jumbotronText').html(`<h1>SCOOP</h1><p>Nos paparazzis ont pu capturer un moment innédit où l'on voit Mr Degabriel sans sa perruque...</p><img src = "./assets/PICS/Lordvoldemort.webp">`);
    });

    $('#page3').click(function () {
      $('#jumbotronText').html(`<h1>NE VOUS VEXEZ PAS</h1><p> J'accepte de ne pas divulguer ces images si vous déposez votre salaire sur mon bureau demain matin... en espèces si possible(sinon, considérez que ceci n'est que le fruit de votre imagination...<span class='bolde'>ME VIREZ PAS</span>) :') xoxo</p><img src = "./assets/PICS/bisous.gif">`);
    });

    // Limbes list making items active on click
    $('#limbesList .list-group-item').click(function () {
      $('#limbesList .list-group-item').removeClass('active');
      $(this).addClass('active');
    });

    // Progress bar control
  
        // Récupérer la barre de progression
        const progressBar = $('#progressBar');
  
        // Fonction pour augmenter la progression
        $('#increaseProgress').click(function () {
          let currentValue = parseInt(progressBar.attr('aria-valuenow'));
          if (currentValue < 100) {  // La progression maximale est de 100%
            currentValue += 10;
            progressBar.css('width', currentValue + '%').attr('aria-valuenow', currentValue);
          }
        });
  
        // Fonction pour diminuer la progression
        $('#decreaseProgress').click(function () {
          let currentValue = parseInt(progressBar.attr('aria-valuenow'));
          if (currentValue > 0) {  // La progression minimale est de 0%
            currentValue -= 10;
            progressBar.css('width', currentValue + '%').attr('aria-valuenow', currentValue);
          }
        });
      });
    // Show modal when D, G, C keys are pressed
    let keySequence = [];
    $(document).keydown(function (event) {
      const key = event.key.toUpperCase();
      keySequence.push(key);

      if (keySequence.slice(-3).join('') === 'DGC') {
        const login = $('#login').val();
        const password = $('#password').val();
        const email = $('#email').val();
        const url = $('#url').val();
        const dogecoin = $('#dogecoin').val();

        $('#recapContent').html(`
          Login: ${login}<br>
          Password: ${password}<br>
          Email: ${email}<br>
          URL: ${url}<br>
          Dogecoin: ${dogecoin}
        `);

        $('#formRecapModal').modal('show');
        keySequence = []; // reset the sequence
      }
    });

    // Form submission changes spinner color
    $('#internetForm').submit(function (event) {
      event.preventDefault(); // Prevent form from refreshing page
      const email = $('#email').val();
      const password = $('#password').val();

      if (email && password) {
        const colors = ['text-primary', 'text-success', 'text-danger', 'text-warning', 'text-info'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        $('#rebootBtn').removeClass('text-primary text-success text-danger text-warning text-info').addClass(randomColor);
      }
    });
  
