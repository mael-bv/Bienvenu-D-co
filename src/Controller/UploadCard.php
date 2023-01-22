<?php
require_once("src/back/AjoutModel.php");

 class UploadCard {
public $erreur;

    public function uploadCard($submit,$image,$titre,$description){
        $addBdd = new AjoutBdd();
            if(isset($submit)){
                if(isset($titre) && isset($description) && isset($image)){
                    if(!empty($titre) && !empty($description) && !empty($image)){
                       $img_nom = $image['name'];
                       $tmp_nom = $image['tmp_name'];
                       $time = time();
                       $nouveau_nom = $time.$img_nom;
                       $deplace_img = move_uploaded_file($tmp_nom,"img_card_bdd/".$nouveau_nom);
                       if($deplace_img){
                        $desc = htmlspecialchars($description);
                        $title = htmlspecialchars($titre);
                        $addBdd->addCard($title,$desc,$time,$nouveau_nom,"cards");
                        header("Location: ajoutCard.php");
                       }else{
                        $erreur = "Card non envoyé !";
                       }

                    }else {
                        $erreur = "Veuillez remplir tout les champs";
                    }
                }else {
                    $erreur = "Veuillez remplir tout les champs";
                }
            }else {
                $erreur = "Veuillez remplir tout les champs !";
            }

            return $erreur;
    }

     

}

?>