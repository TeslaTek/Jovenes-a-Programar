function Check1(id) {
    for (var i = 1;i <= 2; i++)
    {
        document.getElementById(i).checked = false;
    }
    document.getElementById(id).checked = true;
	}




		function Validar(f){

		

			var userID = document.getElementById("User").value;
			if (userID== "") {
				document.getElementById("User").classList.add("Obligatorio");
				document.getElementById("Umensaje").innerHTML = "EL user ID  no puede estar vacío";
				return false;
			}else {
				document.getElementById("User").classList.remove("Obligatorio");

				if (!((userID.split("").length >= 5)&&(userID.split("").length <= 12))) {
				document.getElementById("User").classList.add("Obligatorio");
				document.getElementById("Umensaje").innerHTML = "EL user ID debe ser  entre 5 y 12 Caracteres";
				return false;
				} else {
						document.getElementById("User").classList.remove("Obligatorio");
						document.getElementById("Umensaje").innerHTML = "";

						if (document.getElementById("Pass").value == "") {
						document.getElementById("Pass").classList.add("Obligatorio");
						document.getElementById("Pmensaje").innerHTML = "EL Password  no puede estar vacío";
						return false;
						}else{	
								document.getElementById("Pass").classList.remove("Obligatorio");
								document.getElementById("Pmensaje").innerHTML = "";

								var dire = document.getElementById("Dire").value;
								if (dire.split("").length >100){
								document.getElementById("Dire").classList.add("Obligatorio");
								document.getElementById("Dmensaje").innerHTML = "Longitud maxima para ADDRESS es de  100 Caracteres";
								return false
								}else{
								document.getElementById("Dire").classList.remove("Obligatorio");
								document.getElementById("Dmensaje").innerHTML = "";		
								}
							}

							

				
	
						}

				
		

				}

				return true;	
	}