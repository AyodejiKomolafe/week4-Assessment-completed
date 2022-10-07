const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getFortuneSets, deleteFortune, addFortune, editFortune} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/fortuneSets", getFortuneSets)
app.delete("/api/fortuneSets/:id", deleteFortune)
app.post("/api/fortuneSets", addFortune)
app.put("/api/fortuneSets/:id", editFortune)

app.listen(4000, () => console.log("Server running on 4000"));
