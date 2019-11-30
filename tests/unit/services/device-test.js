import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

let dummyNavigator = window.__eas_dummy_navigator;

module('Unit | Service | device', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let service = this.owner.lookup('service:device');
    assert.ok(service);
  });

  test('Test Network status', function(assert) {
    let service = this.owner.lookup('service:device');
    assert.ok(service);

    assert.equal(service.networkStatus.effectiveConnectionType, dummyNavigator.connection.effectiveType);
  });
});
