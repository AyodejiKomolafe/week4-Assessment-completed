const fortuneSets = [
    {id: 1, 
    fortuneType: "inspire",
    fortune:"All the effort you are making will ultimately pay off." },
    {id: 2, 
    fortuneType: "encourage",
    fortune: "All will go well with your new project."},
    {id: 3, 
    fortuneType: "progress",
    fortune:"Bide your time, for success is near."},
]
let fortuneSetsId = 3;





module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req,res) => {
        const fortune =["A faithful friend is a strong defense.", "A fresh start will put you on your way.", "A lifetime of happiness lies ahead of you.", "Adventure can be real happiness.", "All your hard work will soon pay off."];

        let randomIndex = Math.floor(Math.random() * fortune.length );
        let randomFortune = fortune[randomIndex];
        res.status(200).send(randomFortune);
    },
    getFortuneSets: (req,res) => {
        res.status(200).send(fortuneSets)
        console.log(fortuneSets)

    },

    deleteFortune: (req,res) => {
        let {id} = req.params;
        const fortuneToDelete = fortuneSets.find((obj) => obj.id === parseInt(id));
        fortuneSets.splice(id - 1, 1)
        res.status(200).send(fortuneSets)
    },

    addFortune: (req,res) => {
       const fortuneToAdd = {
        id: ++fortuneSetsId,
        fortuneType: req.body.fortuneType,
        fortune: req.body.fortune
       }
       fortuneSets.push(fortuneToAdd);
       res.status(200).send(fortuneSets)

    },

    editFortune: (req,res) => {
        const { id } = req.params;
        const fortuneToUpdate = fortuneSets.find((obj) => obj.id === parseInt(id));
        fortuneToUpdate.fortune = req.body.fortune;
        res.status(200).send(fortuneSets)
    }
}