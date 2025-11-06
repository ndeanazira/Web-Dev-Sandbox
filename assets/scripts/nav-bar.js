const dropdownMulti = $(".nav-btn.dropdown");

// Array.from(dropdownMulti).forEach((dropdown)=>{
	$(document).on("click", (e)=>{
		console.log(e.target);
		if(e.target.className.includes("dropdown")&&e.target.className.includes("nav-btn")){
		
		$(e.target).removeClass("loaded");
			
		if(!e.target.className.includes("opened")){
			$(e.target).removeClass("closed");
			$(e.target).addClass("opened");
		}
		else{
			$(e.target).addClass("closed");
			$(e.target).removeClass("opened");
		}
		}
		else{
			Array.from(dropdownMulti).forEach((dropdown)=>{
				$(dropdown).removeClass("opened");
				$(e.target).addClass("closed");
			})
		}
	})
// })