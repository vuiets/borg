/*jshint node:true*/
module.exports = {
	name: 'ember-soundcloud-widget',

	isDevelopingAddon: function () {
		return true;
	},

	contentFor: function(type, config) {
		if(type === 'body') {
			return '<script src="https://connect.soundcloud.com/sdk/sdk-3.1.2.js"></script>';
		}

		return '';
	}
};
