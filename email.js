const nodemailer = require('nodemailer');
const http = require('http')
const queryString = require('querystring')
const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 465,

    auth: {
        user: '463428221@qq.com',
        pass: 'youvqkvlpaxdbhaj'
    }
});


http.createServer(function (req, res) {
    var content = '';
    req.on('data', function (chunk) {
        content += chunk;
    })
    req.on('end', function () {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('re:' + content);
        res.end();
        let text = queryString.parse(content).data;
        content = JSON.parse(text)[0]
        console.log(content['title']);
        let mailOptions = {
            from: '"网易回帖 👻" <463428221@qq.com>', // sender address
            to: 'dec_fan@icloud.com', // list of receivers
            subject: 'Hello ✔', // Subject line
            text: text, // plain text body
            html: `<h3>${content['title']}</h3><a href='${content['url']}'>原文链接</a><h4>昵称：${content['comments'][0].user.userId}</h4><p>内容：${content['comments'][0].content}</p>` // html body
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });

    })

}).listen(80)


