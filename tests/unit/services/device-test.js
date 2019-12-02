import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | device', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let service = this.owner.lookup('service:device');
    assert.ok(service);
  });

  test('Test Network status', function(assert) {
    let service = this.owner.lookup('service:device');
    assert.ok(service);

    assert.equal(service.networkStatus.effectiveConnectionType, window.navigator.connection.effectiveType);
  });

  test('Test Data Saver mode', function(assert) {
    let service = this.owner.lookup('service:device');
    assert.ok(service);

    assert.equal(service.saveData.isEnabled, window.navigator.connection.saveData);
  });

  test('Test Memory status', function(assert) {
    let service = this.owner.lookup('service:device');
    assert.ok(service);

    assert.equal(service.memory.deviceMemory, window.navigator.deviceMemory);
  });

  test('Test Hardware Concurrency', function(assert) {
    let service = this.owner.lookup('service:device');
    assert.ok(service);

    assert.equal(service.hardwareConcurrency.numberOfLogicalProcessors, window.navigator.hardwareConcurrency);
  });

  // TODO: Need to add ember-window-mock to mock the window object
  // test('Test unsupported state', function(assert) {
  //   let service = this.owner.lookup('service:device');
  //   assert.ok(service);

  //   assert.ok(service.networkStatus.unsupported);
  //   assert.ok(service.saveData.unsupported);
  //   assert.ok(service.memory.unsupported);
  //   assert.ok(service.hardwareConcurrency.unsupported);
  // });
});
