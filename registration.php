
<html>
    <head>
        <title>Registration Form</title>
    </head>


<body>
<form method= 'post' action='registration.php'>
    <table width='400' border='5' align='center'>
    
        
    <tr>
        <td colspan='5'><h1>Registration Form</h1></td>
    </tr>
        
    <tr>
        <td>Username:</td>
        <td><input type='text' name='name'/></td> 
    </tr>
    
        
    <tr>
        <td>Password:</td>
        <td><input type='password' name='pass'/></td> 
    </tr>
    
        
    <tr>
        <td>Email:</td>
        <td><input type='text' name='email'/></td> 
    </tr>
        
    <tr>
        <td colspan='5' align='center'><input type='submit' name='submit' value='Sign Up'/></td>
    </tr>
    
    
    
    </table>
    
    
</form>
</body>
</html>


<?php
mysql_connect("localhost", "root", "");
mysql_select_db("bitcamp");
    if(isset($_POST['submit'])) {
        $user_name = $_POST['name'];
        $user_pass = $_POST['pass'];
        $user_email = $_POST['email'];
        
    if($user_name==''){
        <script>alert('Please enter your name!')</script>";
    }
    
    if($user_pass==''){
        "<script>alert('Please enter your password!')</script>";
    }
        
    if($user_email==''){
        "<script>alert('Please enter your email!')</script>";
    exit(); 
    }
    
    $check_email = "select * from  registration";
   }
?>