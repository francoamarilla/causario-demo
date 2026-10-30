import"./chunk-zSsmmLLa.js";import{Ai as ze,Bn as fe,Ci as yr,Dr as ot,Dt as R9,Er as oo,F as He,Gn as gD,Hr as so,I as I9,Ln as et,M as G$1,Mr as qC,N as H,Nn as ee,O as Fe,Or as p,Q as Ky,Qr as uA,S as DN,Sr as oA,St as Pe,T as Et,Ti as yu,Tr as oi,Tt as Pt$1,V as It,Wn as gA,Wt as Un,X as Ke,Yt as Vc,Zr as tw,Zt as W,_ as Bn,_t as Oe,a as $e,ai as v,b as Cp,cn as Yy,cr as kc,ct as MC,d as Ac,dn as _p,ei as uT,er as it,f as Ae,fr as kt,gi as x0,gr as mi,hi as wt,hn as ae,lr as ke,lt as MN,mi as wp,n as b,nt as Le,oi as vA,or as k,pn as aO,qn as gr,ri as ui,rn as XA,s as $n,sr as kE,ti as ua$1,un as _N,v as Bs,w as Dp,wn as cT,wr as oe,x as Ct,xi as yD,xt as Pc,y as Ce}from"./main-LLFQZMTI.js";import{a as Mn,c as Yt$1,d as ne,l as cn,p as te,r as Ke$1,s as We,t as Gt$1}from"./chunk-PrwpuhyS.js";import{M as qi,O as kn}from"./chunk-nmx8ashN.js";import{t as o}from"./chunk-BAaMZhIO.js";import{t as g}from"./chunk-Dd2Yses9.js";import{n as ve,t as ce}from"./chunk-IntFk2AO.js";import{i as o$1,t as e}from"./chunk-3LTGUPcD.js";import{a as je,c as ze$1,i as Ve,n as Be,o as tt,r as Re,s as w,t as $t$1}from"./chunk-BZ43YU1H.js";import{t as _}from"./chunk-DwtH9WjB.js";import{n as wt$1,t as Mt}from"./chunk-D0hE0o2u.js";import{i as P,n as G$2,r as Ot,t as At}from"./chunk-BE7MQvmC.js";import{t as p$1}from"./chunk-DZPhnSCL.js";import"./chunk-tp6hvbmx.js";import{i as w$1,n as gt,r as rt,t as Lt}from"./chunk-CRs7Ofto.js";import{t as M}from"./chunk-giOeJdyK.js";import{a as Lt$1,c as Ut$1,d as jt$1,f as zt$1,i as It$1,l as Vt,n as Bt$1,o as Pt$2,r as Ht$1,s as Qt$1,t as At$1,u as Wt$1}from"./chunk-Di3xJRCF.js";import{t as ut}from"./chunk-BsGOb5Po.js";var G=class a{http=p(kE);base=`/api/v1/usuarios`;listar(t=0,e=100){let i=new $n().set(`page`,t).set(`size`,e);return this.http.get(this.base,{params:i})}crear(t){return this.http.post(this.base,t)}modificar(t,e){return this.http.put(`${this.base}/${t}`,e)}cambiarPassword(t,e){return this.http.put(`${this.base}/${t}/password`,{password:e})}visibilidad(t){return this.http.get(`${this.base}/${t}/visibilidad`)}modificarVisibilidad(t,e){return this.http.put(`${this.base}/${t}/visibilidad`,e)}darDeBaja(t){return this.http.delete(`${this.base}/${t}`)}static ɵfac=function(e){return new(e||a)};static ɵprov=H({token:a,factory:a.ɵfac,providedIn:`root`})};var F=class{source;value;constructor(t,e){this.source=t,this.value=e}};var Ut={provide:ui,useExisting:Ae(()=>X),multi:!0};var Rt=new v(`MatRadioGroup`);var zt=new v(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var X=(()=>{class a{_changeDetector=p(wt);_value=null;_name=p(mi).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new ee;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(i=>{i.checked=this.value===i.value,i.checked&&(this._selected=i)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new F(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(i){return new(i||a)};static ɵdir=k({type:a,selectors:[[`mat-radio-group`]],contentQueries:function(i,d,m){if(i&1&&so(m,B,5),i&2){let _;Pe(_=Le())&&(d._radios=_)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,It],required:[2,`required`,`required`,It],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,It]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[Ce([Ut,{provide:Rt,useExisting:a}])]})}return a})();var B=(()=>{class a{_elementRef=p(oe);_changeDetector=p(wt);_focusMonitor=p(MC);_radioDispatcher=p(kn);_defaultOptions=p(zt,{optional:!0});_ngZone=p(W);_renderer=p(Oe);_uniqueId=p(mi).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new ee;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=tw();_injector=p(ae);constructor(){p(ua$1).load(Gt$1);let e=p(Rt,{optional:!0}),i=p(new Vc(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,i&&(this.tabIndex=XA(i,0))}focus(e,i){i?this._focusMonitor.focusVia(this._inputElement,i,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,i)=>{e!==this.id&&i===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new F(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let i=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),i&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,i;if(!e||!e.selected||this.disabled?i=this.tabIndex:i=e.selected===this?this.tabIndex:-1,i!==this._previousTabIndex){let d=this._inputElement?.nativeElement;d&&(d.setAttribute(`tabindex`,i+``),this._previousTabIndex=i,oi(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===d&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===d&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(i){return new(i||a)};static ɵcmp=(function(){let e=[`input`],i=[`formField`];return gr({type:a,selectors:[[`mat-radio-button`]],viewQuery:function(_,c){if(_&1&&Bs(e,5)(i,7,oe),_&2){let N;Pe(N=Le())&&(c._inputElement=N.first),Pe(N=Le())&&(c._rippleTrigger=N.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(_,c){_&1&&Ct(`focus`,function(){return c._inputElement.nativeElement.focus()}),_&2&&(Et(`id`,c.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),Pt$1(`mat-primary`,c.color===`primary`)(`mat-accent`,c.color===`accent`)(`mat-warn`,c.color===`warn`)(`mat-mdc-radio-checked`,c.checked)(`mat-mdc-radio-disabled`,c.disabled)(`mat-mdc-radio-disabled-interactive`,c.disabledInteractive)(`_mat-animation-noopable`,c._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,It],tabIndex:[2,`tabIndex`,`tabIndex`,m=>m==null?0:XA(m)],checked:[2,`checked`,`checked`,It],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,It],required:[2,`required`,`required`,It],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,It]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:[`*`],decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(_,c){_&1&&(Ac(),ke(0,`label`,2,0)(2,`span`,3),Bn(3,`span`,4),ke(4,`input`,5,1),Ct(`change`,function(Ot){return c._onInputInteraction(Ot)}),ze(),ke(6,`span`,6),Bn(7,`span`,7)(8,`span`,8),ze(),ke(9,`span`,9),Bn(10,`span`,10),ze()(),ke(11,`span`,11),kt(12),ze()()),_&2&&(yr(`labelPosition`,c.labelPosition)(`for`,c.inputId),He(2),Pt$1(`mdc-radio--disabled`,c.disabled),He(2),yr(`id`,c.inputId)(`checked`,c.checked)(`disabled`,c.disabled&&!c.disabledInteractive)(`required`,c.required),Et(`name`,c.name)(`value`,c.value)(`aria-label`,c.ariaLabel)(`aria-labelledby`,c.ariaLabelledby)(`aria-describedby`,c.ariaDescribedby)(`aria-disabled`,c.disabled&&c.disabledInteractive?`true`:null),He(5),yr(`matRippleTrigger`,c._rippleTrigger.nativeElement)(`matRippleDisabled`,c._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[Mn,g],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-pressed-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-checked-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--%NS%mat-radio-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-radio-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-radio-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-radio-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-radio-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-radio-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio--disabled + .mat-internal-form-field-label {
  color: var(--%NS%mat-radio-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-radio-touch-target-size, 48px);
  width: var(--%NS%mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})})()}return a})();var Pt=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵmod=$e({type:a});static ɵinj=Fe({imports:[Yt$1,B,qC]})}return a})();var qt=(a,t)=>t.id;function Gt(a,t){if(a&1){let e=MN();ke(0,`mat-checkbox`,9),Ct(`change`,function(){let d=Ky(e).$implicit,m=Un(2);return Yy(m.alternar(d.id))}),Cp(1),ze()}if(a&2){let e=t.$implicit,i=Un(2);yr(`checked`,i.elegidas().has(e.id)),He(),Pc(e.nombre)}}function Ft(a,t){a&1&&(ke(0,`p`,8),Cp(1,`No hay otras personas en el estudio.`),ze())}function Bt(a,t){if(a&1&&(ke(0,`div`,6),_N(1,Gt,2,2,`mat-checkbox`,7,qt,!1,Ft,2,0,`p`,8),ze(),ke(4,`p`,8),Cp(5,` "Lo suyo" son los expedientes donde es responsable (con sus movimientos, cédulas y vencimientos) y los vencimientos que tiene asignados. Los clientes los ven todos. `),ze()),a&2){let e=Un();He(),DN(e.datos.personas)}}var j=class a{datos=p($t$1);ref=p(w);veTodo=this.datos.actual.veTodo;elegidas=G$1(new Set(this.datos.actual.veA));alternar(t){let e=new Set(this.elegidas());e.delete(t)||e.add(t),this.elegidas.set(e)}guardar(){this.ref.close({veTodo:this.veTodo,veA:this.veTodo?[]:[...this.elegidas()]})}static ɵfac=function(e){return new(e||a)};static ɵcmp=gr({type:a,selectors:[[`app-visibilidad-dialog`]],decls:14,vars:5,consts:[[`mat-dialog-title`,``],[`aria-label`,`Qué ve`,1,`opciones`,3,`ngModelChange`,`ngModel`],[3,`value`],[`align`,`end`],[`mat-button`,``,`mat-dialog-close`,``],[`mat-flat-button`,``,3,`click`],[1,`personas`],[3,`checked`],[1,`nota`],[3,`change`,`checked`]],template:function(e,i){e&1&&(ke(0,`h2`,0),Cp(1),ze(),ke(2,`mat-dialog-content`)(3,`mat-radio-group`,1),cT(),yD(`ngModelChange`,function(m){return oA(i.veTodo,m)||(i.veTodo=m),m}),ke(4,`mat-radio-button`,2),Cp(5,`Todo el estudio`),ze(),ke(6,`mat-radio-button`,2),Cp(7,`Solo lo suyo y además el trabajo de:`),ze()(),it(8,Bt,6,1),ze(),ke(9,`mat-dialog-actions`,3)(10,`button`,4),Cp(11,`Cancelar`),ze(),ke(12,`button`,5),Ct(`click`,function(){return i.guardar()}),Cp(13,`Guardar`),ze()()),e&2&&(He(),wp(`Qué ve `,i.datos.nombre),He(2),gD(`ngModel`,i.veTodo),uT(),He(),yr(`value`,!0),He(2),yr(`value`,!1),He(2),ot(i.veTodo?-1:8))},dependencies:[R9,I9,aO,Ve,Re,Be,ze$1,je,Pt,X,B,ve,ce,ne,te],styles:[`.opciones[_ngcontent-%COMP%], .personas[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.personas[_ngcontent-%COMP%]{margin:4px 0 0 32px}.nota[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant);font:var(--%NS%mat-sys-body-small)}`]})};var jt=()=>[20,50,100];function $t(a,t){a&1&&Bn(0,`mat-progress-bar`,5)}function Ht(a,t){a&1&&(ke(0,`th`,20),Cp(1,`Nombre`),ze())}function Qt(a,t){a&1&&(ke(0,`span`,22),Cp(1,`(vos)`),ze())}function Wt(a,t){if(a&1&&(ke(0,`td`,21),Cp(1),it(2,Qt,2,0,`span`,22),ze()),a&2){let e=t.$implicit,i=Un();He(),wp(` `,i.nombreCompleto(e),` `),He(),ot(i.esUnoMismo(e)?2:-1)}}function Zt(a,t){a&1&&(ke(0,`th`,20),Cp(1,`Email`),ze())}function Jt(a,t){if(a&1&&(ke(0,`td`,21),Cp(1),ze()),a&2){let e=t.$implicit;He(),Pc(e.email)}}function Kt(a,t){a&1&&(ke(0,`th`,20),Cp(1,`Rol`),ze())}function Xt(a,t){if(a&1&&(ke(0,`td`,21),Cp(1),ze()),a&2){let e=t.$implicit,i=Un();He(),Pc(i.rol(e.rol))}}function Yt(a,t){a&1&&(ke(0,`th`,20),Cp(1,`Estado`),ze())}function ea(a,t){if(a&1&&(ke(0,`td`,21)(1,`span`,23),Cp(2),ze()()),a&2){let e=t.$implicit;He(),Pt$1(`ok`,e.activo)(`urgente`,!e.activo),He(),Pc(e.activo?`Activo`:`Dado de baja`)}}function ta(a,t){a&1&&(ke(0,`th`,20),Cp(1,`Último ingreso`),ze())}function aa(a,t){if(a&1&&(ke(0,`td`,21),Cp(1),gA(2,`date`),ze()),a&2){let e=t.$implicit;He(),wp(` `,e.ultimoAcceso?vA(2,1,e.ultimoAcceso,`dd/MM/yyyy HH:mm`):`Nunca`,` `)}}function ia(a,t){a&1&&(ke(0,`th`,20)(1,`span`,24),Cp(2,`Acciones`),ze()())}function oa(a,t){if(a&1){let e=MN();ke(0,`button`,27),Ct(`click`,function(){Ky(e);let d=Un().$implicit,m=Un();return Yy(m.queVe(d))}),Cp(1,`Qué ve`),ze()}}function ra(a,t){if(a&1){let e=MN();ke(0,`button`,27),Ct(`click`,function(){Ky(e);let d=Un(2).$implicit,m=Un();return Yy(m.darDeBaja(d))}),Cp(1,`Dar de baja`),ze()}}function na(a,t){if(a&1&&it(0,ra,2,0,`button`,28),a&2){let e=Un().$implicit,i=Un();ot(i.esUnoMismo(e)?-1:0)}}function da(a,t){if(a&1){let e=MN();ke(0,`button`,27),Ct(`click`,function(){Ky(e);let d=Un().$implicit,m=Un();return Yy(m.reactivar(d))}),Cp(1,`Reactivar`),ze()}}function ca(a,t){if(a&1){let e=MN();ke(0,`td`,25)(1,`button`,26)(2,`mat-icon`),Cp(3,`more_vert`),ze()(),ke(4,`mat-menu`,null,0)(6,`button`,27),Ct(`click`,function(){let d=Ky(e).$implicit,m=Un();return Yy(m.editar(d))}),Cp(7,`Editar`),ze(),ke(8,`button`,27),Ct(`click`,function(){let d=Ky(e).$implicit,m=Un();return Yy(m.cambiarPassword(d))}),Cp(9,`Cambiar contraseña`),ze(),it(10,oa,2,0,`button`,28),it(11,na,1,1)(12,da,2,0,`button`,28),ze()()}if(a&2){let e=t.$implicit,i=kc(5),d=Un();He(),yr(`matMenuTriggerFor`,i),Et(`aria-label`,`Acciones de `+d.nombreCompleto(e)),He(9),ot(e.rol!==`admin`?10:-1),He(),ot(e.activo?11:12)}}function sa(a,t){a&1&&Bn(0,`tr`,29)}function la(a,t){if(a&1&&Bn(0,`tr`,30),a&2){let e=t.$implicit;Pt$1(`inactivo`,!e.activo)}}function ma(a,t){if(a&1){let e=MN();ke(0,`app-error-carga`,34),Ct(`reintentar`,function(){Ky(e);let d=Un(2);return Yy(d.cargar())}),ze()}}function ua(a,t){a&1&&(ke(0,`app-vacio`,33),Cp(1,` Con "Nuevo usuario" se suma a una persona del estudio. `),ze())}function ba(a,t){if(a&1&&(ke(0,`tr`,31)(1,`td`),it(2,ma,1,0,`app-error-carga`,32)(3,ua,2,0,`app-vacio`,33),ze()()),a&2){let e=Un();He(),Et(`colspan`,e.columnas.length),He(),ot(e.error()?2:e.cargando()?-1:3)}}var Tt=class a{api=p(G);auth=p(b);equipo=p(o);dialog=p(tt);notificaciones=p(qi);columnas=[`nombre`,`email`,`rol`,`estado`,`ultimoAcceso`,`acciones`];usuarios=G$1([]);total=G$1(0);pagina=G$1(0);tamanio=G$1(20);cargando=G$1(!0);error=G$1(!1);nombreCompleto=o$1;miId=Ke(()=>this.auth.me()?.id);ngOnInit(){this.cargar()}cambiarPagina(t){this.pagina.set(t.pageIndex),this.tamanio.set(t.pageSize),this.cargar()}esUnoMismo(t){return t.id===this.miId()}rol(t){return e.find(e=>e.valor===t)?.etiqueta??t}agregar(){this.abrir({modo:`alta`}).pipe(et(t=>this.api.crear({nombre:t.nombre,apellido:t.apellido,email:t.email,rol:t.rol,password:t.password}))).subscribe({next:()=>{this.notificaciones.ok(`Usuario creado`),this.cambiado(!1)},error:t=>this.notificaciones.error(t)})}editar(t){let e=this.esUnoMismo(t);this.abrir({modo:`edicion`,usuario:t,esUnoMismo:e}).pipe(et(i=>this.api.modificar(t.id,{nombre:i.nombre,apellido:i.apellido,rol:i.rol,activo:t.activo}))).subscribe({next:()=>{this.notificaciones.ok(`Usuario actualizado`),this.cambiado(e)},error:i=>this.notificaciones.error(i)})}queVe(t){yu({actual:this.api.visibilidad(t.id),equipo:this.equipo.listar()}).pipe(et(({actual:e,equipo:i})=>this.dialog.open(j,{data:{nombre:o$1(t),actual:e,personas:i.filter(d=>d.id!==t.id).map(d=>({id:d.id,nombre:o$1(d)}))}}).afterClosed()),fe(e=>!!e),et(e=>this.api.modificarVisibilidad(t.id,e))).subscribe({next:()=>this.notificaciones.ok(`Guardado. Se aplica en su próxima consulta`),error:e=>this.notificaciones.error(e)})}cambiarPassword(t){this.abrir({modo:`password`,usuario:t}).pipe(et(e=>this.api.cambiarPassword(t.id,e.password))).subscribe({next:()=>this.notificaciones.ok(`Contraseña cambiada`),error:e=>this.notificaciones.error(e)})}darDeBaja(t){_(this.dialog,{titulo:`Dar de baja a ${o$1(t)}`,mensaje:`No va a poder volver a entrar. Si tiene una sesión abierta, sigue hasta que venza (como mucho 8 horas). Lo que cargó queda en el sistema y se puede reactivar.`,aceptar:`Dar de baja`,destructivo:!0}).pipe(fe(Boolean),et(()=>this.api.darDeBaja(t.id))).subscribe({next:()=>{this.notificaciones.ok(`Usuario dado de baja`),this.cambiado(!1)},error:e=>this.notificaciones.error(e)})}reactivar(t){this.api.modificar(t.id,{nombre:t.nombre,apellido:t.apellido,rol:t.rol,activo:!0}).subscribe({next:()=>{this.notificaciones.ok(`Usuario reactivado`),this.cambiado(!1)},error:e=>this.notificaciones.error(e)})}abrir(t){return this.dialog.open(ut,{data:t}).afterClosed().pipe(fe(e=>!!e))}cambiado(t){this.equipo.olvidar(),t&&this.auth.cargarMe().subscribe({error:()=>{}}),this.cargar()}cargar(){this.cargando.set(!0),this.error.set(!1),this.api.listar(this.pagina(),this.tamanio()).subscribe({next:t=>{this.usuarios.set(t.contenido),this.total.set(t.totalElementos),this.cargando.set(!1)},error:t=>{this.cargando.set(!1),this.error.set(!0),this.notificaciones.error(t)}})}static ɵfac=function(e){return new(e||a)};static ɵcmp=gr({type:a,selectors:[[`app-usuarios-lista`]],features:[Ce([{provide:w$1,useClass:rt}])],decls:34,vars:9,consts:[[`menu`,`matMenu`],[1,`encabezado`],[`mat-flat-button`,``,3,`click`],[1,`explicacion`],[1,`tabla`],[`mode`,`indeterminate`],[`mat-table`,``,3,`dataSource`],[`matColumnDef`,`nombre`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`email`],[`matColumnDef`,`rol`],[`matColumnDef`,`estado`],[`matColumnDef`,`ultimoAcceso`],[`matColumnDef`,`acciones`],[`mat-cell`,``,`class`,`acciones-fila`,4,`matCellDef`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,3,`inactivo`,4,`matRowDef`,`matRowDefColumns`],[`class`,`mat-mdc-row`,4,`matNoDataRow`],[`aria-label`,`Páginas de usuarios`,3,`page`,`length`,`pageIndex`,`pageSize`,`pageSizeOptions`],[`mat-header-cell`,``],[`mat-cell`,``],[1,`nota`],[1,`etiqueta`],[1,`oculto`],[`mat-cell`,``,1,`acciones-fila`],[`mat-icon-button`,``,3,`matMenuTriggerFor`],[`mat-menu-item`,``,3,`click`],[`mat-menu-item`,``],[`mat-header-row`,``],[`mat-row`,``],[1,`mat-mdc-row`],[`titulo`,`No se pudieron cargar los usuarios`],[`titulo`,`Todavía no hay usuarios`],[`titulo`,`No se pudieron cargar los usuarios`,3,`reintentar`]],template:function(e,i){e&1&&(ke(0,`header`,1)(1,`h1`),Cp(2,`Usuarios del estudio`),ze(),ke(3,`button`,2),Ct(`click`,function(){return i.agregar()}),ke(4,`mat-icon`),Cp(5,`person_add`),ze(),Cp(6,` Nuevo usuario `),ze()(),ke(7,`p`,3),Cp(8,` Las personas que entran al sistema. El rol define qu\xE9 puede modificar, y \xABQu\xE9 ve\xBB (en el men\xFA de cada persona) define qu\xE9 parte del estudio ve: todo, o solo lo suyo y el trabajo de las personas que se elijan.
`),ze(),ke(9,`div`,4),it(10,$t,1,0,`mat-progress-bar`,5),ke(11,`table`,6),_p(12,7),oo(13,Ht,2,0,`th`,8)(14,Wt,3,2,`td`,9),Dp(),_p(15,10),oo(16,Zt,2,0,`th`,8)(17,Jt,2,1,`td`,9),Dp(),_p(18,11),oo(19,Kt,2,0,`th`,8)(20,Xt,2,1,`td`,9),Dp(),_p(21,12),oo(22,Yt,2,0,`th`,8)(23,ea,3,5,`td`,9),Dp(),_p(24,13),oo(25,ta,2,0,`th`,8)(26,aa,3,4,`td`,9),Dp(),_p(27,14),oo(28,ia,3,0,`th`,8)(29,ca,13,4,`td`,15),Dp(),oo(30,sa,1,0,`tr`,16)(31,la,1,2,`tr`,17)(32,ba,4,2,`tr`,18),ze(),ke(33,`mat-paginator`,19),Ct(`page`,function(m){return i.cambiarPagina(m)}),ze()()),e&2&&(He(10),ot(i.cargando()?10:-1),He(),yr(`dataSource`,i.usuarios()),He(19),yr(`matHeaderRowDef`,i.columnas),He(),yr(`matRowDefColumns`,i.columnas),He(2),yr(`length`,i.total())(`pageIndex`,i.pagina())(`pageSize`,i.tamanio())(`pageSizeOptions`,uA(8,jt)))},dependencies:[Qt$1,It$1,Ht$1,Bt$1,Pt$2,At$1,Vt,zt$1,Lt$1,jt$1,Ut$1,Wt$1,ne,te,cn,Mt,wt$1,Ot,P,G$2,At,Lt,gt,We,Ke$1,p$1,M,x0],styles:[`.encabezado[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:16px}.encabezado[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-headline-small);font-size:26px;font-weight:500;margin:0}.filtros[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-bottom:16px}.filtros[_ngcontent-%COMP%]   .busqueda[_ngcontent-%COMP%]{flex:1 1 280px}.tabla[_ngcontent-%COMP%]{position:relative;overflow-x:auto;border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:12px;background:var(--%NS%mat-sys-surface-container-lowest)}.tabla[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.tabla[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%]{padding-top:8px;padding-bottom:8px}.fila[_ngcontent-%COMP%]{cursor:pointer}.fila[_ngcontent-%COMP%]:hover{background:var(--%NS%app-hover)}.subtitulo[_ngcontent-%COMP%]{margin:4px 0 0;color:var(--%NS%mat-sys-on-surface-variant)}.vistas[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-bottom:16px;border-bottom:1px solid var(--%NS%mat-sys-outline-variant)}.vistas[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px;height:44px;padding:0 16px;border:0;border-bottom:2px solid transparent;background:none;color:var(--%NS%mat-sys-on-surface-variant);font:var(--%NS%mat-sys-label-large);cursor:pointer}.vistas[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--%NS%app-hover)}.vistas[_ngcontent-%COMP%]   button[aria-selected=true][_ngcontent-%COMP%]{border-bottom-color:var(--%NS%mat-sys-primary);color:var(--%NS%mat-sys-primary)}.vistas[_ngcontent-%COMP%]   .cuenta[_ngcontent-%COMP%]{min-width:22px;padding:0 6px;border-radius:999px;background:var(--%NS%mat-sys-surface-container-high);color:var(--%NS%mat-sys-on-surface-variant);font:var(--%NS%mat-sys-label-small);font-variant-numeric:tabular-nums;text-align:center}.celda-numero[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:15px;font-weight:700;font-variant-numeric:tabular-nums;white-space:nowrap}.celda-caratula[_ngcontent-%COMP%]{min-width:320px}.celda-caratula[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:500;color:var(--%NS%mat-sys-on-surface);text-decoration:none}.celda-caratula[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.secundario[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant)}.numero-tabular[_ngcontent-%COMP%]{font-variant-numeric:tabular-nums}.explicacion[_ngcontent-%COMP%]{margin:0 0 16px;color:var(--%NS%mat-sys-on-surface-variant);max-width:760px}.nota[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant);font:var(--%NS%mat-sys-body-small)}.inactivo[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant)}.acciones-fila[_ngcontent-%COMP%]{text-align:right}`]})};export{Tt as UsuariosLista};