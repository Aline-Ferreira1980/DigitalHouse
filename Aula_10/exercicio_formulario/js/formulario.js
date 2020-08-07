
        
       function validar(){ 
           var name = formulario.name.value;
           var lastName = formulario.lastName.value;
           var password = formulario.password.value;
           var repassword = formulario.repassword.value;
           var email = formulario.email.value;
           var address = formulario.address.value;
           var city = formulario.city.value;
           var state = formulario.state.value;
           
           
           if (name === ""){
               console.log("Campo NAME não preenchido!");
               formulario.name.focus();
               return false;
           }
           if (lastName === ""){
            alert("Campo LAST NAME não preenchido!");
            formulario.lastName.focus();
            return false;
        }
        if (password === ""){
            alert("Campo PASSWORD não preenchido!");
            formulario.password.focus();
            return false;
        }
        if (repassword === ""){
            alert("Campo REPASSWORD não preenchido!");
            formulario.repassword.focus();
            return false;
           
        }
        if (password != repassword){
            alert("Senhas são diferentes");
            return false;
        }
        if (email === ""){
            alert("Campo EMAIL não preenchido!");
            formulario.email.focus();
            return false;
        }
        if (address === ""){
            alert("Campo ADDRESS não preenchido!");
            formulario.address.focus();
            return false;
        }
        if (city === ""){
            alert("Campo CITY não preenchido!");
            formulario.city.focus();
            return false;
        }
        if (state === ""){
            alert("Campo STATE não preenchido!");
            formulario.state.focus();
            return false;
        }
        function corGender(){
            if(this.gender === "#feminino"){
                 document.getElementById('cor').style='backgroundColor= red';
            }
            if (this.gender === '#masculino'){
                document.getElementById('cor').style= 'backgroundColor = blue';
            }
            else{
                document.getElementById('cor').style = 'backgound-color= rgba(40, 224, 30, 0.67)';
            }
        }
 
       }

       
       function register(id){
        var url= "http://localhost:3000/users";
           document.getElementById('name').value;
           document.getElementById('lastName').value;
           document.getElementById('email').value;
           document.getElementById('address').value;
           document.getElementById('city').value;
           document.getElementById('state').value;
           document.getElementById('gender').value;
           
           
            alert("Form was submited!")
            
           $.ajax({
               method:"GET",
               url:url,
               data:{
                   "name": " ",
                   "lastName": " ",
                   "email": " ",
                   "address": " ",
                   "city": " ",
                   "state": " ",
                   "gender": " "
               }
           })
       }
       function buscarFormulario(){
        var table = document.getElementById("table").value;
        var url = "https://localhost:3000/users";
        console.log(url)
        $.ajax({
            url:url,
            type: "GET",
            success: function(response){
                console.log(response);
                $("#name").html(response.name);
                $("#lastName").html(response.lastName);
                $("#email").html(response.email);
                $("#address").html(response.address);
                $("#city").html(response.city);
                $("#state").html(response.state);
                $("#gender").html(response.gender);
                
            }
        });
    }