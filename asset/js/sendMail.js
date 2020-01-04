$(function () {

    // Ajout d'événement lors de l'envoi du formulaire
    $('#port-form').submit(function (e) {

        // Enlever le comportement par défaut lors de l'envoi
        e.preventDefault();

        // Mettre à zéro les messages d'erreur
        $('.error').empty();

        // Récupérer le contenu du formulaire dans une variable
        let postdata = $('#port-form').serialize();

        // AJAX
        $.ajax({
            // type de requête (get ou post)
            type: 'POST',
            // url vers lequel on envoie les données : fichier ciblé
            url: 'sendMail_ez.php',
            // type de données à recevoir
            data: postdata,
            dataType: 'json',
            // si succès -> fonction à exécuter
            success: function(result) {
                // Si nous n'avons pas de messages d'erreur
                if (result.isSuccess) {
                  // console.log(result.isSuccess);
                    $("#send-successfull").append("message send successfully");
                    // Remettre les valeurs à zéro
                    $("#port-form")[0].reset();
                }
                else {
                    // Afficher les messages d'erreur
                    $("#send-successfull").append("Failed ! Check all field !");
                }

            }

        });


    });


})
