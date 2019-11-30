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

  test('Test Data Saver mode', function(assert) {
    let service = this.owner.lookup('service:device');
    assert.ok(service);

    assert.equal(service.saveData.isEnabled, dummyNavigator.connection.saveData);
  });

  test('Test Memory status', function(assert) {
    let service = this.owner.lookup('service:device');
    assert.ok(service);

    assert.equal(service.memory.deviceMemory, dummyNavigator.deviceMemory);
  });

  test('Test Hardware Concurrency', function(assert) {
    let service = this.owner.lookup('service:device');
    assert.ok(service);

    assert.equal(service.hardwareConcurrency.numberOfLogicalProcessors, dummyNavigator.hardwareConcurrency);
  });

  test('Test unsupported state', function(assert) {

    window.__eas_dummy_navigator = {};

    let service = this.owner.lookup('service:device');
    assert.ok(service);

    assert.ok(service.networkStatus.unsupported);
    assert.ok(service.saveData.unsupported);
    assert.ok(service.memory.unsupported);
    assert.ok(service.hardwareConcurrency.unsupported);

    window.__eas_dummy_navigator = dummyNavigator;
  });
});
