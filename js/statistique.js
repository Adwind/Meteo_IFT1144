//fonction qui fait les statistiques des notes entrez par un utilisateur
function statistiques(){
	
	var note;//note a entrez
    var	compteurNotes = 0;//compteur de notes entrez
	var somme = 0;//somme des notes
	var min = 100;//minimum des notes entrez commence a 100 qui est le max
	var max = 0;// maximum des notes entrez commence a 0 qui est le min
	var moyenne = 0;//moyenne de toutes les notes
	var compteurNoteX = [0,0,0,0,0];//compteur des notes par lettre

	//remove the previous html to place new data
	document.getElementById("zoneNotes").innerHTML = "";
	document.getElementById("zoneStatistique").innerHTML = "";
	
	//boucle do ...  while
	do {
		
		//demande a l'utilisateur d'entrez une note
		note = +prompt("Entrez une note(%) : ", "0");
		
		//divers calcule pour les statistiques
		compteurNotes ++;
		somme += note;
		
		if (note < min){
			min = note;
		}
		
		if (note > max){
			max = note;
		}
		
		if (note >= 85){
			compteurNoteX[0] ++;
		}else if (note >= 75 && note < 85){
			compteurNoteX[1] ++;
		}else if (note >= 65 && note < 75){
			compteurNoteX[2] ++;
		}else if (note >= 55 && note < 65){
			compteurNoteX[3] ++;
		}else if (note < 55){
			compteurNoteX[4] ++;
		}
		
		document.getElementById("zoneNotes").innerHTML = document.getElementById("zoneNotes").innerHTML + 
		"<br> Note : " + note;
		
	} while (confirm("Continuer?"));
	
	moyenne = somme / compteurNotes;

	//affichage de tous les statistiques
	document.getElementById("zoneStatistique").innerHTML = "Somme : " + somme + "<br> Nombres de notes : " + compteurNotes + 
	"<br> Minimum : " + min + "<br> Maximum : " + max + "<br> Moyenne : " + moyenne + "<br> A : " + compteurNoteX[0] +
	"<br> B : " + compteurNoteX[1] + "<br> C : " + compteurNoteX[2] + "<br> D : " + compteurNoteX[3]
	+ "<br> E : " + compteurNoteX[4];
	
}