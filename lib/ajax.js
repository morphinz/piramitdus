var nodemailer  = require('nodemailer'),
    fs          = require('fs'),
   http         = require('http');

var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "resit.yilmaz@usishi.com",
        pass: "76307630"
    }
});
exports.ask = function(req,res){
    var question = req.params.question;
    console.log('\033[40m\033[33m---- question: '+question+'\033[0m');
    console.log(question);
    switch(question){
        case 'mail':
          console.log("adam geliyor");
          console.log(req.body.isim);
             
                var mailOptions = {
                      from: "resit.yilmaz@usishi.com", // sender address
                      to: "ozkan.goksu@usishi.com",
                      subject: "Piramit - Yeni Bayi Başvurusu",
                     html:'<html><body>'+
            '<table>'+
            '    <tbody>'+
            '        <tr><td><b>Merhaba, Yeni bir bayi başvurunuz bulunmaktadır.</b><br></td></tr>'+
            '        <tr><td><b>İsim:</b></td><td>'+req.body.isim+'</td></tr>'+
            '        <tr><td><b>Soyisim:</b></td><td>'+req.body.soyisim+'</td></tr>'+
            '        <tr><td><b>Firma ismi:</b></td><td>'+req.body.firma+'</td></tr>'+
            '        <tr><td><b>E-mail:</b></td><td>'+req.body.email+'</td></tr>'+
            '        <tr><td><b>Adresi:</b></td><td>'+req.body.adres+'</td></tr>'+
            '        <tr><td><b>Bulunduğu Bölge:</b></td><td>'+req.body.il+'</td></tr>'+
            '        <tr><td><b>Telefon:</b></td><td>'+req.body.telefon+'</td></tr>'+
            '    </tbody>'+
           	'</table>'+
     		'</body></html>'
                 	}
                              smtpTransport.sendMail(mailOptions, function(error, response){
                                    if(error){
                                       console.log(error);
                                       res.send(false);
                                        //uutils.sendReturn(res,"Mesaj gönderilirken bir hata oluştu,Lütfen tekrar deneyiniz.");
                                    }else{
                                      console.log("gönderildi");
                                      res.send(true);
                                      //console.log("Message sent: " + response.message);
                                      //uutils.sendReturn(res,"Mesajınız başarılı bir şekilde gönderilmiştir.");
                                    }
                              });                          
        break;
    }
}

var sendReturn =  function(res,returnVal) {
    res.contentType('application/json');
    if (this._isObject(returnVal)){
      res.send(JSON.stringify(returnVal));
    } else {
      res.send(returnVal);
    }
  }
