import{t as r}from"./chunk-zSsmmLLa.js";import{$r as qq,$t as Ic,Ai as zT,An as Qv,Ar as ia,Bt as E,Cn as P,Ct as $b,D as Ta,Di as xv,Dr as gr,Er as g,Et as Ae,F as aa,Ft as Cc,Gr as nD,H as fe,Hr as mc,Ht as En,I as an$1,Ir as k,It as Ch,Jr as o_,K as hn$1,Lt as Cz,Mr as jf,Mt as Bn,Ni as zv,Nn as Rt,Nr as jg,Nt as Bv,Oi as yc,On as Q,Ot as B,P as _r,Pr as ji,Q as me,Rt as Dc,St as $T,Ti as xi,Tt as AS,U as ge,Un as Tz,Vn as Tg,Vt as Ee,Wn as Uf,X as la,Xr as pe,Xt as HI,Zn as Wl,_i as ue,_r as co,a as Co,at as qi,bi as vc,bt as $A,c as Eo,cr as _n$1,d as Fo,dn as Lv,dt as ui,ei as qs,fi as t_,fr as bE,gn as Nn,gt as yn$1,h as J,hn as N_,hr as bz,ht as wr,i as Cc$1,ii as r_,in as Ja$1,j as Va$1,ji as ze$1,jr as jT,jt as Bf,ki as ye,kn as QT,kt as BT,l as Er,li as s_,lr as a_,lt as to,mn as NS,mr as bh,mt as wo$1,o as Da,on as Jt,pi as te,pt as vn$1,q as io,r as Bt,rr as ZA,s as Di,sr as _g,ti as qv,tr as Y_,tt as or,u as Fa$1,ui as sf,v as La$1,vr as dD,w as Pe,wi as xf,xi as ve,xt as $I,yt as b,zn as Sz,zr as ki}from"./main-GROSGNFX.js";import{i as T,n as F,r as L,t as A$1}from"./chunk-Dy6GeMB5.js";import{a as Mn,c as Yt,d as ne,i as Le,l as cn$1,n as He,o as Qt,p as te$1,t as Gt}from"./chunk-Zdnxfsyz.js";import{F as te$2,c as Er$1,d as Gn,g as Tt,k as mt,m as Pe$1,r as Be,s as Dr,v as Ve,w as ht,y as Xn$1,z as ze$2}from"./chunk-DJvbOTI2.js";import{a as r$1,i as o}from"./chunk-BzR9rF9p.js";import{a as je,c as ze$3,i as Ve$1,n as Be$1,o as tt,s as w,t as $t}from"./chunk-hgCZAQo1.js";import{n as d}from"./chunk-BY1aGbQm.js";import{t as _}from"./chunk-DujovK-J.js";import{n as je$1,r as vt,t as gt}from"./chunk-C7_vJ4rW.js";import{a as Nn$1,c as Tn,d as vn$2,i as Fn,l as ua,n as Dn,o as Rn,r as En$1,s as Sa,t as B$1,u as v}from"./chunk-Bq64sF2Z.js";import{t as p}from"./chunk-BcySEp5I.js";import{t as o$1}from"./chunk-DW468t0Q.js";import{a as m,i as f,o as w$1,r as c}from"./chunk-gmFWpSHQ.js";var Na=new E(`MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS`,{providedIn:`root`,factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})});var Va=new E(`MatButtonToggleGroup`);var Ha={provide:fe,useExisting:ia(()=>Ua),multi:!0};var ke=class{source;value;constructor(a,e){this.source=a,this.value=e}};var Ua=(()=>{class n{_changeDetector=g(co);_dir=g(ZA,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=g(ge).getId(`mat-button-toggle-group-`);vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new ye;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}change=new ye;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=g(Na,{optional:!0});this.appearance=e&&e.appearance?e.appearance:`standard`,this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new ze$2(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||or(e))return;let i=e.target.id,o=this._buttonToggles.toArray().findIndex(l=>l.buttonId===i),r=null;switch(e.keyCode){case 32:case 13:r=this._buttonToggles.get(o)||null;break;case 38:r=this._getNextButton(o,-1);break;case 37:r=this._getNextButton(o,this.dir===`ltr`?-1:1);break;case 40:r=this._getNextButton(o,1);break;case 39:r=this._getNextButton(o,this.dir===`ltr`?1:-1);break;default:return}r&&(e.preventDefault(),r._onButtonClick(),r.focus())}_emitChangeEvent(e){let t=new ke(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,i=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,i)):this._updateModelValue(e,i)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>`u`?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let i=this._buttonToggles;for(let o=1;o<=i.length;o++){let r=(e+t*o+i.length)%i.length,l=i.get(r);if(l&&!l.disabled)return l}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(this._clearSelection(),e.forEach(i=>this._selectValue(i,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(i=>i.tabIndex===-1)){for(let i of t)if(!i.disabled){i.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let i of t)if(i.value===e){i.checked=!0,this._selectionModel.select(i),this.multiple||(i.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static ɵfac=function(t){return new(t||n)};static ɵdir=Jt({type:n,selectors:[[`mat-button-toggle-group`]],contentQueries:function(t,i,o){if(t&1&&vc(o,wa,5),t&2){let r;jf(r=Uf())&&(i._buttonToggles=r)}},hostAttrs:[1,`mat-button-toggle-group`],hostVars:6,hostBindings:function(t,i){t&1&&yc(`keydown`,function(r){return i._keydown(r)}),t&2&&(ki(`role`,i.multiple?`group`:`radiogroup`)(`aria-disabled`,i.disabled),Qv(`mat-button-toggle-vertical`,i.vertical)(`mat-button-toggle-group-appearance-standard`,i.appearance===`standard`))},inputs:{appearance:`appearance`,name:`name`,vertical:[2,`vertical`,`vertical`,ji],value:`value`,multiple:[2,`multiple`,`multiple`,ji],disabled:[2,`disabled`,`disabled`,ji],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ji],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,ji],hideMultipleSelectionIndicator:[2,`hideMultipleSelectionIndicator`,`hideMultipleSelectionIndicator`,ji]},outputs:{valueChange:`valueChange`,change:`change`},exportAs:[`matButtonToggleGroup`],features:[dD([Ha,{provide:Va,useExisting:n}])]})}return n})();var wa=(()=>{class n{_changeDetectorRef=g(co);_elementRef=g(Rt);_focusMonitor=g(qi);_idGenerator=g(ge);_animationDisabled=_r();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new ye;constructor(){g($A).load(Gt);let e=g(Va,{optional:!0}),t=g(new Ic(`tabindex`),{optional:!0})||``,i=g(Na,{optional:!0});this._tabIndex=te(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=i&&i.appearance?i.appearance:`standard`,this._disabledInteractive=i?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId(`mat-button-toggle-`),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add(`mat-button-toggle-animations-enabled`),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(i=>i.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new ke(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`button`],t=[`*`];function i(o,r){if(o&1&&(Ja$1(0,`div`,2),mc(1,`mat-pseudo-checkbox`,6),xf()),o&2){let l=t_();$b(),Lv(`disabled`,l.disabled)}}return xi({type:n,selectors:[[`mat-button-toggle`]],viewQuery:function(r,l){if(r&1&&zv(e,5),r&2){let u;jf(u=Uf())&&(l._buttonElement=u.first)}},hostAttrs:[`role`,`presentation`,1,`mat-button-toggle`],hostVars:14,hostBindings:function(r,l){r&1&&yc(`focus`,function(){return l.focus()}),r&2&&(ki(`aria-label`,null)(`aria-labelledby`,null)(`id`,l.id)(`name`,null),Qv(`mat-button-toggle-standalone`,!l.buttonToggleGroup)(`mat-button-toggle-checked`,l.checked)(`mat-button-toggle-disabled`,l.disabled)(`mat-button-toggle-disabled-interactive`,l.disabledInteractive)(`mat-button-toggle-appearance-standard`,l.appearance===`standard`))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],id:`id`,name:`name`,value:`value`,tabIndex:`tabIndex`,disableRipple:[2,`disableRipple`,`disableRipple`,ji],appearance:`appearance`,checked:[2,`checked`,`checked`,ji],disabled:[2,`disabled`,`disabled`,ji],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ji]},outputs:{change:`change`},exportAs:[`matButtonToggle`],ngContentSelectors:t,decls:7,vars:13,consts:[[`button`,``],[`type`,`button`,1,`mat-button-toggle-button`,`mat-focus-indicator`,3,`click`,`id`,`disabled`],[1,`mat-button-toggle-checkbox-wrapper`],[1,`mat-button-toggle-label-content`],[1,`mat-button-toggle-focus-overlay`],[`matRipple`,``,1,`mat-button-toggle-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,3,`disabled`]],template:function(r,l){if(r&1&&(r_(),Ja$1(0,`button`,1,0),yc(`click`,function(){return l._onButtonClick()}),jT(2,i,2,1,`div`,2),Ja$1(3,`span`,3),o_(4),xf()(),mc(5,`span`,4)(6,`span`,5)),r&2){let u=a_(1);Lv(`id`,l.buttonId)(`disabled`,l.disabled&&!l.disabledInteractive||null),ki(`role`,l.isSingleSelector()?`radio`:`button`)(`tabindex`,l.disabled&&!l.disabledInteractive?-1:l.tabIndex)(`aria-pressed`,l.isSingleSelector()?null:l.checked)(`aria-checked`,l.isSingleSelector()?l.checked:null)(`name`,l._getButtonName())(`aria-label`,l.ariaLabel)(`aria-labelledby`,l.ariaLabelledby)(`aria-disabled`,l.disabled&&l.disabledInteractive?`true`:null),$b(2),BT(l.buttonToggleGroup&&(!l.buttonToggleGroup.multiple&&!l.buttonToggleGroup.hideSingleSelectionIndicator||l.buttonToggleGroup.multiple&&!l.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),$b(4),Lv(`matRippleTrigger`,u)(`matRippleDisabled`,l.disableRipple||l.disabled)}},dependencies:[Mn,Gn],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--%NS%mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--%NS%mat-button-toggle-legacy-text-color);
  font-family: var(--%NS%mat-button-toggle-legacy-label-text-font);
  font-size: var(--%NS%mat-button-toggle-legacy-label-text-size);
  line-height: var(--%NS%mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--%NS%mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--%NS%mat-button-toggle-legacy-label-text-tracking);
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-state-background-color);
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--%NS%mat-button-toggle-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-button-toggle-background-color, transparent);
  font-family: var(--%NS%mat-button-toggle-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-toggle-label-text-size, var(--%NS%mat-sys-label-large-size));
  line-height: var(--%NS%mat-button-toggle-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-weight: var(--%NS%mat-button-toggle-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-button-toggle-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-toggle-selected-state-background-color, var(--%NS%mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--%NS%mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--%NS%mat-button-toggle-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--%NS%mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--%NS%mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--%NS%mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
`],encapsulation:2})})()}return n})();var zn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=gr({type:n});static ɵinj=En({imports:[Yt,wa,qq]})}return n})();var Se=class n{http=g(bE);base=`/api/v1/vencimientos`;listar(a){return this.http.get(this.base,{params:A$1(r({},a))})}crear(a){return this.http.post(this.base,a)}modificar(a,e){return this.http.put(`${this.base}/${a}`,e)}cambiarEstado(a,e){return this.http.put(`${this.base}/${a}/estado`,{estado:e})}eliminar(a){return this.http.delete(`${this.base}/${a}`)}static ɵfac=function(e){return new(e||n)};static ɵprov=P({token:n,factory:n.ɵfac,providedIn:`root`})};var Me=`23:59`;function Aa(n,a){let[e,t,i]=n.split(`-`).map(Number),[o,r]=(a||Me).split(`:`).map(Number);return new Date(e,t-1,i,o,r).toISOString()}function ee(n){let a=new Date(n),e=t=>String(t).padStart(2,`0`);return{fecha:`${a.getFullYear()}-${e(a.getMonth()+1)}-${e(a.getDate())}`,hora:`${e(a.getHours())}:${e(a.getMinutes())}`}}function Qn(n){return ee(n).hora!==Me}function Ka(n,a=new Date){return n.estado===`pendiente`&&new Date(n.fechaVencimiento).getTime()<a.getTime()}function Jn(n,a=new Date){if(n.estado!==`pendiente`||Ka(n,a))return null;let e=new Date(n.fechaVencimiento),t=o=>new Date(o.getFullYear(),o.getMonth(),o.getDate()).getTime(),i=new Date(a.getFullYear(),a.getMonth(),a.getDate()+1);return t(e)===t(a)?`hoy`:t(e)===t(i)?`manana`:null}function A(n){return n.split(`-`).reverse().join(`/`)}var Zn=[{valor:`pendientes`,etiqueta:`Pendientes`},{valor:`vencidos`,etiqueta:`Vencidos`},{valor:`semana`,etiqueta:`Próximos 7 días`},{valor:`cumplidos`,etiqueta:`Cumplidos`}];function Xn(n,a=new Date){switch(n){case`pendientes`:return{estado:`pendiente`};case`vencidos`:return{estado:`pendiente`,hasta:a.toISOString()};case`semana`:{let e=new Date(a.getFullYear(),a.getMonth(),a.getDate()),t=new Date(e.getFullYear(),e.getMonth(),e.getDate()+8);return{estado:`pendiente`,desde:e.toISOString(),hasta:t.toISOString()}}case`cumplidos`:return{estado:`cumplido`};case`todos`:return{}}}var Wa=/^(\d*\.?\d+)\s*(h|hour|hours|m|min|minute|minutes|s|second|seconds)?$/i;var Fa=new E(`MAT_TIMEPICKER_CONFIG`);function Oa(n){let a;if(n===null)return null;if(typeof n==`number`)a=n;else{if(n.trim().length===0)return null;let e=n.match(Wa),t=e?parseFloat(e[1]):null,i=e?.[2]?.toLowerCase()||null;if(!e||t===null||isNaN(t))return null;i===`h`||i===`hour`||i===`hours`?a=t*3600:i===`m`||i===`min`||i===`minute`||i===`minutes`?a=t*60:a=t}return a}function Qa(n,a,e,t,i){i=Math.max(i,1);let o=[],r=n.compareTime(e,t)<1?e:t;for(;n.sameDate(r,e)&&n.compareTime(r,t)<1&&n.isValid(r);)o.push({value:r,label:n.format(r,a.display.timeOptionLabel)}),r=n.addSeconds(r,i);return o}var Ja=new E(`MAT_TIMEPICKER_SCROLL_STRATEGY`,{providedIn:`root`,factory:()=>{let n=g(ue);return()=>Ve(n)}});var Ge=(()=>{class n{_dir=g(ZA,{optional:!0});_viewContainerRef=g(Nn);_injector=g(ue);_defaultConfig=g(Fa,{optional:!0});_dateAdapter=g(v,{optional:!0});_dateFormats=g(B$1,{optional:!0});_scrollStrategyFactory=g(Ja);_animationsDisabled=_r();_isOpen=te(!1);_activeDescendant=te(null);_input=te(null);_overlayRef=null;_portal=null;_optionsCacheKey=null;_localeChanges;_onOpenRender=null;_panelTemplate=Sz.required(`panelTemplate`);_timeOptions=[];_options=Tz(mt);_keyManager=new hn$1(this._options,this._injector).withHomeAndEnd(!0).withPageUpDown(!0).withVerticalOrientation(!0);interval=Cc(Oa(this._defaultConfig?.interval||null),{transform:Oa});options=Cc(null);isOpen=this._isOpen.asReadonly();selected=Cz();opened=Cz();closed=Cz();activeDescendant=this._activeDescendant.asReadonly();panelId=g(ge).getId(`mat-timepicker-panel-`);disableRipple=Cc(this._defaultConfig?.disableRipple??!1,{transform:ji});ariaLabel=Cc(null,{alias:`aria-label`});ariaLabelledby=Cc(null,{alias:`aria-labelledby`});disabled=Dc(()=>!!this._input()?.disabled());panelClass=Cc();constructor(){g(Rt).nativeElement.setAttribute(`mat-timepicker-panel-id`,this.panelId),this._handleLocaleChanges(),this._handleInputStateChanges(),this._keyManager.change.subscribe(()=>this._activeDescendant.set(this._keyManager.activeItem?.id||null))}open(){let e=this._input();if(!e||(e.focus(),this._isOpen()))return;this._isOpen.set(!0),this._generateOptions();let t=this._getOverlayRef();t.updateSize({width:e.getOverlayOrigin().nativeElement.offsetWidth}),this._portal??=new te$2(this._panelTemplate(),this._viewContainerRef),t.hasAttached()||t.attach(this._portal),this._onOpenRender?.destroy(),this._onOpenRender=sf(()=>{let i=this._options();this._syncSelectedState(e.value(),i,i[0]),this._onOpenRender=null},{injector:this._injector}),this.opened.emit()}close(){this._isOpen()&&(this._isOpen.set(!1),this.closed.emit(),this._animationsDisabled&&this._overlayRef?.detach())}registerInput(e){this._input();this._input.set(e)}ngOnDestroy(){this._keyManager.destroy(),this._localeChanges?.unsubscribe(),this._onOpenRender?.destroy(),this._overlayRef?.dispose()}_getOverlayHost(){return this._overlayRef?.hostElement}_selectValue(e){this.close(),this._keyManager.setActiveItem(e),this._options().forEach(t=>{t!==e&&t.deselect(!1)}),this._input()?.timepickerValueAssigned(e.value),this.selected.emit({value:e.value,source:this}),this._input()?.focus()}_getAriaLabelledby(){return this.ariaLabel()?null:this.ariaLabelledby()||this._input()?.getLabelId()||null}_handleAnimationEnd(e){e.animationName===`_mat-timepicker-exit`&&this._overlayRef?.detach()}_getOverlayRef(){if(this._overlayRef)return this._overlayRef;let e=Tt(this._injector,this._input().getOverlayOrigin()).withFlexibleDimensions(!1).withPush(!1).withTransformOriginOn(`.mat-timepicker-panel`).withPopoverLocation(`inline`).withPositions([{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-timepicker-above`}]);return this._overlayRef=Be(this._injector,{positionStrategy:e,scrollStrategy:this._scrollStrategyFactory(),direction:this._dir||`ltr`,hasBackdrop:!1,disableAnimations:this._animationsDisabled,panelClass:this.panelClass()}),this._overlayRef.detachments().subscribe(()=>this.close()),this._overlayRef.keydownEvents().subscribe(t=>this._handleKeydown(t)),this._overlayRef.outsidePointerEvents().subscribe(t=>{let i=me(t),o=this._input()?.getOverlayOrigin().nativeElement;i&&o&&i!==o&&!o.contains(i)&&this.close()}),this._overlayRef}_generateOptions(){let e=this.interval()??1800,t=this.options();if(t!==null)this._timeOptions=t;else{let i=this._input(),o=this._dateAdapter,r=this._dateFormats.display.timeInput,l=i?.min()||o.setTime(o.today(),0,0,0),u=i?.max()||o.setTime(o.today(),23,59,0),f=e+`/`+o.format(l,r)+`/`+o.format(u,r);f!==this._optionsCacheKey&&(this._optionsCacheKey=f,this._timeOptions=Qa(o,this._dateFormats,l,u,e))}}_syncSelectedState(e,t,i){let o=!1;for(let r of t)e&&this._dateAdapter.sameTime(r.value,e)?(r.select(!1),qe(r,`center`),Q(()=>this._keyManager.setActiveItem(r)),o=!0):r.deselect(!1);o||(i?(Q(()=>this._keyManager.setActiveItem(i)),qe(i,`center`)):Q(()=>this._keyManager.setActiveItem(-1)))}_handleKeydown(e){let t=e.keyCode;if(t===9)this.close();else if(t===27&&!or(e))e.preventDefault(),this.close();else if(t===13)e.preventDefault(),this._keyManager.activeItem?this._selectValue(this._keyManager.activeItem):this.close();else{let i=this._keyManager.activeItem;this._keyManager.onKeydown(e);let o=this._keyManager.activeItem;o&&o!==i&&qe(o,`nearest`)}}_handleLocaleChanges(){this._localeChanges=this._dateAdapter.localeChanges.subscribe(()=>{this._optionsCacheKey=null,this.isOpen()&&this._generateOptions()})}_handleInputStateChanges(){Wl(()=>{let e=this._input(),t=this._options();this._isOpen()&&e&&this._syncSelectedState(e.value(),t,null)})}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`panelTemplate`],t=(r,l)=>l.value;function i(r,l){if(r&1){let u=QT();Ja$1(0,`mat-option`,3),yc(`onSelectionChange`,function(j){Tg(u);let Ie=t_(2);return _g(Ie._selectValue(j.source))}),N_(1),xf()}if(r&2){let u=l.$implicit;Lv(`value`,u.value),$b(),nD(u.label)}}function o(r,l){if(r&1){let u=QT();Ja$1(0,`div`,1),yc(`animationend`,function(j){Tg(u);let Ie=t_();return _g(Ie._handleAnimationEnd(j))}),$T(1,i,2,2,`mat-option`,2,t),xf()}if(r&2){let u=t_();Qv(`mat-timepicker-panel-animations-enabled`,!u._animationsDisabled)(`mat-timepicker-panel-exit`,!u.isOpen()),Lv(`id`,u.panelId),ki(`aria-label`,u.ariaLabel()||null)(`aria-labelledby`,u._getAriaLabelledby()),$b(),zT(u._timeOptions)}}return xi({type:n,selectors:[[`mat-timepicker`]],viewQuery:function(l,u){l&1&&qv(u._panelTemplate,e,5)(u._options,mt,5),l&2&&s_(2)},inputs:{interval:[1,`interval`],options:[1,`options`],disableRipple:[1,`disableRipple`],ariaLabel:[1,`aria-label`,`ariaLabel`],ariaLabelledby:[1,`aria-labelledby`,`ariaLabelledby`],panelClass:[1,`panelClass`]},outputs:{selected:`selected`,opened:`opened`,closed:`closed`},exportAs:[`matTimepicker`],features:[dD([{provide:ht,useExisting:n}])],decls:2,vars:0,consts:[[`panelTemplate`,``],[`role`,`listbox`,1,`mat-timepicker-panel`,3,`animationend`,`id`],[3,`value`],[3,`onSelectionChange`,`value`]],template:function(l,u){l&1&&xv(0,o,3,7,`ng-template`,null,0,Y_)},dependencies:[mt],styles:[`@keyframes _mat-timepicker-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-timepicker-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
mat-timepicker {
  display: none;
}

.mat-timepicker-panel {
  width: 100%;
  max-height: 256px;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-bottom-left-radius: var(--%NS%mat-timepicker-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-timepicker-container-shape, var(--%NS%mat-sys-corner-extra-small));
  box-shadow: var(--%NS%mat-timepicker-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--%NS%mat-timepicker-container-background-color, var(--%NS%mat-sys-surface-container));
}
@media (forced-colors: active) {
  .mat-timepicker-panel {
    outline: solid 1px;
  }
}
.mat-timepicker-above .mat-timepicker-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-timepicker-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-timepicker-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mat-timepicker-panel-animations-enabled {
  animation: _mat-timepicker-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-timepicker-panel-animations-enabled.mat-timepicker-panel-exit {
  animation: _mat-timepicker-exit 100ms linear;
}

.mat-timepicker-input[readonly] {
  cursor: pointer;
}

@media (forced-colors: active) {
  .mat-timepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2})})()}return n})();function qe(n,a){n._getHostElement().scrollIntoView({block:a,inline:a})}var La=(()=>{class n{_elementRef=g(Rt);_dateAdapter=g(v,{optional:!0});_dateFormats=g(B$1,{optional:!0});_formField=g(Er,{optional:!0});_onChange;_onTouched;_validatorOnChange;_cleanupClick;_accessorDisabled=te(!1);_localeSubscription;_timepickerSubscription;_validator;_lastValueValid=!0;_minValid=!0;_maxValid=!0;_lastValidDate=null;_ariaActiveDescendant=Dc(()=>{let e=this.timepicker(),t=e.isOpen(),i=e.activeDescendant();return t&&i?i:null});_ariaExpanded=Dc(()=>this.timepicker().isOpen()+``);_ariaControls=Dc(()=>{let e=this.timepicker();return e.isOpen()?e.panelId:null});value=bz(null);timepicker=Cc.required({alias:`matTimepicker`});min=Cc(null,{alias:`matTimepickerMin`,transform:e=>this._transformDateInput(e)});max=Cc(null,{alias:`matTimepickerMax`,transform:e=>this._transformDateInput(e)});openOnClick=Cc(!0,{alias:`matTimepickerOpenOnClick`,transform:ji});disabled=Dc(()=>this.disabledInput()||this._accessorDisabled());disabledInput=Cc(!1,{transform:ji,alias:`disabled`});constructor(){let e=g(_n$1);this._validator=this._getValidator(),this._updateFormsState(),this._registerTimepicker(),this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._hasFocus()||this._formatValue(this.value())}),this._cleanupClick=e.listen(this.getOverlayOrigin().nativeElement,`click`,this._handleClick)}writeValue(e){let t=this._dateAdapter.deserialize(e);this.value.set(this._dateAdapter.getValidDateOrNull(t))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._accessorDisabled.set(e)}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._validatorOnChange=e}getOverlayOrigin(){return this._formField?.getConnectedOverlayOrigin()||this._elementRef}focus(){this._elementRef.nativeElement.focus()}ngOnDestroy(){this._cleanupClick(),this._timepickerSubscription?.unsubscribe(),this._localeSubscription.unsubscribe()}getLabelId(){return this._formField?.getLabelId()||null}_handleClick=e=>{if(this.disabled()||!this.openOnClick())return;let t=me(e),i=this.timepicker()._getOverlayHost();(!t||!i||!i.contains(t))&&this.timepicker().open()};_handleInput(e){let t=e.target.value,i=this.value(),o=this._dateAdapter.parseTime(t,this._dateFormats.parse.timeInput),r=!this._dateAdapter.sameTime(o,i);!o||r||t&&!i?this._assignUserSelection(o,!0):this._validatorOnChange?.()}_handleBlur(){let e=this.value();e&&this._isValid(e)&&this._formatValue(e),this.timepicker().isOpen()||this._onTouched?.()}_handleKeydown(e){this.timepicker().isOpen()||this.disabled()||(e.keyCode===27&&!or(e)&&this.value()!==null?(e.preventDefault(),this.value.set(null),this._formatValue(null)):(e.keyCode===40||e.keyCode===38)&&(e.preventDefault(),this.timepicker().open()))}timepickerValueAssigned(e){this._dateAdapter.sameTime(e,this.value())||(this._assignUserSelection(e,!0),this._formatValue(e))}_updateFormsState(){Wl(()=>{let{_dateAdapter:e,_lastValueValid:t,_minValid:i,_maxValid:o}=this,r=e.deserialize(this.value()),l=this.min(),u=this.max(),f=this._lastValueValid=this._isValid(r);this._minValid=!l||!r||!f||e.compareTime(l,r)<=0,this._maxValid=!u||!r||!f||e.compareTime(u,r)>=0;let j=t!==f||i!==this._minValid||o!==this._maxValid;this._hasFocus()||this._formatValue(r),r&&f&&(this._lastValidDate=r),j&&this._validatorOnChange?.()})}_registerTimepicker(){Wl(()=>{let e=this.timepicker();e.registerInput(this),e.closed.subscribe(()=>this._onTouched?.())})}_assignUserSelection(e,t){let i;if(e==null||!this._isValid(e))i=e;else{let o=this._dateAdapter,r=o.getValidDateOrNull(this._lastValidDate||this.value()),l=o.getHours(e),u=o.getMinutes(e),f=o.getSeconds(e);i=r?o.setTime(r,l,u,f):e}t&&this._onChange?.(i),this.value.set(i)}_formatValue(e){e=this._dateAdapter.getValidDateOrNull(e),this._elementRef.nativeElement.value=e==null?``:this._dateAdapter.format(e,this._dateFormats.display.timeInput)}_isValid(e){return!e||this._dateAdapter.isValid(e)}_transformDateInput(e){let t=typeof e==`string`?this._dateAdapter.parseTime(e,this._dateFormats.parse.timeInput):this._dateAdapter.deserialize(e);return t&&this._dateAdapter.isValid(t)?t:null}_hasFocus(){return an$1()===this._elementRef.nativeElement}_getValidator(){return Bt.compose([()=>this._lastValueValid?null:{matTimepickerParse:{text:this._elementRef.nativeElement.value}},e=>this._minValid?null:{matTimepickerMin:{min:this.min(),actual:this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value))}},e=>this._maxValid?null:{matTimepickerMax:{max:this.max(),actual:this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value))}}])}static ɵfac=function(t){return new(t||n)};static ɵdir=Jt({type:n,selectors:[[`input`,`matTimepicker`,``]],hostAttrs:[`role`,`combobox`,`type`,`text`,`aria-haspopup`,`listbox`,1,`mat-timepicker-input`],hostVars:5,hostBindings:function(t,i){t&1&&yc(`blur`,function(){return i._handleBlur()})(`input`,function(r){return i._handleInput(r)})(`keydown`,function(r){return i._handleKeydown(r)}),t&2&&(Bv(`disabled`,i.disabled()),ki(`aria-activedescendant`,i._ariaActiveDescendant())(`aria-expanded`,i._ariaExpanded())(`aria-controls`,i._ariaControls())(`mat-timepicker-id`,i.timepicker()?.panelId))},inputs:{value:[1,`value`],timepicker:[1,`matTimepicker`,`timepicker`],min:[1,`matTimepickerMin`,`min`],max:[1,`matTimepickerMax`,`max`],openOnClick:[1,`matTimepickerOpenOnClick`,`openOnClick`],disabledInput:[1,`disabled`,`disabledInput`]},outputs:{value:`valueChange`},exportAs:[`matTimepickerInput`],features:[dD([{provide:fe,useExisting:n,multi:!0},{provide:J,useExisting:n,multi:!0},{provide:Qt,useExisting:n}])]})}return n})();var ze=(()=>{class n{_defaultConfig=g(Fa,{optional:!0});_defaultTabIndex=(()=>{let e=g(new Ic(`tabindex`),{optional:!0}),t=Number(e);return isNaN(t)?null:t})();_isDisabled=Dc(()=>{let e=this.timepicker();return this.disabled()||e.disabled()});timepicker=Cc.required({alias:`for`});ariaLabel=Cc(void 0,{alias:`aria-label`});ariaLabelledby=Cc(void 0,{alias:`aria-labelledby`});_defaultAriaLabel=`Open timepicker options`;disabled=Cc(!1,{transform:ji,alias:`disabled`});tabIndex=Cc(this._defaultTabIndex);disableRipple=Cc(this._defaultConfig?.disableRipple??!1,{transform:ji});_open(e){this.timepicker()&&!this._isDisabled()&&(this.timepicker().open(),e.stopPropagation())}getAriaLabel(){return this.ariaLabelledby()?null:this.ariaLabel()||this._defaultAriaLabel}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[[[``,`matTimepickerToggleIcon`,``]]],t=[`[matTimepickerToggleIcon]`];function i(o,r){o&1&&(jg(),Ja$1(0,`svg`,1),mc(1,`path`,2),xf())}return xi({type:n,selectors:[[`mat-timepicker-toggle`]],hostAttrs:[1,`mat-timepicker-toggle`],hostVars:1,hostBindings:function(r,l){r&1&&yc(`click`,function(f){return l._open(f)}),r&2&&ki(`tabindex`,null)},inputs:{timepicker:[1,`for`,`timepicker`],ariaLabel:[1,`aria-label`,`ariaLabel`],ariaLabelledby:[1,`aria-labelledby`,`ariaLabelledby`],disabled:[1,`disabled`],tabIndex:[1,`tabIndex`],disableRipple:[1,`disableRipple`]},exportAs:[`matTimepickerToggle`],ngContentSelectors:t,decls:3,vars:6,consts:[[`matIconButton`,``,`type`,`button`,`aria-haspopup`,`listbox`,3,`tabIndex`,`disabled`,`disableRipple`],[`height`,`24px`,`width`,`24px`,`viewBox`,`0 -960 960 960`,`fill`,`currentColor`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-timepicker-toggle-default-icon`],[`d`,`m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z`]],template:function(r,l){r&1&&(r_(e),Ja$1(0,`button`,0),o_(1,0,null,i,2,0),xf()),r&2&&(Lv(`tabIndex`,l._isDisabled()?-1:l.tabIndex())(`disabled`,l._isDisabled())(`disableRipple`,l.disableRipple()),ki(`aria-label`,l.getAriaLabel())(`aria-labelledby`,l.ariaLabelledby())(`aria-expanded`,l.timepicker().isOpen()))},dependencies:[cn$1],encapsulation:2})})()}return n})();var Ba=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=gr({type:n});static ɵinj=En({imports:[Ge,ze,Pe$1]})}return n})();var Xa=(n,a)=>a.valor;var Pa=(n,a)=>a.id;function en(n,a){if(n&1&&(Ja$1(0,`mat-option`,8),N_(1),xf()),n&2){let e=a.$implicit;Lv(`value`,e.valor),$b(),nD(e.etiqueta)}}function tn(n,a){if(n&1&&(Ja$1(0,`mat-option`,8),N_(1),xf()),n&2){let e=a.$implicit,t=t_();Lv(`value`,e.id),$b(),nD(t.nombreCompleto(e))}}function an(n,a){n&1&&(Ja$1(0,`mat-error`),N_(1,`Ingresá un título`),xf())}function nn(n,a){if(n&1&&(Ja$1(0,`p`,12),N_(1),xf()),n&2){let e=t_();$b(),Bf(`Expediente: `,e.mostrarExpediente(e.expedienteFijo))}}function on(n,a){if(n&1&&(Ja$1(0,`mat-option`,8),N_(1),xf()),n&2){let e=a.$implicit,t=t_(2);Lv(`value`,e),$b(),nD(t.mostrarExpediente(e))}}function rn(n,a){if(n&1){let e=QT();Ja$1(0,`mat-form-field`)(1,`mat-label`),N_(2,`Expediente (opcional)`),xf(),Ja$1(3,`input`,20),NS(),xf(),Ja$1(4,`mat-autocomplete`,21,1),yc(`optionSelected`,function(i){Tg(e);let o=t_();return _g(o.elegirExpediente(i))}),$T(6,on,2,2,`mat-option`,8,Pa),xf(),Ja$1(8,`mat-hint`),N_(9,`Buscá por número o carátula. Define el calendario de días inhábiles`),xf()()}if(n&2){let e=a_(5),t=t_();$b(3),Lv(`formControl`,t.busquedaExpediente)(`matAutocomplete`,e),AS(),$b(),Lv(`displayWith`,t.mostrarExpediente),$b(2),zT(t.sugerencias())}}function ln(n,a){n&1&&(Ja$1(0,`mat-error`),N_(1,`Entre 1 y 400 días`),xf())}function sn(n,a){n&1&&(Ja$1(0,`p`,24),N_(1),xf()),n&2&&($b(),nD(a))}function dn(n,a){n&1&&(Ja$1(0,`p`,15),N_(1,`Esas fechas están fuera del calendario sincronizado: cargá "Vence el" a mano.`),xf())}function cn(n,a){if(n&1&&(Ja$1(0,`div`,6)(1,`mat-form-field`)(2,`mat-label`),N_(3,`Fecha de notificación`),xf(),Ja$1(4,`input`,22),NS(),xf(),mc(5,`mat-datepicker-toggle`,14)(6,`mat-datepicker`,null,2),xf(),Ja$1(8,`mat-form-field`)(9,`mat-label`),N_(10,`Plazo (días hábiles)`),xf(),Ja$1(11,`input`,23),NS(),xf(),jT(12,ln,2,0,`mat-error`),xf()(),jT(13,sn,2,1,`p`,24),jT(14,dn,2,0,`p`,15)),n&2){let e,t=a_(7),i=t_();$b(4),Lv(`matDatepicker`,t),AS(),$b(),Lv(`for`,t),$b(6),AS(),$b(),BT(i.form.controls.plazo.invalid?12:-1),$b(),BT((e=i.notaCedula())?13:-1,e),$b(),BT(i.sinCalculo()?14:-1)}}function pn(n,a){n&1&&(Ja$1(0,`mat-hint`),N_(1,`Se calcula con la notificación y el plazo; se puede corregir`),xf())}function un(n,a){n&1&&(Ja$1(0,`mat-error`),N_(1,`Fecha inválida: usá dd/mm/aaaa`),xf())}function mn(n,a){n&1&&(Ja$1(0,`mat-error`),N_(1,`Ingresá la fecha`),xf())}function gn(n,a){n&1&&(Ja$1(0,`mat-error`),N_(1,`Ingresá la hora de la audiencia`),xf())}function bn(n,a){n&1&&(Ja$1(0,`mat-hint`),N_(1,`Sin hora, al final del día`),xf())}function hn(n,a){if(n&1&&(Ja$1(0,`mat-form-field`)(1,`mat-label`),N_(2),xf(),Ja$1(3,`input`,25),NS(),xf(),mc(4,`mat-timepicker-toggle`,14)(5,`mat-timepicker`,26,3),jT(7,gn,2,0,`mat-error`)(8,bn,2,0,`mat-hint`),xf()),n&2){let e=a_(6),t=t_();$b(2),nD(t.tipo()===`audiencia`?`Hora`:`Hora (opcional)`),$b(),Lv(`matTimepicker`,e),AS(),$b(),Lv(`for`,e),$b(3),BT(t.form.controls.hora.hasError(`required`)?7:t.tipo()===`tarea`?8:-1)}}function fn(n,a){n&1&&(Ja$1(0,`p`,15),N_(1),xf()),n&2&&($b(),nD(a))}function vn(n,a){n&1&&(Ja$1(0,`p`,15),N_(1),xf()),n&2&&($b(),nD(a))}var _n=3;var Ce=class n{datos=g($t);ref=g(w);dialog=g(tt);expedientesApi=g(p);equipoApi=g(o$1);calendarioApi=g(m);destroyRef=g(ve);fb=g(Va$1);auth=g(b);tipos=r$1;nombreCompleto=o;fechaPortal=A;titulo=this.datos.vencimiento?`Editar evento`:`Nuevo evento`;esAlta=!this.datos.vencimiento;expedienteFijo=this.datos.expediente??null;inicial=this.datos.vencimiento;partes=this.inicial?ee(this.inicial.fechaVencimiento):null;form=this.fb.group({tipo:[this.inicial?.tipo??this.datos.inicial?.tipo??`vencimiento`],titulo:[this.inicial?.titulo??this.datos.inicial?.titulo??``,[Bt.required,Bt.maxLength(300)]],fecha:[Nn$1(this.partes?.fecha??this.datos.inicial?.fecha),Bt.required],hora:[Fn(this.partes&&this.partes.hora!==Me?this.partes.hora:null)],responsableId:[this.inicial?.responsableId??(this.esAlta&&!this.expedienteFijo?this.auth.me()?.id??``:``)],descripcion:[this.inicial?.descripcion??this.datos.inicial?.descripcion??``,Bt.maxLength(4e3)],notificada:[null],plazo:[null,[Bt.min(1),Bt.max(400)]]});tipo=L(this.form.controls.tipo.valueChanges,{initialValue:this.form.controls.tipo.value});calculaPlazo=Dc(()=>this.esAlta&&this.tipo()===`vencimiento`);busquedaExpediente=new Pe(this.inicial?.expediente??``,{nonNullable:!0});expedienteElegido=te(this.expedienteFijo??this.inicial?.expediente??null);sugerencias=te([]);equipo=te([]);sede=Dc(()=>this.expedienteElegido()?.sede??`01001`);nombreSede=L(F(this.sede).pipe(Ae(a=>this.calendarioApi.sedes().pipe(B(e=>e[a]??a)))),{initialValue:``});calendario=L(F(this.sede).pipe(Ae(a=>this.calendarioApi.cercano(a))),{initialValue:null});fecha=L(this.form.controls.fecha.valueChanges.pipe(B(Tn)),{initialValue:Tn(this.form.controls.fecha.value)});notificada=L(this.form.controls.notificada.valueChanges.pipe(qs(this.form.controls.notificada.value),B(Tn)),{initialValue:``});plazo=L(this.form.controls.plazo.valueChanges,{initialValue:null});avisoFecha=Dc(()=>yn(this.fecha(),this.calendario(),this.nombreSede()));avisoPasado=Dc(()=>{let a=this.fecha();return this.esAlta&&a&&a<w$1()?`Esta fecha ya pasó: se va a cargar como vencido.`:null});notaCedula=te(null);sinCalculo=te(!1);constructor(){this.ref.disableClose=!0,$I(this.ref.keydownEvents().pipe(Ee(a=>a.key===`Escape`)),this.ref.backdropClick()).pipe(T(this.destroyRef)).subscribe(()=>this.intentarCerrar()),Wl(()=>{let a=this.datos.inicial?.cedula,e=this.calendario();if(!a||!e||this.form.controls.notificada.value)return;let t=e.sumarHabiles(a,_n);t&&(this.form.controls.notificada.setValue(Nn$1(t)),this.notaCedula.set(`C\xE9dula del ${A(a)}: notificada el ${A(t)} (3er d\xEDa h\xE1bil).`))}),Wl(()=>{let a=this.notificada(),e=this.plazo(),t=this.calendario();if(!this.calculaPlazo()||!a||!e||e<1||!t)return;let i=t.sumarHabiles(a,e);this.sinCalculo.set(!i),i&&this.form.controls.fecha.setValue(Nn$1(i))})}ngOnInit(){this.equipoApi.listar().subscribe({next:a=>this.equipo.set(a),error:()=>this.equipo.set([])}),!this.expedienteFijo&&this.busquedaExpediente.valueChanges.pipe(Ee(a=>typeof a==`string`),Ch(250),bh(),Ae(a=>(this.expedienteElegido.set(null),a.trim().length<2?k([]):this.expedientesApi.listar({q:a,size:10}).pipe(B(e=>e.contenido)))),T(this.destroyRef)).subscribe({next:a=>this.sugerencias.set(a.map(e=>({id:e.id,numeroExpediente:e.numeroExpediente,caratula:e.caratula,sede:e.sede}))),error:()=>this.sugerencias.set([])})}mostrarExpediente(a){return!a||typeof a==`string`?a??``:a.caratula?`${a.numeroExpediente} \xB7 ${a.caratula}`:a.numeroExpediente}elegirExpediente(a){this.expedienteElegido.set(a.option.value)}intentarCerrar(){if(!this.form.dirty){this.ref.close();return}_(this.dialog,{titulo:`Descartar los cambios`,mensaje:`Lo que cargaste en este evento se pierde.`,aceptar:`Descartar`}).pipe(Ee(Boolean)).subscribe(()=>this.ref.close())}aceptar(){let a=this.form.getRawValue(),e=a.tipo===`audiencia`&&!a.hora;if(this.form.invalid||e){e&&this.form.controls.hora.setErrors({required:!0}),this.form.markAllAsTouched();return}this.ref.close({vencimiento:{tipo:a.tipo,titulo:a.titulo.trim(),descripcion:a.descripcion.trim()||null,fechaVencimiento:Aa(Tn(a.fecha),a.tipo===`vencimiento`?null:Rn(a.hora)),expedienteId:this.expedienteElegido()?.id??null,responsableId:a.responsableId||null,estado:this.inicial?.estado}})}static ɵfac=function(e){return new(e||n)};static ɵcmp=xi({type:n,selectors:[[`app-vencimiento-dialog`]],features:[dD([En$1])],decls:50,vars:14,consts:[[`pickerFecha`,``],[`auto`,`matAutocomplete`],[`pickerNotificada`,``],[`pickerHora`,``],[`mat-dialog-title`,``],[`novalidate`,``,3,`ngSubmit`,`formGroup`],[1,`fila-2`],[`formControlName`,`tipo`],[3,`value`],[`formControlName`,`responsableId`],[`value`,``],[`matInput`,``,`formControlName`,`titulo`,`required`,``,3,`placeholder`],[1,`fijo`],[`matInput`,``,`formControlName`,`fecha`,`required`,``,`placeholder`,`dd/mm/aaaa`,3,`matDatepicker`],[`matIconSuffix`,``,3,`for`],[`role`,`status`,1,`aviso`],[`matInput`,``,`formControlName`,`descripcion`,`rows`,`2`],[`align`,`end`],[`mat-button`,``,`type`,`button`,3,`click`],[`mat-flat-button`,``,`type`,`submit`],[`matInput`,``,3,`formControl`,`matAutocomplete`],[3,`optionSelected`,`displayWith`],[`matInput`,``,`formControlName`,`notificada`,`placeholder`,`dd/mm/aaaa`,3,`matDatepicker`],[`matInput`,``,`type`,`number`,`min`,`1`,`max`,`400`,`formControlName`,`plazo`],[1,`nota`],[`matInput`,``,`formControlName`,`hora`,`placeholder`,`hh:mm`,3,`matTimepicker`],[`interval`,`15min`]],template:function(e,t){if(e&1&&(Ja$1(0,`h2`,4),N_(1),xf(),Ja$1(2,`form`,5),yc(`ngSubmit`,function(){return t.aceptar()}),Ja$1(3,`mat-dialog-content`)(4,`div`,6)(5,`mat-form-field`)(6,`mat-label`),N_(7,`Tipo`),xf(),Ja$1(8,`mat-select`,7),NS(),$T(9,en,2,2,`mat-option`,8,Xa),xf()(),Ja$1(11,`mat-form-field`)(12,`mat-label`),N_(13,`Responsable`),xf(),Ja$1(14,`mat-select`,9),NS(),Ja$1(15,`mat-option`,10),N_(16,`Sin responsable`),xf(),$T(17,tn,2,2,`mat-option`,8,Pa),xf()()(),Ja$1(19,`mat-form-field`)(20,`mat-label`),N_(21,`Título`),xf(),Ja$1(22,`input`,11),NS(),xf(),jT(23,an,2,0,`mat-error`),xf(),jT(24,nn,2,1,`p`,12)(25,rn,10,3,`mat-form-field`),jT(26,cn,15,5),Ja$1(27,`div`,6)(28,`mat-form-field`)(29,`mat-label`),N_(30),xf(),Ja$1(31,`input`,13),NS(),xf(),mc(32,`mat-datepicker-toggle`,14)(33,`mat-datepicker`,null,0),jT(35,pn,2,0,`mat-hint`),jT(36,un,2,0,`mat-error`)(37,mn,2,0,`mat-error`),xf(),jT(38,hn,9,4,`mat-form-field`),xf(),jT(39,fn,2,1,`p`,15),jT(40,vn,2,1,`p`,15),Ja$1(41,`mat-form-field`)(42,`mat-label`),N_(43,`Descripción (opcional)`),xf(),Ja$1(44,`textarea`,16),NS(),xf()()(),Ja$1(45,`mat-dialog-actions`,17)(46,`button`,18),yc(`click`,function(){return t.intentarCerrar()}),N_(47,`Cancelar`),xf(),Ja$1(48,`button`,19),N_(49,`Guardar`),xf()()()),e&2){let i,o,r=a_(34);$b(),nD(t.titulo),$b(),Lv(`formGroup`,t.form),$b(6),AS(),$b(),zT(t.tipos),$b(5),AS(),$b(3),zT(t.equipo()),$b(5),Lv(`placeholder`,t.tipo()===`audiencia`?`Audiencia preliminar...`:t.tipo()===`tarea`?`Llamar al cliente...`:`Contestar traslado...`),AS(),$b(),BT(t.form.controls.titulo.hasError(`required`)?23:-1),$b(),BT(t.expedienteFijo?24:25),$b(2),BT(t.calculaPlazo()?26:-1),$b(4),nD(t.tipo()===`vencimiento`?`Vence el`:`Fecha`),$b(),Lv(`matDatepicker`,r),AS(),$b(),Lv(`for`,r),$b(3),BT(t.calculaPlazo()?35:-1),$b(),BT(t.form.controls.fecha.hasError(`matDatepickerParse`)?36:t.form.controls.fecha.hasError(`required`)?37:-1),$b(2),BT(t.tipo()!==`vencimiento`?38:-1),$b(),BT((i=t.avisoPasado())?39:-1,i),$b(),BT((o=t.avisoFecha())?40:-1,o),$b(4),AS()}},dependencies:[La$1,Ta,ui,Eo,Da,Fa$1,Di,io,to,wo$1,Co,Fo,Ve$1,Be$1,ze$3,je,Cc$1,wr,vn$1,yn$1,aa,la,He,Le,Dr,Er$1,mt,vt,gt,je$1,ne,te$1,Dn,vn$2,ua,Sa,Ba,Ge,La,ze],styles:[`form[_ngcontent-%COMP%]{min-width:min(560px,80vw)}mat-dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-top:8px;max-height:calc(100dvh - 140px)}.fila-2[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:0 16px}.aviso[_ngcontent-%COMP%]{margin:-4px 0 12px;font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-error)}.nota[_ngcontent-%COMP%]{margin:0 0 12px;font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant)}.fijo[_ngcontent-%COMP%]{margin:0 0 12px;font:var(--%NS%mat-sys-body-medium);color:var(--%NS%mat-sys-on-surface-variant)}`]})};function yn(n,a,e=`Córdoba`){if(!n)return null;let t=A(n),i=a?.del(n)??[];return i.length?`El ${t} es inh\xE1bil en ${e||`la sede`}: ${i.map(o=>o.descripcion).join(` · `)}`:c.finDeSemana(n)?`El ${t} es ${new Date(n+`T12:00`).getDay()===0?`domingo`:`sábado`}.`:null}var qa=class n{api=g(Se);dialog=g(tt);notificaciones=g(Xn$1);crear(a,e){return this.abrir({expediente:a,inicial:e}).pipe(Ae(t=>this.api.crear(t.vencimiento)),ze$1(()=>this.notificaciones.ok(`Agendado`)),Bn(t=>this.fallo(t)))}agendar(a,e=a.expediente){let t=`leidaPortal`in a,i=t?`Cédula`:`Movimiento`,o=[a.fecha?`${i} del ${A(a.fecha)}`:i];return t&&!e&&a.numeroExpediente&&o.push(`Expte. ${a.numeroExpediente} (no est\xE1 cargado en el sistema)`),this.crear(e??void 0,{titulo:(a.tipoOperacion||i).slice(0,300),descripcion:o.join(` · `),cedula:t&&a.fecha?a.fecha:void 0})}agendarActuacion(a,e){return this.crear(e,{titulo:a.titulo.slice(0,300),descripcion:`${d(a.tipo)} del ${A(a.fecha)}`})}editar(a){return this.abrir({vencimiento:a}).pipe(Ae(e=>this.api.modificar(a.id,e.vencimiento)),ze$1(()=>this.notificaciones.ok(`Cambios guardados`)),Bn(e=>this.fallo(e)))}cambiarEstado(a,e){return this.api.cambiarEstado(a.id,e).pipe(Bn(t=>this.fallo(t)))}eliminar(a){return _(this.dialog,{titulo:`Eliminar de la agenda`,mensaje:`Se borra definitivamente. Si ya no corre pero querés dejar constancia, usá "Cancelar".`,aceptar:`Eliminar`,destructivo:!0}).pipe(Ee(Boolean),Ae(()=>this.api.eliminar(a.id)),B(()=>{}),ze$1(()=>this.notificaciones.ok(`Eliminado de la agenda`)),Bn(e=>this.fallo(e)))}abrir(a){return this.dialog.open(Ce,{data:a}).afterClosed().pipe(Ee(e=>!!e))}fallo(a){return this.notificaciones.error(a),pe}static ɵfac=function(e){return new(e||n)};static ɵprov=P({token:n,factory:n.ɵfac,providedIn:`root`})};function xn(n){return n.expediente?.sede??`01001`}function Vo(n,a,e=w$1()){let t=ee(n.fechaVencimiento).fecha,i=a?.contarHabiles(e,t)??null;if(i!==null)return{dias:i,habiles:!0};let o=r=>{let[l,u,f]=r.split(`-`).map(Number);return Date.UTC(l,u-1,f)};return{dias:Math.round((o(t)-o(e))/864e5),habiles:!1}}function wo(n){return`En ${n.dias} ${n.dias===1?`día`:`días`}${n.habiles?` hábil`+(n.dias===1?``:`es`):``}`}function Ao(n){let a=g(m),e=Dc(()=>[...new Set(n().map(xn))].sort().join(`,`));return L(F(e).pipe(Ae(t=>t?HI(t.split(`,`).map(i=>a.cercano(i).pipe(B(o=>[i,o])))).pipe(B(i=>new Map(i))):k(new Map))),{initialValue:new Map})}export{Se as a,Xn as c,qa as d,wa as f,zn as g,yn as h,Qn as i,Zn as l,xn as m,Jn as n,Ua as o,wo as p,Ka as r,Vo as s,Ao as t,ee as u};