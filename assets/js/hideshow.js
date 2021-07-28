 $('#first').on('click', function(){
     $('.div1').show(); 
      $('.div2').hide(); 
      $('.div3').hide(); 
      $('.div4').hide(); 
      $('.div5').hide(); 
  });
  // $('#first').on('click', function(){
  //    $('.div1').hide(); 
  // });


  $('#second').on('click', function(){
     $('.div2').show(); 
        $('.div1').hide(); 
      $('.div3').hide(); 
      $('.div4').hide(); 
      $('.div5').hide(); 
  });
  // $('#second').on('click', function(){
  //    $('.div2').hide(); 
  // });
/////////
 $('#three').on('click', function(){
     $('.div3').show(); 
       $('.div2').hide(); 
      $('.div1').hide(); 
      $('.div4').hide(); 
      $('.div5').hide(); 
  });
  // $('#three').on('click', function(){
  //    $('.div3').hide(); 
  // });
/////////
 $('#four').on('click', function(){
     $('.div4').show();
       $('.div2').hide(); 
      $('.div3').hide(); 
      $('.div1').hide(); 
      $('.div5').hide(); 
  });
  // $('#four').on('click', function(){
  //    $('.div4').hide(); 
  // });
/////////
 $('#five').on('click', function(){
     $('.div5').show(); 
       $('.div2').hide(); 
      $('.div3').hide(); 
      $('.div1').hide(); 
      $('.div4').hide(); 
  });
  // $('#five').on('click', function(){
  //    $('.div5').hide(); 
  // });
///////// demo
//  $("#img1").on('click', function() {
//    $(this).hide();
//    $("#div2, #div3, #div4").hide();
//    $("#div1").show();
// });

///////////
 $('.nav1').on('click', function(){
     // $('.nav1').show(); 
      $('.nav1').removeClass('nav1');

    // this makes the one that was clicked underlined
    $this.addClass('nav1');
  }); 
///////////
 


