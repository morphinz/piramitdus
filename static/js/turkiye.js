	var iscountyselected = false;
	var previouscountyselected = "blank";
	var start = true;
	var past = null;
	var content_dir = "details";
	
	$(function(){
	
	var r = Raphael('map'),
	attributes = {
            fill: '#666',
            stroke: '#fff',
            'stroke-width':.5,
            'stroke-linejoin': 'round',
        },
	arr = new Array();
	
	for (var county in paths) {
		
		var obj = r.path(paths[county].path);
		
		obj.attr(attributes);
		
		arr[obj.id] = county;
        ////Boş olanları karala start
		if(paths[arr[obj.id]].value === "Selected"){
			obj.animate({
						fill: '#222222'}, 50);
		}
		////Boş olanları karala finish
							
		if(arr[obj.id] != 'blank') 
		{				
			obj.data('selected', 'notSelected');
			
		
		
			obj.node.id = arr[obj.id];
			
			obj.attr(attributes).attr( { title: paths[arr[obj.id]].name } );
			

			obj
			.hover(function(){
				$('#coatOfArms').addClass(arr[this.id]+'large sprite-largecrests');
				
				$('#countyInfo').text(paths[arr[this.id]].name);
				
				$('#searchResults').stop(true,true);
				
							
			}, function(){	
				$('#coatOfArms').removeClass();			
				if(paths[arr[this.id]].value == 'notSelected')
					{
					$('.'+paths[arr[this.id]].name)
							.slideUp('slow', function() { 
								$(this).remove(); 
							});
				}
			});
			$("svg a").qtip({
			
					content: {
						attr: 'title'
					},
					show: 'mouseover',
					hide: 'mouseout',
					position: {
						target: 'leave'
					},
					style: {
						classes: 'ui-tooltip-tipsy ui-tooltip-shadow',
						tip: false
					}
			});
			
			obj.click(function(){	
				bilgi_goster(this.id);
				
				});

			var countyCrest = 	{
					content: {
						attr: 'title'
					},
					position: {
						target: 'mouse'
					},
					style: {
						classes: 'ui-tooltip-tipsy ui-tooltip-shadow',
						tip: true
					}
			};
			
			function hoverin(e){
				if(paths[arr[this.id]].value == 'notSelected')
					this.animate({
						fill: '#15d4f5'}, 50);						
			}

			function hoverout(e){			
				if(paths[arr[this.id]].value == 'notSelected')
					this.animate({
						fill: '#888'}, 300);
			}

			obj.mouseout(hoverout);
				
			obj.mouseover(hoverin);

			$('#countyInfo').hide();
			
			$('#spinner').hide();
				
		}
		
	} 			
});
	//Harita üzerinde açılan popup'un içerisinde bulunan bilgileri aşağıdan düzenleyebilirsiniz. (sehir=Başlık, liste=orta kısım) 
	function bilgi_goster(id){
		var iller=[
//					{"id":"1","bilgiler":{"sehir":"Balıkesir","liste":"X firma"}},
//					{"id":"2","bilgiler":{"sehir":"Bilecik","liste":"X firma"}},
//					{"id":"3","bilgiler":{"sehir":"Bursa","liste":"X firma"}},
//					{"id":"4","bilgiler":{"sehir":"Çanakkale","liste":"X firma"}},
//					{"id":"5","bilgiler":{"sehir":"Edirne","liste":"X firma"}},
					{"id":"6","bilgiler":{"sehir":"İstanbul","liste":"ERKOÇ SIHHI TESİSAT VE İNŞ.MALZ.SAN.TİC.LTD.ŞTİ. ORHAN VELİ KANIK CAD.NO:32 KAVACIK/BEYKOZ/İSTANBUL  (0216) 413 57 50 <br><br>  KARADENİZ İNŞAAT MALZ TOPTAN SATIŞ VE PAZARLAMA   ORHANGAZİ MH İSTİKLAL CD NO: 645/A> (0216) 912 02 61 <br><br>  AR TİC.  GAZİ MH. YANYOL CAD. NO:112 ALTKAYNARCA/PENDİK> (0216) 375 36 97 <br><br>  SOYLU YAPI ALTAYÇEŞME MH.BAĞDAT CAD.COŞKUN AP.NO299/A> (0216) 441 90 24 <br><br>  BEŞİROĞLU TİC FATİH SULTAN MEMHMET CAD. NO 280  BAYRAMOĞLU> (0262) 653 54 11 <br><br>  HOME STYLE FERAHEVLER MAH ADNAN KAHVECİ CAD.NO 55/A  TARABYA> (0212) 262 63 64 <br><br>  MERKEZ NALBUR YENİŞEHİR MH.MUSTAFA AKYOL SK.BELDE İŞ MERKEZİ KURTKÖY> (0530) 970 24 70 <br><br>  TEVETOĞLU YAPI MLZ-ZÜMRÜTEVLER TÜLİN CAD.NO-74> (0216) 427 56 59 <br><br>  ULUS İNŞ. LTD.ŞTİ-NALBUR FATİH MH HÜRRİYET CD NO 35 ESENYALI PENDİK> (0216) 493 92 94 <br><br>  KULETAŞ  İNŞAAT VE YAPI MALZEMELERİ NAMIK KEMAL MH MARMARA CD NO 6-8  ÜMRANİYE> (0216) 412 08 23"}},
//					{"id":"7","bilgiler":{"sehir":"Kırklareli","liste":"X firma"}},
//					{"id":"8","bilgiler":{"sehir":"Kocaeli","liste":"X firma"}},
//					{"id":"9","bilgiler":{"sehir":"Sakarya","liste":"X firma"}},
//					{"id":"10","bilgiler":{"sehir":"Tekirdağ","liste":"X firma"}},
//					{"id":"11","bilgiler":{"sehir":"Yalova","liste":"X firma"}},
//					{"id":"12","bilgiler":{"sehir":"Ankara","liste":"X firma"}},
//					{"id":"13","bilgiler":{"sehir":"Çankırı","liste":"X firma"}},
//					{"id":"14","bilgiler":{"sehir":"Eskişehir","liste":"X firma"}},
//					{"id":"15","bilgiler":{"sehir":"Kayseri","liste":"X firma"}},
//					{"id":"16","bilgiler":{"sehir":"Kırşehir","liste":"X firma"}},
//					{"id":"17","bilgiler":{"sehir":"Konya","liste":"X firma"}},
//					{"id":"18","bilgiler":{"sehir":"Nevşehir","liste":"X firma"}},
//					{"id":"19","bilgiler":{"sehir":"Niğde","liste":"X firma"}},
//					{"id":"20","bilgiler":{"sehir":"Sivas","liste":"X firma"}},
//					{"id":"21","bilgiler":{"sehir":"Yozgat","liste":"X firma"}},
//					{"id":"22","bilgiler":{"sehir":"Aksaray","liste":"X firma"}},
//					{"id":"23","bilgiler":{"sehir":"Karaman","liste":"X firma"}},
//					{"id":"24","bilgiler":{"sehir":"Kırıkkale","liste":"X firma"}},
					{"id":"25","bilgiler":{"sehir":"Afyonkarahisar","liste":"GÜL İNŞAAT ECE MH.Y.EMRE BULVARI NO:73 SANDIKLI/AFYON (0272) 512 65 78"}},
//					{"id":"26","bilgiler":{"sehir":"Aydın","liste":"X firma"}},
//					{"id":"27","bilgiler":{"sehir":"Denizli","liste":"X firma"}},
//					{"id":"28","bilgiler":{"sehir":"İzmir","liste":"X firma"}},
//					{"id":"29","bilgiler":{"sehir":"Kütahya","liste":"X firma"}},
//					{"id":"30","bilgiler":{"sehir":"Manisa","liste":"X firma"}},
//					{"id":"31","bilgiler":{"sehir":"Muğla","liste":"X firma"}},
//					{"id":"32","bilgiler":{"sehir":"Uşak","liste":"X firma"}},
//					{"id":"33","bilgiler":{"sehir":"Adana","liste":"X firma"}},
//					{"id":"34","bilgiler":{"sehir":"Antalya","liste":"X firma"}},
//					{"id":"35","bilgiler":{"sehir":"Burdur","liste":"X firma"}},
//					{"id":"36","bilgiler":{"sehir":"Hatay","liste":"X firma"}},
//					{"id":"37","bilgiler":{"sehir":"Isparta","liste":"X firma"}},
//					{"id":"38","bilgiler":{"sehir":"Mersin","liste":"X firma"}},
//					{"id":"39","bilgiler":{"sehir":"Kahramanmaraş","liste":"X firma"}},
//					{"id":"40","bilgiler":{"sehir":"Osmaniye","liste":"X firma"}},
//					{"id":"41","bilgiler":{"sehir":"Amasya","liste":"X firma"}},
					{"id":"42","bilgiler":{"sehir":"Artvin","liste":"KASIMOĞLU YAPI MARKET LTD.ŞTİ FEVZİ ÇAKMAK CD. İZMİR PASAJI NO:21  ARTVİN 0466 312 54 15"}},
//					{"id":"43","bilgiler":{"sehir":"Bolu","liste":"X firma"}},
//					{"id":"44","bilgiler":{"sehir":"Çorum","liste":"X firma"}},
//					{"id":"45","bilgiler":{"sehir":"Giresun","liste":"X firma"}},
//					{"id":"46","bilgiler":{"sehir":"Gümüşhane","liste":"X firma"}},
					{"id":"47","bilgiler":{"sehir":"Kastamonu","liste":"KALE YAPI MALZ. BEYÇELEBİ MH. 125,YIL ATATÜRK CD. YAVUZ YAMAN APT.   KASTAMONU 0366 212 44 46"}},
					{"id":"48","bilgiler":{"sehir":"Ordu","liste":"ÇAKMAKLAR YAPI MALZ.İNŞ.VE TİC.LTD.ŞTİZÜBEYDE HANIM CAD.NO 139 ORDU Telefon (0452): 233 23 58 <br> <br> GARİPLER TAAHHÜT MOB.TİC.SAN.LTD.ŞTİ ŞİRİNEVLER MAH ZÜBEYDE HNM CAD. NO:227/A ORDU (0452) 233 23 45 "}},
					{"id":"49","bilgiler":{"sehir":"Rize","liste":"YILMAZ SIHHI TESİSAT GÜLBAHAR MAH.ATATÜRK CAD.NO.696/B RİZE 0464 217 52 05 "}},
					{"id":"50","bilgiler":{"sehir":"Samsun","liste":"YILDIZ MOBİLYA FENK MAH. FİSKOBİRLİK CAD. NO163  SAMSUN/TERME 05326235376"}},
					{"id":"51","bilgiler":{"sehir":"Sinop","liste":"İNŞAAT 99 HAMİDİYE MAH. OKULLAR CAD NO:8 GERZE SİNOP 0368 718 26 99"}},
//					{"id":"52","bilgiler":{"sehir":"Tokat","liste":"X firma"}},
					{"id":"53","bilgiler":{"sehir":"Trabzon","liste":"ATMACA AKYILDIZ - MARAŞ CAD.PAZARKAPI MAH.NO 134 / TRABZON Telefon (0462) 326 96 85"}},
//					{"id":"54","bilgiler":{"sehir":"Zonguldak","liste":"X firma"}},
//					{"id":"55","bilgiler":{"sehir":"Bayburt","liste":"X firma"}},
//					{"id":"56","bilgiler":{"sehir":"Bartın","liste":"X firma"}},
					{"id":"57","bilgiler":{"sehir":"Karabük","liste":"İKİLER SAN .TİC. LTD. ŞTİ HÜRRİYET MAH.AKTAŞ CAD. NO.8  KARABÜK 0 370 412 10 41"}}
//					{"id":"58","bilgiler":{"sehir":"Düzce","liste":"X firma"}},
//					{"id":"59","bilgiler":{"sehir":"Adıyaman","liste":"X firma"}},
//					{"id":"60","bilgiler":{"sehir":"Diyarbakır","liste":"X firma"}},
//					{"id":"61","bilgiler":{"sehir":"Gaziantep","liste":"X firma"}},
//					{"id":"62","bilgiler":{"sehir":"Mardin","liste":"X firma"}},
//					{"id":"63","bilgiler":{"sehir":"Siirt","liste":"X firma"}},
//					{"id":"64","bilgiler":{"sehir":"Şanlıurfa","liste":"X firma"}},
//					{"id":"65","bilgiler":{"sehir":"Batman","liste":"X firma"}},
//					{"id":"66","bilgiler":{"sehir":"Şırnak","liste":"X firma"}},
//					{"id":"67","bilgiler":{"sehir":"Kilis","liste":"X firma"}},
//					{"id":"68","bilgiler":{"sehir":"Ağrı","liste":"X firma"}},
//					{"id":"69","bilgiler":{"sehir":"Bingol","liste":"X firma"}},
//					{"id":"70","bilgiler":{"sehir":"Bitlis","liste":"X firma"}},
//					{"id":"71","bilgiler":{"sehir":"Elazığ","liste":"X firma"}},
//					{"id":"72","bilgiler":{"sehir":"Erzincan","liste":"X firma"}},
//					{"id":"73","bilgiler":{"sehir":"Erzurum","liste":"X firma"}},
//					{"id":"74","bilgiler":{"sehir":"Hakkari","liste":"X firma"}},
//					{"id":"75","bilgiler":{"sehir":"Kars","liste":"X firma"}},
//					{"id":"76","bilgiler":{"sehir":"Malatya","liste":"X firma"}},
//					{"id":"77","bilgiler":{"sehir":"Muş","liste":"X firma"}},
//					{"id":"78","bilgiler":{"sehir":"Tunceli","liste":"X firma"}},
//					{"id":"79","bilgiler":{"sehir":"Van","liste":"X firma"}},
//					{"id":"80","bilgiler":{"sehir":"Ardahan","liste":"X firma"}},
//					{"id":"81","bilgiler":{"sehir":"Iğdır","liste":"X firma"}},
					];
		iller.forEach(function(data){
			if(data.id==id){
				show_modal(data);
			}
		});	
	}
	function show_modal(data){
		$('#genel').modal();
		$('#genel .modal-title').html('').append(""+data.bilgiler.sehir+"");//ttle
		$('#genel .modal-body').html('').append(""+data.bilgiler.liste+"");
	}
