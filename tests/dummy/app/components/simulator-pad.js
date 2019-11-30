import Component from '@ember/component';
import { action } from '@ember/object';
// import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SimulatorPad extends Component {

  @service
  device

  init() {
    super.init(...arguments);
    this._effectiveConnectionType = this.effectiveConnectionType || '4g';
    this._deviceMemory = this.deviceMemory || '4';
    this._isDataSaverModeOn = this.isDataSaverModeOn;
    this._hwConcurrency = this.hwConcurrency;

    this.networkOptions = [{
      label: 'Slow 2G',
      id: 'slow-2g'
    }, {
      label: '2G',
      id: '2g'
    }, {
      label: '3G',
      id: '3g'
    }, {
      label: '4G',
      id: '4g'
    }];

    this.memoryOptions = [{
      label: '8 GiB',
      id: 8
    }, {
      label: '4 GiB',
      id: 4
    }, {
      label: '2 GiB',
      id: 2
    }, {
      label: '1 GiB',
      id: 1
    }, {
      label: '512 MiB',
      id: 0.5
    }];

    this.saveDataOptions = [{
      label: 'ON',
      id: true
    }, {
      label: 'OFF',
      id: false
    }];
    
    this.hwcOptions = [{
      label: '1 Core',
      id: 1
    }, {
      label: '2 Core',
      id: 2
    }, {
      label: '4 Core',
      id: 4
    }, {
      label: '8 Core',
      id: 8
    }];
  }

  @action
  updateNetwork({ id: networkType } = {}) {
    this.set('_effectiveConnectionType', networkType);
    window.__eas_dummy_navigator.connection.effectiveType = networkType;
    this.device.set('networkStatus', {
      effectiveConnectionType: networkType
    });
    this.handleUpdate();
  }

  @action
  updateSaveData({ id: dataSaverMode } = {}) {
    this.set('_isDataSaverModeOn', dataSaverMode);
    window.__eas_dummy_navigator.connection.saveData = dataSaverMode;
    this.device.set('saveData', {
      isEnabled: dataSaverMode
    });
    this.handleUpdate();
  }

  @action
  updateMemory({ id: memory } = {}) {
    this.set('_deviceMemory', memory);
    window.__eas_dummy_navigator.deviceMemory = memory;
    this.handleUpdate();
  }  
  
  @action
  updateHwConcurrency({ id: hwc } = {}) {
    this.set('_hwConcurrency', hwc);
    window.__eas_dummy_navigator.hardwareConcurrency = hwc;
    this.handleUpdate();
  }  
} 