<?php
require_once("src/back/Affichage.php");
require_once("src/Controller/Delete.php");
require_once("includes/isConnected.php");
$affichage = new Affichage();
$affichages = $affichage->affichageEvery("article");

if(!empty($_POST)){
    $supprimer = new Delete();
    $supprimer->delete($_POST['submit'],$_POST['numberId']);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style/delete.css">
    <title>Document</title>
</head>
<body>

    <div class="container">
        <div class="party">
    <form method="post" class="form center">
        <div class="title">Welcome</div>
        <div class="subtitle">Numéro à supprimer</div>
        <div class="input-container ic2">
            <input id="email" class="input" type="number" name="numberId" placeholder=" " />
            <div class="cut cut-short"></div>
            <label for="email" class="placeholder">Numero</>
        </div>
        <button type="text" class="submit" name="submit">submit</button>
    </form>
        </div>
  <div class="party">

        <?php foreach ($affichages as $article ):?>
        <div class="card">
            <div class="image">

            </div>
            <p style="color : red"><?=$article->titre?></p>
            <div class="contenu">
                <p><?= $article->id ?></p>
                <a href="modifier.php?uptd=<?=$article->id?>">Modifier</a>
            </div>
        </div>
        <?php endforeach ; ?>
  </div>
</div>
    
</body>
</html>