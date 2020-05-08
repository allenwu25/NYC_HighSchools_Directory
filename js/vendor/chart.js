
var myConfig = {
 	type: "gauge",
 	globals: {
 	  fontSize: 25
 	},
 	plotarea:{
 	  marginTop:80
 	},
 	plot:{
 	  size:'100%',
 	  valueBox: {
 	    placement: 'center',
 	    text:'%v', //default
 	    fontSize:35,
 	    rules:[
 	      {
 	        rule: '%v >= 600',
 	        text: '%v<br>Excellent'
 	      },
 	      {
 	        rule: '%v < 600 && %v >= 500',
 	        text: '%v<br>Good'
 	      },
 	      {
 	        rule: '%v < 500 && %v >= 400',
 	        text: '%v<br>Fair'
 	      },
 	      {
 	        rule: '%v <  400',
 	        text: '%v<br>Poor'
 	      }
 	    ]
 	  }
 	},
  tooltip:{
    borderRadius:5
  },
 	scaleR:{
	  aperture:180,
	  minValue:0,
	  maxValue:800,
	  step:100,
	  center:{
	    visible:false
	  },
	  tick:{
	    visible:false
	  },
	  item:{
	    offsetR:0,
	    rules:[
	      {
	        rule:'%i == 9',
	        offsetX:15
	      }
	    ]
	  },
	  labels:['0','100','200','300','400','500','600','700','800'],
	  ring:{
	    size:50,
	    rules:[
	      {
	        rule:'%v <= 300',
	        backgroundColor:'#E53935'
	      },
	      {
	        rule:'%v > 300 && %v <= 400',
	        backgroundColor:'#e9ff00'
	      },
	      {
	        rule:'%v > 400 && %v <= 500',
	        backgroundColor:'#3ce00b'
	      },
	      {
	        rule:'%v > 500',
	        backgroundColor:'#006005'
	      }
	    ]
	  }
 	},
  refresh:{
      type:"feed",
      transport:"js",
      url:"feed()",
      interval:1500,
      resetTimeout:1000
  },
	series : [
		{
			values : [789], // starting value
			backgroundColor:'black',
	    indicator:[10,10,10,10,0.75],
	    animation:{
        effect:2,
        method:1,
        sequence:4,
        speed: 900
     },
		}
	]
};
