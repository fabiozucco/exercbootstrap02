var errors = [];

function send (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var endereco = document.getElementById("endereco").value;
  var masc = document.getElementById("male").checked;
  var fem = document.getElementById("female").checked;
  var result = document.getElementById("result");
	
	if (name === "" || name.split(" ").length < 2) {
		errors.push("Preencha seu nome completo." + "<br/>");
	}if (email === "") {
		errors.push("Preencha seu e-mail." + "<br/>");		
	}if (endereco === "") {
		errors.push("Preencha seu endereço." + "<br/>");
	}

	if (errors.length > 0) {
		result.innerHTML = errors;
		result = 0;
		errors = [];
	}else {
		if (document.getElementById("male").checked === true) {
			result.innerHTML = ("Bem vindo ao site Sr. " + name + "<br/>" + "Seu endereço: " + endereco)
		}else if (document.getElementById("female").checked === true) {
			result.innerHTML = ("Bem vindo ao site Sra. " + name + "<br/>" + "Seu endereço: " + endereco)
		}else {
			result.innerHTML = ("Preencha seu sexo.")			
		}
	}
}