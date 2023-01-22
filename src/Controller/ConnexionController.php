<?php
require_once("src/ActionBdd.php"); 
class mailAndMdp extends Actionbdd {
    public $erreur;

    function __construct(){

        parent::__construct();
    }

    public function isConnected($mail,$mdp){
        $erreur ="";
        $requser = $this->bdd->prepare("SELECT * FROM admin WHERE mail = ? AND motdepasse = ?");
        $result=$requser->execute(array($mail, $mdp));
        $userexist = $requser->rowCount();
        if($userexist == 1){
        $admin= $requser->fetch(PDO::FETCH_ASSOC);
            if($admin){
                $_SESSION['admin']=$admin;
            }else{
                 $erreur ="Identifiant ou mot de passe incorrect";
            }
        }else{
           /*  $erreur = 'mail ou mdp inccorect';
            var_dump("mail ou mdp faux");
            return $erreur; */
             $erreur ="Identifiant ou mot de passe incorrect";
        }

        return $erreur;
    }

public function isExist($mail){
    $requser = $this->bdd->prepare("SELECT * FROM admin WHERE mail = ?");
    $result=$requser->execute(array($mail));
    $mailexist = $requser->rowCount();
    if($mailexist == 1){
        $em = $requser->fetch(PDO::FETCH_ASSOC);
        return $mailexist;
    }else {
        return $mailexist;
    }
}



        
    }
?>