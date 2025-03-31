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

  for (let i = 0; i < array.length; i++) {
    document.getElementById('team-members').innerHTML += createMember(array[i])

  }

}

renderPage(teamMembers)

const button = document.getElementById('btn')

//aggiungo l'event listener
button.addEventListener('click', (event) => {
  event.preventDefault()

  //recupero gli elementi dal dom
  const name = document.getElementById('name').value
  const role = document.getElementById('role').value
  const email = document.getElementById('email').value
  const img = "img/" + document.getElementById('img').value

  //creo un nuovo oggetto con i valori inseriti
  const newMember = { name, role, email, img }

  //pusho il nuovo membro nell'array iniziale
  teamMembers.push(newMember)

  //richiamo la funzione render
  renderPage(teamMembers)

  //azzero i campi del form
  name.value = ''
  role.value = ''
  email.value = ''
  img.value = ''

  console.log(teamMembers)
})