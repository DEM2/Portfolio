const portfolio = [
    {
        name: 'Colombia Webpage',
        description:'página de turismo de Colombia',
        img:'./assets/Img/colombia-page-m.png'
    },
    {
        name: 'Hotel WebSite',
        description:'Es un sitio de hotel Orvessa Suites (Academico)',
        img:'./assets/Img/hotel-webSite-m.png'
    },
    {
        name: 'Hotel Website',
        description:'vvhjj',
        img:''
    }
]

function createCard({name, description, img}) {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
    <div class="card-header">
        <img src=${img} alt="">
    </div>
    <div class="card-body">
        <div class="info">
             <h3>${name}</h3>
             <p>${description}</p>
        </div>
        <div class="boton">
           <img src="" alt="">
        </div>
    </div> `

   return card
}

const container = document.getElementById('Projects-container')

portfolio.forEach((project, i)=> container.appendChild(createCard(project)))