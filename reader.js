const fs = require('fs')

fs.readFile('./tmp/test.txt', 'utf8' , (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log("hihi")
    console.log(data);
    console.log("==============================================================")
})


fs.readFile('text.txt', 'utf8' , (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log("hihi")
    console.log(data);
})