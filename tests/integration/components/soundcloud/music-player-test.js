import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('soundcloud/music-player', 'Integration | Component | soundcloud/music player', {
	integration: true
});

test('it renders', function (assert) {
	// Set any properties with this.set('myProperty', 'value');
	// Handle any actions with this.on('myAction', function(val) { ... });

	this.render(hbs`{{soundcloud/music-player}}`);

	assert.equal(this.$().text().trim(), '');

	// Template block usage:
	this.render(hbs`
    {{#soundcloud/music-player}}
      template block text
    {{/soundcloud/music-player}}
  `);

	assert.equal(this.$().text().trim(), 'template block text');
});
