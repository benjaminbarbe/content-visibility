var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import 'intersection-observer';
import { css, html, property, LitElement, customElement, internalProperty, } from 'lit-element';
/**
 * content-visibility, a web component leverages CSS content-visibility and the
 * Intersection Observer API to provide cross browsers content-visibility solution.
 */
let ContentVisibility = class ContentVisibility extends LitElement {
    constructor() {
        var _a;
        super(...arguments);
        /**
         * CSS contain-intrinsic-size
         * https://developer.mozilla.org/en-US/docs/Web/CSS/contain-intrinsic-size
         */
        this.containIntrinsicSize = '';
        /**
         * Intersection Observer API option threshold. Since content-visibility only
         * triggers once, thus no use cases will need to provide array of threshold.
         * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
         */
        this.threshold = 0;
        /**
         * Default inView is true when browsers support CSS content visibility, so
         * no need to initialize IntersectionObserver but just add CSS rules.
         */
        this.inView = (_a = window.CSS) === null || _a === void 0 ? void 0 : _a.supports('content-visibility: auto');
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.inView) {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting &&
                        entry.target === this.renderRoot.children[0]) {
                        this.inView = true;
                    }
                });
            }, { threshold: this.threshold });
            this.observeContainer();
        }
    }
    /**
     * @param changedProperties
     */
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.observeContainer();
    }
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        if (this.observer) {
            const container = this.renderRoot.children[0];
            container && this.observer.unobserve(container);
            this.observer.disconnect();
        }
        this.inView = (_a = window.CSS) === null || _a === void 0 ? void 0 : _a.supports('content-visibility: auto');
    }
    render() {
        var _a;
        return html `<div
      class="content-visibility"
      style="${this.containIntrinsicSize && ((_a = window.CSS) === null || _a === void 0 ? void 0 : _a.supports('--contain-intrinsic-size: 0'))
            ? `--contain-intrinsic-size: ${this.containIntrinsicSize}`
            : !this.inView
                ? `height: ${this.containIntrinsicSize || 0}`
                : ''}"
    >
      ${this.inView ? html `<slot></slot>` : ''}
    </div>`;
    }
    observeContainer() {
        if (this.observer) {
            const container = this.renderRoot.children[0];
            container && this.observer.observe(container);
        }
    }
};
/**
 * Component scope styles
 * Note: @supports features query is not supported on IE
 */
ContentVisibility.styles = css `
    @supports (content-visibility: auto) {
      .content-visibility {
        content-visibility: auto;
      }
    }
    @supports (contain-intrinsic-size: 0) and
      (not (--contain-intrinsic-size: 0)) {
      .content-visibility {
        contain-intrinsic-size: 0;
      }
    }
    @supports (--contain-intrinsic-size: 0) and (contain-intrinsic-size: 0) {
      .content-visibility {
        contain-intrinsic-size: var(--contain-intrinsic-size, 0);
      }
    }
  `;
__decorate([
    property({ type: String })
], ContentVisibility.prototype, "containIntrinsicSize", void 0);
__decorate([
    property({ type: Number })
], ContentVisibility.prototype, "threshold", void 0);
__decorate([
    internalProperty()
], ContentVisibility.prototype, "inView", void 0);
ContentVisibility = __decorate([
    customElement('content-visibility')
], ContentVisibility);
export { ContentVisibility };
//# sourceMappingURL=content-visibility.js.map