var express          = require('express'),
    http             = require('http'),
    pjson            = require('./package.json'),
    ajaxfunctions    = require('./lib/ajax'),
    uwebtools        = require('uwebtools'),
    config           = require('./config'),
    mongoose         = require('mongoose'),
    models           = require('./lib/modals'),
    fs               = require('fs'),
    jade             = require('jade');
  
  var mdb                 = global.mdb    = mongoose.createConnection();
  var config              = global.config = require('./config').config;
  var app = express();
  var uutils = global.uutils = uwebtools.uutils.createObject();

  app.configure(function() {
    app.set('port',process.env.PORT || 8080);
    app.use(express.favicon());
    app.use('/static',express.static(__dirname + '/static'));
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade'); 
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('piramit".2012'));
    app.use(express.session({cookie:{ maxAge:60000*60*24*7 }}));
    app.use(app.router);   
  });
 app.get('/', function (req, res) {
  res.render('index', {});
});
  app.get('/pg/:page',function(req,res){
    res.render(req.params.page,{});
  });
  app.get('/pg/:page/:id',function(req,res){
    page_check(req.params.id,function(veri){
      if(veri)
        res.render(req.params.page,{id:req.params.id});
      else
        res.render('page-404', {});
    });
       
  });
  app.all('/ajax/:question',ajaxfunctions.ask);

  var listenHttp = function(){
    http.createServer(app).listen(app.get('port'), function(){
      var date= new Date();
      console.log("\033[41m\033[33m >> "+date+" : "+pjson.name+'_'+pjson.version+" listening on port " + app.get('port')+"\033[0m");
    });  
  }
  mdb.open(config.DBConnection,function(e){
  if (e) {
    mdb=null;
    console.log("---------------------------------------------------------------------------");
    console.log("||-----------------VERİ TABANI BAĞLANTI HATASI   ---------------------------------||");
    console.log("|| "+e+" ||");
    console.log("---------------------------------------------------------------------------");
  } else {
      console.log("Veritabanına bağlandı");
      models.defineModels(function(){
        
        listenHttp();

      });
    }
}); //definemodels
var page_check=function(id,cb){
  var sayac=0,sayac2=0;
    config.urunler.forEach(function(arr){
      sayac++;
      if(id.toString()==arr.id.toString()){
        sayac2++;
      }
      else{
       if(sayac==config.urunler.length)
        if(sayac2>0)
          cb(true);
        else 
          cb(false);
      }
    });
}