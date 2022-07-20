let toggle = document.getElementById('m-bar')

		let holder = document.getElementById('menu-links')
		let btn = document.getElementById('social')

		toggle.addEventListener('click', ()=>{
			if(holder.className === "hidden"){
				holder.className = "not-hidden"
				social.className = "not-hidden"
			} else {
				holder.className = "hidden"
				social.className = "hidden"
			}
		})