import"./chunk-zSsmmLLa.js";import{Ai as ze,An as dm,Ci as yr,Cr as oO,Dr as ot,F as He,I as I9,Ln as et,M as G,Mr as qC,Nr as qO,O as Fe,On as dC,Or as p,Q as Ky,Qt as WE,S as DN,Tt as Pt,Un as fw,Wt as Un,Yn as hO,_ as Bn,_i as x9,a as $e,ai as v,b as Cp,cn as Yy,d as Ac,dr as ks,ei as uT,er as it,fr as kt$1,ht as O9,jt as S9,l as A9,lr as ke,lt as MN,n as b,o as $m,or as k,pi as wi,qn as gr,t as a,un as _N,vi as xY,wn as cT,wt as Ps,x as Ct$1,xt as Pc}from"./main-LLFQZMTI.js";import{d as ne,f as ta,i as Le,n as He$1,p as te,r as Ke,s as We}from"./chunk-PrwpuhyS.js";import"./chunk-Dd2Yses9.js";import{n as ve,t as ce}from"./chunk-IntFk2AO.js";var yt=new v(`MAT_CARD_CONFIG`);var st=(()=>{class t{appearance;constructor(){let e=p(yt,{optional:!0});this.appearance=e?.appearance||`raised`}static ɵfac=function(a){return new(a||t)};static ɵcmp=(function(){return gr({type:t,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(c,m){c&2&&Pt(`mat-mdc-card-outlined`,m.appearance===`outlined`)(`mdc-card--outlined`,m.appearance===`outlined`)(`mat-mdc-card-filled`,m.appearance===`filled`)(`mdc-card--filled`,m.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(c,m){c&1&&(Ac(),kt$1(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})})()}return t})();var ut=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵdir=k({type:t,selectors:[[`mat-card-title`],[``,`mat-card-title`,``],[``,`matCardTitle`,``]],hostAttrs:[1,`mat-mdc-card-title`]})}return t})();var pt=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵdir=k({type:t,selectors:[[`mat-card-content`]],hostAttrs:[1,`mat-mdc-card-content`]})}return t})();var gt=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵdir=k({type:t,selectors:[[`mat-card-subtitle`],[``,`mat-card-subtitle`,``],[``,`matCardSubtitle`,``]],hostAttrs:[1,`mat-mdc-card-subtitle`]})}return t})();var ft=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵcmp=(function(){let e=[[[``,`mat-card-avatar`,``],[``,`matCardAvatar`,``]],[[`mat-card-title`],[`mat-card-subtitle`],[``,`mat-card-title`,``],[``,`mat-card-subtitle`,``],[``,`matCardTitle`,``],[``,`matCardSubtitle`,``]],`*`];return gr({type:t,selectors:[[`mat-card-header`]],hostAttrs:[1,`mat-mdc-card-header`],ngContentSelectors:[`[mat-card-avatar], [matCardAvatar]`,`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,`*`],decls:4,vars:0,consts:[[1,`mat-mdc-card-header-text`]],template:function(m,Tt){m&1&&(Ac(e),kt$1(0),ks(1,`div`,0),kt$1(2,1),Ps(),kt$1(3,2))},encapsulation:2})})()}return t})();var vt=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵmod=$e({type:t});static ɵinj=Fe({imports:[qC]})}return t})();var Ct=(t,i)=>i.email;function Mt(t,i){t&1&&Bn(0,`mat-progress-bar`,4)}function _t(t,i){if(t&1){let e=MN();ke(0,`button`,10),Ct$1(`click`,function(){let c=Ky(e).$implicit,m=Un(2);return Yy(m.entrarDemo(c.email))}),ke(1,`span`,11),Cp(2),ze(),ke(3,`span`,12),Cp(4),ze()()}if(t&2){let e=i.$implicit,a=Un(2);yr(`disabled`,a.enviando()),He(2),Pc(e.titulo),He(2),Pc(e.detalle)}}function St(t,i){t&1&&(ke(0,`p`,9),Cp(1),ze()),t&2&&(He(),Pc(i))}function wt(t,i){if(t&1&&(ke(0,`p`,6),Cp(1,` Esto es una demostración con datos ficticios: no hay ningún estudio real ni se guarda nada. Elegí con qué rol querés recorrerla. `),ze(),ke(2,`div`,7),_N(3,_t,5,3,`button`,8,Ct),ze(),it(5,St,2,1,`p`,9)),t&2){let e,a=Un();He(3),DN(a.rolesDemo),He(2),ot((e=a.error())?5:-1,e)}}function Dt(t,i){t&1&&(ke(0,`mat-error`),Cp(1,`Email inválido`),ze())}function Nt(t,i){t&1&&(ke(0,`mat-error`),Cp(1,`Ingresá tu email`),ze())}function It(t,i){t&1&&(ke(0,`mat-error`),Cp(1,`Ingresá tu contraseña`),ze())}function Et(t,i){t&1&&(ke(0,`mat-checkbox`,17),cT(),Cp(1,`Recordarme en esta PC`),ze()),t&2&&uT()}function kt(t,i){t&1&&(ke(0,`p`,9),Cp(1),ze()),t&2&&(He(),Pc(i))}function At(t,i){if(t&1){let e=MN();ke(0,`form`,13),Ct$1(`ngSubmit`,function(){Ky(e);let c=Un();return Yy(c.ingresar())}),ke(1,`mat-form-field`,14)(2,`mat-label`),Cp(3,`Email`),ze(),ke(4,`input`,15),cT(),ze(),it(5,Dt,2,0,`mat-error`)(6,Nt,2,0,`mat-error`),ze(),ke(7,`mat-form-field`,14)(8,`mat-label`),Cp(9,`Contraseña`),ze(),ke(10,`input`,16),cT(),ze(),it(11,It,2,0,`mat-error`),ze(),it(12,Et,2,0,`mat-checkbox`,17),it(13,kt,2,1,`p`,9),ke(14,`button`,18),Cp(15,`Ingresar`),ze()()}if(t&2){let e,a=Un();yr(`formGroup`,a.form),He(4),uT(),He(),ot(a.form.controls.email.hasError(`email`)?5:a.form.controls.email.hasError(`required`)?6:-1),He(5),uT(),He(),ot(a.form.controls.password.hasError(`required`)?11:-1),He(),ot(a.puedeRecordar?12:-1),He(),ot((e=a.error())?13:-1,e),He(),yr(`disabled`,a.enviando())}}var ht=class t{auth=p(b);router=p(wi);form=p(A9).group({email:[``,[dm.required,dm.email]],password:[``,dm.required],recordar:[!1]});puedeRecordar=p(a).puedeRecordar;enviando=G(!1);error=G(null);demo=true;rolesDemo=[{email:`admin@demo.test`,titulo:`Administradora`,detalle:`Ve todo: usuarios, cuentas del portal y PCs`},{email:`abogado@demo.test`,titulo:`Abogado`,detalle:`Expedientes, clientes, agenda y modelos`},{email:`asistente@demo.test`,titulo:`Asistente`,detalle:`Ve los expedientes pero no los edita`}];entrarDemo(i){this.form.setValue({email:i,password:`demo`,recordar:!1}),this.ingresar()}ingresar(){if(this.form.invalid||this.enviando()){this.form.markAllAsTouched();return}let{email:i,password:e,recordar:a}=this.form.getRawValue();this.enviando.set(!0),this.error.set(null),this.auth.login(i,e,this.puedeRecordar&&a).pipe(et(()=>this.auth.cargarMe())).subscribe({next:()=>{this.router.navigate([`/inicio`])},error:c=>{this.enviando.set(!1),this.form.controls.password.reset(),this.error.set(ta(c))}})}static ɵfac=function(e){return new(e||t)};static ɵcmp=gr({type:t,selectors:[[`app-login`]],decls:15,vars:2,consts:[[1,`contenedor`],[`appearance`,`outlined`,1,`tarjeta`],[1,`marca`],[`src`,`causario-icono.svg`,`alt`,``],[`mode`,`indeterminate`],[`novalidate`,``,3,`formGroup`],[1,`demo-aviso`],[1,`demo-roles`],[`mat-stroked-button`,``,`type`,`button`,3,`disabled`],[`role`,`alert`,1,`error`],[`mat-stroked-button`,``,`type`,`button`,3,`click`,`disabled`],[1,`demo-rol`],[1,`demo-detalle`],[`novalidate`,``,3,`ngSubmit`,`formGroup`],[`appearance`,`outline`],[`matInput`,``,`type`,`email`,`formControlName`,`email`,`autocomplete`,`username`,`required`,``],[`matInput`,``,`type`,`password`,`formControlName`,`password`,`autocomplete`,`current-password`,`required`,``],[`formControlName`,`recordar`],[`mat-flat-button`,``,`type`,`submit`,3,`disabled`]],template:function(e,a){e&1&&(ke(0,`main`,0)(1,`mat-card`,1)(2,`div`,2),Bn(3,`img`,3),ke(4,`span`),Cp(5,`Causario`),ze()(),ke(6,`mat-card-header`)(7,`mat-card-title`),Cp(8,`Ingresar`),ze(),ke(9,`mat-card-subtitle`),Cp(10,`Ingresá a tu estudio`),ze()(),it(11,Mt,1,0,`mat-progress-bar`,4),ke(12,`mat-card-content`),it(13,wt,6,1)(14,At,16,6,`form`,5),ze()()()),e&2&&(He(11),ot(a.enviando()?11:-1),He(2),ot(a.demo?13:14))},dependencies:[O9,x9,WE,I9,S9,dC,oO,hO,vt,st,pt,ft,gt,ut,xY,fw,$m,qO,He$1,Le,ne,te,ve,ce,We,Ke],styles:[`.contenedor[_ngcontent-%COMP%]{min-height:100%;display:grid;place-items:center;padding:16px;box-sizing:border-box}.tarjeta[_ngcontent-%COMP%]{width:100%;max-width:400px}.marca[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:24px 16px 0;font:var(--%NS%mat-sys-title-large);font-family:"Instrument Sans",var(--%NS%mat-sys-title-large-font),sans-serif;font-weight:600;letter-spacing:-.02em;color:var(--%NS%mat-sys-primary)}.marca[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:32px}form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;margin-top:16px}.error[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error);margin:0 0 8px}.demo-aviso[_ngcontent-%COMP%]{margin:16px 0 12px;padding:12px 16px;border-radius:8px;background:var(--%NS%app-info-container);color:var(--%NS%app-on-info-container)}.demo-roles[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.demo-roles[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:auto;padding:10px 16px;justify-content:flex-start;text-align:left}.demo-roles[_ngcontent-%COMP%]   .demo-rol[_ngcontent-%COMP%], .demo-roles[_ngcontent-%COMP%]   .demo-detalle[_ngcontent-%COMP%]{display:block}.demo-roles[_ngcontent-%COMP%]   .demo-detalle[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant)}`]})};export{ht as Login};