function filter_a( str ) {
	return str + 'a';
}
function filter_b( str ) {
	return str + 'b';
}
function filter_c( str ) {
	return str + 'c';
}
function action_a( value ) {
	window.actionValue += 'a';
}
function action_b( value ) {
	window.actionValue += 'b';
}
function action_c( value ) {
	window.actionValue += 'c';
}
window.actionValue = '';

test( 'add and remove a filter', function() {
	expect(1);
	wp.hooks.addFilter( 'test.filter', filter_a );
	wp.hooks.removeFilter( 'test.filter' );
	equal( wp.hooks.applyFilter( 'test.filter', 'test' ), 'test' );
} );

test( 'add a filter and run it', function() {
	expect(1);
	wp.hooks.addFilter( 'test.filter', filter_a );
	equal( wp.hooks.applyFilter( 'test.filter', 'test' ), 'testa' );
	wp.hooks.removeFilter( 'test.filter' );
} );

test( 'add 2 filters in a row and run them', function() {
	expect(1);
	wp.hooks.addFilter( 'test.filter', filter_a );
	wp.hooks.addFilter( 'test.filter', filter_b );
	equal( wp.hooks.applyFilter( 'test.filter', 'test' ), 'testab' );
	wp.hooks.removeFilter( 'test.filter' );
} );

test( 'add 3 filters with different priorities and run them', function() {
	expect(1);
	wp.hooks.addFilter( 'test.filter', filter_a );
	wp.hooks.addFilter( 'test.filter', filter_b, 2 );
	wp.hooks.addFilter( 'test.filter', filter_c, 8 );
	equal( wp.hooks.applyFilter( 'test.filter', 'test' ), 'testbca' );
	wp.hooks.removeFilter( 'test.filter' );
} );

test( 'chain 3 filters with different priorities and then run them', function() {
	expect(1);
	wp.hooks
		.addFilter( 'test.filter', filter_a )
		.addFilter( 'test.filter', filter_b, 2 )
		.addFilter( 'test.filter', filter_c, 8 );
	equal( wp.hooks.applyFilter( 'test.filter', 'test' ), 'testbca' );
	wp.hooks.removeFilter( 'test.filter' );
} );

test( 'add and remove an action', function() {
	expect(1);
	window.actionValue = '';
	wp.hooks.addAction( 'test.action', action_a );
	wp.hooks.removeAction( 'test.action' );
	wp.hooks.doAction( 'test.action' );
	equal( window.actionValue, '' );
} );

test( 'add an action and run it', function() {
	expect(1);
	window.actionValue = '';
	wp.hooks.addAction( 'test.action', action_a );
	wp.hooks.doAction( 'test.action' );
	equal( window.actionValue, 'a' );
	wp.hooks.removeAction( 'test.action' );
} );

test( 'add 2 actions in a row and then run them', function() {
	expect(1);
	window.actionValue = '';
	wp.hooks.addAction( 'test.action', action_a );
	wp.hooks.addAction( 'test.action', action_b );
	wp.hooks.doAction( 'test.action' );
	equal( window.actionValue, 'ab' );
	wp.hooks.removeAction( 'test.action' );
} );

test( 'add 3 actions with different priorities and run them', function() {
	expect(1);
	window.actionValue = '';
	wp.hooks.addAction( 'test.action', action_a );
	wp.hooks.addAction( 'test.action', action_b, 2 );
	wp.hooks.addAction( 'test.action', action_c, 8 );
	wp.hooks.doAction( 'test.action' );
	equal( window.actionValue, 'bca' );
	wp.hooks.removeAction( 'test.action' );
} );

test( 'chain 3 actions with different priorities and run them', function() {
	expect(1);
	window.actionValue = '';
	wp.hooks
		.addAction( 'test.action', action_a )
		.addAction( 'test.action', action_b, 2 )
		.addAction( 'test.action', action_c, 8 )
		.doAction( 'test.action' );
	equal( window.actionValue, 'bca' );
	wp.hooks.removeAction( 'test.action' );
} );