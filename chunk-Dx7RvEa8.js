import{Ai as zT,Bt as E,Cn as P,Ct as $b,Dn as Pv,Dr as gr,Er as g,Gn as Ug,Gr as nD,Hr as mc,Ht as En,Mn as Ro,Nr as jg,Oi as yc,Pr as ji,Qn as X,St as $T,Ti as xi,U as ge,Vn as Tg,Wt as G,Zt as HT,_r as co,dn as Lv,fi as t_,fn as MM,gi as ty,hn as N_,ht as wr,in as Ja,jr as jT,jt as Bf,ki as ye,kn as QT,kt as BT,lr as a_,sr as _g,wi as xf,zr as ki}from"./main-GROSGNFX.js";import{d as ne,l as cn}from"./chunk-Zdnxfsyz.js";import{c as Er,k as mt,s as Dr}from"./chunk-DJvbOTI2.js";import{t as c}from"./chunk-BYP7nhix.js";import{t as It}from"./chunk-DWK423pH.js";var w=(()=>{class i{changes=new X;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(e,a,o)=>{if(o==0||a==0)return`0 of ${o}`;o=Math.max(o,0);let p=e*a,b=p<o?Math.min(p+a,o):p+a;return`${p+1} \u2013 ${b} of ${o}`};static ɵfac=function(a){return new(a||i)};static ɵprov=G({token:i,factory:i.ɵfac})}return i})();var pt=50;var dt=new E(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var gt=(()=>{class i{_intl=g(w);_changeDetectorRef=g(co);_formFieldAppearance;_pageSizeLabelId=g(ge).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new Ro(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(a=>MM(a,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new ye;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,a=g(dt,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),a){let{pageSize:o,pageSizeOptions:p,hidePageSize:b,showFirstLastButtons:T}=a;o!=null&&(this._pageSize=o),p!=null&&(this._pageSizeOptions=p),b!=null&&(this.hidePageSize=b),T!=null&&(this.showFirstLastButtons=T)}this._formFieldAppearance=a?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let a=this.pageIndex*this.pageSize,o=this.pageIndex;this.pageIndex=Math.floor(a/e)||0,this.pageSize=e,this._emitPageEvent(o)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:pt),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,a)=>e-a),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let a=this.pageIndex;e!==a&&(this.pageIndex=e,this._emitPageEvent(a))}_buttonClicked(e,a){a||this._navigate(e)}static ɵfac=function(a){return new(a||i)};static ɵcmp=(function(){function e(n,g){if(n&1&&(Ja(0,`mat-option`,17),N_(1),xf()),n&2){let t=g.$implicit;Lv(`value`,t),$b(),Bf(` `,t,` `)}}function a(n,g){if(n&1){let t=QT();Ja(0,`mat-form-field`,14)(1,`mat-select`,16,0),yc(`selectionChange`,function(d){Tg(t);let st=t_(2);return _g(st._changePageSize(d.value))}),$T(3,e,2,2,`mat-option`,17,HT),xf(),Ja(5,`div`,18),yc(`click`,function(){Tg(t);let d=a_(2);return _g(d.open())}),xf()()}if(n&2){let t=t_(2);Lv(`appearance`,t._formFieldAppearance)(`color`,t.color),$b(),Lv(`value`,t.pageSize)(`disabled`,t.disabled),Pv(`aria-labelledby`,t._pageSizeLabelId),Lv(`panelClass`,t.selectConfig.panelClass||``)(`disableOptionCentering`,t.selectConfig.disableOptionCentering),$b(2),zT(t._displayedPageSizeOptions)}}function o(n,g){if(n&1&&(Ja(0,`div`,15),N_(1),xf()),n&2){let t=t_(2);$b(),nD(t.pageSize)}}function p(n,g){if(n&1&&(Ja(0,`div`,3)(1,`div`,13),N_(2),xf(),jT(3,a,6,7,`mat-form-field`,14),jT(4,o,2,1,`div`,15),xf()),n&2){let t=t_();$b(),ki(`id`,t._pageSizeLabelId),$b(),Bf(` `,t._intl.itemsPerPageLabel,` `),$b(),BT(t._displayedPageSizeOptions.length>1?3:-1),$b(),BT(t._displayedPageSizeOptions.length<=1?4:-1)}}function b(n,g){if(n&1){let t=QT();Ja(0,`button`,19),yc(`click`,function(){Tg(t);let d=t_();return _g(d._buttonClicked(0,d._previousButtonsDisabled()))}),jg(),Ja(1,`svg`,8),mc(2,`path`,20),xf()()}if(n&2){let t=t_();Lv(`matTooltip`,t._intl.firstPageLabel)(`matTooltipDisabled`,t._previousButtonsDisabled())(`disabled`,t._previousButtonsDisabled())(`tabindex`,t._previousButtonsDisabled()?-1:null),ki(`aria-label`,t._intl.firstPageLabel)}}function T(n,g){if(n&1){let t=QT();Ja(0,`button`,21),yc(`click`,function(){Tg(t);let d=t_();return _g(d._buttonClicked(d.getNumberOfPages()-1,d._nextButtonsDisabled()))}),jg(),Ja(1,`svg`,8),mc(2,`path`,22),xf()()}if(n&2){let t=t_();Lv(`matTooltip`,t._intl.lastPageLabel)(`matTooltipDisabled`,t._nextButtonsDisabled())(`disabled`,t._nextButtonsDisabled())(`tabindex`,t._nextButtonsDisabled()?-1:null),ki(`aria-label`,t._intl.lastPageLabel)}}return xi({type:i,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,MM],length:[2,`length`,`length`,MM],pageSize:[2,`pageSize`,`pageSize`,MM],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,ji],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,ji],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,ji]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(g,t){g&1&&(Ja(0,`div`,1)(1,`div`,2),jT(2,p,5,4,`div`,3),Ja(3,`div`,4)(4,`div`,5),N_(5),xf(),jT(6,b,3,5,`button`,6),Ja(7,`button`,7),yc(`click`,function(){return t._buttonClicked(t.pageIndex-1,t._previousButtonsDisabled())}),jg(),Ja(8,`svg`,8),mc(9,`path`,9),xf()(),Ug(),Ja(10,`button`,10),yc(`click`,function(){return t._buttonClicked(t.pageIndex+1,t._nextButtonsDisabled())}),jg(),Ja(11,`svg`,8),mc(12,`path`,11),xf()(),jT(13,T,3,5,`button`,12),xf()()()),g&2&&($b(2),BT(t.hidePageSize?-1:2),$b(3),Bf(` `,t._intl.getRangeLabel(t.pageIndex,t.pageSize,t.length),` `),$b(),BT(t.showFirstLastButtons?6:-1),$b(),Lv(`matTooltip`,t._intl.previousPageLabel)(`matTooltipDisabled`,t._previousButtonsDisabled())(`disabled`,t._previousButtonsDisabled())(`tabindex`,t._previousButtonsDisabled()?-1:null),ki(`aria-label`,t._intl.previousPageLabel),$b(3),Lv(`matTooltip`,t._intl.nextPageLabel)(`matTooltipDisabled`,t._nextButtonsDisabled())(`disabled`,t._nextButtonsDisabled())(`tabindex`,t._nextButtonsDisabled()?-1:null),ki(`aria-label`,t._intl.nextPageLabel),$b(3),BT(t.showFirstLastButtons?13:-1))},dependencies:[wr,Er,mt,cn,It],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-paginator-container-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-paginator-container-background-color, var(--%NS%mat-sys-surface));
  font-family: var(--%NS%mat-paginator-container-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-paginator-container-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-paginator-container-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-paginator-container-text-weight, var(--%NS%mat-sys-body-small-weight));
  letter-spacing: var(--%NS%mat-paginator-container-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  --%NS%mat-form-field-container-height: var(--%NS%mat-paginator-form-field-container-height, 40px);
  --%NS%mat-form-field-container-vertical-padding: var(--%NS%mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--%NS%mat-paginator-select-trigger-text-size, var(--%NS%mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--%NS%mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--%NS%mat-paginator-enabled-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--%NS%mat-paginator-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--%NS%mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
  height: var(--%NS%mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})})()}return i})();var Lt=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=gr({type:i});static ɵinj=En({imports:[ne,Dr,c,gt]})}return i})();var rt=class i extends w{itemsPerPageLabel=`Por página:`;nextPageLabel=`Página siguiente`;previousPageLabel=`Página anterior`;firstPageLabel=`Primera página`;lastPageLabel=`Última página`;getRangeLabel=(_,e,a)=>{if(a===0||e===0)return`0 de ${a}`;return`${_*e+1} \u2013 ${Math.min((_+1)*e,a)} de ${a}`};static ɵfac=(()=>{let _;return function(a){return(_||(_=ty(i)))(a||i)}})();static ɵprov=P({token:i,factory:i.ɵfac})};export{w as i,gt as n,rt as r,Lt as t};