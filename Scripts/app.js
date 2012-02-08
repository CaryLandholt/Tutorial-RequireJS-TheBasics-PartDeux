require.config({
	paths: {
		'popover': 'http://twitter.github.com/bootstrap/assets/js/bootstrap-popover',
		'tooltip': 'bootstrap-tooltip'
	}
});

require(['order!jquery', 'order!tooltip', 'order!popover'], function ($) {
	$('[rel=tooltip]').tooltip();
	$('[rel=popover]').popover();
});