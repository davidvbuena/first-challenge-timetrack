		document.getElementById('in').addEventListener('click', registerCheckin);

		function registerCheckin() {

			navigator.geolocation.watchPosition(function(position){

				var time = new Date();
				if(position){
					startPause();
					document.getElementById("status").innerHTML = "CHECK-IN DONE!"; 
				}

				if(position.coords.latitude < -23.7459298){
					checkOut();
				}

				if(position.coords.longitude > -46.5312525){
					checkOut();
				}

				Information = {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
					time: new Date(),
				 //timer: output.innerHTML
			 }

			 console.log(Information)
		 },

		 function(error){

			if(error){
				pause();
				document.getElementById("status").innerHTML = "For location denied, checkin revoked!";
				console.log(error)
			}
		});
		};

		var time = 0;
		var running = 0;
		function startPause(){
			if(running == 0){
				running = 1;
				increment();
			}
		}

		function pause(){
			running = 0;
			time = 0;
		}

		function increment(){
			if(running == 1){
				setTimeout(function(){
					time++;
					var hors = Math.floor(time/10/60/60);
					var mins = Math.floor(time/10/60 % 60);
					var secs = Math.floor(time/10 % 60);

					if(hors < 10){
						hors = "0" + hors;
					}
					if(mins < 10){
						mins = "0" + mins;
					}
					if(secs < 10){
						secs = "0" + secs;
					}

					document.getElementById("output").innerHTML = hors + ":" + mins + ":" + secs;
					increment();},100);
			}
		}

		function clock() {
			var data=new Date();
			var h=data.getHours();
			var m=data.getMinutes();
			var s=data.getSeconds();
			var hours=h+":"+m+":"+s;
			document.getElementById("clock").value=hours;
		}

		var time=setInterval(clock,1000)
		function checkOut(e){
			pause()
			if(pause){
				pause();
			}

			document.getElementById("status").innerHTML = "CHECK-OUT DONE!";
			console.log(Information,output.innerHTML)
		}   