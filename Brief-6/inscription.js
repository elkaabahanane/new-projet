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

    fs.appendFileSync('InfoUtilisateur.json', JSON.stringify(utilisateur))

    res.send('Vous avez inscrit avec succés');
})

app.listen(7000, function () {
    console.log('Hello')
})