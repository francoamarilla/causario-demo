import{$r as qq,$t as Ic,Ai as zT,An as Qv,Ar as ia,Bt as E,Ct as $b,D as Ta,Dr as gr,Er as g,F as aa,Gr as nD,H as fe,Hr as mc,Ht as En,Jr as o_,Mr as jf,Ni as zv,Nn as Rt,Oi as yc,P as _r,Pr as ji,Si as we,St as $T,Ti as xi,Tt as AS,U as ge,Vn as Tg,Wn as Uf,X as la,_i as ue,_r as co,a as Co,at as qi,bi as vc,bt as $A,cr as _n,d as Fo,dn as Lv,dt as ui,fi as t_,fn as MM,gt as yn,hn as N_,ht as wr,i as Cc,ii as r_,in as Ja,j as Va,jr as jT,jt as Bf,ki as ye,kn as QT,kt as BT,mn as NS,o as Da,on as Jt,pi as te,pt as vn,r as Bt,s as Di,sr as _g,u as Fa,ui as sf,v as La,vr as dD,wi as xf,zr as ki}from"./main-GROSGNFX.js";import{a as Mn,c as Yt,d as ne,i as Le,l as cn,n as He,p as te$1,t as Gt}from"./chunk-Zdnxfsyz.js";import{I as ui$1,c as Er,k as mt$1,s as Dr}from"./chunk-DJvbOTI2.js";import{t as c}from"./chunk-BYP7nhix.js";import{n as wt,t as Mt}from"./chunk-DVwEmGl_.js";import{t as g$1}from"./chunk-B76QQSwr.js";import{i as o,t as e}from"./chunk-BzR9rF9p.js";import{a as je,c as ze,i as Ve,n as Be,r as Re,s as w,t as $t}from"./chunk-hgCZAQo1.js";var at=(t,r)=>r.valor;function it(t,r){t&1&&(Ja(0,`mat-error`),N_(1,`Ingresá el nombre`),xf())}function ot(t,r){if(t&1&&(Ja(0,`div`,2)(1,`mat-form-field`)(2,`mat-label`),N_(3,`Nombre`),xf(),Ja(4,`input`,7),NS(),xf(),jT(5,it,2,0,`mat-error`),xf(),Ja(6,`mat-form-field`)(7,`mat-label`),N_(8,`Apellido`),xf(),Ja(9,`input`,8),NS(),xf()()()),t&2){let e=t_();$b(4),AS(),$b(),BT(e.form.controls.nombre.hasError(`required`)?5:-1),$b(4),AS()}}function rt(t,r){t&1&&(Ja(0,`mat-error`),N_(1,`Ingresá el email`),xf())}function nt(t,r){t&1&&(Ja(0,`mat-error`),N_(1,`El email no es válido`),xf())}function dt(t,r){if(t&1&&(Ja(0,`mat-form-field`)(1,`mat-label`),N_(2,`Email`),xf(),Ja(3,`input`,9),NS(),xf(),Ja(4,`mat-hint`),N_(5,`Con este email entra al sistema. Después no se puede cambiar.`),xf(),jT(6,rt,2,0,`mat-error`)(7,nt,2,0,`mat-error`),xf()),t&2){let e=t_();$b(3),AS(),$b(3),BT(e.form.controls.email.hasError(`required`)?6:e.form.controls.email.hasError(`email`)?7:-1)}}function ct(t,r){if(t&1&&(Ja(0,`p`,3),N_(1),xf()),t&2){let e=t_();$b(),Bf(`Email: `,e.datos.usuario.email,` (no se puede cambiar)`)}}function lt(t,r){if(t&1&&(Ja(0,`mat-option`,11),N_(1),xf()),t&2){let e=r.$implicit;Lv(`value`,e.valor),$b(),nD(e.etiqueta)}}function st(t,r){t&1&&N_(0,` No podés cambiar tu propio rol. `)}function mt(t,r){if(t&1&&N_(0),t&2){let e=t_(2);Bf(` `,e.descripcionRol(),` `)}}function ut(t,r){if(t&1&&(Ja(0,`mat-form-field`)(1,`mat-label`),N_(2,`Rol`),xf(),Ja(3,`mat-select`,10),NS(),$T(4,lt,2,2,`mat-option`,11,at),xf(),Ja(6,`mat-hint`),jT(7,st,1,0)(8,mt,1,1),xf()()),t&2){let e=t_();$b(3),AS(),$b(),zT(e.roles),$b(3),BT(e.datos.esUnoMismo?7:8)}}function bt(t,r){t&1&&(Ja(0,`p`,3),N_(1,` Contraseña inicial: pasásela a la persona por un medio seguro (en persona o por teléfono, no por el mismo mail). `),xf())}function _t(t,r){t&1&&(Ja(0,`mat-error`),N_(1,`Ingresá la contraseña`),xf())}function pt(t,r){if(t&1&&(Ja(0,`mat-error`),N_(1),xf()),t&2){let e=t_(2);$b(),Bf(`Tiene que tener al menos `,e.minimo,` caracteres`)}}function ht(t,r){t&1&&(Ja(0,`mat-error`),N_(1,`Es demasiado larga`),xf())}function vt(t,r){if(t&1){let e=QT();jT(0,bt,2,0,`p`,3),Ja(1,`mat-form-field`)(2,`mat-label`),N_(3,`Contraseña`),xf(),Ja(4,`input`,12),NS(),xf(),Ja(5,`button`,13),yc(`click`,function(){Tg(e);let s=t_();return _g(s.verPassword.set(!s.verPassword()))}),Ja(6,`mat-icon`),N_(7),xf()(),Ja(8,`mat-hint`),N_(9),xf(),jT(10,_t,2,0,`mat-error`)(11,pt,2,1,`mat-error`)(12,ht,2,0,`mat-error`),xf(),Ja(13,`div`)(14,`button`,14),yc(`click`,function(){Tg(e);let s=t_();return _g(s.generar())}),Ja(15,`mat-icon`),N_(16,`casino`),xf(),N_(17,` Generar una al azar `),xf()()}if(t&2){let e=t_();BT(e.pideDatos?0:-1),$b(4),Lv(`type`,e.verPassword()?`text`:`password`),AS(),$b(),ki(`aria-label`,e.verPassword()?`Ocultar contraseña`:`Mostrar contraseña`),$b(2),nD(e.verPassword()?`visibility_off`:`visibility`),$b(2),Bf(`Mínimo `,e.minimo,` caracteres.`),$b(),BT(e.form.controls.password.hasError(`required`)?10:e.form.controls.password.hasError(`minlength`)?11:e.form.controls.password.hasError(`maxlength`)?12:-1)}}var Xe=10;var ft=72;var L=`ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789`;function gt(t=16){let r=256-256%L.length,e=``;for(;e.length<t;)for(let a of crypto.getRandomValues(new Uint8Array(t*2)))a<r&&e.length<t&&(e+=L[a%L.length]);return e}var Je=class t{datos=g($t);ref=g(w);roles=e;minimo=10;pideDatos=this.datos.modo!==`password`;pideEmail=this.datos.modo===`alta`;pidePassword=this.datos.modo!==`edicion`;verPassword=te(!1);titulo=this.datos.modo===`alta`?`Nuevo usuario`:this.datos.modo===`edicion`?`Editar usuario`:`Nueva contrase\xF1a para ${this.datos.usuario?o(this.datos.usuario):``}`;form=g(Va).group({nombre:[this.datos.usuario?.nombre??``,this.pideDatos?[Bt.required,Bt.maxLength(100)]:[]],apellido:[this.datos.usuario?.apellido??``,Bt.maxLength(100)],email:[``,this.pideEmail?[Bt.required,Bt.email,Bt.maxLength(254)]:[]],rol:[{value:this.datos.usuario?.rol??`abogado`,disabled:!!this.datos.esUnoMismo}],password:[``,this.pidePassword?[Bt.required,Bt.minLength(10),Bt.maxLength(72)]:[]]});descripcionRol(){let r=this.form.controls.rol.value;return e.find(e=>e.valor===r)?.descripcion??``}generar(){this.form.controls.password.setValue(gt()),this.verPassword.set(!0)}aceptar(){if(this.form.invalid){this.form.markAllAsTouched();return}let r=this.form.getRawValue();this.ref.close({nombre:r.nombre.trim(),apellido:r.apellido.trim()||null,email:r.email.trim(),rol:r.rol,password:r.password}),this.form.reset()}static ɵfac=function(e){return new(e||t)};static ɵcmp=xi({type:t,selectors:[[`app-usuario-dialog`]],decls:14,vars:6,consts:[[`mat-dialog-title`,``],[`novalidate`,``,`autocomplete`,`off`,3,`ngSubmit`,`formGroup`],[1,`fila`],[1,`nota`],[`align`,`end`],[`mat-button`,``,`type`,`button`,`mat-dialog-close`,``],[`mat-flat-button`,``,`type`,`submit`],[`matInput`,``,`formControlName`,`nombre`,`required`,``],[`matInput`,``,`formControlName`,`apellido`],[`matInput`,``,`type`,`email`,`formControlName`,`email`,`autocomplete`,`off`,`required`,``],[`formControlName`,`rol`],[3,`value`],[`matInput`,``,`formControlName`,`password`,`autocomplete`,`new-password`,`required`,``,3,`type`],[`mat-icon-button`,``,`matSuffix`,``,`type`,`button`,3,`click`],[`mat-button`,``,`type`,`button`,3,`click`]],template:function(e,a){e&1&&(Ja(0,`h2`,0),N_(1),xf(),Ja(2,`form`,1),yc(`ngSubmit`,function(){return a.aceptar()}),Ja(3,`mat-dialog-content`),jT(4,ot,10,1,`div`,2),jT(5,dt,8,1,`mat-form-field`)(6,ct,2,1,`p`,3),jT(7,ut,9,1,`mat-form-field`),jT(8,vt,18,6),xf(),Ja(9,`mat-dialog-actions`,4)(10,`button`,5),N_(11,`Cancelar`),xf(),Ja(12,`button`,6),N_(13,`Guardar`),xf()()()),e&2&&($b(),nD(a.titulo),$b(),Lv(`formGroup`,a.form),$b(2),BT(a.pideDatos?4:-1),$b(),BT(a.pideEmail?5:a.datos.usuario&&a.pideDatos?6:-1),$b(2),BT(a.pideDatos?7:-1),$b(),BT(a.pidePassword?8:-1))},dependencies:[La,Ta,ui,Da,Fa,Di,Co,Fo,Ve,Re,Be,ze,je,Cc,wr,vn,yn,aa,la,He,Le,Dr,Er,mt$1,ne,te$1,cn,Mt,wt,c],styles:[`mat-dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;min-width:min(440px,80vw);padding-top:8px}.fila[_ngcontent-%COMP%]{display:flex;gap:12px;flex-wrap:wrap}.fila[_ngcontent-%COMP%] > mat-form-field[_ngcontent-%COMP%]{flex:1 1 180px}.nota[_ngcontent-%COMP%]{margin:0 0 12px;color:var(--%NS%mat-sys-on-surface-variant);font:var(--%NS%mat-sys-body-small)}`]})};var R=class{source;value;constructor(r,e){this.source=r,this.value=e}};var yt={provide:fe,useExisting:ia(()=>xt),multi:!0};var Ke=new E(`MatRadioGroup`);var kt=new E(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var xt=(()=>{class t{_changeDetector=g(co);_value=null;_name=g(ge).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new ye;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(a=>{a.checked=this.value===a.value,a.checked&&(this._selected=a)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new R(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(a){return new(a||t)};static ɵdir=Jt({type:t,selectors:[[`mat-radio-group`]],contentQueries:function(a,s,f){if(a&1&&vc(f,Ye,5),a&2){let m;jf(m=Uf())&&(s._radios=m)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,ji],required:[2,`required`,`required`,ji],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ji]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[dD([yt,{provide:Ke,useExisting:t}])]})}return t})();var Ye=(()=>{class t{_elementRef=g(Rt);_changeDetector=g(co);_focusMonitor=g(qi);_radioDispatcher=g(ui$1);_defaultOptions=g(kt,{optional:!0});_ngZone=g(we);_renderer=g(_n);_uniqueId=g(ge).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new ye;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=_r();_injector=g(ue);constructor(){g($A).load(Gt);let e=g(Ke,{optional:!0}),a=g(new Ic(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,a&&(this.tabIndex=MM(a,0))}focus(e,a){a?this._focusMonitor.focusVia(this._inputElement,a,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,a)=>{e!==this.id&&a===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new R(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let a=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),a&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,a;if(!e||!e.selected||this.disabled?a=this.tabIndex:a=e.selected===this?this.tabIndex:-1,a!==this._previousTabIndex){let s=this._inputElement?.nativeElement;s&&(s.setAttribute(`tabindex`,a+``),this._previousTabIndex=a,sf(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===s&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===s&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(a){return new(a||t)};static ɵcmp=(function(){let e=[`input`],a=[`formField`];return xi({type:t,selectors:[[`mat-radio-button`]],viewQuery:function(m,n){if(m&1&&zv(e,5)(a,7,Rt),m&2){let y;jf(y=Uf())&&(n._inputElement=y.first),jf(y=Uf())&&(n._rippleTrigger=y.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(m,n){m&1&&yc(`focus`,function(){return n._inputElement.nativeElement.focus()}),m&2&&(ki(`id`,n.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),Qv(`mat-primary`,n.color===`primary`)(`mat-accent`,n.color===`accent`)(`mat-warn`,n.color===`warn`)(`mat-mdc-radio-checked`,n.checked)(`mat-mdc-radio-disabled`,n.disabled)(`mat-mdc-radio-disabled-interactive`,n.disabledInteractive)(`_mat-animation-noopable`,n._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,ji],tabIndex:[2,`tabIndex`,`tabIndex`,f=>f==null?0:MM(f)],checked:[2,`checked`,`checked`,ji],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,ji],required:[2,`required`,`required`,ji],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ji]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:[`*`],decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(m,n){m&1&&(r_(),Ja(0,`label`,2,0)(2,`span`,3),mc(3,`span`,4),Ja(4,`input`,5,1),yc(`change`,function(et){return n._onInputInteraction(et)}),xf(),Ja(6,`span`,6),mc(7,`span`,7)(8,`span`,8),xf(),Ja(9,`span`,9),mc(10,`span`,10),xf()(),Ja(11,`span`,11),o_(12),xf()()),m&2&&(Lv(`labelPosition`,n.labelPosition)(`for`,n.inputId),$b(2),Qv(`mdc-radio--disabled`,n.disabled),$b(2),Lv(`id`,n.inputId)(`checked`,n.checked)(`disabled`,n.disabled&&!n.disabledInteractive)(`required`,n.required),ki(`name`,n.name)(`value`,n.value)(`aria-label`,n.ariaLabel)(`aria-labelledby`,n.ariaLabelledby)(`aria-describedby`,n.ariaDescribedby)(`aria-disabled`,n.disabled&&n.disabledInteractive?`true`:null),$b(5),Lv(`matRippleTrigger`,n._rippleTrigger.nativeElement)(`matRippleDisabled`,n._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[Mn,g$1],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})})()}return t})();var ma=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵmod=gr({type:t});static ɵinj=En({imports:[Yt,Ye,qq]})}return t})();export{xt as i,Ye as n,ma as r,Je as t};