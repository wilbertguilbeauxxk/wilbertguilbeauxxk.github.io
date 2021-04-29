$(document).ready(function(){
	
$('#product_features ul, #product_features_moneydance ul').each(function(){

    var $active, $content, $links = $(this).find('a');

    $active = $links.first().addClass('active');
    $content = $($active.attr('href'));

    $links.not(':first').each(function () {
        $($(this).attr('href')).hide();
    });

    $(this).on('click', 'a', function(e){

        $active.removeClass('active');
        $content.hide();

        $active = $(this);
        $content = $($(this).attr('href'));

        $active.addClass('active');
        $content.fadeIn().show();

        e.preventDefault();
    });
});

});