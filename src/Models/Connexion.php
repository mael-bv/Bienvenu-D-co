<?php
require_once("src/dataBase.php");
 require_once("src/ActionBdd.php"); 
 require_once("src/Controller/ConnexionController.php"); 
 
 class Connexion extends ActionBdd {
    public $erreur;
    

public function __construct(){
    parent::__construct();
}
    public function connexionAdmin($email,$motdepasse){
        $isconnect = new mailAndMdp();
            if(!empty($email) AND !empty($motdepasse)){
            $mail =   addslashes($email); // htmlspecialchars($email);
            $mdp = sha1($motdepasse);
                $isconnect->isConnected($mail,$mdp);
                if(!$isconnect){
                     $erreur = "Identifiant ou mot de passe incorrect !";       
                }else{
                    header("Location: centreControle.php");
                }
            }else{
                $erreur = "Identifiant ou mot de passe incorrect !";
            }

            return $erreur;
    }
    
}
?>