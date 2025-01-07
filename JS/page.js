function messagealerte(){
    let po=document.getElementById("nom").value;
    let m=document.getElementById("prenom").value;
    let p=document.getElementById("mail").value;
       if(po == "" || m == "" || p == ""){
       var mess="Tous les rubriques doivent être saisis obligatoirement!!" ;
          document.getElementById("resultat").style.backgroundColor= "red" ;
                  document.getElementById("resultat").innerHTML=mess ;
          } 
       else{
          var mess="Votre message a été envoyé avec succés!!" ;
          document.getElementById("resultat").style.backgroundColor= "green" ;
          document.getElementById("resultat").innerHTML=mess ;
       }
   }