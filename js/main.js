const carditem = document.querySelector(`.card-item`)


 fetch('https://jsonplaceholder.typicode.com/posts')
.then((res) => {
    return res.json();
  })
  .then((posts) => {
    carditem.forEach((post) => {
      const card = document.createElement('div');
      card.className = 'card p-3';
      card.style.width = '300px';
      card.innerHTML = `
       <div class='card-body'>
            <h3 class='card-title'>Id: ${post.id}</h3>
            <h3 class='card-title'>User id: ${post.userId}</h3>
            <h4 class='card-title'>${post.title}</h4>
           <p>${post.body}</p>
       </div>
        `;
      cards.appendChild(card);
    });
  });