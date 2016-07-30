import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'section',

	classNames: ['pv7', 'v-mid'],

	classNameBindings: ['font', 'bg-color'],

	font: 'amatic-regular',

	'bg-color': 'bg-teal'
});
