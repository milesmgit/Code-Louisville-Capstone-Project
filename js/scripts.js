
/*******************************************************************************
********************************************************************************
********************************************************************************
********************* Stable site code currently in use ************************
********************************************************************************
********************************************************************************
*******************************************************************************/
/* this code accesses the document object and changes the background color and
border.  As this code is not online, I have no way to test it on a mobile phone. */
var outputDiv = document.getElementById('option').style;

/*  dropdown menu with background color choices. */

function lime() {
  outputDiv.background="lime";
  outputDiv.border="black solid 4px";
  outputDiv.borderBottom="none";
  outputDiv.borderTop="none";
}

function lightblue() {
  outputDiv.background="lightblue";
  outputDiv.border="black solid 4px";
  outputDiv.borderBottom="none";
  outputDiv.borderTop="none";
 }

function lightgrey() {
  outputDiv.background="lightgrey";
  outputDiv.border="none";
 }

 function white() {
   outputDiv.background="white";
   outputDiv.border="none";
  }


/*******************************************************************************
********************************************************************************
********************************************************************************
********************************************************************************
*******************************************************************************/

/*******************************************************************************
********************************************************************************
***************************CSS Selector JavaScript******************************
********************************************************************************
*******************************************************************************/

/*******************************************************************************
                     we can change the value of attributes via script,
                     as noted in the value attributes below.
*******************************************************************************/
/* in this instance, .value is the attribute of the input selector button. */

function matt() {
  document.getElementById('selector-button').value = 'You clicked me!';
}

function matt_2() {
  document.getElementById('selector-button-2').value = 'You clicked me too!';
}

/*******************************************************************************
            Onclick returns the time in a div with the id 'timer-div'
*******************************************************************************/

function matt_3() {
  document.getElementById('selector-button-3').value = 'About time you clicked me!';
  // returns the time on a second by second update.
  var myVar = setInterval(myTimer, 1000);

  function myTimer() {
    var d = new Date();
    document.getElementById('timer-div').innerHTML = d.toLocaleTimeString();
  }
}

/*******************************************************************************

*******************************************************************************/




/*******************************************************************************
********************************************************************************
************************************  jQuery   *********************************
********************************************************************************
*******************************************************************************/

/* Callback function 'fading box' example */

$('button').on('click', function() {
  $('.box').fadeOut(2000, function() {
    //fade out complete
    console.log("It's Faded!");
  });
});


/* using the hover event type to change text on mouse-hover  */
$('.event-types').hover(
  function() {
    $(this).html("<strong>The 'hover' event type allows us to change the text on mouse-hover.</strong>");
  },
  function() {
    $(this).html("<strong>Hover is Just One of the Many Event Types</strong>");
  });

  /* This snippet would cause the paragraphs to change to the html code that created them as they are clicked. */

  $('.get-set').click(function() {
    var htmlString = $(this).html(); // this will grab the first html element as the parentheses are left blank.
    $(this).text(htmlString);
  });

  /* jquery(css-selector).fadeIn(milliseconds) method. example: $('img').fadeIn(1600); */
  $('img').css('display', 'none').fadeIn(1600);

  /* We can accomplish the removal of an element in at least two ways; practically, we can use the
     .empty() method to cause an element to vanish from the page, though the inspection of the page
     using the dev tools will show that the element is still there, minus the contents. The code
     for the empty() method is: $('#someElementIDSelector').empty();
     We can use the .remove() method to completely remove the element from the html code. It will
     not show up in the page, nor will it show up in the dev tools upon inspection.
     The code for the remove() method is: $('#someElementIDSelector').remove();*/

$('div').on('click', function() {
  $('#empty').empty();
  $('#remove').remove();
});
