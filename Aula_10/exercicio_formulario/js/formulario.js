    function buscar(email){
      var email =  document.getElementById('email').value;

    }
        
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
               alert("Campo NAME não preenchido!");
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
        
       }

       function corGender(){
           if(gender === "#feminino"){
                document.getElementById('cor').style='backgroundColor= red';
           }
           if (gender === '#masculino'){
               document.getElementById('cor').style= 'backgroundColor = blue';
           }
           else{
               document.getElementById('cor').style = 'backgound-color= rgba(40, 224, 30, 0.67)';
           }
       }

       function register(){
           var name = document.getElementById('name').value;
           var lastName = document.getElementById('lastName').value;
           var email = document.getElementById('email').value;
           var address = document.getElementById('address').value;
           var city = document.getElementById('city').value;
           var state = document.getElementById('state').value;
           var gender = document.getElementById('gender').value;
           var url= "http://localhost:3000/users";
            alert("Form was submited!")
           $.ajax({
               method:"GET",
               url:url,
               data:{
                   "name": " ",
                   "lastName": lastName,
                   "email": email,
                   "address": address,
                   "city": city,
                   "state": state,
                   "gender": gender
               }
           })
       }
       function buscarFormulario(){
        $(".barra-progresso").show();
        var table = document.getElementById("table").value;
        var url = "https://viacep.com.br/ws/"+ cep + "/json/";
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
        })
    }