import{t as r}from"./chunk-zSsmmLLa.js";import{$r as uO,Ai as ze$1,An as dm,Ar as pq,Bn as fe,Bt as Tm,Ci as yr,Cn as cO,Cr as oO,D as Fc,Dr as ot,Ei as z,Er as oo,F as He,Hn as fn$1,Hr as so,Ht as UR,I as I9,In as er,Jt as VR,Kn as gq,Ln as et,M as G,Mi as zm,Mr as qC,N as H,Ni as zs,Nn as ee$1,Nr as qO,O as Fe,On as dC,Or as p,Q as Ky,Qt as WE,S as DN,St as Pe,T as Et,Ti as yu,Tr as oi,Tt as Pt,Un as fw,Ut as Um,V as It,Vn as fi,Vt as UC,Wr as sv,Wt as Un,X as Ke,Xr as tt,Yn as hO,Yr as tr,Yt as Vc,Zr as tw,_ as Bn,_i as x9,_r as mq,_t as Oe,a as $e,ai as v,ar as js,b as Cp,c as $s,ci as ve,cn as Yy,cr as kc,ct as MC,d as Ac,di as vu,dt as Me$1,ei as uT,er as it,f as Ae,fr as kt,ft as Mp,gr as mi,gt as Oc,hi as wt,hn as ae,ht as O9,jn as dw,jt as S9,l as A9,lr as ke$1,lt as MN,m as Ar,mi as wp,mn as aa,n as b,nt as Le,o as $m,or as k,qn as gr,qr as tl,r as $,ri as ui,rt as Lm,sn as YO,sr as kE,ti as ua,tn as Wn,un as _N,v as Bs,vi as xY,vr as mr,vt as P,wn as cT,wr as oe,x as Ct,xt as Pc,y as Ce$1}from"./main-LLFQZMTI.js";import{a as m,i as f,o as w,r as c}from"./chunk-CTZ4sjfI.js";import{a as Mn,c as Yt,d as ne,i as Le$1,l as cn$1,n as He$1,o as Qt,p as te,t as Gt}from"./chunk-PrwpuhyS.js";import{B as ze$2,D as je,F as ve$1,I as vt,M as qi,R as ye,b as ce,g as Yr,m as Xr,n as Be,t as $i,y as bt}from"./chunk-nmx8ashN.js";import{a as Nn,c as Tn,d as vn$1,i as Fn,l as ua$1,n as Dn,o as Rn,r as En,s as Sa,t as B,u as v$1}from"./chunk-49JqAJF6.js";import{t as o}from"./chunk-BAaMZhIO.js";import{i as T,n as F,r as L,t as A$1}from"./chunk-C5keF_CI.js";import{t as p$1}from"./chunk-BDl7DOdf.js";import{a as r$1,i as o$1}from"./chunk-3LTGUPcD.js";import{n as d}from"./chunk-B421jAYT.js";import{a as je$1,c as ze$3,i as Ve,n as Be$1,o as tt$1,s as w$1,t as $t}from"./chunk-BZ43YU1H.js";import{t as _}from"./chunk-DwtH9WjB.js";import{n as je$2,r as vt$1,t as gt}from"./chunk-B9T8qC4J.js";var Na=new v(`MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS`,{providedIn:`root`,factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})});var Va=new v(`MatButtonToggleGroup`);var Ha={provide:ui,useExisting:Ae(()=>Ua),multi:!0};var ke=class{source;value;constructor(a,e){this.source=a,this.value=e}};var Ua=(()=>{class n{_changeDetector=p(wt);_dir=p(Um,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=p(mi).getId(`mat-button-toggle-group-`);vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new ee$1;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}change=new ee$1;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=p(Na,{optional:!0});this.appearance=e&&e.appearance?e.appearance:`standard`,this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new je(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||UC(e))return;let i=e.target.id,o=this._buttonToggles.toArray().findIndex(l=>l.buttonId===i),r=null;switch(e.keyCode){case 32:case 13:r=this._buttonToggles.get(o)||null;break;case 38:r=this._getNextButton(o,-1);break;case 37:r=this._getNextButton(o,this.dir===`ltr`?-1:1);break;case 40:r=this._getNextButton(o,1);break;case 39:r=this._getNextButton(o,this.dir===`ltr`?1:-1);break;default:return}r&&(e.preventDefault(),r._onButtonClick(),r.focus())}_emitChangeEvent(e){let t=new ke(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,i=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,i)):this._updateModelValue(e,i)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>`u`?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let i=this._buttonToggles;for(let o=1;o<=i.length;o++){let r=(e+t*o+i.length)%i.length,l=i.get(r);if(l&&!l.disabled)return l}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(this._clearSelection(),e.forEach(i=>this._selectValue(i,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(i=>i.tabIndex===-1)){for(let i of t)if(!i.disabled){i.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let i of t)if(i.value===e){i.checked=!0,this._selectionModel.select(i),this.multiple||(i.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static ɵfac=function(t){return new(t||n)};static ɵdir=k({type:n,selectors:[[`mat-button-toggle-group`]],contentQueries:function(t,i,o){if(t&1&&so(o,wa,5),t&2){let r;Pe(r=Le())&&(i._buttonToggles=r)}},hostAttrs:[1,`mat-button-toggle-group`],hostVars:6,hostBindings:function(t,i){t&1&&Ct(`keydown`,function(r){return i._keydown(r)}),t&2&&(Et(`role`,i.multiple?`group`:`radiogroup`)(`aria-disabled`,i.disabled),Pt(`mat-button-toggle-vertical`,i.vertical)(`mat-button-toggle-group-appearance-standard`,i.appearance===`standard`))},inputs:{appearance:`appearance`,name:`name`,vertical:[2,`vertical`,`vertical`,It],value:`value`,multiple:[2,`multiple`,`multiple`,It],disabled:[2,`disabled`,`disabled`,It],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,It],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,It],hideMultipleSelectionIndicator:[2,`hideMultipleSelectionIndicator`,`hideMultipleSelectionIndicator`,It]},outputs:{valueChange:`valueChange`,change:`change`},exportAs:[`matButtonToggleGroup`],features:[Ce$1([Ha,{provide:Va,useExisting:n}])]})}return n})();var wa=(()=>{class n{_changeDetectorRef=p(wt);_elementRef=p(oe);_focusMonitor=p(MC);_idGenerator=p(mi);_animationDisabled=tw();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new ee$1;constructor(){p(ua).load(Gt);let e=p(Va,{optional:!0}),t=p(new Vc(`tabindex`),{optional:!0})||``,i=p(Na,{optional:!0});this._tabIndex=G(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=i&&i.appearance?i.appearance:`standard`,this._disabledInteractive=i?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId(`mat-button-toggle-`),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add(`mat-button-toggle-animations-enabled`),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(i=>i.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new ke(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`button`],t=[`*`];function i(o,r){if(o&1&&(ke$1(0,`div`,2),Bn(1,`mat-pseudo-checkbox`,6),ze$1()),o&2){let l=Un();He(),yr(`disabled`,l.disabled)}}return gr({type:n,selectors:[[`mat-button-toggle`]],viewQuery:function(r,l){if(r&1&&Bs(e,5),r&2){let u;Pe(u=Le())&&(l._buttonElement=u.first)}},hostAttrs:[`role`,`presentation`,1,`mat-button-toggle`],hostVars:14,hostBindings:function(r,l){r&1&&Ct(`focus`,function(){return l.focus()}),r&2&&(Et(`aria-label`,null)(`aria-labelledby`,null)(`id`,l.id)(`name`,null),Pt(`mat-button-toggle-standalone`,!l.buttonToggleGroup)(`mat-button-toggle-checked`,l.checked)(`mat-button-toggle-disabled`,l.disabled)(`mat-button-toggle-disabled-interactive`,l.disabledInteractive)(`mat-button-toggle-appearance-standard`,l.appearance===`standard`))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],id:`id`,name:`name`,value:`value`,tabIndex:`tabIndex`,disableRipple:[2,`disableRipple`,`disableRipple`,It],appearance:`appearance`,checked:[2,`checked`,`checked`,It],disabled:[2,`disabled`,`disabled`,It],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,It]},outputs:{change:`change`},exportAs:[`matButtonToggle`],ngContentSelectors:t,decls:7,vars:13,consts:[[`button`,``],[`type`,`button`,1,`mat-button-toggle-button`,`mat-focus-indicator`,3,`click`,`id`,`disabled`],[1,`mat-button-toggle-checkbox-wrapper`],[1,`mat-button-toggle-label-content`],[1,`mat-button-toggle-focus-overlay`],[`matRipple`,``,1,`mat-button-toggle-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,3,`disabled`]],template:function(r,l){if(r&1&&(Ac(),ke$1(0,`button`,1,0),Ct(`click`,function(){return l._onButtonClick()}),it(2,i,2,1,`div`,2),ke$1(3,`span`,3),kt(4),ze$1()(),Bn(5,`span`,4)(6,`span`,5)),r&2){let u=kc(1);yr(`id`,l.buttonId)(`disabled`,l.disabled&&!l.disabledInteractive||null),Et(`role`,l.isSingleSelector()?`radio`:`button`)(`tabindex`,l.disabled&&!l.disabledInteractive?-1:l.tabIndex)(`aria-pressed`,l.isSingleSelector()?null:l.checked)(`aria-checked`,l.isSingleSelector()?l.checked:null)(`name`,l._getButtonName())(`aria-label`,l.ariaLabel)(`aria-labelledby`,l.ariaLabelledby)(`aria-disabled`,l.disabled&&l.disabledInteractive?`true`:null),He(2),ot(l.buttonToggleGroup&&(!l.buttonToggleGroup.multiple&&!l.buttonToggleGroup.hideSingleSelectionIndicator||l.buttonToggleGroup.multiple&&!l.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),He(4),yr(`matRippleTrigger`,u)(`matRippleDisabled`,l.disableRipple||l.disabled)}},dependencies:[Mn,$i],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2})})()}return n})();var zn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=$e({type:n});static ɵinj=Fe({imports:[Yt,wa,qC]})}return n})();var Se=class n{http=p(kE);base=`/api/v1/vencimientos`;listar(a){return this.http.get(this.base,{params:A$1(r({},a))})}crear(a){return this.http.post(this.base,a)}modificar(a,e){return this.http.put(`${this.base}/${a}`,e)}cambiarEstado(a,e){return this.http.put(`${this.base}/${a}/estado`,{estado:e})}eliminar(a){return this.http.delete(`${this.base}/${a}`)}static ɵfac=function(e){return new(e||n)};static ɵprov=H({token:n,factory:n.ɵfac,providedIn:`root`})};var Me=`23:59`;function Aa(n,a){let[e,t,i]=n.split(`-`).map(Number),[o,r]=(a||Me).split(`:`).map(Number);return new Date(e,t-1,i,o,r).toISOString()}function ee(n){let a=new Date(n),e=t=>String(t).padStart(2,`0`);return{fecha:`${a.getFullYear()}-${e(a.getMonth()+1)}-${e(a.getDate())}`,hora:`${e(a.getHours())}:${e(a.getMinutes())}`}}function Qn(n){return ee(n).hora!==Me}function Ka(n,a=new Date){return n.estado===`pendiente`&&new Date(n.fechaVencimiento).getTime()<a.getTime()}function Jn(n,a=new Date){if(n.estado!==`pendiente`||Ka(n,a))return null;let e=new Date(n.fechaVencimiento),t=o=>new Date(o.getFullYear(),o.getMonth(),o.getDate()).getTime(),i=new Date(a.getFullYear(),a.getMonth(),a.getDate()+1);return t(e)===t(a)?`hoy`:t(e)===t(i)?`manana`:null}function A(n){return n.split(`-`).reverse().join(`/`)}var Zn=[{valor:`pendientes`,etiqueta:`Pendientes`},{valor:`vencidos`,etiqueta:`Vencidos`},{valor:`semana`,etiqueta:`Próximos 7 días`},{valor:`cumplidos`,etiqueta:`Cumplidos`}];function Xn(n,a=new Date){switch(n){case`pendientes`:return{estado:`pendiente`};case`vencidos`:return{estado:`pendiente`,hasta:a.toISOString()};case`semana`:{let e=new Date(a.getFullYear(),a.getMonth(),a.getDate()),t=new Date(e.getFullYear(),e.getMonth(),e.getDate()+8);return{estado:`pendiente`,desde:e.toISOString(),hasta:t.toISOString()}}case`cumplidos`:return{estado:`cumplido`};case`todos`:return{}}}var Wa=/^(\d*\.?\d+)\s*(h|hour|hours|m|min|minute|minutes|s|second|seconds)?$/i;var Fa=new v(`MAT_TIMEPICKER_CONFIG`);function Oa(n){let a;if(n===null)return null;if(typeof n==`number`)a=n;else{if(n.trim().length===0)return null;let e=n.match(Wa),t=e?parseFloat(e[1]):null,i=e?.[2]?.toLowerCase()||null;if(!e||t===null||isNaN(t))return null;i===`h`||i===`hour`||i===`hours`?a=t*3600:i===`m`||i===`min`||i===`minute`||i===`minutes`?a=t*60:a=t}return a}function Qa(n,a,e,t,i){i=Math.max(i,1);let o=[],r=n.compareTime(e,t)<1?e:t;for(;n.sameDate(r,e)&&n.compareTime(r,t)<1&&n.isValid(r);)o.push({value:r,label:n.format(r,a.display.timeOptionLabel)}),r=n.addSeconds(r,i);return o}var Ja=new v(`MAT_TIMEPICKER_SCROLL_STRATEGY`,{providedIn:`root`,factory:()=>{let n=p(ae);return()=>ve$1(n)}});var Ge=(()=>{class n{_dir=p(Um,{optional:!0});_viewContainerRef=p(mr);_injector=p(ae);_defaultConfig=p(Fa,{optional:!0});_dateAdapter=p(v$1,{optional:!0});_dateFormats=p(B,{optional:!0});_scrollStrategyFactory=p(Ja);_animationsDisabled=tw();_isOpen=G(!1);_activeDescendant=G(null);_input=G(null);_overlayRef=null;_portal=null;_optionsCacheKey=null;_localeChanges;_onOpenRender=null;_panelTemplate=zs.required(`panelTemplate`);_timeOptions=[];_options=gq(bt);_keyManager=new Lm(this._options,this._injector).withHomeAndEnd(!0).withPageUpDown(!0).withVerticalOrientation(!0);interval=$s(Oa(this._defaultConfig?.interval||null),{transform:Oa});options=$s(null);isOpen=this._isOpen.asReadonly();selected=pq();opened=pq();closed=pq();activeDescendant=this._activeDescendant.asReadonly();panelId=p(mi).getId(`mat-timepicker-panel-`);disableRipple=$s(this._defaultConfig?.disableRipple??!1,{transform:It});ariaLabel=$s(null,{alias:`aria-label`});ariaLabelledby=$s(null,{alias:`aria-labelledby`});disabled=Ke(()=>!!this._input()?.disabled());panelClass=$s();constructor(){p(oe).nativeElement.setAttribute(`mat-timepicker-panel-id`,this.panelId),this._handleLocaleChanges(),this._handleInputStateChanges(),this._keyManager.change.subscribe(()=>this._activeDescendant.set(this._keyManager.activeItem?.id||null))}open(){let e=this._input();if(!e||(e.focus(),this._isOpen()))return;this._isOpen.set(!0),this._generateOptions();let t=this._getOverlayRef();t.updateSize({width:e.getOverlayOrigin().nativeElement.offsetWidth}),this._portal??=new ce(this._panelTemplate(),this._viewContainerRef),t.hasAttached()||t.attach(this._portal),this._onOpenRender?.destroy(),this._onOpenRender=oi(()=>{let i=this._options();this._syncSelectedState(e.value(),i,i[0]),this._onOpenRender=null},{injector:this._injector}),this.opened.emit()}close(){this._isOpen()&&(this._isOpen.set(!1),this.closed.emit(),this._animationsDisabled&&this._overlayRef?.detach())}registerInput(e){this._input();this._input.set(e)}ngOnDestroy(){this._keyManager.destroy(),this._localeChanges?.unsubscribe(),this._onOpenRender?.destroy(),this._overlayRef?.dispose()}_getOverlayHost(){return this._overlayRef?.hostElement}_selectValue(e){this.close(),this._keyManager.setActiveItem(e),this._options().forEach(t=>{t!==e&&t.deselect(!1)}),this._input()?.timepickerValueAssigned(e.value),this.selected.emit({value:e.value,source:this}),this._input()?.focus()}_getAriaLabelledby(){return this.ariaLabel()?null:this.ariaLabelledby()||this._input()?.getLabelId()||null}_handleAnimationEnd(e){e.animationName===`_mat-timepicker-exit`&&this._overlayRef?.detach()}_getOverlayRef(){if(this._overlayRef)return this._overlayRef;let e=ze$2(this._injector,this._input().getOverlayOrigin()).withFlexibleDimensions(!1).withPush(!1).withTransformOriginOn(`.mat-timepicker-panel`).withPopoverLocation(`inline`).withPositions([{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-timepicker-above`}]);return this._overlayRef=ye(this._injector,{positionStrategy:e,scrollStrategy:this._scrollStrategyFactory(),direction:this._dir||`ltr`,hasBackdrop:!1,disableAnimations:this._animationsDisabled,panelClass:this.panelClass()}),this._overlayRef.detachments().subscribe(()=>this.close()),this._overlayRef.keydownEvents().subscribe(t=>this._handleKeydown(t)),this._overlayRef.outsidePointerEvents().subscribe(t=>{let i=fi(t),o=this._input()?.getOverlayOrigin().nativeElement;i&&o&&i!==o&&!o.contains(i)&&this.close()}),this._overlayRef}_generateOptions(){let e=this.interval()??1800,t=this.options();if(t!==null)this._timeOptions=t;else{let i=this._input(),o=this._dateAdapter,r=this._dateFormats.display.timeInput,l=i?.min()||o.setTime(o.today(),0,0,0),u=i?.max()||o.setTime(o.today(),23,59,0),f=e+`/`+o.format(l,r)+`/`+o.format(u,r);f!==this._optionsCacheKey&&(this._optionsCacheKey=f,this._timeOptions=Qa(o,this._dateFormats,l,u,e))}}_syncSelectedState(e,t,i){let o=!1;for(let r of t)e&&this._dateAdapter.sameTime(r.value,e)?(r.select(!1),qe(r,`center`),z(()=>this._keyManager.setActiveItem(r)),o=!0):r.deselect(!1);o||(i?(z(()=>this._keyManager.setActiveItem(i)),qe(i,`center`)):z(()=>this._keyManager.setActiveItem(-1)))}_handleKeydown(e){let t=e.keyCode;if(t===9)this.close();else if(t===27&&!UC(e))e.preventDefault(),this.close();else if(t===13)e.preventDefault(),this._keyManager.activeItem?this._selectValue(this._keyManager.activeItem):this.close();else{let i=this._keyManager.activeItem;this._keyManager.onKeydown(e);let o=this._keyManager.activeItem;o&&o!==i&&qe(o,`nearest`)}}_handleLocaleChanges(){this._localeChanges=this._dateAdapter.localeChanges.subscribe(()=>{this._optionsCacheKey=null,this.isOpen()&&this._generateOptions()})}_handleInputStateChanges(){fn$1(()=>{let e=this._input(),t=this._options();this._isOpen()&&e&&this._syncSelectedState(e.value(),t,null)})}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`panelTemplate`],t=(r,l)=>l.value;function i(r,l){if(r&1){let u=MN();ke$1(0,`mat-option`,3),Ct(`onSelectionChange`,function(j){Ky(u);let Ie=Un(2);return Yy(Ie._selectValue(j.source))}),Cp(1),ze$1()}if(r&2){let u=l.$implicit;yr(`value`,u.value),He(),Pc(u.label)}}function o(r,l){if(r&1){let u=MN();ke$1(0,`div`,1),Ct(`animationend`,function(j){Ky(u);let Ie=Un();return Yy(Ie._handleAnimationEnd(j))}),_N(1,i,2,2,`mat-option`,2,t),ze$1()}if(r&2){let u=Un();Pt(`mat-timepicker-panel-animations-enabled`,!u._animationsDisabled)(`mat-timepicker-panel-exit`,!u.isOpen()),yr(`id`,u.panelId),Et(`aria-label`,u.ariaLabel()||null)(`aria-labelledby`,u._getAriaLabelledby()),He(),DN(u._timeOptions)}}return gr({type:n,selectors:[[`mat-timepicker`]],viewQuery:function(l,u){l&1&&Oc(u._panelTemplate,e,5)(u._options,bt,5),l&2&&Fc(2)},inputs:{interval:[1,`interval`],options:[1,`options`],disableRipple:[1,`disableRipple`],ariaLabel:[1,`aria-label`,`ariaLabel`],ariaLabelledby:[1,`aria-labelledby`,`ariaLabelledby`],panelClass:[1,`panelClass`]},outputs:{selected:`selected`,opened:`opened`,closed:`closed`},exportAs:[`matTimepicker`],features:[Ce$1([{provide:vt,useExisting:n}])],decls:2,vars:0,consts:[[`panelTemplate`,``],[`role`,`listbox`,1,`mat-timepicker-panel`,3,`animationend`,`id`],[3,`value`],[3,`onSelectionChange`,`value`]],template:function(l,u){l&1&&oo(0,o,3,7,`ng-template`,null,0,Mp)},dependencies:[bt],styles:[`@keyframes _mat-timepicker-enter {
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
`],encapsulation:2})})()}return n})();function qe(n,a){n._getHostElement().scrollIntoView({block:a,inline:a})}var La=(()=>{class n{_elementRef=p(oe);_dateAdapter=p(v$1,{optional:!0});_dateFormats=p(B,{optional:!0});_formField=p(dw,{optional:!0});_onChange;_onTouched;_validatorOnChange;_cleanupClick;_accessorDisabled=G(!1);_localeSubscription;_timepickerSubscription;_validator;_lastValueValid=!0;_minValid=!0;_maxValid=!0;_lastValidDate=null;_ariaActiveDescendant=Ke(()=>{let e=this.timepicker(),t=e.isOpen(),i=e.activeDescendant();return t&&i?i:null});_ariaExpanded=Ke(()=>this.timepicker().isOpen()+``);_ariaControls=Ke(()=>{let e=this.timepicker();return e.isOpen()?e.panelId:null});value=mq(null);timepicker=$s.required({alias:`matTimepicker`});min=$s(null,{alias:`matTimepickerMin`,transform:e=>this._transformDateInput(e)});max=$s(null,{alias:`matTimepickerMax`,transform:e=>this._transformDateInput(e)});openOnClick=$s(!0,{alias:`matTimepickerOpenOnClick`,transform:It});disabled=Ke(()=>this.disabledInput()||this._accessorDisabled());disabledInput=$s(!1,{transform:It,alias:`disabled`});constructor(){let e=p(Oe);this._validator=this._getValidator(),this._updateFormsState(),this._registerTimepicker(),this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._hasFocus()||this._formatValue(this.value())}),this._cleanupClick=e.listen(this.getOverlayOrigin().nativeElement,`click`,this._handleClick)}writeValue(e){let t=this._dateAdapter.deserialize(e);this.value.set(this._dateAdapter.getValidDateOrNull(t))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._accessorDisabled.set(e)}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._validatorOnChange=e}getOverlayOrigin(){return this._formField?.getConnectedOverlayOrigin()||this._elementRef}focus(){this._elementRef.nativeElement.focus()}ngOnDestroy(){this._cleanupClick(),this._timepickerSubscription?.unsubscribe(),this._localeSubscription.unsubscribe()}getLabelId(){return this._formField?.getLabelId()||null}_handleClick=e=>{if(this.disabled()||!this.openOnClick())return;let t=fi(e),i=this.timepicker()._getOverlayHost();(!t||!i||!i.contains(t))&&this.timepicker().open()};_handleInput(e){let t=e.target.value,i=this.value(),o=this._dateAdapter.parseTime(t,this._dateFormats.parse.timeInput),r=!this._dateAdapter.sameTime(o,i);!o||r||t&&!i?this._assignUserSelection(o,!0):this._validatorOnChange?.()}_handleBlur(){let e=this.value();e&&this._isValid(e)&&this._formatValue(e),this.timepicker().isOpen()||this._onTouched?.()}_handleKeydown(e){this.timepicker().isOpen()||this.disabled()||(e.keyCode===27&&!UC(e)&&this.value()!==null?(e.preventDefault(),this.value.set(null),this._formatValue(null)):(e.keyCode===40||e.keyCode===38)&&(e.preventDefault(),this.timepicker().open()))}timepickerValueAssigned(e){this._dateAdapter.sameTime(e,this.value())||(this._assignUserSelection(e,!0),this._formatValue(e))}_updateFormsState(){fn$1(()=>{let{_dateAdapter:e,_lastValueValid:t,_minValid:i,_maxValid:o}=this,r=e.deserialize(this.value()),l=this.min(),u=this.max(),f=this._lastValueValid=this._isValid(r);this._minValid=!l||!r||!f||e.compareTime(l,r)<=0,this._maxValid=!u||!r||!f||e.compareTime(u,r)>=0;let j=t!==f||i!==this._minValid||o!==this._maxValid;this._hasFocus()||this._formatValue(r),r&&f&&(this._lastValidDate=r),j&&this._validatorOnChange?.()})}_registerTimepicker(){fn$1(()=>{let e=this.timepicker();e.registerInput(this),e.closed.subscribe(()=>this._onTouched?.())})}_assignUserSelection(e,t){let i;if(e==null||!this._isValid(e))i=e;else{let o=this._dateAdapter,r=o.getValidDateOrNull(this._lastValidDate||this.value()),l=o.getHours(e),u=o.getMinutes(e),f=o.getSeconds(e);i=r?o.setTime(r,l,u,f):e}t&&this._onChange?.(i),this.value.set(i)}_formatValue(e){e=this._dateAdapter.getValidDateOrNull(e),this._elementRef.nativeElement.value=e==null?``:this._dateAdapter.format(e,this._dateFormats.display.timeInput)}_isValid(e){return!e||this._dateAdapter.isValid(e)}_transformDateInput(e){let t=typeof e==`string`?this._dateAdapter.parseTime(e,this._dateFormats.parse.timeInput):this._dateAdapter.deserialize(e);return t&&this._dateAdapter.isValid(t)?t:null}_hasFocus(){return Tm()===this._elementRef.nativeElement}_getValidator(){return dm.compose([()=>this._lastValueValid?null:{matTimepickerParse:{text:this._elementRef.nativeElement.value}},e=>this._minValid?null:{matTimepickerMin:{min:this.min(),actual:this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value))}},e=>this._maxValid?null:{matTimepickerMax:{max:this.max(),actual:this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value))}}])}static ɵfac=function(t){return new(t||n)};static ɵdir=k({type:n,selectors:[[`input`,`matTimepicker`,``]],hostAttrs:[`role`,`combobox`,`type`,`text`,`aria-haspopup`,`listbox`,1,`mat-timepicker-input`],hostVars:5,hostBindings:function(t,i){t&1&&Ct(`blur`,function(){return i._handleBlur()})(`input`,function(r){return i._handleInput(r)})(`keydown`,function(r){return i._handleKeydown(r)}),t&2&&(js(`disabled`,i.disabled()),Et(`aria-activedescendant`,i._ariaActiveDescendant())(`aria-expanded`,i._ariaExpanded())(`aria-controls`,i._ariaControls())(`mat-timepicker-id`,i.timepicker()?.panelId))},inputs:{value:[1,`value`],timepicker:[1,`matTimepicker`,`timepicker`],min:[1,`matTimepickerMin`,`min`],max:[1,`matTimepickerMax`,`max`],openOnClick:[1,`matTimepickerOpenOnClick`,`openOnClick`],disabledInput:[1,`disabled`,`disabledInput`]},outputs:{value:`valueChange`},exportAs:[`matTimepickerInput`],features:[Ce$1([{provide:ui,useExisting:n,multi:!0},{provide:Wn,useExisting:n,multi:!0},{provide:Qt,useExisting:n}])]})}return n})();var ze=(()=>{class n{_defaultConfig=p(Fa,{optional:!0});_defaultTabIndex=(()=>{let e=p(new Vc(`tabindex`),{optional:!0}),t=Number(e);return isNaN(t)?null:t})();_isDisabled=Ke(()=>{let e=this.timepicker();return this.disabled()||e.disabled()});timepicker=$s.required({alias:`for`});ariaLabel=$s(void 0,{alias:`aria-label`});ariaLabelledby=$s(void 0,{alias:`aria-labelledby`});_defaultAriaLabel=`Open timepicker options`;disabled=$s(!1,{transform:It,alias:`disabled`});tabIndex=$s(this._defaultTabIndex);disableRipple=$s(this._defaultConfig?.disableRipple??!1,{transform:It});_open(e){this.timepicker()&&!this._isDisabled()&&(this.timepicker().open(),e.stopPropagation())}getAriaLabel(){return this.ariaLabelledby()?null:this.ariaLabel()||this._defaultAriaLabel}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[[[``,`matTimepickerToggleIcon`,``]]],t=[`[matTimepickerToggleIcon]`];function i(o,r){o&1&&(sv(),ke$1(0,`svg`,1),Bn(1,`path`,2),ze$1())}return gr({type:n,selectors:[[`mat-timepicker-toggle`]],hostAttrs:[1,`mat-timepicker-toggle`],hostVars:1,hostBindings:function(r,l){r&1&&Ct(`click`,function(f){return l._open(f)}),r&2&&Et(`tabindex`,null)},inputs:{timepicker:[1,`for`,`timepicker`],ariaLabel:[1,`aria-label`,`ariaLabel`],ariaLabelledby:[1,`aria-labelledby`,`ariaLabelledby`],disabled:[1,`disabled`],tabIndex:[1,`tabIndex`],disableRipple:[1,`disableRipple`]},exportAs:[`matTimepickerToggle`],ngContentSelectors:t,decls:3,vars:6,consts:[[`matIconButton`,``,`type`,`button`,`aria-haspopup`,`listbox`,3,`tabIndex`,`disabled`,`disableRipple`],[`height`,`24px`,`width`,`24px`,`viewBox`,`0 -960 960 960`,`fill`,`currentColor`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-timepicker-toggle-default-icon`],[`d`,`m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z`]],template:function(r,l){r&1&&(Ac(e),ke$1(0,`button`,0),kt(1,0,null,i,2,0),ze$1()),r&2&&(yr(`tabIndex`,l._isDisabled()?-1:l.tabIndex())(`disabled`,l._isDisabled())(`disableRipple`,l.disableRipple()),Et(`aria-label`,l.getAriaLabel())(`aria-labelledby`,l.ariaLabelledby())(`aria-expanded`,l.timepicker().isOpen()))},dependencies:[cn$1],encapsulation:2})})()}return n})();var Ba=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=$e({type:n});static ɵinj=Fe({imports:[Ge,ze,Be]})}return n})();var Xa=(n,a)=>a.valor;var Pa=(n,a)=>a.id;function en(n,a){if(n&1&&(ke$1(0,`mat-option`,8),Cp(1),ze$1()),n&2){let e=a.$implicit;yr(`value`,e.valor),He(),Pc(e.etiqueta)}}function tn(n,a){if(n&1&&(ke$1(0,`mat-option`,8),Cp(1),ze$1()),n&2){let e=a.$implicit,t=Un();yr(`value`,e.id),He(),Pc(t.nombreCompleto(e))}}function an(n,a){n&1&&(ke$1(0,`mat-error`),Cp(1,`Ingresá un título`),ze$1())}function nn(n,a){if(n&1&&(ke$1(0,`p`,12),Cp(1),ze$1()),n&2){let e=Un();He(),wp(`Expediente: `,e.mostrarExpediente(e.expedienteFijo))}}function on(n,a){if(n&1&&(ke$1(0,`mat-option`,8),Cp(1),ze$1()),n&2){let e=a.$implicit,t=Un(2);yr(`value`,e),He(),Pc(t.mostrarExpediente(e))}}function rn(n,a){if(n&1){let e=MN();ke$1(0,`mat-form-field`)(1,`mat-label`),Cp(2,`Expediente (opcional)`),ze$1(),ke$1(3,`input`,20),cT(),ze$1(),ke$1(4,`mat-autocomplete`,21,1),Ct(`optionSelected`,function(i){Ky(e);let o=Un();return Yy(o.elegirExpediente(i))}),_N(6,on,2,2,`mat-option`,8,Pa),ze$1(),ke$1(8,`mat-hint`),Cp(9,`Buscá por número o carátula. Define el calendario de días inhábiles`),ze$1()()}if(n&2){let e=kc(5),t=Un();He(3),yr(`formControl`,t.busquedaExpediente)(`matAutocomplete`,e),uT(),He(),yr(`displayWith`,t.mostrarExpediente),He(2),DN(t.sugerencias())}}function ln(n,a){n&1&&(ke$1(0,`mat-error`),Cp(1,`Entre 1 y 400 días`),ze$1())}function sn(n,a){n&1&&(ke$1(0,`p`,24),Cp(1),ze$1()),n&2&&(He(),Pc(a))}function dn(n,a){n&1&&(ke$1(0,`p`,15),Cp(1,`Esas fechas están fuera del calendario sincronizado: cargá "Vence el" a mano.`),ze$1())}function cn(n,a){if(n&1&&(ke$1(0,`div`,6)(1,`mat-form-field`)(2,`mat-label`),Cp(3,`Fecha de notificación`),ze$1(),ke$1(4,`input`,22),cT(),ze$1(),Bn(5,`mat-datepicker-toggle`,14)(6,`mat-datepicker`,null,2),ze$1(),ke$1(8,`mat-form-field`)(9,`mat-label`),Cp(10,`Plazo (días hábiles)`),ze$1(),ke$1(11,`input`,23),cT(),ze$1(),it(12,ln,2,0,`mat-error`),ze$1()(),it(13,sn,2,1,`p`,24),it(14,dn,2,0,`p`,15)),n&2){let e,t=kc(7),i=Un();He(4),yr(`matDatepicker`,t),uT(),He(),yr(`for`,t),He(6),uT(),He(),ot(i.form.controls.plazo.invalid?12:-1),He(),ot((e=i.notaCedula())?13:-1,e),He(),ot(i.sinCalculo()?14:-1)}}function pn(n,a){n&1&&(ke$1(0,`mat-hint`),Cp(1,`Se calcula con la notificación y el plazo; se puede corregir`),ze$1())}function un(n,a){n&1&&(ke$1(0,`mat-error`),Cp(1,`Fecha inválida: usá dd/mm/aaaa`),ze$1())}function mn(n,a){n&1&&(ke$1(0,`mat-error`),Cp(1,`Ingresá la fecha`),ze$1())}function gn(n,a){n&1&&(ke$1(0,`mat-error`),Cp(1,`Ingresá la hora de la audiencia`),ze$1())}function bn(n,a){n&1&&(ke$1(0,`mat-hint`),Cp(1,`Sin hora, al final del día`),ze$1())}function hn(n,a){if(n&1&&(ke$1(0,`mat-form-field`)(1,`mat-label`),Cp(2),ze$1(),ke$1(3,`input`,25),cT(),ze$1(),Bn(4,`mat-timepicker-toggle`,14)(5,`mat-timepicker`,26,3),it(7,gn,2,0,`mat-error`)(8,bn,2,0,`mat-hint`),ze$1()),n&2){let e=kc(6),t=Un();He(2),Pc(t.tipo()===`audiencia`?`Hora`:`Hora (opcional)`),He(),yr(`matTimepicker`,e),uT(),He(),yr(`for`,e),He(3),ot(t.form.controls.hora.hasError(`required`)?7:t.tipo()===`tarea`?8:-1)}}function fn(n,a){n&1&&(ke$1(0,`p`,15),Cp(1),ze$1()),n&2&&(He(),Pc(a))}function vn(n,a){n&1&&(ke$1(0,`p`,15),Cp(1),ze$1()),n&2&&(He(),Pc(a))}var _n=3;var Ce=class n{datos=p($t);ref=p(w$1);dialog=p(tt$1);expedientesApi=p(p$1);equipoApi=p(o);calendarioApi=p(m);destroyRef=p(ve);fb=p(A9);auth=p(b);tipos=r$1;nombreCompleto=o$1;fechaPortal=A;titulo=this.datos.vencimiento?`Editar evento`:`Nuevo evento`;esAlta=!this.datos.vencimiento;expedienteFijo=this.datos.expediente??null;inicial=this.datos.vencimiento;partes=this.inicial?ee(this.inicial.fechaVencimiento):null;form=this.fb.group({tipo:[this.inicial?.tipo??`vencimiento`],titulo:[this.inicial?.titulo??this.datos.inicial?.titulo??``,[dm.required,dm.maxLength(300)]],fecha:[Nn(this.partes?.fecha??this.datos.inicial?.fecha),dm.required],hora:[Fn(this.partes&&this.partes.hora!==Me?this.partes.hora:null)],responsableId:[this.inicial?.responsableId??(this.esAlta&&!this.expedienteFijo?this.auth.me()?.id??``:``)],descripcion:[this.inicial?.descripcion??this.datos.inicial?.descripcion??``,dm.maxLength(4e3)],notificada:[null],plazo:[null,[dm.min(1),dm.max(400)]]});tipo=L(this.form.controls.tipo.valueChanges,{initialValue:this.form.controls.tipo.value});calculaPlazo=Ke(()=>this.esAlta&&this.tipo()===`vencimiento`);busquedaExpediente=new aa(this.inicial?.expediente??``,{nonNullable:!0});expedienteElegido=G(this.expedienteFijo??this.inicial?.expediente??null);sugerencias=G([]);equipo=G([]);sede=Ke(()=>this.expedienteElegido()?.sede??`01001`);nombreSede=L(F(this.sede).pipe(et(a=>this.calendarioApi.sedes().pipe($(e=>e[a]??a)))),{initialValue:``});calendario=L(F(this.sede).pipe(et(a=>this.calendarioApi.cercano(a))),{initialValue:null});fecha=L(this.form.controls.fecha.valueChanges.pipe($(Tn)),{initialValue:Tn(this.form.controls.fecha.value)});notificada=L(this.form.controls.notificada.valueChanges.pipe(tr(this.form.controls.notificada.value),$(Tn)),{initialValue:``});plazo=L(this.form.controls.plazo.valueChanges,{initialValue:null});avisoFecha=Ke(()=>yn(this.fecha(),this.calendario(),this.nombreSede()));avisoPasado=Ke(()=>{let a=this.fecha();return this.esAlta&&a&&a<w()?`Esta fecha ya pasó: se va a cargar como vencido.`:null});notaCedula=G(null);sinCalculo=G(!1);constructor(){this.ref.disableClose=!0,vu(this.ref.keydownEvents().pipe(fe(a=>a.key===`Escape`)),this.ref.backdropClick()).pipe(T(this.destroyRef)).subscribe(()=>this.intentarCerrar()),fn$1(()=>{let a=this.datos.inicial?.cedula,e=this.calendario();if(!a||!e||this.form.controls.notificada.value)return;let t=e.sumarHabiles(a,_n);t&&(this.form.controls.notificada.setValue(Nn(t)),this.notaCedula.set(`C\xE9dula del ${A(a)}: notificada el ${A(t)} (3er d\xEDa h\xE1bil).`))}),fn$1(()=>{let a=this.notificada(),e=this.plazo(),t=this.calendario();if(!this.calculaPlazo()||!a||!e||e<1||!t)return;let i=t.sumarHabiles(a,e);this.sinCalculo.set(!i),i&&this.form.controls.fecha.setValue(Nn(i))})}ngOnInit(){this.equipoApi.listar().subscribe({next:a=>this.equipo.set(a),error:()=>this.equipo.set([])}),!this.expedienteFijo&&this.busquedaExpediente.valueChanges.pipe(fe(a=>typeof a==`string`),er(250),tl(),et(a=>(this.expedienteElegido.set(null),a.trim().length<2?P([]):this.expedientesApi.listar({q:a,size:10}).pipe($(e=>e.contenido)))),T(this.destroyRef)).subscribe({next:a=>this.sugerencias.set(a.map(e=>({id:e.id,numeroExpediente:e.numeroExpediente,caratula:e.caratula,sede:e.sede}))),error:()=>this.sugerencias.set([])})}mostrarExpediente(a){return!a||typeof a==`string`?a??``:a.caratula?`${a.numeroExpediente} \xB7 ${a.caratula}`:a.numeroExpediente}elegirExpediente(a){this.expedienteElegido.set(a.option.value)}intentarCerrar(){if(!this.form.dirty){this.ref.close();return}_(this.dialog,{titulo:`Descartar los cambios`,mensaje:`Lo que cargaste en este evento se pierde.`,aceptar:`Descartar`}).pipe(fe(Boolean)).subscribe(()=>this.ref.close())}aceptar(){let a=this.form.getRawValue(),e=a.tipo===`audiencia`&&!a.hora;if(this.form.invalid||e){e&&this.form.controls.hora.setErrors({required:!0}),this.form.markAllAsTouched();return}this.ref.close({vencimiento:{tipo:a.tipo,titulo:a.titulo.trim(),descripcion:a.descripcion.trim()||null,fechaVencimiento:Aa(Tn(a.fecha),a.tipo===`vencimiento`?null:Rn(a.hora)),expedienteId:this.expedienteElegido()?.id??null,responsableId:a.responsableId||null,estado:this.inicial?.estado}})}static ɵfac=function(e){return new(e||n)};static ɵcmp=gr({type:n,selectors:[[`app-vencimiento-dialog`]],features:[Ce$1([En])],decls:50,vars:14,consts:[[`pickerFecha`,``],[`auto`,`matAutocomplete`],[`pickerNotificada`,``],[`pickerHora`,``],[`mat-dialog-title`,``],[`novalidate`,``,3,`ngSubmit`,`formGroup`],[1,`fila-2`],[`formControlName`,`tipo`],[3,`value`],[`formControlName`,`responsableId`],[`value`,``],[`matInput`,``,`formControlName`,`titulo`,`required`,``,3,`placeholder`],[1,`fijo`],[`matInput`,``,`formControlName`,`fecha`,`required`,``,`placeholder`,`dd/mm/aaaa`,3,`matDatepicker`],[`matIconSuffix`,``,3,`for`],[`role`,`status`,1,`aviso`],[`matInput`,``,`formControlName`,`descripcion`,`rows`,`2`],[`align`,`end`],[`mat-button`,``,`type`,`button`,3,`click`],[`mat-flat-button`,``,`type`,`submit`],[`matInput`,``,3,`formControl`,`matAutocomplete`],[3,`optionSelected`,`displayWith`],[`matInput`,``,`formControlName`,`notificada`,`placeholder`,`dd/mm/aaaa`,3,`matDatepicker`],[`matInput`,``,`type`,`number`,`min`,`1`,`max`,`400`,`formControlName`,`plazo`],[1,`nota`],[`matInput`,``,`formControlName`,`hora`,`placeholder`,`hh:mm`,3,`matTimepicker`],[`interval`,`15min`]],template:function(e,t){if(e&1&&(ke$1(0,`h2`,4),Cp(1),ze$1(),ke$1(2,`form`,5),Ct(`ngSubmit`,function(){return t.aceptar()}),ke$1(3,`mat-dialog-content`)(4,`div`,6)(5,`mat-form-field`)(6,`mat-label`),Cp(7,`Tipo`),ze$1(),ke$1(8,`mat-select`,7),cT(),_N(9,en,2,2,`mat-option`,8,Xa),ze$1()(),ke$1(11,`mat-form-field`)(12,`mat-label`),Cp(13,`Responsable`),ze$1(),ke$1(14,`mat-select`,9),cT(),ke$1(15,`mat-option`,10),Cp(16,`Sin responsable`),ze$1(),_N(17,tn,2,2,`mat-option`,8,Pa),ze$1()()(),ke$1(19,`mat-form-field`)(20,`mat-label`),Cp(21,`Título`),ze$1(),ke$1(22,`input`,11),cT(),ze$1(),it(23,an,2,0,`mat-error`),ze$1(),it(24,nn,2,1,`p`,12)(25,rn,10,3,`mat-form-field`),it(26,cn,15,5),ke$1(27,`div`,6)(28,`mat-form-field`)(29,`mat-label`),Cp(30),ze$1(),ke$1(31,`input`,13),cT(),ze$1(),Bn(32,`mat-datepicker-toggle`,14)(33,`mat-datepicker`,null,0),it(35,pn,2,0,`mat-hint`),it(36,un,2,0,`mat-error`)(37,mn,2,0,`mat-error`),ze$1(),it(38,hn,9,4,`mat-form-field`),ze$1(),it(39,fn,2,1,`p`,15),it(40,vn,2,1,`p`,15),ke$1(41,`mat-form-field`)(42,`mat-label`),Cp(43,`Descripción (opcional)`),ze$1(),ke$1(44,`textarea`,16),cT(),ze$1()()(),ke$1(45,`mat-dialog-actions`,17)(46,`button`,18),Ct(`click`,function(){return t.intentarCerrar()}),Cp(47,`Cancelar`),ze$1(),ke$1(48,`button`,19),Cp(49,`Guardar`),ze$1()()()),e&2){let i,o,r=kc(34);He(),Pc(t.titulo),He(),yr(`formGroup`,t.form),He(6),uT(),He(),DN(t.tipos),He(5),uT(),He(3),DN(t.equipo()),He(5),yr(`placeholder`,t.tipo()===`audiencia`?`Audiencia preliminar...`:t.tipo()===`tarea`?`Llamar al cliente...`:`Contestar traslado...`),uT(),He(),ot(t.form.controls.titulo.hasError(`required`)?23:-1),He(),ot(t.expedienteFijo?24:25),He(2),ot(t.calculaPlazo()?26:-1),He(4),Pc(t.tipo()===`vencimiento`?`Vence el`:`Fecha`),He(),yr(`matDatepicker`,r),uT(),He(),yr(`for`,r),He(3),ot(t.calculaPlazo()?35:-1),He(),ot(t.form.controls.fecha.hasError(`matDatepickerParse`)?36:t.form.controls.fecha.hasError(`required`)?37:-1),He(2),ot(t.tipo()!==`vencimiento`?38:-1),He(),ot((i=t.avisoPasado())?39:-1,i),He(),ot((o=t.avisoFecha())?40:-1,o),He(4),uT()}},dependencies:[O9,x9,WE,cO,I9,S9,dC,UR,VR,uO,oO,hO,Ve,Be$1,ze$3,je$1,xY,fw,$m,zm,qO,YO,He$1,Le$1,Xr,Yr,bt,vt$1,gt,je$2,ne,te,Dn,vn$1,ua$1,Sa,Ba,Ge,La,ze],styles:[`form[_ngcontent-%COMP%]{min-width:min(560px,80vw)}mat-dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-top:8px;max-height:calc(100dvh - 140px)}.fila-2[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:0 16px}.aviso[_ngcontent-%COMP%]{margin:-4px 0 12px;font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-error)}.nota[_ngcontent-%COMP%]{margin:0 0 12px;font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant)}.fijo[_ngcontent-%COMP%]{margin:0 0 12px;font:var(--%NS%mat-sys-body-medium);color:var(--%NS%mat-sys-on-surface-variant)}`]})};function yn(n,a,e=`Córdoba`){if(!n)return null;let t=A(n),i=a?.del(n)??[];return i.length?`El ${t} es inh\xE1bil en ${e||`la sede`}: ${i.map(o=>o.descripcion).join(` · `)}`:c.finDeSemana(n)?`El ${t} es ${new Date(n+`T12:00`).getDay()===0?`domingo`:`sábado`}.`:null}var qa=class n{api=p(Se);dialog=p(tt$1);notificaciones=p(qi);crear(a,e){return this.abrir({expediente:a,inicial:e}).pipe(et(t=>this.api.crear(t.vencimiento)),tt(()=>this.notificaciones.ok(`Vencimiento agregado`)),Ar(t=>this.fallo(t)))}agendar(a,e=a.expediente){let t=`leidaPortal`in a,i=t?`Cédula`:`Movimiento`,o=[a.fecha?`${i} del ${A(a.fecha)}`:i];return t&&!e&&a.numeroExpediente&&o.push(`Expte. ${a.numeroExpediente} (no est\xE1 cargado en el sistema)`),this.crear(e??void 0,{titulo:(a.tipoOperacion||i).slice(0,300),descripcion:o.join(` · `),cedula:t&&a.fecha?a.fecha:void 0})}agendarActuacion(a,e){return this.crear(e,{titulo:a.titulo.slice(0,300),descripcion:`${d(a.tipo)} del ${A(a.fecha)}`})}editar(a){return this.abrir({vencimiento:a}).pipe(et(e=>this.api.modificar(a.id,e.vencimiento)),tt(()=>this.notificaciones.ok(`Vencimiento actualizado`)),Ar(e=>this.fallo(e)))}cambiarEstado(a,e){return this.api.cambiarEstado(a.id,e).pipe(Ar(t=>this.fallo(t)))}eliminar(a){return _(this.dialog,{titulo:`Eliminar vencimiento`,mensaje:`Se borra definitivamente. Si ya no corre pero querés dejar constancia, usá "Cancelar".`,aceptar:`Eliminar`,destructivo:!0}).pipe(fe(Boolean),et(()=>this.api.eliminar(a.id)),$(()=>{}),tt(()=>this.notificaciones.ok(`Vencimiento eliminado`)),Ar(e=>this.fallo(e)))}abrir(a){return this.dialog.open(Ce,{data:a}).afterClosed().pipe(fe(e=>!!e))}fallo(a){return this.notificaciones.error(a),Me$1}static ɵfac=function(e){return new(e||n)};static ɵprov=H({token:n,factory:n.ɵfac,providedIn:`root`})};function xn(n){return n.expediente?.sede??`01001`}function Vo(n,a,e=w()){let t=ee(n.fechaVencimiento).fecha,i=a?.contarHabiles(e,t)??null;if(i!==null)return{dias:i,habiles:!0};let o=r=>{let[l,u,f]=r.split(`-`).map(Number);return Date.UTC(l,u-1,f)};return{dias:Math.round((o(t)-o(e))/864e5),habiles:!1}}function wo(n){return`En ${n.dias} ${n.dias===1?`día`:`días`}${n.habiles?` hábil`+(n.dias===1?``:`es`):``}`}function Ao(n){let a=p(m),e=Ke(()=>[...new Set(n().map(xn))].sort().join(`,`));return L(F(e).pipe(et(t=>t?yu(t.split(`,`).map(i=>a.cercano(i).pipe($(o=>[i,o])))).pipe($(i=>new Map(i))):P(new Map))),{initialValue:new Map})}export{Se as a,Xn as c,qa as d,wa as f,zn as g,yn as h,Qn as i,Zn as l,xn as m,Jn as n,Ua as o,wo as p,Ka as r,Vo as s,Ao as t,ee as u};