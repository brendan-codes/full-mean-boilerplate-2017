// ===== ROUTES =====
// ==================
// This is our routing file. This is where we define all the
// SERVERSIDE DATA ROUTES. These routes have nothing to do with
// Angular's router. These routes are called by your service.


let path = require('path');
let users = require('../controllers/notes.js');

module.exports = function(app){

    app.post('/new', function(req, res){
        users.new(req, res);
    })

    app.get('/all', function(req, res){
        users.index(req, res);
    })

    app.all("*", (req, res) => { 
        res.sendFile(path.resolve("../client/dist/index.html")) 
    });
}