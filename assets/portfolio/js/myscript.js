(function(){

})();

// event pada saat diklik

    $('.page-scroll').on('click', function(e){

// mengambil isi
    var tujuan = $(this).attr('href');

// tangkap elemen

    var elemenTujuan = $(tujuan);

    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top -50
    }, 1250, 'easeInOutExpo')

    e.preventDefault();

});

$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
})

// paralax

$(window).scroll(function() {
    var wscroll= $(this).scrollTop();

    if(wscroll > $('.portfolio').offset().top -250){
       $('.portfolio .thumbnail').each(function(i){
           setTimeout(function()  {
            $('.portfolio .thumbnail').eq(i).addClass('muncul');
           }, 500 * i+1);


       });
       
        
    }
});




