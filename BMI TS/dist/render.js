export class Render {
    ElCreate;
    className;
    innerHTML;
    id;
    root;
    color;
    output;
    constructor(ElCreate, className, innerHTML, id, root, color) {
        this.ElCreate = ElCreate;
        this.className = className;
        this.innerHTML = innerHTML;
        this.id = id;
        this.root = root;
        this.color = color;
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
        const listRoot = document.getElementById(this.root);
        if (listRoot.children.length == 2 || this.ElCreate === "p") {
            listRoot.innerHTML = "";
        }
        listRoot.append(this.output);
        console.log(`Rendering ${this.output}`);
    }
}
//# sourceMappingURL=render.js.map