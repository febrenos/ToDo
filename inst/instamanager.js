//extension nao seguidores do instagram
//get Unfollowers instagram
const lenUnfollowers = document.querySelectorAll('.row span:first-child').length;
const users = []

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
