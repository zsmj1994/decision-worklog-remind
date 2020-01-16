const fs = require('fs')

function writeJson(picurl) {
    //现将json文件读出来
    fs.readFile('./config.json', function (err, data) {
        if (err) {
            return console.error(err)
        }
        let person = JSON.parse(data)

        person.msg.news.articles[0].picurl = picurl
        var str = JSON.stringify(person)
        fs.writeFile('./config.json', str, function (err) {
            if (err) {
                console.error(err)
            }
            console.log('----------新增成功-------------')
        })
    })
}

let picurl = process.argv.slice(2)[0]
writeJson(picurl)