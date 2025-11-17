export class Render {
    templateId;
    rootId;
    BMI;
    Cond;
    output;
    constructor(templateId, // ID <template>
    rootId, // gdzie wstawić
    BMI, Cond) {
        this.templateId = templateId;
        this.rootId = rootId;
        this.BMI = BMI;
        this.Cond = Cond;
        const templ = document.getElementById(this.templateId);
        if (!templ)
            throw new Error(`Template '${this.templateId}' not found`);
        this.output = templ.content.firstElementChild.cloneNode(true);
        if (this.BMI && this.Cond) {
            const El1 = this.output.querySelector("bmi-value");
            const El2 = this.output.querySelector("cond-value");
            console.log(this.output.querySelector("bmi-value"));
            if (!El1 || !El2) {
                throw new Error("NO EL");
            }
            El1.textContent = this.BMI.toFixed(1).toString();
            El2.textContent = this.Cond;
        }
        this.rendering();
    }
    rendering() {
        const root = document.getElementById(this.rootId);
        if (!root)
            throw new Error(`Root '${this.rootId}' not found`);
        if (root.hasChildNodes()) {
            root.innerHTML = "";
        }
        root.append(this.output);
    }
}
//# sourceMappingURL=render.js.map