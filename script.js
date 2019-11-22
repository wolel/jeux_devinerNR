
    var resultat = document.getElementById('resultat');
    var btn = document.getElementById('btnVerifierNR');
    var nrAleatoire = Math.round(Math.random() * 100 + 1);
    var champ = document.getElementById('champ');
    var listeEssais = document.getElementById('listeEssais');


    console.log(nrAleatoire);


//---------------------------------------------------------------------------

    //ecouter le click sur le boutton:

document.getElementById('btnVerifierNR').addEventListener('click', function () {
    var nrEssais = 0;
    if (champ.value > nrAleatoire){
        document.getElementById('resultat').innerHTML= 'trop GRAND';
        console.log('trop grand');
        document.body.style.backgroundColor = '#FF614F';
        listeEssais.innerHTML += champ.value + ' , '

    }else if (champ.value < nrAleatoire){
        document.getElementById('resultat').innerHTML = 'trop PETIT';
        document.body.style.backgroundColor ='#364AFF';
        console.log('trop petit');
        listeEssais.innerHTML += champ.value + ' , '

    } else if (champ.value !== nrAleatoire) {
   document.getElementById('resultat').innerHTML = 'Bravo, le nr° est ' + champ.value;
  document.getElementById('resultat').style.cssText = "background:#78E84A;color:white;border:none";
  document.getElementById('btnRestartGame').style.display = 'inline';
  document.getElementById('btnVerifierNR').style.display = 'none';


    }
        console.log('bravo');

});

  function reloadThePage(){
    window.location.reload();
}



    // fonction pr recuperer la valeur du click. Si 10x click, finir le jeux------------------------

    //+ modal
    var span = document.getElementsByClassName("close")[0];
    var modal = document.getElementById("myModal");
    var click = 0;

    function devine(){
        click +=1;
        document.getElementById('nrEssais').innerHTML = click;
        if (click >= 10){
            document.getElementById('btnRestartGame').style.display = 'block';
            document.getElementById('btnVerifierNR').style.display = 'none';
            document.getElementById('resultat').innerHTML = 'Tu as PERDU !';
            document.getElementById('btnRestartGame').style.display = 'inline';
            document.getElementById('btnVerifierNR').style.display = 'none';
            modal.style.display = "block";
            span.onclick = function() {
                modal.style.display = "none";
            };
console.log();
        }
    }


// TO DO------------------------------------------------------------

//1 générateur nr aléatoir
//2 var nombre essais ( 10 ), var nr écrit pas utilisateur, nr aléatoire
//3 sur le html il faut qu'on écoute le click(evenListener) sur le boutton qui permet de proposer un nombre( dans une variable)
//4 récupérer le le nombre utilisateur
//5 comparaison des 2 nombres
//6 condition si nr est + ou -  ou === que le nombre aleatoire
//7 essais retirer -1 ou +1
//si essais === 0 = 'perdu'
//9 refaire une partie, proposer à l'utilisateur


    //modal------------------------------

    // Get the modal
    //var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    //var btn= document.getElementById("btnRestartGame");

    // Get the <span> element that closes the modal
    //var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    /*btnRestart.onclick = function() {
        modal.style.display = "block";
    };*/

    // When the user clicks on <span> (x), close the modal
    /*span.onclick = function() {
        modal.style.display = "none";
    };*/

    // When the user clicks anywhere outside of the modal, close it
    /*  window.onclick = function(event) {
          if (event.target === modal) {
              modal.style.display = "none";
          }
      };*/