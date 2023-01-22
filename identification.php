<?php
session_start();
require_once("src/Models/Connexion.php");
 if(!empty($_POST)){

    /* if($_GET['action']=="connexion") */
     $model = new Connexion();
    $identification = $model->connexionAdmin($_POST['email'],$_POST['motdepasse']);

    
 }
 

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style/identification.css">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
    <title>Connexion</title>
</head>
<body>
<a href="metier.php">   
    <span class="material-symbols-outlined back">
        chevron_left 
    </span>
</a>
    <form method="post" action=""  class="form">
            <div class="title">Welcome</div>
            <div class="subtitle">Connexion</div>
            <div class="input-container ic2">
                <input id="email" class="input" type="text" name="email" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="email" class="placeholder"  >Email</>
            </div>
            <div class="input-container ic2">
                <input id="lastname" class="input" type="password" name="motdepasse" placeholder=" " />
                <div class="cut"></div>
                <label for="lastname" class="placeholder" >Mot de passe</label>
            </div>
            <button type="submit" class="submit">submit</button>

            <?php
                if(isset($identification)){
            ?>
                <h5 class ="erreur" style="color:red" ><?php echo $identification ?></h5>
            <?php
                }
            ?>
    </form>
</body>
</html>