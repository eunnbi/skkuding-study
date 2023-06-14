type Position = "afterbegin" | "beforeend";

export default class Component<T extends object, U extends object> {
  protected $target: HTMLElement;
  protected props!: T;
  protected state!: U;
  private position: Position;
  constructor($target: HTMLElement, props?: T, position?: Position) {
    this.$target = $target;
    this.position = position || "beforeend";
    if (props) this.props = props;
    this.setup();
    this.render();
    this.mounted();
  }
  template() {
    return "";
  }
  setup() { }
  mounted() { }
  updated() { }
  render() {
    this.$target.insertAdjacentHTML(this.position, this.template());
  }
  setState(newState: U) {
    this.state = { ...this.state, ...newState };
    if (this.position === "beforeend" && this.$target.lastChild) {
      this.$target.removeChild(this.$target.lastChild);
    } else if (this.position === "afterbegin" && this.$target.firstChild) {
      this.$target.removeChild(this.$target.firstChild);
    }
    this.render();
    this.updated();
  }
}
