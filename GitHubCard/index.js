import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
//  console.log( axios.get('https://api.github.com/users/slothwithannuzzi'))
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['slothwithannuzzi', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const gitCard = (user) => {
  const cardDiv = document.createElement('div')
  const cardImg = document.createElement('img');
  const infoDiv = document.createElement('div');
  const nameHeader = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p');
  const link = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  cardDiv.classList.add('card');
  infoDiv.classList.add('card-info');
  nameHeader.classList.add('name');
  username.classList.add('username')
  cardImg.src = user.avatar_url;
  nameHeader.textContent = user.name;
  username.textContent = user.login;
  location.textContent = user.location;
  link.textContent = user.html_url;
  link.href = user.html_url;
  followers.textContent = `Followers: ${user.followers}`
  following.textContent = `Following: ${user.following}`
  bio.textContent = `Bio: ${user.bio}`

  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(infoDiv);

  const infoArray = [nameHeader, username, location, profile, followers, following, bio];
  infoArray.forEach(element => {
    infoDiv.appendChild(element);
  })

  profile.appendChild(link);
  console.log(cardDiv);

  const cards = document.querySelector('div.cards');
  cards.appendChild(cardDiv);
}

// a function to get the info from the username input, returns an error if no such username exists.
const getUser = (username) => {
return axios.get(`https://api.github.com/users/${username}`)
  .then(({data}) => {
      console.log(data)
      gitCard(data);
    })
  .catch((err) => {
    console.error('Invalid Username');
  })

}

followersArray.forEach(element => {
  getUser(element)
})

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
