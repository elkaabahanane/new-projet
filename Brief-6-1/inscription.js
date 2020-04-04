const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const fs = require('fs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/Accueil.html'))
})

app.get('/inscription', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/Inscription.html'))
})

app.post('/register', (req, res) => {
    let utilisateur = {
        Nom: req.body.lastName,
        Prenom: req.body.firstName,
        Cin: req.body.cin,
        Birth: req.body.BirthDate,
        Email: req.body.email,
        Password: req.body.password
    }

    var usersData = fs.readFileSync('InfoUtilisateur.json', 'utf-8');
    var arrayOfObjects = JSON.parse(usersData)
    arrayOfObjects.push(utilisateur)

    fs.writeFileSync('InfoUtilisateur.json', JSON.stringify(arrayOfObjects))

    res.json('Vous avez inscrit avec succés');
})

app.listen(7000, function () {
    console.log('App is running on port 7000, http://localhost:7000')
})