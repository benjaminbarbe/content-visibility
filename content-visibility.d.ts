import 'intersection-observer';
import { HTMLAttributes, PropsWithChildren } from 'react';
import { LitElement, PropertyValues } from 'lit-element';
/**
 * content-visibility, a web component leverages CSS content-visibility and the
 * Intersection Observer API to provide cross browsers content-visibility solution.
 */
export declare class ContentVisibility extends LitElement {
    private observer?;
    /**
     * Component scope styles
     * Note: @supports features query is not supported on IE
     */
    static styles: import("lit-element").CSSResult;
    /**
     * CSS contain-intrinsic-size
     * https://developer.mozilla.org/en-US/docs/Web/CSS/contain-intrinsic-size
     */
    containIntrinsicSize: string;
    /**
     * Intersection Observer API option threshold. Since content-visibility only
     * triggers once, thus no use cases will need to provide array of threshold.
     * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
     */
    threshold: number;
    /**
     * Default inView is true when browsers support CSS content visibility, so
     * no need to initialize IntersectionObserver but just add CSS rules.
     */
    private inView;
    connectedCallback(): void;
    /**
     * @param changedProperties
     */
    firstUpdated(changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
    render(): import("lit-element").TemplateResult;
    observeContainer(): void;
}
declare type ContentVisibilityProps = HTMLAttributes<HTMLDivElement> & {
    containIntrinsicSize?: string;
    threshold?: number;
};
declare global {
    interface HTMLElementTagNameMap {
        'content-visibility': ContentVisibility;
    }
}
declare module 'preact' {
    namespace JSX {
        interface IntrinsicElements {
            'content-visibility': PropsWithChildren<ContentVisibilityProps>;
        }
    }
}
export declare namespace global.JSX {
    interface IntrinsicElements {
        'content-visibility': PropsWithChildren<ContentVisibilityProps>;
    }
}
export declare namespace svelte.JSX {
    interface IntrinsicElements {
        'content-visibility': ContentVisibilityProps;
    }
}
export {};
//# sourceMappingURL=content-visibility.d.ts.map