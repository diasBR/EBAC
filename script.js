document.addEventListener('DOMContentLoaded', function() {

    //Caminho para url da api do github seguido do nome do login
    const endpoint = `https://api.github.com/users/diasbrunodev`;

    //usado como um link errado para verificar o erro através do catch
    // const endpoint = `https://api.github.com/users/diasbrunodev1234`;

    //pega os elementos html onde serão inseridos os dados trazidos da api
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const avatar = document.getElementById('avatar');
    const repository = document.getElementById('repository');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const link = document.getElementById('link');

    fetch(endpoint)
    //verifica se a resposta está correta
    //se estiver correta segue
    //senão entra neste if para mensagem de erro pelo catch
        .then(function(response) {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
    //se estiver correta retorna para o json        
            return response.json();
        })
    //recebe as propriedades, escrevendo ou inserindo no html os dados trazidos da api pelo json     
        .then(function(json) {
            name.innerHTML = json.name;
            username.innerHTML = json.login;
            avatar.src = json.avatar_url;
            followers.innerHTML = json.followers;
            following.innerHTML = json.following;
            repository.innerHTML = json.public_repos;
            link.href = json.html_url;
        })
    //aciona o alert caso tenha a mensagem de erro, e indica o código do erro    
        .catch(function(error) {
            alert("Ocorreu um erro. Verifique novamente o endereço da url do github. " + error.message);
        })

})