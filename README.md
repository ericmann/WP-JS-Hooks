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

### Features

* Fast and lightweight, only 1.3kb
* Priorities system ensures hooks with lower integer priority are fired first.
* Uses native object hash lookup for finding hook callbacks.
* Utilizes insertion sort for keeping priorities correct. Best Case: O(n), worst case: O(n^2)

### Changelog

* **4/24/13**
	* Reduced repository size by removing an old `node_modules` folder from repo history.