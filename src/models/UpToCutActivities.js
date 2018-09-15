import Model from './Model';
import _ from 'underscore';
import UpToCutActivityTransformer from './transformers/UpToCutActivity';
export default class UpToCutActivities extends Model {
  constructor(application) {
    super(application);
    this.transformer = UpToCutActivityTransformer;
  }
  data() {
    return _.extend(super.data(), {

    });
  }
  computed() {
    return _.extend(super.computed(), {

    });
  }

  dispatchs() {
    return _.extend(super.dispatchs(), {

    });
  }

  listeners() {
    return _.extend(super.listeners(), {

    });
  }
}
