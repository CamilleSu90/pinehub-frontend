import _ from 'underscore';
export default class Model {
  constructor(application) {
    this.$application = application;
    this.state = this.data();
    this.getters = this.computed();
    this.actions = this.dispatchs();
    this.mutations = this.listeners();
  }

  data(){
    return {

    };
  }
  computed() {
    return {

    };
  }

  dispatchs() {

  }

  listeners() {

  }

  services(name) {
    return this.$application.instances[name];
  }

  transform(data, transformer) {
    if(_.isArray(data)) {
      return _.map(data, function(value) {
        return new transformer(value);
      });
    }else{
      return new transformer(data);
    }
  }
}
