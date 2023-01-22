<?php
require_once('src/back/Inscription.php');
require_once("src/Controller/ConnexionController.php"); 

class InscriptionController {
 public $err;

public function inscription($submit,$mail,$mail2,$mdp,$mdp2){
        $err ="";
        $insert = new Inscription();
        $connect = new mailAndMdp();
        if(isset($submit)) {
            if(isset($mail) AND isset($mail2) AND isset($mdp) AND isset($mdp2)){
                if(!empty($mail) AND !empty($mail2) AND !empty($mdp) AND !empty($mdp2)){
                    if(filter_var($mail, FILTER_VALIDATE_EMAIL)){
                        if(strcmp($mail, $mail2) !== 0 && strcmp($mdp, $mdp2) !== 0){
                            $err ="Nombre de caractère non identique pour l'email ou le mot de passe";
                        }else {
                            if($mail == $mail2 && $mdp == $mdp2) {
                                    //au moins un caractère minuscule
                                    //au moins un caractère majuscule
                                    //au moins un chiffre
                                    //au moins un signe spécial de @ # -_ $% ^ & + = § !?
                                if(!preg_match("/^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]{8,20}$/",$mdp)){
                                    $err = "Le mot de passe doit contenir au moins une lettre Majuscule, au moins une lettre minuscule, au moins un chiffre et caractère spécial !";
                                }else {
                                    $itsOk = $connect->isExist($mail);
                                    if($itsOk != 1){
                                        $passwordSecurity = sha1($mdp);
                                        $insert->inscriptionBdd($mail,$passwordSecurity);
                                        header("Location: identification.php");
                                    }else{
                                        $err= "Cette Email existe déjà !";
                                    }
                                
                                } 
                            } else {
                                $err ="Nombre de caractère non identique pour l'email ou mot de passe";
                            }
                        
                        }
                    } else{
                        $err ="Email non valide ";
                    }
                }else {
                    $err ="Veuillez remplir tout les champs";
                }
            }else {
                $err = "Veuillez remplir tout les champs";
            }
            return $err;
        }else {
            $err = "Veuillez remplir tout les champs";
        }
        return $err;
      
    }
}
?>