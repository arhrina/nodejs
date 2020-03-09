var express = require("express")
var router = express.Router()
var bookVO = require("../models/bookVO")


router.get("/", function(req, res){
    bookVO.find({}, function(err, books){
        res.render('book/list', {books:books}) // book/list에 books라는 이름에 books를 실어보냄
    })
})

router.get("/insert", function(req, res){
    var book = new bookVO()
    res.render('book/write', {book:book, formTitle:'INSERT'})
})

module.exports = router