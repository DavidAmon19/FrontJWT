const cadastrar = async () => {
  const name = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("senha").value;
  const confirmaPassword = document.getElementById("confirmSenha").value;

  if (password !== confirmaPassword) {
    document.getElementById("msgError").innerText = "As senhas não coincidem";
    document.getElementById("msgError").style.display = "block";
    document.getElementById("msgSuccess").style.display = "none";
    return;
  }

  const response = await fetch(`http://localhost:8090/aluno/cadastro`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });

//   const data = await response.json();
//   console.log("Dados do data", data);

  if (response.ok) {
    document.getElementById("msgSuccess").innerText =
      "Usuario cadastrado com sucesso";
    document.getElementById("msgSuccess").style.display = "block";
    document.getElementById("msgError").style.display = "none";
    return;
  } else {
    document.getElementById("msgError").innerText = "Não";
    document.getElementById("msgError").style.display = "block";
    document.getElementById("msgSuccess").style.display = "none";
  }
};
