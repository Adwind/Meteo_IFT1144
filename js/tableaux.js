//fonction tableau pour les personne et leur montant depenser
function tableaux(){
	
	//variable donner dans le numeraux contenant le tableau 2d
	var achats= [ 	["Alain", "Boulay", 83.5, 90, 75, 100, 99.55],
					["Roger", "Dutoit", 100, 99.55, 75, 90, 83.5],
					["Jeanne", "Rimbaud", 65, 77.5, 80, 100, 90],
					["Denise", "Delage", 90, 80, 100, 77.5, 65]
				];
	
	var nom; //le nom d'une personne
	var prenom; // le prenom d'une personne
	var montant; //montant depenser par une personne
	var somme; //la domme des montant depenser
	var grandTotal = 0; //le grand total des achats par les personne
	
	//remove the previous html to place new data
	document.getElementById("zoneTableaux").innerHTML = "";
	document.getElementById("zoneTotal").innerHTML = "";
	
	//boucle for pour lire les donnes
	for (i = 0; i < achats.length; i++ ){
		
		prenom = achats[i][0];
		nom = achats[i][1];
		somme = 0;
		
		for(j = 2; j < achats[i].length; j++){
			
			montant = achats[i][j];
			
			somme = somme + montant;
			
		}
		
		document.getElementById("zoneTableaux").innerHTML = document.getElementById("zoneTableaux").innerHTML + "<br>" + nom + ", "+ prenom + " : " + somme;
		grandTotal = grandTotal + somme;
	}
	
	document.getElementById("zoneTotal").innerHTML = "Grand total : " + grandTotal + " $";
	
}
