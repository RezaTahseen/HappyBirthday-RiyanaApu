function timer() {
	document.getElementById("riyana").play();
}


function moveToSelected(element) {
    document.getElementById("index.html")

    if (element == "next") {
      var selected = $(".selected").next();
    } else if (element == "prev") {
      var selected = $(".selected").prev();
    } else {
      var selected = element;
    }
  
    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();
  
    $(selected).removeClass().addClass("selected");
  
    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");
  
    $(nextSecond).removeClass().addClass("nextSecond");
    $(prevSecond).removeClass().addClass("prevSecond");
  
    // no limit
    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');
  };
  
  // Just to test, remove onclick in <a> and put your link in href
  function FindPos(obj) {
    const posElement = Array.from(obj.parentNode.children).indexOf(obj) + 1; //  JQuery : $('#carousel a').index(obj) + 1;
    const nbElements = obj.parentNode.childElementCount; // with JQuery : $('#carousel a').length;
    console.log( "Menu n°" + posElement + " on " + nbElements + " clicked (Class => " + obj.className + ")");
  };
  
  // Keyboard events
  $(document).keydown(function(e) {
      switch(e.which) {
        case 37: // Keyboard : left arrow
          moveToSelected('prev');
          break;
  
        case 39: // Keyboard : right arrow
          moveToSelected('next');
          break;
  
          default: return;
      }
      e.preventDefault();
  });
  
  // Mouse click
  $('#carousel a').click(function() {
    moveToSelected($(this));
  });
  
  // Buttons events
  $('#prev').click(function() {
    moveToSelected('prev');
  });
  
  $('#next').click(function() {
    moveToSelected('next');
  });
  