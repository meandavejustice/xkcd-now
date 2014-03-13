var world = document.querySelector('.world');
var chunk = 15; // 360 / hours in day
var prefixes = ['webkitTransform', 'MozTransform', 'msTransform', 'OTransform', 'transform'];

function updateMap() {
  var hour = moment().tz('America/Los_Angeles').format('HH');
  var min = parseInt(moment().tz('America/Los_Angeles').format('mm'), 10) / 60;
  min = parseInt(min * 100, 10)
  var rotFloat = hour+'.'+min;
  var rotString = 'rotate(' + chunk * rotFloat + 'deg)';
  prefixes.forEach(function(el) {
    world.style[el] = rotString;
  });
  console.log('map updated at => ' + moment().format('DD:MM:YYYY HH:mm:ss'));
}

setTimeout(function() {
  updateMap();
}, 300000);

updateMap();
