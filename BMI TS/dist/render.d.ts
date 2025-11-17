export declare class Render {
    templateId: string;
    rootId: string;
    BMI?: number | undefined;
    Cond?: string | undefined;
    output: HTMLElement;
    constructor(templateId: string, // ID <template>
    rootId: string, // gdzie wstawić
    BMI?: number | undefined, Cond?: string | undefined);
    rendering(): void;
}
//# sourceMappingURL=render.d.ts.map