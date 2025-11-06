const allBubbles = $(".bubble");
const popUp = $("#pop-up-bg");
const exit = $(".exit-btn", popUp)[0];
let bubbleJSON;




fetch("assets/nav-data.json")
	.then((res)=>res.json())
	.then((res)=>{bubbleJSON = res.find((item)=>item.name == "Pages").dropdown; console.log(bubbleJSON);})
	.catch((err)=>console.log(err));

// const bubbleData = navJSON?.find((item)=>item.name == "Pages");

console.log(bubbleJSON)

// let bubbleName;
// let selectedBubble;
// $(document).on("click", (e)=>console.log("Hi"));

Array.from(allBubbles).forEach((bubble)=>{
	$(bubble).on("click", (e)=>{
		
		const bubbleName = $("p", bubble)[0].innerText
		
		exit.id = "exit-" + bubble.id;
			
		const bubbleData = bubbleJSON.find((item)=>item.name == bubbleName);
		
		console.log(bubbleData);
			
			$(bubble).removeClass("bubble-animation");
			
			$(bubble).addClass("bubble-inflation");
			
			setTimeout(()=>{
				$(popUp).css("display", "");
			},1500);
			
			$(popUp).addClass("f-ctr rev");
			
			$("#pop-up .img-container #page-icon").attr({
				"src":"/assets/Pictures/" + bubbleName.replaceAll(" ", "-") + ".jpg",
				"alt":bubbleName
			});
			
			$("#pop-up h2")[0].innerText = bubbleName;
			
			$("#pop-up p")[0].innerText = bubbleData?.description??"";
			
			$("#pop-up a")[0].href = bubbleData?.href??`/tasks/${bubbleData.name.replaceAll(" ", "-")}`;
		
		
	})
})

$(exit).on("click", (e)=>{
	
	$(popUp).css("display", "none");
	$(popUp).removeClass("f-ctr rev");
	
	$(`#${exit.id.replace("exit-", "")}`).removeClass("bubble-inflation");
	$(`#${exit.id.replace("exit-", "")}`).addClass("bubble-animation");
})