const { SC:SoundCloud } = window;

export function initialize(/* application */) {
	SoundCloud.initialize({
		client_id: '1f579b3c924badf0e1303ea5387b43af'
	});
}

export default {
	name: 'soundcloud',
	initialize
};
