require('./style.css');

$(document).ready(function(){
  $('.collapsible').collapsible();

  var name = $('.title')

  // the upper cards
  $('.show-content').click(function() {
    $(this).parent().siblings().children('.card-opening').toggle();
  });

  // the weird accordion conecting to the upper cards
  name.click(function(){
    emptyContent();
    var title = $(this).text();
    $('.card').show();
    $('.card-title1').text(title + " in ES5");
    $('.card-title2').text(title + " in ES6");
    $('.card-stuff1').addClass(title.toLowerCase() + "1")
    $('.card-stuff2').addClass(title.toLowerCase() + "2")
    refillingStuff();
  });

  // passing information to the uppercards
  function refillingStuff() {
    $('.variables1').append(variable1)
    $('.variables2').append(variable2)
    $('.loops1').append(loop1)
    $('.loops2').append(loop2)
    $('.interpolate1').append(interpolateEs5)
    $('.interpolate2').append(interpolateEs6)
    $('.functions1').append(func1)
    $('.functions2').append(func2)
  }
    function emptyContent() {
      $('.card-stuff1').empty();
      $('.card-stuff2').empty();
    }
  // long and not clear explanations
  const variable1 = "<h6>Sintax:</h6><p>var name = \"Luciano\"</p>"
  const variable2 = "<h6>Sintax:</h6><p>const name = \"Luciano\"</p><p>let job = \"designer\"</p>"
  const loop1 = "<h6>Sintax:</h6><p>var colors = ['red', 'blue', 'green']</p><p></p><p>for (var i = 0; i < colors.length) {</p><p>console.log(colors[i])</p><p>}</p><p>  console.log(colors[i])</p><p>}</p><p></p><p>colors.forEach( function(color) {</p><p>  console.log(color)</p><p>})</p>"
  const loop2 = "<h6>Sintax:</h6><p>let colors = ['red', 'blue', 'green']</p><p></p><p>for (let i = 0; i < colors.length) {</p><p>  console.log(colors[i])</p><p>}</p><p></p><p>for (let i in colors) {</p><p>  console.log(colors[i])</p><p>}</p><p></p><p>colors.forEach( color => {</p><p>  console.log(color)</p><p>})</p><p></p><p>for (let color of colors) {</p><p>  console.log(color)</p><p>}</p>"
  const interpolateEs5 = "<h6>Sintax:</h6> <p>var age = 3;</p> <p>console.log(\"I'm \" + age + \" years old!\")</p> <p>=> I'm 3 years old</p>"
  const interpolateEs6 = "<h6>Sintax:</h6> <p>let age = 3</p> <p>let time = years</p> <p>`I'm ${age} ${time} old`</p> <p>=> I'm 3 years old<p/>"
  const func1 = "<h6>Sintax:</h6> <p>var doubleNumber = function(num) {</p><p>\treturn (num * 2)</p><p>}</p><p>doubleNumber(2)</p><p>=> 4</p>"
  const func2 = "<h6>Sintax:</h6><p>const doubleNumber = (num) => {</p><p>\treturn (num * 2)</p><p>}</p><p>doubleNumber(2)</p><p>=> 4</p>"



});
