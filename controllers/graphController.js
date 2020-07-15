const db = require("../models");
const moment = require("moment");
var Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports = {
    getWeek: function (req, res) {
        var startOfWeek = moment().subtract(7,'d').toDate()
        var currentDate = moment().toDate()
        console.log(startOfWeek)
        db.Feelings.findAll({
            where: {
                createdAt: {
                    [Op.between]: [startOfWeek, currentDate]
                }
            }
        })
        .then((data) => {res.json(data)})
        .catch((err) => res.status(422).json(err));
    },
    getMonth: function (req, res) {
        var startOfMonth = moment().subtract(30,'d').toDate()
        var currentDate = moment().toDate()
        db.Feelings.findAll({
            where: {
                createdAt: {
                    [Op.between]: [startOfMonth, currentDate]
                }
            }
        })
        .then((data) => {res.json(data)})
        .catch((err) => {res.status(400).json(err)})   
    },
    getYear: function (req, res) {
        var startOfYear = moment().subtract(365,'d').toDate()
        var currentDate = moment().toDate()
        db.Feelings.findAll({
            where: {
                createdAt: {
                    [Op.between]: [startOfYear, currentDate]
                }
            }
        })
        .then((data) => {res.json(data)})
        .catch((err) => {res.status(400).json(err)})   
    }
}