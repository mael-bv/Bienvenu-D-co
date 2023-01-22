<?php
SESSION_START();
if(isset($_SESSION['admin'])){
    $_SESSION['admin'] = array();
    session_destroy();
    header("Location: identification.php");
}else{
    header("Location: identification.php");
}
?>