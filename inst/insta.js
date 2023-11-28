//extension nao seguidores do instagram
//get Unfollowers instagram
const lenUnfollowers = document.querySelectorAll('.row span:first-child').length;
const users = []
const unfollowed = []

var c = 0;
while(c < lenUnfollowers){
	const userId = document.querySelectorAll('.row span span:first-child')[c].textContent;
    const userName = document.querySelectorAll('.row span span:nth-child(2)')[c].textContent;
	const userLink = document.querySelectorAll('.row a')[c].href;
	users.push({'userId':userId, 'username':userName, 'link':userLink})
	c++;
}



// unfollowUsers(list, firstItems)
function unfollowUsers(listUsers, firstInNumbers) {
    let firstItems = listUsers.slice(0, firstInNumbers);
  
    firstItems.forEach(user => {
      const userIdWithoutAt = user.userId.replace('@', ''); // Remove o @
      setTimeout(() => {
        window.open(`https://www.instagram.com/${userIdWithoutAt}`, '_blank');
      }, 1000);
  
      // Agora, salva informações relevantes no armazenamento local
      localStorage.setItem('currentUserId', userIdWithoutAt);
  
      // Adiciona um evento de escuta para verificar quando a nova aba é fechada
      window.addEventListener('storage', function (event) {
        if (event.key === 'userUnfollowed' && event.newValue === 'true') {
          console.log(`${userIdWithoutAt} unfollowed`);
        } else {
          console.log(`${userIdWithoutAt} error, already unfollowed`);
        }
      });
    });
  }
  
  // Em sua nova aba (na página Instagram)
  // ...
  // Quando a ação de unfollow é concluída, defina o item no armazenamento local
  localStorage.setItem('userUnfollowed', 'true');
  

let c = 0;
let intervalId = setInterval(() => {
  if (c < 30) {
    document.querySelector('button[aria-label="Avançar"]').click();
    // c++;
  } else {
    clearInterval(intervalId); // Para o intervalo após 30 cliques
  }
}, 500);


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
const senha = "222222222"
const accessToken = '5d5869ec18db61f9eb11d516b115a288';
const username = 'fe.brenos';

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
