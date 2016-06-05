/**
 * Module dependencies.
 */
var GoogleTokenStrategy = require('./strategy')


/**
 * Framework version.
 */
require('pkginfo')(module, 'version')

/**
 * Expose constructors.
 */
exports.default = GoogleTokenStrategy
module.exports = exports['default']
