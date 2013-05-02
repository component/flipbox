
/**
 * Module dependencies.
 */

var classes = require('classes');
var query = require('query');

/**
 * Expose `Flipbox`.
 */

module.exports = Flipbox;

/**
 * Initialize a new `Flipbox` with `el`.
 *
 * @param {Element} el
 * @param {Element} back
 * @api public
 */

function Flipbox(el) {
  this.showing = 'front';
  this.el = el;
  this.classes = classes(el).add('flipbox');
}

/**
 * Flip the box.
 *
 * @api public
 */

Flipbox.prototype.flip = function(){
  if (this.classes.has('flipped')) {
    this.front();
  } else {
    this.back();
  }

  if (this.onflip) this.onflip(this.showing);
};

/**
 * Flip to the front face.
 *
 * @api public
 */

Flipbox.prototype.front = function(){
  this.classes.remove('flipped');
};

/**
 * Flip to the back face.
 *
 * @api public
 */

Flipbox.prototype.back = function(){
  this.classes.add('flipped');
};
