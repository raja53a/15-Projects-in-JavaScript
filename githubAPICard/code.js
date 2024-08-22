const requestUrl = 'https://api.github.com/users/raja53a'
const cardLocation = document.getElementById("location");
const cardAvatar = document.getElementById("avatar");
const cardName = document.getElementById("name");
const cardBio = document.getElementById("bio");
const xhr = new XMLHttpRequest();

xhr.open('GET',requestUrl);
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)
        console.log(typeof data);
        console.log(data.avatar_url);
        cardLocation.innerText = data.location;
        cardAvatar.src = data.avatar_url;
        cardName.innerText = data.login;
        cardBio.innerText = data.bio;

    }
}
xhr.send();
