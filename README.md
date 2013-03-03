#WP-JS-Hooks
===========

A lightweight &amp; efficient EventManager for JS in WP.

### Introduction
See ticket [#21170](http://core.trac.wordpress.org/ticket/21170) for more information.

### API Usage
API functions can be called via the global `wp.hooks` like this `wp.hooks.addAction()`, etc.

* `addAction( 'namespace.identifier', callback, priority )`
* `addFilter( 'namespace.identifier', callback, priority )`
* `removeAction( 'namespace.identifier' )`
* `removeFilter( 'namespace.identifier' )`
* `doAction( 'namespace.identifier', arg1, arg2, moreArgs, finalArg )`
* `applyFilter( 'namespace.identifier', content )`