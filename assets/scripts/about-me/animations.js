const trapezium = $(".trapezium");
    h = 150; //window.innerHeight;
    w = window.innerWidth;
    
    $(trapezium).attr({
      "height":h,
      "width":w,
      "viewBox":`0 0 ${w} ${h}`
    });
    
    
    $(".trapezium-container:nth-child(2n) polygon").attr(
      "points", `0,0 0,${w} ${0.75*w},${h} ${w},0`
      );
      
      
      
    $(".trapezium-container:nth-child(2n+1) polygon").attr(
      "points", `0,0 ${0.25*w},${h} ${w},${h} ${w},0`
      );
      
      
$(window).on("scroll", (e)=>{
      fullVh = window.scrollY/window.innerHeight;
      const atTrapez = window.scrollY >= ($(".trapezium-container")[0].offsetTop - window.innerHeight);
      
  
        const elemArray_1 = [ $(".about-me section.intro"),
        $(".about-me h1"), $(".about-me #me"), $(".about-me h3"), $(".about-me section.intro p")];
  
      if(!atTrapez&&fullVh>0.10){
        
        elemArray_1.forEach((elem)=>elem.addClass("animate"));
      }
    
      //if(window.scrollY< ($(".trapezium-container > *")[3]).offsetBottom){
        
        for(i=0;i<6;i++){
          
          
          let curTrapezium = $(".trapezium-container")[i];
          
          if(window.scrollY >= (curTrapezium.offsetTop-window.innerHeight)){
            $(curTrapezium).addClass("animate");
          }
          else{
            $(curTrapezium).removeClass("animate");
          }
        }
      //}
      
      //console.log(`window.scrollY: ${window.scrollY} offsetTop: ($(".education")[0]).offsetTop-500: ${($(".education")[0]).offsetTop-500}`)
      
      const scContainter = $(".education .spinning-circle-container");
      const cClassList = Array.from(scContainter[0].classList);
      console.log(cClassList);
      //if(((window.scrollY >= ($(".education")[0])).offsetTop-500)&&!cClassList.includes("animated")){
      
      if((window.scrollY >= ($(".education")[0]).offsetTop-500)){
          $(".education .spinning-circle-container").addClass("animate");
      setTimeout(()=>{
        $(".education .spinning-circle-container")
          .addClass("animated")
          .removeClass("animate");
      }, 1500);
      }else{
          $(".education .spinning-circle-container").removeClass("animate animated");
      }
          
    });
    