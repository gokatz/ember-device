import Component from '@ember/component';
import { computed } from '@ember/object';

export default class SimulatorPad extends Component {

  tagName = '';
  resolution = 'mid';

  @computed('resolution')
  get dimension() {
    return (this.resolutionMap[this.resolution] || {}).dimension;
  }

  resolutionMap = {
    high: {
      dimension: '1600x800'
    },
    mid: {
      dimension: '300x150'
    },
    low: {
      dimension: '80x40'
    }
  }
}