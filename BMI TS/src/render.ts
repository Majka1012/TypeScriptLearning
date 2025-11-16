export class Render {
  output: HTMLUnknownElement;
  constructor(
    public ElCreate: string,
    public className: string,
    public innerHTML: string,
    public id: string,
    public root: string,
    public color?: string
  ) {
    this.output = document.createElement(this.ElCreate);
    this.output.innerHTML = this.innerHTML;
    this.output.className = this.className;
    this.output.id = this.id;
    if (this.color) {
      this.output.style.backgroundColor = this.color;
    }

    this.rendering();
  }
  rendering() {
    const listRoot = document.getElementById(this.root)!;
    if (listRoot.children.length == 2 || this.ElCreate === "p") {
      listRoot.innerHTML = "";
    }
    listRoot.append(this.output);
    console.log(`Rendering ${this.output}`);
  }
}
