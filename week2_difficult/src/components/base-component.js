export default class Component {
  $target;
  props;
  state;
  constructor($target, position = "beforeend", props = {}) {
    this.$target = $target;
    this.position = position;
    this.props = props;
    this.setup();
    this.render();
    this.mounted();
  }
  template() {
    return "";
  }
  setup() {}
  mounted() {}
  updated() {}
  render() {
    this.$target.insertAdjacentHTML(this.position, this.template());
  }
  setState(newState) {
    this.state = { ...this.state, ...newState };
    if (this.position === "beforeend") {
      this.$target.removeChild(this.$target.lastChild);
    } else {
      this.$target.removeChild(this.$target.firstChild);
    }
    this.render();
    this.updated();
  }
}
