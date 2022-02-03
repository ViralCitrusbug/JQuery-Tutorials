// COMMENT OUT CODE ONE BY ONE TO CHECK



$(document).ready(function () {
    $('p').on(
        {
            click: function () {
                console.log('Thanks for clicking', this);
            },
            mouseleave: function () {
                console.log("mouseleave");
            }
        })

    // $('#wiki').hide(1000, function () {
    //     console.log("hidden");
    // })   
    // $('#wiki').show(1000, function () {
    //     console.log("show");
    // })  

    // Hide on Click

    // $('#but').click(function () {
    //     $("#wiki").hide(1000);
    // })

    //     fadeIn()
    // fadeOut()
    // fadeToggle()
    // fadeTo()

    // Slide methods - speed and callback parameters are optional

    // $('#wiki').slideUp(1000, function(){
    //     console.log('done');
    // })
    // $('#wiki').slideDown(1000)
    // $('#wiki').slideToggle(1000)

    // Animate function in jQuery

    // Animate Slide Up Slowly  

    // $('#wiki').animate({
    //     opacity:0.3,
    //     height: '150px',
    //     width:'350px'
    // }, "slow")

    // Animate Slide Up Fast 

    // $('#wiki').animate({
    //     opacity:0.3,
    //     height: '150px',
    //     width:'350px'
    // }, "fast")

    //  Animation speed manual (Check Opacity)

    // $('#wiki').animate({ opacity: 0.3 }, 4000);
    // $('#wiki').animate({ opacity: 0.9 }, 1000);
    // $('#wiki').animate({ width: '350px' }, 12000);


    // Add Value in HTML ( DOM manipulations )
    
    // $('#ta').val('setting it to harry');
    // $('#ta').html('setting it to harry');
    // $('#ta').html('setting it to harry3');
    // $('#inp').html('setting it to harry3');
    // $('#inp').val('setting it to harry3');
    // $('#inp').empty()
    // $('#wiki').empty()
    // $('#wiki').text('you are good')
    
    // Removing class , id elements
    // $('#wiki').remove()

    // Adding Class to HTML

    // $('#wiki').addClass('myclass')
    // $('#wiki').addClass('myclass2')

    // Removing Class or ID from elements

    // $('#wiki').removeClass('myclass2')

    // Manipulate CSS
    // $('#wiki').css('background-color', 'red')
    // $('#wiki').css('background-color')


});


