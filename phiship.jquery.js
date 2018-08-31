(function($){
 $.fn.popup = function(options) {
    var defaults = {
        width: "720px",
        height: "400px",
        title: "Tính phí vận chuyển"
    };
    var options = $.extend(defaults, options);
 
    $("body").append("<div id='background'></div>");
 
    var $this=$(this);
    $this.prepend('<div class="content"><iframe id="frameship" src="https://hungminhits.com/tinhship/"></iframe></div>');
    $this.prepend("<div class='popuptitle'>"+options.title+"<a href='#' class='close'>x</a></div>");

 
    $this.addClass("popup");
    $this.width(options.width).height(options.height);
    $this.hide();
 
    $(".close").click(function (e) {
        closePopup();
        e.preventDefault();
    });
 
    $("#background").click(function () {
        closePopup();
    });
    return this;
 };
 
 $.fn.openPopup = function() {
    var dheight = document.body.clientHeight;
    var dwidth = document.body.clientWidth;
 
    $("#background").width(dwidth).height(dheight);
 
    $("#background").fadeTo("slow",0.8);
 
    $(this).css("top", (dheight-$(this).height())/2);
    $(this).css("left",(dwidth-$(this).width())/2);
 
    $(this).fadeIn();
    return this;
 };
})(jQuery);
 
 function closePopup(){
    $("#background").fadeOut();
    $(".popup").hide();
}