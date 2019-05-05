const db = require("../models");

module.exports = {
    findUsers: function(req,res) {
        db.User
            .findAll()
            .then(dbModel => res.json(dbModel.usernames))
            .catch(err => res.status(422).json(err));
    },
    createNewUser: function(req, res) {
        db.User
          .create(req.body.username, req.body.email, req.body.password, 0)
          .catch(err => res.status(422).json(err));
    },
    
    findAllComics: function(req, res) {
        db.UserComic
            .findAll({where : {userID : req.body}})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createComic: function(req, res) {
        db.UserComic
            .create({where : {userID : req.body}})
            .catch(err => res.status(422).json(err));
    },
    findComicByID: function(req, res) {
        db.UserComic
            .findOne({where : {userID : req.body, comicNum : req.body}})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateComic: function(req, res) {
        db.UserComic
            .update({where : {comicNum : req.body, userID : req.body}})
            .catch(err => res.status(422).json(err));
    },
    deleteComic: function(req, res) {
        db.UserComic
            .delete({where : {comicNum : req.body, userID : req.body}})
            .catch(err => res.status(422).json(err));
    },

    findPanelByID: function(req, res) {
        db.UserPanel
            .findOne({where : {userID : req.body, comicNum : req.body, panelNum : req.body}})
            .catch(err => res.status(422).json(err));
    },
    createPanel: function(req, res) {
        db.UserPanel
            .findOne({where : {comicNum : req.body, userID : req.body}})
            .catch(err => res.status(422).json(err));
    },
    updatePanel: function(req, res) {
        db.UserPanel
            .create({where : {userID : req.body, comicNum : req.body, panelNum : req.body}})
            .catch(err => res.status(422).json(err));
    },
    deletePanel: function(req, res) {
        db.UserPanel
            .delete({where : {userID : req.body, comicNum : req.body, panelNum : req.body}})
            .catch(err => res.status(422).json(err));
    }
};