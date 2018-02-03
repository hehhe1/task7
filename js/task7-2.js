/*$(document).ready(function() {
    $(".wk").hover(function(){
        $(".tb").removeClass("ycxs");
    });
    $(".wk").hover(function(){
        $(".tb").removeClass("ycxs");
    });
});
*/
$(document).ready(function(){
  $(".wk").mouseover(function(){
    $(".tb").css("display","block");
  });
  $(".wk").mouseout(function(){
    $(".tb").css("display","none");
  });
});