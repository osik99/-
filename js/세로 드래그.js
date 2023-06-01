$(function(){
    var n=0;//현재 보여지는 section 인텍스 넘버

    var moving= false;

    $("html,body").on("mousewheel DOMMouseScroll" , function(e){
        console.log(e)
        var delta = e.originalEvent.wheelDelta;
        console.log("delta : ",delta)

        var detail= e.originalEvent.detail//파이어폭스
        console.log("detail : ",detail)

        if(moving == false){

            moving=true;

         var h =window.innerHeight;

            var top= $(".contents").offset().top;
            console.log("top : ",top);
            if(delta == -120 || detail ==3){

                if(n < 4){
                    n++;
                    top -=h;
                    // top =top-h;

                }

            }else if(delta == 120 || detail ==-3){
                if(n>0){
                    n--;
                    top +=h;

                }
            }
            console.log("n : ",n)
            console.log("top : ",top)
            // $(".contents").animate({top :-h},500)

        }//moving == false
        $(".contents").animate({top : top},300,function(){
            moving=false;
            if( n==0){
                $(".f_nav").removeClass("on");
            }else{
                $(".f_nav").addClass("on");
            }

            $(".btn_group li").removeClass("on");
            $(".btn_group li").eq(n).addClass("on");


        })//animate

        $(".btn_group li a , .nav a, .f_nav a").click(function(){

            n =$(this).parent().index();
            if( n==0){
                $(".f_nav").removeClass("on");
            }else{
                $(".f_nav").addClass("on");
            }
            
            console.log("n n: ",n);

            $(".btn_group li").removeClass("on");
            $(".btn_group li").eq(n).addClass("on");

            var top= -n * window.innerHeight;
            console.log("ttop: ",top);
            $(".contents").animate({top : top},300)
        })//

        $(window).resize(function(){

        })

        function resize(){
            var top = -n * window.innerHeight
            $(".contents").css({top : top})
            $(".contents .page").css({width : window.innerWidth, height:window.innerHeight})
        }




    })/* mousewheel DOMMouseScroll */


})//제이커리

$(window).scroll(function(){


})//scroll

$(window).resize(function(){
   /*  var w = window.innerWidth;
    console.log("w: ",w)
    var h = window.innerHeight;
    console.log("h: ",h)  */
    
})//resize