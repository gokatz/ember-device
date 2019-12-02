import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { default as window, reset } from 'ember-window-mock';
import { waitUntil } from '@ember/test-helpers'

module('Unit | Service | device', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(() => {
    reset();
  })

  test('it exists', function(assert) {
    let service = this.owner.lookup('service:device');
    assert.ok(service);
  });

  test('Test Network status', function(assert) {
    let effectiveConnectionType = '3g';
    window.navigator.connection.effectiveType = effectiveConnectionType;

    let service = this.owner.lookup('service:device');
    assert.ok(service);
    
    assert.equal(service.networkStatus.effectiveConnectionType, effectiveConnectionType);
  });

  test('Test Network status - onChange', async function(assert) {
    let effectiveConnectionType = '3g';
    window.navigator.connection.effectiveType = effectiveConnectionType;

    let service = this.owner.lookup('service:device');
    assert.ok(service);
    
    assert.equal(service.networkStatus.effectiveConnectionType, effectiveConnectionType);

    window.navigator.connection.effectiveType = '4g';

    var changeEvent = new Event('change');
    window.navigator.connection.dispatchEvent(changeEvent);

    await waitUntil(() => {
      return service.networkStatus.effectiveConnectionType === '4g';
    });
  });

  test('Test Data Saver mode', function(assert) {
    let saveData = true;
    window.navigator.connection.saveData = saveData;

    let service = this.owner.lookup('service:device');
    assert.ok(service);

    assert.equal(service.saveData.isEnabled, saveData);
  });

  test('Test Data Saver mode - onChange', async function(assert) {
    let saveData = true;
    window.navigator.connection.saveData = saveData;

    let service = this.owner.lookup('service:device');
    assert.ok(service);

    assert.equal(service.saveData.isEnabled, saveData);

    window.navigator.connection.saveData = false;

    var changeEvent = new Event('change');
    window.navigator.connection.dispatchEvent(changeEvent);

    await waitUntil(() => {
      return !service.saveData.isEnabled;
    });
  });

  test('Test Memory status', function(assert) {
    let deviceMemory = 4;
    window.navigator.deviceMemory = deviceMemory;

    let service = this.owner.lookup('service:device');
    assert.ok(service);

    assert.equal(service.memory.deviceMemory, deviceMemory);
  });

  test('Test Hardware Concurrency', function(assert) {
    let hardwareConcurrency = 4
    window.navigator.hardwareConcurrency = hardwareConcurrency;
    let service = this.owner.lookup('service:device');
    assert.ok(service);

    assert.equal(service.hardwareConcurrency.numberOfLogicalProcessors, hardwareConcurrency);
  });

  // TODO: Need to add ember-window-mock to mock the window object
  test('Test unsupported state', function(assert) {

    // To make all the navigator value unavailable!
    window.navigator = {};

    let service = this.owner.lookup('service:device');
    assert.ok(service);

    assert.ok(service.networkStatus.unsupported);
    assert.ok(service.saveData.unsupported);
    assert.ok(service.memory.unsupported);
    assert.ok(service.hardwareConcurrency.unsupported);
  });
});
