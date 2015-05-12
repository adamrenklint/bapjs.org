/*
  # TODO

  - loading state
  - show tempo?
  - how does it handle multiple players on a page?

*/

var script = document.currentScript;
var source = script.previousElementSibling;
var domready = require('domready');
var debounce = require('lodash.debounce');

var lastEvalSource = null;
function evaluate () {
  var newSource = source.textContent;
  if (newSource !== lastEvalSource) {
    eval(newSource);
    lastEvalSource = newSource;
  }
}

function makeControls () {
  var controls = document.createElement('div');
  controls.className = 'bap-editor__controls';
  var play = document.createElement('button');
  var position = document.createElement('label');
  position.innerText = '0.0.00';

  function update () {
    play.innerHTML = bap.clock.playing ? '&#10074;&#10074;' : '&#9658;';
    position.style.display = bap.clock.playing ? 'inline-block' : 'none';
  }
  update();
  bap.clock.on('change:playing', update);
  bap.clock.on('change:position', function () {
    position.innerHTML = bap.clock.position;
  });
  play.onclick = function (ev) {
    ev.preventDefault();
    ev.stopPropagation();
    bap.clock.playing = !bap.clock.playing;
  };
  controls.appendChild(position);
  controls.appendChild(play);
  return controls;
}

domready(function () {
  var container = document.createElement('div');
  container.className = 'bap-editor';
  source.parentNode.insertBefore(container, source);
  container.appendChild(source);
  container.appendChild(makeControls());
  source.setAttribute('contenteditable', true);
  source.addEventListener('keyup', debounce(evaluate, 250));

  evaluate();
});
