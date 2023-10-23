//extension nao seguidores do instagram
//get Unfollowers instagram
const lenUnfollowers = document.querySelectorAll('.row span:first-child').length;
const users = []

function openNewWindowUsersInstagram(listUsers) {
    listUsers.forEach(user => {
        const userIdWithoutAt = user.userId.replace('@', ''); // Remove o @
        setTimeout(() => {
            window.open(`https://www.instagram.com/${userIdWithoutAt}`, '_blank');
        }, 3000);
    });
}

var c = 0;
while(c < lenUnfollowers){
	const userId = document.querySelectorAll('.row span span:first-child')[c].textContent;
    const userName = document.querySelectorAll('.row span span:nth-child(2)')[c].textContent;
	const userLink = document.querySelectorAll('.row a')[c].href;
	users.push({'userId':userId, 'username':userName, 'link':userLink})
	c++;
}

function filterUser(name) {
    matchStr = name.match(/[^=]*$/);
    let filtedP = []

    if (/=/.test(name)) {
        filtedP = users.filter(i => i.userId === matchStr[0]);
    } else if (!/[=]/.test(name) && matchStr[0] !== "") {
        filtedP = users.filter(i => i.userId.includes(matchStr[0]));
    }
    return filtedP;
}

const User = "fe.brenos"
const senha = "test"
const accessToken = 'SEU_ACCESS_TOKEN';
const username = 'NOME_DE_USUARIO';

fetch(`https://graph.instagram.com/v12.0/${username}?fields=id&access_token=${accessToken}`)
  .then(response => response.json())
  .then(data => {
    const profileId = data.id;
    console.log(`O ID de perfil para ${username} é: ${profileId}`);
  })
  .catch(error => {
    console.error('Erro ao obter ID de perfil:', error);
  });

//ctrl + u 
//"profile_id":"
//profilePage_ 
//page_id
