function validar() {     
    var nombre, correo, telefono, mensaje, hora, cita, expresion;
    nombre =document.getElementById("nombre").value;
    correo =document.getElementById("correo").value;
    telefono =document.getElementById("telefono").value;
    mensaje =document.getElementById("mensaje").value;
    hora =document.getElementById("hora").value;
    cita =document.getElementById("cita").value;
        
        expresion = /\w+@\w+\.+[a-z]/;
        
        if(nombre === "" || correo === "" || telefono ==="" || mensaje === "" || hora === "" || cita=== ""){
           alert("todos los campos son obligatorios");
        return false;
        }
           $("span.help-block").hide();
         if(nombre.length>30)          
        {
            alert("ingresa nombre");
            //$("#nombre").parent().parent().attr("clas", "form-group has-error ");
            //$("#nombre").parent().children("span").text("debes ingresar un nombre ").show();
            return false;
        }
          else if(correo.length>100)          
        {
            alert("el correo es muy largo");
            return false;
        }
        else if(!expresion.test(correo)){
            alert("el correo no es valido");
            return false;
        }
        
           else if(telefono.length>10)          
        {
            alert("el telefono es muy largo");
            return false;
        }
        else if (telefono.length<8)
        {
            alert("el numero de telefono es invalido")
            return false;
        }
        
            else if(mensaje.length>200)          
        {
            alert("el mensaje es muy largo ");
            return false;
        }
           else if(hora.length>10)          
        {
            alert("la hora es muy larga ");
            return false;
        }
           else if(cita.length>10)          
        {
            alert("la cita es muy larga ");
            return false;
        }
           else if(isNaN(telefono))          
        {
            alert("El télefono ingresado no es numero");
            return false;
        }
                else if(isNaN(telefono))          
        {
            alert("El télefono ingresado no es numero");
            return false;
        }   
    }
   