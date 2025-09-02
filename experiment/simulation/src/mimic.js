

$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w =660;
	var h = 550;

	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}

var x=100;
var y=160;	

//var Ledcircle = paper.circle(0, 0, 0); ;
//var resetimg=paper.image("images/reset.png",x+120,y-150,100, 50);

function mimic(iPinSelect,oPinSelect,switchConfigSelect,LedConSelect){
//	$("#main-div-conf").html('');	
//    $("#canvas-div").html('');
//    $("#canvas-div").html('<button id="checkBtn" class="btn btn-primary" style="margin-left:50px; margin-top:50px; "><b>Check Connection</b></button>');
    			
//    $("#checkBtn").prop('hidden',false);	
    $("#centerText1").html('MIMIC');
    $("#centerText2").html('CONFIGURATION');
    $('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w =650;
	var h = 550;
	
	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}
	

var x=100;
var y=160;	


var IpinVal=parseInt(iPinSelect);
var pinVal=parseInt(oPinSelect);					
var diodSelection2=parseInt(LedConSelect);
var switchConfigSelection=parseInt(switchConfigSelect);
//console.log("switchConfigSelection="+switchConfigSelection+"      ,  pinVal="+pinVal);
//console.log("IpinVal="+IpinVal);

//var interval_plot1=timeVal/1000;
//var offTime1=ON_dlyVal/1000;
//var onTime1=OFF_dlyVal/1000;
//var onTime11=onTime1+offTime1;
var interval_plot1=1000/1000;
var offTime1=500/1000;
var onTime1=500/1000;
var onTime11=onTime1+offTime1;

var checkStatus=paper.image("images/checkBtn1.png",x-90,y-150,200, 50);
var resetimg=paper.image("images/resetconnectioPreview.png",x+240,y-150,180, 50);
//var runimg=paper.image("images/runPreview.png",x+120,y-150,100, 50);
//var microcontroller=paper.image("images/chipImg.png",x-40,y+40,400, 300).rotate(1);

//var Ledcircle=paper.circle(x+230, y-21, 35);


var diodSelection=1;
//Math.floor(Math.random() * 2);
//console.log("diodSelection = "+diodSelection);
var diode;
var anode;
var cathode;
if (ledTypeVAl == 2){
	
	diode=paper.image("images/diodeSymbolMirrorImg_preview.png",x+250,y+195,150, 110);
	anode=paper.circle(x+283, y-19, 0).attr({'fill':'#FF0800'});
	cathode=paper.circle(x+168, y-19, 0).attr({'fill':'#FF0800'});
}else{	
	diode=paper.image("images/diodeSymbol2.png",x+250,y+195,150, 110);
	anode=paper.circle(x+283, y-19, 0).attr({'fill':'#FF0800'});
	cathode=paper.circle(x+168, y-19, 0).attr({'fill':'#FF0800'});
}



var r=paper.image("images/resistorSymbol.png",x+400,y+245,120, 55); 
//var connection_RtoG=paper.path("M"+(x+436)+" "+(y-17.5)+"l 30 0 l 0 30   ").attr({'stroke-width':2});
var ground= paper.image("images/ground.png",x+480,y+330,50, 21);

var Rcircle=paper.circle(x+363, y-17.5, 0).attr({'fill':'#FF0800'});
var Ledcircle2=paper.circle(x+330, y+270, 35);
var terminalRD0=paper.circle(x+158, y+61, 0).attr({'fill':'#FF0800'});
var terminalRD1=paper.circle(x+142, y+61, 0).attr({'fill':'#FF0800'});
var terminalRD2=paper.circle(x+127, y+61, 0).attr({'fill':'#FF0800'});
var terminalRD3=paper.circle(x+111, y+61, 0).attr({'fill':'#FF0800'});
var terminalRD4=paper.circle(x+28, y+116, 0).attr({'fill':'#FF0800'});
var terminalRD5=paper.circle(x+28, y+130, 0).attr({'fill':'#FF0800'});
var terminalRD6=paper.circle(x+28, y+144, 0).attr({'fill':'#FF0800'});
var  terminalRD7=paper.circle(x+28, y+156.5, 0).attr({'fill':'#FF0800'});

var terminalRC0 = paper.circle(x+208, y+118, 0).attr({'fill':'#1a0dab'});
var terminalD13 = paper.circle(x+208, y+232, 0).attr({'fill':'#FF0800'});
var terminalRC1=paper.circle(x+206, y+61, 0).attr({'fill':'#1a0dab'});
var terminalRC2=paper.circle(x+190, y+61, 0).attr({'fill':'#1a0dab'});
var terminalRC3=paper.circle(x+174, y+61, 0).attr({'fill':'#1a0dab'});
var terminalRC4=paper.circle(x+95, y+61, 0).attr({'fill':'#1a0dab'});
var terminalRC5=paper.circle(x+80, y+61, 0).attr({'fill':'#1a0dab'});
var terminalRC6=paper.circle(x+64, y+61, 0).attr({'fill':'#1a0dab'});
var terminalRC7=paper.circle(x+28, y+102, 0).attr({'fill':'#1a0dab'});


//var ground_circle=paper.circle(x+325,y+263,5).attr({'fill':' #FF0000'});
//var vddCircle=paper.circle(x+28, y+184, 5).attr({'fill':'#000'});
//var vdd= paper.image("images/VDD5V.png",x-76.4,y+115,55, 51);
//var vddConnection=paper.path("M"+(x+24)+" "+(y+184)+"l -81 0 l 0 -22").attr({'stroke-width':3});

var switchCircleNAme=paper.text(x+320, y+85,"Switch").attr({"font-weight":"bold",'font-size': 14});
var switchCircleNAme=paper.text(x+320, y+102,"Terminal").attr({"font-weight":"bold",'font-size': 14});
var switchCircle=paper.circle(x+308, y+118, 5).attr({'fill':'#1a0dab'});
var switchbaseImg=paper.image("images/switchPIC2.png",x+358,y+72,101, 50);
var ardinoPin = paper.image("images/ardinoPin.png",x+50,y+72,151, 200);
var switchTopImg ;
 

// condition for sourcing sinking switch connection
if(switchConfigSelection==1){
	console.log("high");
	switchTopImg = paper.image("images/PICswitchTopPreview.png",x+370,y+50,78, 41);
	
}else{
	console.log("hwt");
	switchTopImg = paper.image("images/PICswitchTopPreview.png",x+370,y+60,78, 41);
//	var resister2=paper.image("images/resistorSymbol.png",x+410,y+137,120, 55).rotate(90); 
////	var resister2reading=paper.text(x+490,y+165,"1K").attr({'font-size':14,'stroke':'#800000'});
//	var sConnection=paper.path("M"+(x+310)+" "+(y+118)+"l 50 -0.7 ").attr({'stroke-width':3});
//	var groundConnection=paper.path("M"+(x+455)+" "+(y+118)+"l 16 0 ").attr({'stroke-width':3});
//	var ground1= paper.image("images/ground.png",x+445,y+208,50, 21);
//	var vdd2= paper.image("images/VDD5V.png",x+492.5,y+25,55, 51);
}
var t1 ;
var ground1;

var t = paper.path("M"+(x+505)+" "+(y+272)+"l  0 60 ").attr({'stroke-width':3});

// LED Connection Sourcning sinking
if (ledTypeVAl == 1){
	var t1 = paper.path("M"+(x+70)+" "+(y+300)+"l -60 0  l 0 30").attr({'stroke-width':3});
	var ground1= paper.image("images/ground.png",x-20,y+330,50, 21);
	var groundConnection=paper.path("M"+(x+310)+" "+(y+118)+" l 50 -1"
						+"M"+(x+456)+" "+(y+118)+" l 56 0 ").attr({'stroke-width':3});
	var resister2=paper.image("images/resistorSymbol.png",x+460,y+52,100, 55).rotate(90);					
	var vdd2 = paper.image("images/VDD5V.png",x+490,y,55, 51);
	
}


resetimg.click(function(){
	$("#canvas-div").html('');
//	$("#plot").html("");
		paper.clear();
		mimic(iPinSelect,oPinSelect,switchConfigSelect,LedConSelect);	
		$("#plot").prop("hidden",false);
		setRedflag=false;		
		statusFlag=false;
		reset();
	
})


var crossCheckConnect=false;
var cathodFlag=0;

	var pinName=0;	
	if(pinVal==1){
//		pinName=1;
		D0click=true;
	}else if(pinVal==2){
//		pinName=2;
		D1click=true;
	}else if(pinVal==3){
//		pinName=3;
		D2click=true;
	}else if(pinVal==4){
//		pinName=4;			
		D3click=true;
	}else if(pinVal==5){
//		pinName=5;
		D4click=true;
	}else if(pinVal==6){
//		pinName=6;
		D5click=true;
	}else if(pinVal==7){
//		pinName=7;
		D6click=true;
	}else if(pinVal==8){
//		pinName=8;
		D7click=true;
	}else{
//		alert("Wrong Connection.Please Try Again");
	}

var anodeClick=false;
var d0Flag=0;
var d1Flag=0;
var d2Flag=0;
var d3Flag=0;
var d4Flag=0;
var d5Flag=0;
var d6Flag=0;
var d7Flag=0;

var anode_connection_arr2=[];
var anodeflg=0;

var checkflag1=0;
var checkflag2=0;
var checkflag3=0;
var checkflag4=0;
var checkflag5=0;
var checkflag6=0;
var checkflag7=0;
var checkflag8=0;

var vfyRD0Connect=false;
var vfyRD1Connect=false;
var vfyRD2Connect=false;
var vfyRD3Connect=false;
var vfyRD4Connect=false;
var vfyRD5Connect=false;
var vfyRD6Connect=false; 
var vfyRD7Connect=false;

var d13click = false;

terminalD13.click(function(){
	if(cathodClick == true){
					anode_connection_arr2[0]=paper.path("M "+(x+210)+" "+(y+232)+ "l 0 0").attr({'stroke-width':3,'stroke':'#FF0800'});			
					anode_connection_arr2[0].animate({path :"M"+(x+210)+" "+(y+232)+"l 40 0 "},500, function(){
					anode_connection_arr2[1]=paper.path("M "+(x+250)+" "+(y+232)+ "l 0 0").attr({'stroke-width':3,'stroke':'#FF0800'});			
					anode_connection_arr2[1].animate({path :"M"+(x+250)+" "+(y+232)+"l 0 -180 "},500, function(){
					anode_connection_arr2[2]=paper.path("M "+(x+250)+" "+(y+52)+ "l 0 0").attr({'stroke-width':3,'stroke':'#FF0800'});			
					anode_connection_arr2[2].animate({path :"M"+(x+250)+" "+(y+52)+"l -85 0 "},500, function(){
					anode_connection_arr2[2]=paper.path("M "+(x+165)+" "+(y+52)+ "l 0 0").attr({'stroke-width':3,'stroke':'#FF0800'});			
					anode_connection_arr2[2].animate({path :"M"+(x+165)+" "+(y+52)+"l 0 -68 "},500, function(){
						d13click = true;
						
						})   
					
						
						})
					
						})
						})
						}
});


cathodClick = false;
cathode.click(function(){
	cathodClick = true;
})

var verifyAconnect=false;
anode.click(function(){
	anodeflg=1;
	anodeClick=true;
	
	var anode_connection_arr=[];
	if (diodSelection==0){
		TtoAconnectionforRDiod2();
	}else{
		TtoAconnection();
	}
	
});


//VDD Ground and Resister Connections for RC0 to RC7

var switchCircleFlag=0;
var switchCircleClick=false;
var vfySwitchConnect=false;
var connection1 = 0;
switchCircle.click(function(){
	console.log("switcheCircle");
	switchCircleFlag=1;
	connection1 = 1;
	switchCircleClick=true;
	vfySwitchConnect = true;
	StoT_connection_arr2[0]=paper.path("M "+(x+200)+" "+(y+118)+ "l 0 0").attr({'stroke-width':3 ,'stroke':'#1a0dab'});			
	StoT_connection_arr2[0].animate({path :"M"+(x+200)+" "+(y+118)+"l 103 0"},500,)
	
	
});

var c0Flag=0;
var c1Flag=0;
var c2Flag=0;
var c3Flag=0;
var c4Flag=0;
var c5Flag=0;
var c6Flag=0;
var c7Flag=0;

var inputpinName=0;

var inputCheckFlag1=0;
var inputCheckFlag2=0;
var inputCheckFlag3=0;
var inputCheckFlag4=0;
var inputCheckFlag5=0;
var inputCheckFlag6=0;
var inputCheckFlag7=0;
var inputCheckFlag8=0;

var vfyRc0Connect=false;
var vfyRc1Connect=false;
var vfyRc2Connect=false;
var vfyRc3Connect=false;
var vfyRc4Connect=false;
var vfyRc5Connect=false;
var vfyRc6Connect=false; 
var vfyRc7Connect=false;


var StoT_connection_arr2=[];
terminalRC0.click(function(){
c0Flag=1;
inputCheckFlag1=1;
if(vfySwitchConnect==true){
	toastr.success("Already Connected.");
}else{	
		console.log("hi");
		 if(switchCircleFlag==1){
				StoT_connection_arr2[0]=paper.path("M "+(x+200)+" "+(y+118)+ "l 0 0").attr({'stroke-width':3 ,'stroke':'#1a0dab'});			
				StoT_connection_arr2[0].animate({path :"M"+(x+200)+" "+(y+118)+"l 100 0"},500, function(){
					vfyRc0Connect=true;
					inputpinName=1;
//					inputCheckFlag1=1;
				});	

		}
}	
});




var cntVal=1;
function blink() {	
                if (cntVal%2==0) {
                    redInputconnection();
//                    console.log("IF cntVal = "+cntVal);
                } else {
                    blueInputconnection();
//                    console.log("ELSE cntVal = "+cntVal);
                }
                cntVal++;
                
//                console.log("cntVal = "+cntVal);
}

var switchpress='';
var arrowImg;
var arrowImg1;
checkStatus.click(function(){
	
//console.log("anodeflg"+anodeflg+", pinval="+pinVal+ ",pinname =" + pinName+", RcircleFlag="+RcircleFlag+", cathodFlag="+cathodFlag +", IpinVal="+IpinVal+", inputpinName="+inputpinName);

 if (wrongflg >= 1){
		toastr.warning("Wrong Connection. Please Try Again.");
}else{
		
	if(coorectflg == 3 ){
		statusFlag=true;				
//		$("#plot").html("");
//		$("#plot").prop("hidden",false);
//		start();
		start(1,0,1);
		
		toastr.success("Connection Established Successfully.Now Click on Switch.");	
		switchpress=paper.text(x+365,y+3,"Click and Hold the Switch").attr({'font-size':14});
		arrowImg=paper.image("images/downArrowIMG.gif",x+385,y+13,50, 40);	
		disableAllPoints();
		
	}else if(coorectflg <= 3){
		toastr.warning("Some Connections are missing.")
	}else{
		toastr.warning("First Establish Connection. Please Try Again.");
	}
}	
});




ardinoPin = paper.image("images/ardinoPin.png",x+50,y+72,160, 250);


var myInterval;
switchTopImg.mousedown( function() { 
	
	if(statusFlag==true){
		onTime1 = 1000/1000;
		offTime1 = 0/1000;
		switchpress.hide();
		arrowImg.hide();
		if(switchConfigSelection==1){
			setRedflag=true;
		switchTopImg.animate({transform: ['t',0, 10]}, 100);
		}else{
			setRedflag=false;
			switchTopImg.animate({transform: ['t',0, 0]}, 100);
		}
		$("#plot").prop("hidden",false);
		start(interval_plot1,onTime1,offTime1);
		//myInterval = setInterval(blink, 100); 
		
	}else{
		toastr.warning("Please Check Connection Status.");
	}
 })

switchTopImg.mouseup( function() {
	cntVal=1;
	
	
	if(statusFlag==true){
		onTime1 = 0/1000;
		offTime1 = 1000/1000;
		switchpress.show();
		arrowImg.show();		

	//var LedImg1=paper.image("images/offDiode.png", 285, 95, 85, 85);
//		var arrowImg11=paper.rect(x+389,y+7,40, 45).attr({'stroke':'#fff','fill':'#fff'});
	if(switchConfigSelection==1){
		setRedflag=false;
		switchTopImg.animate({transform: ['t',0, 0]}, 100);
		}else{
			setRedflag=true;
			switchTopImg.animate({transform: ['t',0, -20]}, 100);
		}
	$("#plot").prop("hidden",false);
	start(interval_plot1,onTime1,offTime1);
		//reset();		
	}else{
		toastr.warning("Please Check Connection Status.");
	}
	
 })
var coorectflg = 0;
var	wrongflg = 0;
 
 
  // Draw points
  var points = [
    paper.circle(x+268, y+270, 5).attr({fill: "red", stroke: "black", "stroke-width": 2}), 
    paper.circle(x+210, y+274, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d13
    paper.circle(x+390, y+270, 5).attr({fill: "red", stroke: "black", "stroke-width": 2}),
    paper.circle(x+420, y+270, 5).attr({fill: "red", stroke: "black", "stroke-width": 2}),
	paper.circle(x+305, y+118, 5).attr({fill: "blue", stroke: "black", "stroke-width": 2}),
	paper.circle(x+210, y+128, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d2
	paper.circle(x+210, y+140, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d3
	paper.circle(x+210, y+154, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d4
	paper.circle(x+210, y+168, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d5
	paper.circle(x+210, y+182, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d6
	paper.circle(x+210, y+195, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d7
	paper.circle(x+210, y+208, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d8
	paper.circle(x+210, y+220, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d9
	paper.circle(x+210, y+232, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d10
	paper.circle(x+210, y+245, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d11
	paper.circle(x+210, y+258, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d12
  ];

  // Assign IDs
  points.forEach((p, i) => p.data("id", "P" + (i+1)));

  var firstPoint = null;
  var connections = [];
  var  correctSetB =[];
  var correctSetA = [];	 
//  // ✅ Allowed correct connections
//  var correctConnections = [
//    ["P1", "P2"] , // only P1-P2 is correct
//    ["P3", "P4"],
//    ["P5", "P6"]
//  ];
  
    // ✅ Two different arrays of correct connections
    
   if(selectedOutput == 1){
	    correctSetA = [
   		 ["P1", "P13"], // d9 to ouput to p1 switch
   		 ["P3", "P4"] //led to register
  		];
   }else if (selectedOutput == 2){
	   correctSetA = [
		["P1", "P14"], // d10 to ouput 
	    ["P3", "P4"] //led to register
  		];
   } else if (selectedOutput == 3){
	   correctSetA = [
		["P1", "P15"], // d11 to ouput 
	    ["P3", "P4"] //led to register
  		];
   } 
   else if (selectedOutput == 4){
	   correctSetA = [
		["P1", "P2"], // d13 to ouput 
	    ["P3", "P4"] //led to register
 		 ]	;
   } else if (selectedOutput == 5){
	   correctSetA = [
		["P1", "P7"], // d3 to ouput 
	    ["P3", "P4"] //led to register
 		 ]	;
   }else if (selectedOutput == 6){
	   correctSetA = [
		["P1", "P8"], // d4 to ouput 
	    ["P3", "P4"] //led to register
 		 ]	;
   }else if (selectedOutput == 7){
	   correctSetA = [
		["P1", "P9"], // d5 to ouput 
	    ["P3", "P4"] //led to register
 		 ]	;
   }else if (selectedOutput == 8){
	   correctSetA = [
		["P1", "P10"], // d6 to ouput 
	    ["P3", "P4"] //led to register
 		 ]	;
   }
  
	

	  if(selectedValue == 1){
		  correctSetB = [ ["P5", "P6"] // d2 to switch p5
		 ];
	  }else if(selectedValue == 2){
		  
		  correctSetB = [ ["P5", "P7"] // d3 to switch p5
		  ];
	  }else if(selectedValue == 3){
		 
		  correctSetB = [ ["P5", "P8"] // d4 to switch p5
		  ];
	  }else if(selectedValue == 4){
	
		  correctSetB = [ ["P5", "P9"] // d5 to switch p5
		  ];
	  }else if(selectedValue == 5){
		 
		  correctSetB = [ ["P5", "P10"] // d6 to switch p5
		  ];
	  }else if(selectedValue == 6){
		 
		  correctSetB = [ ["P5", "P11"] // d7 to switch p5
		  ];
	  }else if(selectedValue == 7){
		 
		  correctSetB = [ ["P5", "P12"] // d8 to switch p5
		  ];
	  }else if(selectedValue == 8){
		 
		  correctSetB = [ ["P5", "P13"] // d9 to switch p5
		  ];
	  }



  function showConnections() {
//    document.getElementById("output").textContent = "Connections:\n" + 
//      connections.map(c => c.id1 + " ↔ " + c.id2 + (c.correct ? " ✅" : " ❌")).join("\n");
	console.log(	"Connections:\n" + 
     connections.map(c => c.id1 + " ↔ " + c.id2 + (c.correct ? " ✅" : " ❌")).join("\n"));
       updateSummary();
  }

  function showMessage(msg, color="red") {
    var msgBox = document.getElementById("message");
    msgBox.style.color = color;
    msgBox.textContent = msg;
    setTimeout(() => msgBox.textContent = "", 2000);
  }
  
    // ✅ Update summary counts
  function updateSummary() {
    let correctCount = connections.filter(c => c.correct).length;
    let wrongCount = connections.filter(c => !c.correct).length;
    coorectflg = correctCount;
    wrongflg = wrongCount;

   console.log(
      "✅ Correct connections: " + correctCount + "<br>" +
      "❌ Wrong connections: " + wrongCount);
  }

//  function isCorrectConnection(id1, id2) {
//    return correctConnections.some(c =>
//      (c[0] === id1 && c[1] === id2) || (c[0] === id2 && c[1] === id1)
//    );
//  }

  // check if connection belongs to Set A or Set B
  function checkConnectionSet(id1, id2) {
    let inSetA = correctSetA.some(c =>
      (c[0] === id1 && c[1] === id2) || (c[0] === id2 && c[1] === id1)
    );
    if (inSetA) return "A";

    let inSetB = correctSetB.some(c =>
      (c[0] === id1 && c[1] === id2) || (c[0] === id2 && c[1] === id1)
    );
    if (inSetB) return "B";

    return null; // wrong
  }

  // Function to draw a curved path between two points
  function drawCurve(x1, y1, x2, y2) {
    var midX = (x1 + x2) / 2;
    var midY = (y1 + y2) / 2 - 50; // curve height
    return `M${x1},${y1} Q${midX},${midY} ${x2},${y2}`;
  }
	

  function attachClick(point) {
    point.click(function () {
      if (firstPoint === null) {
        firstPoint = this;
        this.attr({stroke: "orange", "stroke-width": 4});
      } else {
        if (firstPoint !== this) {
          var id1 = firstPoint.data("id");
          var id2 = this.data("id");

          // Check duplicate
          var exists = connections.some(c =>
            (c.id1 === id1 && c.id2 === id2) || (c.id1 === id2 && c.id2 === id1)
          );
          if (exists) {
//            showMessage("⚠ Duplicate connection between " + id1 + " and " + id2);
          } else {
            // Draw CURVED line instead of straight
            var path = drawCurve(firstPoint.attr("cx"), firstPoint.attr("cy"), this.attr("cx"), this.attr("cy"));
            var line = paper.path(path)
                            .attr({stroke: "black", "stroke-width": 2, cursor: "pointer"});

            // ✅ Send line behind circles
            line.toBack();

            // Validate connection
//            var correct = isCorrectConnection(id1, id2);
			 // Validate connection against Set A / Set B
            var set = checkConnectionSet(id1, id2);
            var correct = (set !== null);
            if (correct) {
              line.attr({stroke: "green", "stroke-width": 3});
             
             
//              showMessage("✅ Correct connection: " + id1 + " ↔ " + id2, "green");
		
            } else {
				
              line.attr({stroke: "red", "stroke-width": 3}); //green 
//              showMessage("❌ Wrong connection: " + id1 + " ↔ " + id2, "red");
            }

            // Store connection
            var conn = {id1: id1, id2: id2, line: line, correct: correct};
            connections.push(conn);

            // Allow deletion on click
            line.click(function () {
              line.remove();
              connections = connections.filter(c => c !== conn);
              showConnections();
//              showMessage("❌ Connection " + id1 + " ↔ " + id2 + " deleted");
            });
          }
          showConnections();
        }
        // Reset highlight
        firstPoint.attr({stroke: "black", "stroke-width": 2});
        firstPoint = null;
      }
    });
  }

  // Attach clicks
  points.forEach(p => attachClick(p));
 
 function disableAllPoints() {
  points.forEach(p => {
    p.unclick(); // removes click event
    p.attr({cursor: "default"}); // optional: reset cursor
  });
}



}
