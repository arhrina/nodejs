var mongoose = require("mongoose")

var bookVO = mongoose.Schema({
    bTitle : String,
    bWriter : String,
    bComp : String,
    bPrice : Number
})

// 외부에서 쓸 수 있도록 export
// tbl_books 이름으로 생성(복수로 자동변환)
module.exports = mongoose.model("tbl_book", bookVO)