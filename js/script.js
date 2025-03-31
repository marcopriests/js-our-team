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
const createMember = (array) => {
  const {name, role, email, img} = array

  const card = `<div class="col-12 col-md-6 col-lg-4">
                <div class="member bg-black d-flex text-light">
                    <img src="./img/${img}" class="image" alt="">

                    <div class="member-info p-2">
                        <h5 class="name text-uppercase fw-bold mt-3">${name}</h5>
                        <p class="role mb-2 fs-5">${role}</p>
                        <p class="text-info mail fs-5">${email}</p>
                    </div>
                </div>
            </div>`

  return card
}

console.log(createMember(teamMembers))