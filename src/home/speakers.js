export const presenters = [
    {
        name: 'Karolina Grabowska',
        profession: 'Full Stack Developer from Canada',
        description: '5 years of experience in Web Development and Databases.',
        img: 'public/presenter-1-karolina-grabowska.png',
    },
    {
        name: 'Mario Garcia',
        profession: 'Professor of Computer Engineering from Peru',
        description: '4 years of teaching Databases and Web Design in UPC.',
        img: 'public/presenter-2-cottonbro.png',
    },
    {
        name: 'Stella Martin',
        profession: 'Front-End Developer from France',
        description: 'Professional with 8 years of experience in Web Design.',
        img: 'public/presenter-3-rodnae.png',
    },
    {
        name: 'Rodny Walker',
        profession: 'Full Stack Developer from Italy',
        description: 'Professional with 4 years of experience in Web Design as Freelancer.',
        img: 'public/presenter-4-rodnae.png',
    },
    {
        name: 'Lila Tretikov',
        profession: 'Full Stack Developer from USA',
        description: '3 years of experience in Web Development and Databases.',
        img: 'public/presenter-5-matheus-bertelli.png',
    },
    {
        name: 'Ryan Merkley',
        profession: 'Front-End Developer from USA',
        description: 'Professional with 6 years of experience in Web Design.',
        img: 'public/presenter-6-mentatdgt.png',
    }
]

const referencePosition = document.querySelector('.program');

export const createSpeakerStructureHTML = () => {

    referencePosition.insertAdjacentHTML('afterend', 
    `<section class="presenter" id="featuredpresenters">
     <h2 class="presenter__title">Presenters</h2><hr>
     <ul class="speakers-container"></ul></section>` 
    )

}

export const createSpeakerCard = () => {

    presenters.forEach(presenter => {
        const speakersGrid = document.querySelector('.speakers-container');

        speakersGrid.insertAdjacentHTML('beforeend',
        `<li class="card">
         <div class="presenter__image">
         <img src="${presenter.img}" alt="presenter photo"></div>
        <div class="presenter__dsc">
        <h3>${presenter.name}</h3>
        <p class="dsc-1">${presenter.profession}</p>
        <p class="dsc-2">${presenter.description}</p>
        </div>
        </li>`
        )
    })
}




