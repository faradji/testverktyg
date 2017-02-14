// Simple templating (using template literals)
// Ironboy 2017


// ---------------------------------------------------------------
// A memory for templates
// ---------------------------------------------------------------
var template = {};


// ---------------------------------------------------------------
// Replace templates attributes with template content
// ---------------------------------------------------------------

// Wait for DOM ready (this also means all scripts have loaded)
$(()=>{
  while($('[template]').not('[template-loaded]').length){
    var el = $('[template]').not('[template-loaded]').first();
    var templateName = el.attr('template');
    el.html(template[templateName]);
    el.attr('template-loaded',true);
  }
});


// ---------------------------------------------------------------
// When detecting a hash change
// hide all elements with a template attribute and 
// and an id attribute

// Then show the element with a id attribute
// with the same value as the hash

// Remove all active classes from li:s

// Add an active class to the li containing
// an a-tag matching the hash
// ---------------------------------------------------------------

function showAndHideTemplates(){

  var hash = location.hash.split('#')[1];

  hash = hash || 'start'; // default to to a template named start
  if(hash){
    // Wait for DOM ready
    $(()=>{
      // show the right template
      $('[template][id]').hide();
      $('[id="' + hash + '"]').show();
      // move the active class to the parent li of an a tag
      // containing the hash
      $('li').removeClass('active');
      $('a[href="#' + hash + '"]').parent('li').addClass('active');
      // fix for strange bug - sometimes not visible removing active
      $('li').each(function(){$(this).replaceWith(this).clone()});
    });
  }
}

// Run initially and on hash changes
showAndHideTemplates();
window.onhashchange = showAndHideTemplates;
