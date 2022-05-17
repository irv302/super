const express = require("express")
const app = express()

const port = 3000

const superheroes = [{
    name: "Dr. Mhattan",
    powers: ["nigh opmnipotent", "Matter manipulation",
     "Teleportation", "invulnerabilty"]
},
    {
    name: "Hulk",
    powers: ["super strength", "invunerbility"]
    },
   {
    name: "Spiderman",
    powers: ["Spider sense", "super strenght", "extreame agility",]
}]


app.get("/superheroes/", (req, res) => {
    res.send(superheroes)
});
app.get("superheroes/:index", (req, res) => {
    const { name, alias, powers } = superheroes[req.params.index]

    res.send(`
    <h1>${name}</h1>
        

    `)
});


// app.get("/superheroes/", (req, res) => {
//     res.send(`<h1>${superheroes[req.params.index].name}
//     </h1>`)
// }
// )
//look

app.listen(port, () => {
    console.log(`Listening on port`, port)
});