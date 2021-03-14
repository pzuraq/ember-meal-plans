import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | plans/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:plans/index');
    assert.ok(route);
  });
});
