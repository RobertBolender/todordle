import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = 'Todordle';

  @property({ type: Boolean }) enableBack: boolean = false;

  static get styles() {
    return css`
      header {
        display: flex;
        place-content: center;
        background: var(--app-color-primary);
        color: white;
        height: 4em;
        border-bottom: 1px solid #3a3a3c;
        margin-bottom: 2em;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: bold;
      }

      nav fluent-anchor {
        margin-left: 10px;
      }

      #back-button-block {
        display: flex;
        place-content: center;
        align-items: center;
        width: 11em;
      }

      @media(prefers-color-scheme: light) {
        header {
          color: black;
        }

        nav fluent-anchor::part(control) {
          color: initial;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  updated(changedProperties: any) {
    if (changedProperties.has('enableBack')) {
      console.log('enableBack', this.enableBack);
    }
  }

  render() {
    return html`
      <header>
        <div id="back-button-block">
          ${this.enableBack ? html`<fluent-anchor appearance="accent" href="/">
            Back
          </fluent-anchor>` : null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `;
  }
}
