const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//creo la funzione che crea l'oggetto
const createMember = (member) => {
  const { name, role, email, img } = member

  const card = `<div class="col-12 col-md-6 col-lg-6 col-xl-4">
                <div class="member bg-black d-flex text-light">
                    <img src="./${img}" class="image" alt="">

                    <div class="member-info p-2">
                        <h5 class="name text-uppercase fw-bold mt-3">${name}</h5>
                        <p class="role mb-2 fs-5">${role}</p>
                        <p class="text-info mail fs-6">${email}</p>
                    </div>
                </div>
            </div>`

  return card
}

//creo una funzione che inserisca in pagina i vari membri utilizzando un ciclo
const renderPage = (array) => {

  //dichiaro una variabile che conterrà tutte le cards
  let cards = ''

  for (let i = 0; i < array.length; i++) {
    cards += createMember(array[i])

  }

  document.getElementById('team-members').innerHTML = cards

}

renderPage(teamMembers)

//recupero i valori dell'input
const inputName = document.getElementById('name')
const inputRole = document.getElementById('role')
const inputEmail = document.getElementById('email')
const inputImg = document.getElementById('img')
const button = document.getElementById('btn')


//aggiungo l'event listener
button.addEventListener('click', (event) => {
  event.preventDefault()

  const name = inputName.value
  const role = inputRole.value
  const email = inputEmail.value
  const img = 'img/' + inputImg.value

  //creo un nuovo oggetto con i valori inseriti
  const newMember = { name, role, email, img }

  //pusho il nuovo membro nell'array iniziale
  teamMembers.push(newMember)


  //richiamo la funzione render
  renderPage(teamMembers)

  //azzero gli input fields
  inputName.value = ''
  inputRole.value = ''
  inputEmail.value = ''
  inputImg.value = ''
})