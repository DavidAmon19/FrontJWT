async function cadastrar() {
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

  try {
    const response = await fetch("http://localhost:8080/aluno/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      document.getElementById("msgSuccess").innerText =
        "Usuário cadastrado com sucesso";
      document.getElementById("msgSuccess").style.display = "block";
      document.getElementById("msgError").style.display = "none";

      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
    } else {
      document.getElementById("msgError").innerText =
        data.message || "Erro ao cadastrar usuário";
      document.getElementById("msgError").style.display = "block";
      document.getElementById("msgSuccess").style.display = "none";
    }
  } catch (error) {
    document.getElementById("msgError").innerText = "Erro ao cadastrar usuário";
    document.getElementById("msgError").style.display = "block";
    document.getElementById("msgSuccess").style.display = "none";
  }
}

async function logar() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("senha").value;

  const response = await fetch(`http://localhost:8080/aluno/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (response.ok) {
    localStorage.setItem("token", data.token);

    document.getElementById("msgSuccess").innerText = "Login realizado com sucesso";
    document.getElementById("msgSuccess").style.display = "block";
    document.getElementById("msgError").style.display = "none";

    setTimeout(() => {
      window.location.href = 'home.html';
    }, 2000);
  } else {
    document.getElementById("msgError").innerText = data.message;
    document.getElementById("msgError").style.display = "block";
    document.getElementById("msgSuccess").style.display = "none";
  }
}





