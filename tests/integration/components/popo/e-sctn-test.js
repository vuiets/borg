import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('popo/e-sctn', 'Integration | Component | popo/e sctn', {
	integration: true
});

test('it renders', function (assert) {
	// Set any properties with this.set('myProperty', 'value');
	// Handle any actions with this.on('myAction', function(val) { ... });

	this.render(hbs`{{popo/e-sctn}}`);

	assert.equal(this.$().text().trim(), '');

	// Template block usage:
	this.render(hbs`
    {{#popo/e-sctn}}
      template block text
    {{/popo/e-sctn}}
  `);

	assert.equal(this.$().text().trim(), 'template block text');
});
