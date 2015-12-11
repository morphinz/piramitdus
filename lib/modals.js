var mongoose = require('mongoose')
   ,Schema   = mongoose.Schema;

var yillik = new Schema({
	  hafta  :{ type: String },
	  gunler :{ type: String },
	  icerik :{ type: String  },
	  ders_id:{ type: Schema.ObjectId},
	  kayit_tarihi :{ type: Date ,default: Date.now},
});
var dersler =new Schema({
	  ders_adi:{type:String },
	  tarih   :{ type: Date ,default: Date.now},
})

exports.defineModels=function(cb) {

    mdb.model('yillik'    ,yillik);
    mdb.model('dersler'   ,dersler);
      console.log("sys Models registered");
    if (cb) { cb(); }
};
