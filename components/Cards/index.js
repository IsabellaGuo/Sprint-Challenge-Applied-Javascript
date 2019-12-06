// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response)

    const articles = response.data.articles;

    const js = articles.javascript;
    const boot = articles.bootstrap;
    const tech = articles.technology;
    const jQuery = articles.jquery;
    const node = articles.node;

    js.forEach(element => {
        document.querySelector('.cards-container').appendChild(CardCreator(element))
    });

    boot.forEach(element => {
        document.querySelector('.cards-container').appendChild(CardCreator(element))
    });

    tech.forEach(element => {
        document.querySelector('.cards-container').appendChild(CardCreator(element))
    });

    jQuery.forEach(element => {
        document.querySelector('.cards-container').appendChild(CardCreator(element))
    });

    node.forEach(element => {
        document.querySelector('.cards-container').appendChild(CardCreator(element))
    });
})

.catch(error => {
    console.log(error)
})

function CardCreator(data) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(name);

    headline.textContent = data.headline;
    img.src = data.authorPhoto;
    name.textContent = `By ${data.authorName}`;

    return card;
}