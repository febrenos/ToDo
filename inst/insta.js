//extension nao seguidores do instagram
//get Unfollowers instagram
const lenUnfollowers = document.querySelectorAll('.row span:first-child').length;
const usersDontFollowMe = []
const unfollowed = []
const ignoreUser = ['@theourspace', '@izaaal']

let c = 0;
while(c < lenUnfollowers){
	const userId = document.querySelectorAll('.row span span:first-child')[c].textContent;
    const userName = document.querySelectorAll('.row span span:nth-child(2)')[c].textContent;
	const userLink = document.querySelectorAll('.row a')[c].href;
	usersDontFollowMe.push({'userId':userId, 'username':userName, 'link':userLink})
	c++;
}

/// Salva os itens no local storage
localStorage.setItem('usersDontFollowMe', JSON.stringify(usersDontFollowMe));
localStorage.setItem('unfollowed', JSON.stringify(unfollowed));
localStorage.setItem('ignoreUser', JSON.stringify(ignoreUser));

// Função para carregar os itens do armazenamento local
// Função para carregar os itens do armazenamento local
function loadLocalStorageItems() {
  let usersDontFollowMe = [];
  let unfollowed = [];
  let ignoreUser = ['theourspace', 'izaaal'];

  const usersDontFollowMeFromStorage = JSON.parse(localStorage.getItem('usersDontFollowMe'));
  const unfollowedFromStorage = JSON.parse(localStorage.getItem('unfollowed'));
  const ignoreUserFromStorage = JSON.parse(localStorage.getItem('ignoreUser'));

  if (usersDontFollowMeFromStorage) {
      usersDontFollowMe = usersDontFollowMeFromStorage;
  }

  if (unfollowedFromStorage) {
      unfollowed = unfollowedFromStorage;
  }

  if (ignoreUserFromStorage) {
      ignoreUser = ignoreUserFromStorage;
  }

  // Retorna os valores carregados do armazenamento local
  return {
      usersDontFollowMe: usersDontFollowMe,
      unfollowed: unfollowed,
      ignoreUser: ignoreUser
  };
}



// Chamada para carregar os itens do armazenamento local
loadLocalStorageItems();

// Função para salvar os itens no armazenamento local
function saveLocalStorageItems() {
  localStorage.setItem('usersDontFollowMe', JSON.stringify(usersDontFollowMe));
  localStorage.setItem('unfollowed', JSON.stringify(unfollowed));
  localStorage.setItem('ignoreUser', JSON.stringify(ignoreUser));
}


//precisa ajustar essa funcao abaixo, ela funciona  
// unfollowUsers(list, firstItems)
function unfollowUsers(listUsers = usersDontFollowMe, firstInNumbers = 5) {
  let firstItems = listUsers.slice(0, firstInNumbers);
  let ignoredCount = 0; // Contador para usuários ignorados
  let index = 0;
  len = firstItems.length

  // Substituído forEach por um loop while
  while (index < len) {
    const user = firstItems[index];
    const userIdWithoutAt = user.userId.replace('@', ''); // Remove o @
    setTimeout(() => {
      if (!ignoreUser.includes(user.userId)) {
        window.open(`https://www.instagram.com/${userIdWithoutAt}`, '_blank');
        ignoreUser.push(user.userId)
      } else {
        console.log(`Ignorado ${user.userId}`);
        len++; // ERRO
      }
    }, 1000);

    index++;
  }

  // Ajusta o número de usuários a serem processados com base no número de usuários ignorados
  firstInNumbers += ignoredCount;

  // Salva os itens após unfollowUsers
  saveLocalStorageItems();
}


  

function filterUser(name) {
    matchStr = name.match(/[^=]*$/);
    let filtedP = []

    if (/=/.test(name)) {
        filtedP = usersDontFollowMe.filter(i => i.userId === matchStr[0]);
    } else if (!/[=]/.test(name) && matchStr[0] !== "") {
        filtedP = usersDontFollowMe.filter(i => i.userId.includes(matchStr[0]));
    }
    return filtedP;
}

//abrir link perfil e parar de seguir
c = 0;
let intervalId = setInterval(() => {
  if (c < 30) {
    document.querySelector('button[aria-label="Avançar"]').click();
    // c++;
  } else {
    clearInterval(intervalId); // Para o intervalo após 30 cliques
  }
}, 500);

//parar de seguir automaticamente pela api

https://www.instagram.com/graphql/query/?query_hash=3dec7e2c57367ef3da3d987d89f9dbc8&variables={%22id%22:%229645890353%22,%22include_reel%22:false,%22fetch_mutual%22:false,%22first%22:50,%22after%22:%22%22}
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


    // Adiciona um evento de escuta para verificar quando a nova aba é fechada
    // window.addEventListener('storage', function (event) {
    //   if (event.key === 'userUnfollowed' && event.newValue === 'true') {
    //     console.log(`${userIdWithoutAt} unfollowed`);
    //   } else {
    //     console.log(`${userIdWithoutAt} error, already unfollowed`);
    //   }
    // });