// ===== Controller ======
// =======================
// This is a controller, it contains all the business logic
// of handling a route. It is defined as an object literal
// with methods attached to it. The method names are abitrary.
// We get our model here once it has already been set by mongoose.js.
// Controllers are LOWERCASE and PLURAL


let mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {

    index: function(req, res){
        Note.find({}, function(err, results){
            if(err){
                console.log(err);
                res.json({message: 'YOU GOT AN ERRORRRR'});
            }else{
                res.json(results);
            }
        })
    },

    new: function(req, res){
        console.log(req.body);
        Note.create(req.body, function(err, results){
            if(err){
                console.log(err);
                res.json({message: 'YOU GOT AN ERRORRRR'});
            }else{
                res.json(results);
            }
        })

    }
}