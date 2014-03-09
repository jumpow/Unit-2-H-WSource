jQuery.noConflict();

(function( $ ) {
    $("#price_range").slider({}).on("slide", function(e) {
        $("#price_LeftBound").val(e.value[0]);
        $("#price_RightBound").val(e.value[1]);
    });

    $('#DPck').datepicker({autoclose:true});
    $('#price_range').slider();
    $(function($){
       $('#DPck').click(function(){
          $('#DPck').datepicker('show');
     });
  });
})( jQuery );