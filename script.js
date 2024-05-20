   
function add(){

          var userNameIn1 = document.getElementById('in1').value;
         var passwordIn2 = document.getElementById('in2').value;
    
            if(passwordIn2.length<8){
    document.getElementById('s1').innerHTML = "password must contains 8 characters";
     }else{
             var user = {};
            user.username = userNameIn1;
            user.password = passwordIn2;
             users.push(user); 
             
            console.log(users)
    }
    }


   function showPass(){

        var passValue = document.getElementById('in4');
              if(passValue.type == 'text'){
            passValue.type = 'password';
}else if(passValue.type == 'password'){
           passValue.type = 'text';
}
}

function login(){
             var userNameIn3 = document.getElementById('in3').value;
            var passwordIn4 = document.getElementById('in4').value;
        if(userNameIn3==''){
      document.getElementById('s2').innerHTML = "username must be filled out";
           return false;
               }else if(passwordIn4==''){
        document.getElementById('s2').innerHTML = "password must be filled out";
    return false;
    }
             for(var i=0;i<users.length;i++){
       if(userNameIn3==users[i].username  && passwordIn4==users[i].password){ 
     return true;
     }
    }
    document.getElementById('s2').innerHTML = "password and username do not match";
     return false;
                }



      
                
                document.getElementById('addUserCheckbox').addEventListener('change', function() {
                    if (this.checked) {
                        window.location.href = 'index.html';
                    }
                });           