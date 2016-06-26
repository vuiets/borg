import Ember from 'ember';
import Component from 'ember-component';
import computed from 'ember-computed';

import layout from 'ember-soundcloud-widget/templates/components/soundcloud/music-player';

const { SC:SoundCloud } = window;

const CSS_CLASS_PAUSED = 'sndcld-ply-btn--psd';

const MUSIC_PLAYER = {
	ACTION: {
		PLAY: 'play',
		PAUSE: 'pause'
	}
};

export default Component.extend({
	layout,

	classNames: ['w-100', 'dt', 'pa2', 'pa3-ns', 'bb', 'b--black-10'],

	classNameBindings: ['fontClass'],

	paused: true,

	fontClass: 'josefin-sans-bold',

	pausedClass: computed('paused', {
		get() {
			return this.get('paused') ? CSS_CLASS_PAUSED : '';
		}
	}),

	data: {
		name: 'zZz',
		id: 1431410,
		artist: 'Droeloe'
	},

	player: null,

	setupStream: Ember.on('didInsertElement', function () {
		const trackId = this.get('data.id');

		SoundCloud.stream(`/tracks/${trackId}`).then((player) => {
			this.set('player', player);
		});
	}),

	actions: {
		togglePlay() {
			let {
					player,
					paused
				} = this.getProperties(['player', 'paused']),
				action = MUSIC_PLAYER.ACTION[paused ? 'PLAY' : 'PAUSE'];

			player[action]();

			this.toggleProperty('paused');
		}
	}
});
