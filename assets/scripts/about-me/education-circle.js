$(".spinning-circle-container > div").on("click", (e)=>{
    const eduArray = ["1st Class Masters Degree in Automotive Engineering",
                       "Award for highest achieving Automotive Engineering MEng student",
                       "<ul><li>A - Maths</li><li>B - Physics</li><li>B - Biology</ul>"];
      let t = e.target;
      
      //Make for t is equal to the button image element, when when div is pressed
      t = (t.tagName=="IMG")?t:($(t).children("img")[0]);
      
      let i = t?.id?.replaceAll("edu-num-", "")??null;

      $(".spinning-circle-container").removeClass("animate");
       $(".education")
       .removeClass("hide")
       .addClass("show");
    
    $(".education p")[0].innerHTML = eduArray?.[i]??""
    console.log($(t).parent("i"));
    });
    

    $(".education i.bi.bi-arrow-left").on("click", (e)=>{
        $(".education")
          .removeClass("show")
          .addClass("hide");
        $(".education p")[0].innerHTML = "";
    });
  