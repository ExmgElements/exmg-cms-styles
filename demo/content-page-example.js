import {PolymerElement, html} from '../node_modules/@polymer/polymer/polymer-element.js';
import '../node_modules/@exmg/exmg-paper-card/exmg-paper-card.js';
import '../node_modules/@exmg/exmg-paper-card/exmg-paper-info-card.js';
import '../exmg-cms-default-theme.js';
import '../exmg-cms-page-styles.js';

class ContentPageExample extends PolymerElement {
  static get template() {
    return html`
      <style include="exmg-cms-page-styles">
        :host {
          --col-padding: 12px;
        }
      </style>
      <div class="page-container">
        <div class="page-content">

          <div row="">
            <div col="">
              <exmg-paper-info-card title="Title">
                <div slot="body" class="body">
                  <p>Lorem ipsum dolor sit amet, dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                </div>
              </exmg-paper-info-card>
            </div>
          </div>

          <div row="">
            <div col="">
              <exmg-paper-info-card tagline="Tagline" minor="">
                <div slot="body" class="minor">
                  <p>Lorem ipsum dolor sit amet, dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                  <div class="links">
                    <a href="#" target="_blank" class="open-new">More information</a>
                  </div>
                </div>
              </exmg-paper-info-card>
            </div>
          </div>

          <div row="">
            <h2 col="">Tests</h2>
          </div>
          <div row="">
            <div col-6="" col-md-4="" col-xl-3="">
              <div class="card add">
                <div>
                  <div class="plus">+</div>
                  <div class="plus-title">Add Broadcast</div>
                </div>
              </div>
            </div>
            <div col-6="" col-md-4="" col-xl-3="">
              <div class="card"><div class="title">Broadcast 1</div></div>
            </div>
            <div col-6="" col-md-4="" col-xl-3="">
              <div class="card"><div class="title">Broadcast 2</div></div>
            </div>
            <div col-6="" col-md-4="" col-xl-3="">
              <div class="card"><div class="title">Broadcast 3</div></div>
            </div>
            <div col-6="" col-md-4="" col-xl-3="">
              <div class="card"><div class="title">Broadcast 4</div></div>
            </div>
            <div col-6="" col-md-4="" col-xl-3="">
              <div class="card"><div class="title">Broadcast 5</div></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  static get is() {
    return 'content-page-example';
  }
}

window.customElements.define(ContentPageExample.is, ContentPageExample);
