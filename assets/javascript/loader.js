
		var circles = [];
		var colors = ['#00f','#0f0','#f00'];
		function createCircles(){
			var fragment = document.createDocumentFragment();
			for(var i = 0; i< 3; i++){
				var circle = document.createElement('div');
				circle.style.borderColor = colors[i];

				var deg = i*90 + 30;
				circle.style.transform = 'rotate(-'+ deg +'deg)';

				circles.push(circle);
				fragment.appendChild(circle);
			}
			document.getElementById('loader').appendChild(fragment);
		}

		createCircles();
	
		

		var circle_animate = function(circle){ 
			anime({
				targets: circle,
				delay: function(el,i){
					return 50 + 50*i;
				},
				// scale : [0,1.1],
				rotate: [anime.getValue(circle,'rotate'),720],
				translateX: [0, 50],
				translateY: [0, 50],
				duration: function(el,i){
					return 4000 - 50*i;
				},
				easing: 'easeInOutQuad',
				loop: true,
				direction: 'alternate',
			});
		}

		circles.forEach(circle_animate);




window.onload = function(){

	setTimeout(function(){

		$('#loader').fadeOut();
		$('#loader').remove();

		$('#two .texts').textillate({
							 selector: '#two .texts',
							  loop: false,
							  minDisplayTime: 2000,
							  initialDelay: 0,
							  autoStart: true,
							  inEffects: [],
							  outEffects: [ 'hinge' ],
							  in: {
							  	
							    effect: 'fadeInLeftBig',
							    delayScale: 1.5,
							    delay: 50,
							    sync: false,
							    shuffle: false,
								reverse: false,
							    callback: function () {}
							  },
							  out: {
							    effect: 'hinge',
							    delayScale: 1.5,
							    delay: 50,
							    sync: false,
							    shuffle: false,
							    reverse: false,
							    callback: function () {}
							  },
							  callback: function () {},
							  type: 'char'
							});
	},8000);

	
} 