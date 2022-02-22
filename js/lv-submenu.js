/* Add JQuery animation to bootstrap dropdown elements.
*/

$(document).ready(function() {
    $("#js-cat").click(function() {
        var isHidden = $(".sidenav__submenu").is(":hidden");
        if (isHidden) {
            $('.sidenav__submenu').slideDown();
        } else {
            $('.sidenav__submenu').slideUp();
        }
    })


});

