<?php
      mysql_connect("localhost", "root", "");
        mysql_select_db("bitcamp");
        
        if(isset($_POST['submit'])) {
        
            $user_name = $_POST['name'];
            $user_pass = $_POST['pass'];
            $user_email = $_POST['email'];
        
        if($user_name='') {
        echo "<script> alert('Please enter your name!')</script>";
            exit();
            }
            
        if($user_pass == '') {
        echo "<script>alert('Please enter your password!')</script>";
            exit();
        }
            
        if($user_email=='') {
        echo "<script>alert('Please enter your email!)</script>";
        
        exit();
        }
            
        }

?>