// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


// toggle visibility of an element via the CSS "visibility" property
// -> reserves the needed space for the element when not visible
function toggle_visibility(element_id) {
 if(document.getElementById)
   element = document.getElementById(element_id);
   if (element.style.visibility == "visible") {
     element.style.visibility = "hidden";
   } else {
     element.style.visibility = "visible";
   }
}


// toggle visibility of an element via the CSS "display" property
// -> does NOT reserve the needed space for the element when not displayed
function toggle_display(element_id) {
  if (document.getElementById) {
    element = document.getElementById(element_id);
    if (element.style.display == "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
}


// open url in a new browser instance
function goto_url(url) {
  if(url == '') {
    document.forms[0].reset();
    document.forms[0].elements[0].blur();
    return;
  }
  window.open(url,'helpwindow','toolbar=yes,location=yes')
  document.forms[0].reset();
  document.forms[0].elements[0].blur();
}

