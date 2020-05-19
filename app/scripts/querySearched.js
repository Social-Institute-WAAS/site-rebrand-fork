$(document).ready(function(){
  if(window.location.search) {
    const querySearched = window.location.search.slice(1).split('=')[1].replace(/[*+]/g,' ');
    // console.log(querySearched);
    $('#search_form_result').find('.c-search__input').val(querySearched);
  }
});
