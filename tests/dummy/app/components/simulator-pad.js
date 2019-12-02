import Component from '@ember/component';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SimulatorPad extends Component {

  @service
  device
  
  init() {
    super.init(...arguments);

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

  @computed('effectiveConnectionType')
  get _effectiveConnectionType() {
    return this.effectiveConnectionType || '4g';
  }

  @computed('deviceMemory')
  get _deviceMemory() {
    return this.deviceMemory || '4';
  }

  @computed('isDataSaverModeOn')
  get _isDataSaverModeOn() {
    return this.isDataSaverModeOn;
  }

  @computed('hwConcurrency')
  get _hwConcurrency() {
    return this.hwConcurrency;
  }

  @action
  updateNetwork({ id: networkType } = {}) {
    this.device.set('_networkStatus', {
      effectiveConnectionType: networkType
    });
  }

  @action
  updateSaveData({ id: dataSaverMode } = {}) {
    this.device.set('_saveData', {
      isEnabled: dataSaverMode
    });
  }

  @action
  updateMemory({ id: memory } = {}) {
    this.device.set('_memory', {
      deviceMemory: memory
    });
  }  
  
  @action
  updateHwConcurrency({ id: hwc } = {}) {
    this.device.set('_hardwareConcurrency', {
      numberOfLogicalProcessors: hwc
    });
  }  
} 