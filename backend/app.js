const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Autorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

app.use('/api/sauces', (req, res, next) => {
    const sauces= [
        {
            _id: 'hello', 
            name: 'bonjour', // String : nom de la sauce
            manufacturer: 'héhé', //string : fabricant de la sauce
            description: 'toto', //string: description de la sauce
            heat: 2 , //number: nombre entre 1 et 10 décrivant la sauce
            likes: 100, //number: nombre d'utilisateurs qui aiment (=likent) la sauce
            dislikes: 500, //number: nombre d'utilisateurs qui n'aiment pas (=dislikes) la sauce
            imageUrl: 'toot', //string: l'url de l'image de la sauce téléchargée par l'utilisateur
            mainPepper: 'toto', //string: le principal ingrédient épicé de la sauce
            usersLiked: 3, //string []: tableau des identifiants des utilisateurs qui ont aimé (=liked) la sauce
            userDisliked: 5,//string []: tableau des identifiants des utilisateurs  qui n'ont pas aimé (=disliked) la sauce
            userId: 'alex' //String: identifiant MongoDB unique de l'utilisateur qui a créé la sauce 
        },
    ];
    res.status(200).json(sauces);
})

module.exports = app;

