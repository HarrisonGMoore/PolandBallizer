import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import router from 'express-router';

const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, '..', 'config', 'database.json'))[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

fs
	.readdirSync(__dirname)
	.filter(function(file) {
		return (file.indexOf(".") !== 0) && (file !== "index.js");
	})
	.forEach(function(file) {
		let model = sequelize.import(path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach(function(modelName) {
	if ("associate" in db[modelName]) db[modelName].associate(db);
});

router.get("/faq",function(req,res) {
  res.sendFile(path.join(__dirname, "../public/faq.html"));
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;