#WP-JS-Hooks
===========

A lightweight &amp; efficient EventManager for JS in WP.

### Introduction
See ticket [#21170](http://core.trac.wordpress.org/ticket/21170) for more information. We also did a general overview of the project at [WordSesh](http://wordsesh.com) that you can find [here](http://www.youtube.com/watch?v=oEF7EBjZ-kE&feature=c4-feed-u).

### Dependencies
WP-JS-Hooks does not require any third-party applications or software. The library is completely self-maintained. However, the repository itself uses Grunt to perform tasks such as JSHint, Uglify, and QUnit. For more information on how to install Grunt, please visit [http://gruntjs.com](http://gruntjs.com)

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