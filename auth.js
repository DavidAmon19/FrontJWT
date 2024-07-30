
function isAuthenticated() {
    const token = localStorage.getItem('token');
    return token !== null && token !== undefined;
  }
  
  function checkAuthenticated() {
    const caminhoAtual = window.location.pathname;
    console.log("Caminho atual", caminhoAtual);
  
    if (!isAuthenticated() && caminhoAtual !== '/cadastro.html' && caminhoAtual !== '/login.html') {
      window.location.href = 'login.html';
    } else if (isAuthenticated() && caminhoAtual === '/home.html') {
      getProfile();
    }
  }
  

  




async function getProfile() {
    const token = localStorage.getItem('token');
  
    try {
      const response = await fetch('http://localhost:8080/aluno/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("Dados da requisição ok", data);
        document.getElementById('profileInfo').innerHTML = `<h1>${data.message}</h1>`;
      } else {
        console.log("Erro ao obter perfil", data.message);
        localStorage.removeItem('token');
        window.location.href = 'login.html';
      }
    } catch (error) {
      console.log("Erro do catch", error);
      localStorage.removeItem('token');
      window.location.href = 'login.html';
    }
  }
  

  checkAuthenticated();