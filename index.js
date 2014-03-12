var world = document.querySelector('.world');
var chunk = 4.16; // hours in a day divided by 100 for a rough estimate for rotate degree
var prefixes = ['webkitTransform', 'MozTransform', 'msTransform', 'OTransform', 'transform'];

function updateMap() {
  var rotInt = parseInt(moment().tz('America/Los_Angeles').format('HH'), 10);
  var rotString = 'rotate(' + chunk * rotInt + 'deg)';
  prefixes.forEach(function(el) {
    world.style[el] = rotString;
  });
  console.log('map updated at => ' + moment().format('DD:MM:YYYY HH:mm:ss'));
}

setTimeout(function() {
  updateMap();
}, 300000);

updateMap();
