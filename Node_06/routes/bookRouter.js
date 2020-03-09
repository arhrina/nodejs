// express framework를 사용한 라우터 생성. 사용이 매우 편해짐. node 프로젝트는 대부분 익스프레스를 사용
var express = require("express")
var router = express.Router()
var bookVO = require("../models/bookVO")

// selectAll 전체 리스트 보기
router.get("/", function(req, res){

    bookVO.find({}, function(err,books){
        res.render("book/list", {books:books})
    })
})

// insert 화면 보여주기
router.get("/insert", function(req, res){ // req는 request, res는 response
    var book = new bookVO()
    res.render('book/write', {book:book, formTitle:'INSERT'})
})

// insert 실제 동작하는 POST
router.post("/insert", function(req, res){
    var book = new bookVO(req.body)
    book.save(function(err, data){
        res.redirect('/book')
    })
})

// update 화면 보이기, id를 매개변수로 사용
router.get("/update/:id", function(req, res){
    bookVO.findOne({_id:req.params.id}, function(err, book){
        res.render("book/write", {book:book, formTitle:'UPDATE'})
    })
})

// update 동작, id를 매개변수로
router.post("/update/:id", function(req, res){
    let id = req.params.id
    bookVO.update({_id:id}, {$set:req.body}, function(err,data){
        res.redirect('/book')
    })
})


// delete 동작, id 매개변수
router.get("/delete/:id", function(req, res){
    let id = req.params.id
    bookVO.deleteOne({_id:id}, function(err, data){
        res.redirect('/book')
    })
})

module.exports = router