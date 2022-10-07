
const complimentBtn = document.getElementById("complimentButton")

const fortuneBtn = document.getElementById("fortuneButton")

const body = document.querySelector("body")

const fortuneContainer = document.querySelector(".fortune-container")



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
    .then(res => {
        const data = res.data;
        alert(data);
    })
}

const submitbtn = document.querySelector("#submit-form")
const typeInput = document.querySelector(".type-input")
const fortuneInput = document.querySelector(".fortune-input")

const postFortune = (event) =>{
    event.preventDefault()
    fortuneContainer.innerHTML = ""

    let body = {
        fortuneType: typeInput.value,
        fortune: fortuneInput.value
    }
    axios.post("http://localhost:4000/api/fortuneSets", body)
    .then(response =>{
        console.log(response.data)
        response.data.forEach(element =>{
            fortuneCard(element)
        })

    })
    typeInput.value =""
    fortuneInput.value =""
}

function fortuneCard(data){
    const userCard = document.createElement('div')
    userCard.classList.add("fortune-style")

    userCard.innerHTML = `<p>id: ${data.id}</p>
    <p>fortuneType: ${data.fortuneType}</p>
    <p>fortune: ${data.fortune}</p>
    `
    fortuneContainer.appendChild(userCard)
}

let submit = document.querySelector(".submit");

const getFortuneType = (e) =>{
    e.preventDefault()
    axios.get("http://localhost:4000/api/fortuneSets")
    .then(response =>{
        let input = document.querySelector(".submit-input")
        const filteredData = response.data.filter(element =>{
            return element.fortuneType === input.value
        })
        filteredData.forEach(element =>
            fortuneCard(element))
        input.value = ""
    })
}

submit.addEventListener("submit", getFortuneType)

submitbtn.addEventListener("click", postFortune)

complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener("click", getFortune)