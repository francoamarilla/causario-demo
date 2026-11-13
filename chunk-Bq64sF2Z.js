import{n as s,t as r}from"./chunk-zSsmmLLa.js";import{$r as qq,$t as Ic,A as V,Ai as zT,An as Qv,Ar as ia,Bn as T,Bt as E,Cn as P,Cr as fc,Ct as $b,Di as xv,Dr as gr,Er as g,Fn as Rv,Fr as jq,Gn as Ug,Gr as nD,H as fe,Hr as mc,Ht as En$1,I as an,Ir as k,Jr as o_,Lr as k_,Mr as jf,N as Xo,Ni as zv,Nn as Rt,Nr as jg,Nt as Bv,Oi as yc,Or as iD,P as _r,Pr as ji,Qn as X,Qt as Hv,Rr as kf,Si as we,St as $T,Ti as xi,U as ge,Ut as Fv,V as ea$1,Vn as Tg,Vt as Ee,Wn as Uf,Wt as G,Y as ko,_i as ue,_r as co,bi as vc,bn as Of,bt as $A,cr as _n,dn as Lv,dr as ao,ei as qs,er as Y,fi as t_,gi as ty,gn as Nn$1,h as J$2,hn as N_,ii as r_,in as Ja,jr as jT,jt as Bf,ki as ye,kn as QT,kt as BT,l as Er,ni as rD,nr as Yv,on as Jt$1,pi as te,pn as Mn,r as Bt,rr as ZA,si as sD,sr as _g,tn as J$1,tt as or,ui as sf,vr as dD,wi as xf,wt as $e,xt as $I,y as Ll,yi as v_,zr as ki}from"./main-GROSGNFX.js";import{d as ne,l as cn,o as Qt,p as te$1,t as Gt}from"./chunk-Zdnxfsyz.js";import{A as ot$1,D as me$1,E as lt$1,N as rt$1,a as Ce,g as Tt,h as Rt$1,l as Et,m as Pe,n as An,r as Be,v as Ve}from"./chunk-DJvbOTI2.js";import{t as It}from"./chunk-DWK423pH.js";var ce=new E(`MAT_DATE_LOCALE`,{providedIn:`root`,factory:()=>g(ao)});var U=`Method not implemented`;var v=class{locale;_localeChanges=new X;localeChanges=this._localeChanges;setTime(o,e,t,a){throw new Error(U)}getHours(o){throw new Error(U)}getMinutes(o){throw new Error(U)}getSeconds(o){throw new Error(U)}parseTime(o,e){throw new Error(U)}addSeconds(o,e){throw new Error(U)}getValidDateOrNull(o){return this.isDateInstance(o)&&this.isValid(o)?o:null}deserialize(o){return o==null||this.isDateInstance(o)&&this.isValid(o)?o:this.invalid()}setLocale(o){this.locale=o,this._localeChanges.next()}compareDate(o,e){return this.getYear(o)-this.getYear(e)||this.getMonth(o)-this.getMonth(e)||this.getDate(o)-this.getDate(e)}compareTime(o,e){return this.getHours(o)-this.getHours(e)||this.getMinutes(o)-this.getMinutes(e)||this.getSeconds(o)-this.getSeconds(e)}sameDate(o,e){if(o&&e){let t=this.isValid(o),a=this.isValid(e);return t&&a?!this.compareDate(o,e):t==a}return o==e}sameTime(o,e){if(o&&e){let t=this.isValid(o),a=this.isValid(e);return t&&a?!this.compareTime(o,e):t==a}return o==e}clampDate(o,e,t){return e&&this.compareDate(o,e)<0?e:t&&this.compareDate(o,t)>0?t:o}};var B=new E(`mat-date-formats`);var ee=(()=>{class r{changes=new X;calendarLabel=`Calendar`;openCalendarLabel=`Open calendar`;closeCalendarLabel=`Close calendar`;prevMonthLabel=`Previous month`;nextMonthLabel=`Next month`;prevYearLabel=`Previous year`;nextYearLabel=`Next year`;prevMultiYearLabel=`Previous 24 years`;nextMultiYearLabel=`Next 24 years`;switchToMonthViewLabel=`Choose date`;switchToMultiYearViewLabel=`Choose month and year`;startDateLabel=`Start date`;endDateLabel=`End date`;comparisonDateLabel=`Comparison range`;formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static ɵfac=function(t){return new(t||r)};static ɵprov=G({token:r,factory:r.ɵfac})}return r})();var ga=0;var me=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=ga++;cssClasses;constructor(o,e,t,a,n,i=o,c){this.value=o,this.displayValue=e,this.ariaLabel=t,this.enabled=a,this.compareValue=i,this.rawValue=c,this.cssClasses=n instanceof Set?Array.from(n):n}};var ba={passive:!1,capture:!0};var Ne={passive:!0,capture:!0};var Xt={passive:!0};var J=(()=>{class r{_elementRef=g(Rt);_ngZone=g(we);_platform=g(V);_intl=g(ee);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new ye;previewChange=new ye;activeDateChange=new ye;dragStarted=new ye;dragEnded=new ye;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=g(ue);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=g(_n),t=g(ge);this._startDateLabelId=t.getId(`mat-calendar-body-start-`),this._endDateLabelId=t.getId(`mat-calendar-body-end-`),this._comparisonStartDateLabelId=t.getId(`mat-calendar-body-comparison-start-`),this._comparisonEndDateLabelId=t.getId(`mat-calendar-body-comparison-end-`),g($A).load(Gt),this._ngZone.runOutsideAngular(()=>{let a=this._elementRef.nativeElement,n=[e.listen(a,`touchmove`,this._touchmoveHandler,ba),e.listen(a,`mouseenter`,this._enterHandler,Ne),e.listen(a,`focus`,this._enterHandler,Ne),e.listen(a,`mouseleave`,this._leaveHandler,Ne),e.listen(a,`blur`,this._leaveHandler,Ne),e.listen(a,`mousedown`,this._mousedownHandler,Xt),e.listen(a,`touchstart`,this._mousedownHandler,Xt)];this._platform.isBrowser&&n.push(e.listen(`window`,`mouseup`,this._mouseupHandler),e.listen(`window`,`touchend`,this._touchendHandler)),this._eventCleanups=n})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:a,numCols:n}=this;(e.rows||t)&&(this._firstRowOffset=a&&a.length&&a[0].length?n-a[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/n}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/n}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let a=e*this.numCols+t;return e&&(a-=this._firstRowOffset),a==this.activeCell}_focusActiveCell(e=!0){sf(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(`.mat-calendar-body-active`);t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return rt(e,this.startValue,this.endValue)}_isRangeEnd(e){return it(e,this.startValue,this.endValue)}_isInRange(e){return ot(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return rt(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,a){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let n=this.rows[t][a-1];if(!n){let i=this.rows[t-1];n=i&&i[i.length-1]}return n&&!this._isRangeEnd(n.compareValue)}_isComparisonBridgeEnd(e,t,a){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let n=this.rows[t][a+1];if(!n){let i=this.rows[t+1];n=i&&i[0]}return n&&!this._isRangeStart(n.compareValue)}_isComparisonEnd(e){return it(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return ot(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return rt(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return it(e,this.previewStart,this.previewEnd)}_isInPreview(e){return ot(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type===`focus`){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=Jt(e),a=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),nt(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:a?.enabled?a:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!==`blur`&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=nt(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(`.mat-calendar-body`)===this._elementRef.nativeElement&&this._ngZone.run(()=>{let a=this._getCellFromElement(t);this.dragEnded.emit({value:a?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=Jt(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=nt(e);if(t){let a=t.getAttribute(`data-mat-row`),n=t.getAttribute(`data-mat-col`);if(a&&n)return this.rows[parseInt(a)]?.[parseInt(n)]||null}return null}static ɵfac=function(t){return new(t||r)};static ɵcmp=(function(){function e(s,p){return this._trackRow(p)}let t=(s,p)=>p.id;function a(s,p){if(s&1&&(Of(0,`tr`,0)(1,`td`,3),N_(2),kf()()),s&2){let d=t_();$b(),Yv(`padding-top`,d._cellPadding)(`padding-bottom`,d._cellPadding),ki(`colspan`,d.numCols),$b(),Bf(` `,d.label,` `)}}function n(s,p){if(s&1&&(Of(0,`td`,3),N_(1),kf()),s&2){let d=t_(2);Yv(`padding-top`,d._cellPadding)(`padding-bottom`,d._cellPadding),ki(`colspan`,d._firstRowOffset),$b(),Bf(` `,d._firstRowOffset>=d.labelMinRequiredCells?d.label:``,` `)}}function i(s,p){if(s&1){let d=QT();Of(0,`td`,6)(1,`button`,7),Hv(`click`,function(I){let _=Tg(d).$implicit,Pe=t_(2);return _g(Pe._cellClicked(_,I))})(`focus`,function(I){let _=Tg(d).$implicit,Pe=t_(2);return _g(Pe._emitActiveDateChange(_,I))}),Of(2,`span`,8),N_(3),kf(),Fv(4,`span`,9),kf()()}if(s&2){let d=p.$implicit,m=p.$index,I=t_().$index,_=t_();Yv(`width`,_._cellWidth)(`padding-top`,_._cellPadding)(`padding-bottom`,_._cellPadding),ki(`data-mat-row`,I)(`data-mat-col`,m),$b(),v_(d.cssClasses),Qv(`mat-calendar-body-disabled`,!d.enabled)(`mat-calendar-body-active`,_._isActiveCell(I,m))(`mat-calendar-body-range-start`,_._isRangeStart(d.compareValue))(`mat-calendar-body-range-end`,_._isRangeEnd(d.compareValue))(`mat-calendar-body-in-range`,_._isInRange(d.compareValue))(`mat-calendar-body-comparison-bridge-start`,_._isComparisonBridgeStart(d.compareValue,I,m))(`mat-calendar-body-comparison-bridge-end`,_._isComparisonBridgeEnd(d.compareValue,I,m))(`mat-calendar-body-comparison-start`,_._isComparisonStart(d.compareValue))(`mat-calendar-body-comparison-end`,_._isComparisonEnd(d.compareValue))(`mat-calendar-body-in-comparison-range`,_._isInComparisonRange(d.compareValue))(`mat-calendar-body-preview-start`,_._isPreviewStart(d.compareValue))(`mat-calendar-body-preview-end`,_._isPreviewEnd(d.compareValue))(`mat-calendar-body-in-preview`,_._isInPreview(d.compareValue)),Bv(`tabIndex`,_._isActiveCell(I,m)?0:-1),ki(`aria-label`,d.ariaLabel)(`aria-disabled`,!d.enabled||null)(`aria-pressed`,_._isSelected(d.compareValue))(`aria-current`,_.todayValue===d.compareValue?`date`:null)(`aria-describedby`,_._getDescribedby(d.compareValue)),$b(),Qv(`mat-calendar-body-selected`,_._isSelected(d.compareValue))(`mat-calendar-body-comparison-identical`,_._isComparisonIdentical(d.compareValue))(`mat-calendar-body-today`,_.todayValue===d.compareValue),$b(),Bf(` `,d.displayValue,` `)}}function c(s,p){if(s&1&&(Of(0,`tr`,1),jT(1,n,2,6,`td`,4),$T(2,i,5,49,`td`,5,t),kf()),s&2){let d=p.$implicit,m=p.$index,I=t_();$b(),BT(m===0&&I._firstRowOffset?1:-1),$b(),zT(d)}}return xi({type:r,selectors:[[``,`mat-calendar-body`,``]],hostAttrs:[1,`mat-calendar-body`],inputs:{label:`label`,rows:`rows`,todayValue:`todayValue`,startValue:`startValue`,endValue:`endValue`,labelMinRequiredCells:`labelMinRequiredCells`,numCols:`numCols`,activeCell:`activeCell`,isRange:`isRange`,cellAspectRatio:`cellAspectRatio`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,previewStart:`previewStart`,previewEnd:`previewEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`},outputs:{selectedValueChange:`selectedValueChange`,previewChange:`previewChange`,activeDateChange:`activeDateChange`,dragStarted:`dragStarted`,dragEnded:`dragEnded`},exportAs:[`matCalendarBody`],features:[Mn],decls:11,vars:11,consts:[[`aria-hidden`,`true`],[`role`,`row`],[1,`mat-calendar-body-hidden-label`,3,`id`],[1,`mat-calendar-body-label`],[1,`mat-calendar-body-label`,3,`paddingTop`,`paddingBottom`],[`role`,`gridcell`,1,`mat-calendar-body-cell-container`,3,`width`,`paddingTop`,`paddingBottom`],[`role`,`gridcell`,1,`mat-calendar-body-cell-container`],[`type`,`button`,1,`mat-calendar-body-cell`,3,`click`,`focus`,`tabindex`],[1,`mat-calendar-body-cell-content`,`mat-focus-indicator`],[`aria-hidden`,`true`,1,`mat-calendar-body-cell-preview`]],template:function(p,d){p&1&&(jT(0,a,3,6,`tr`,0),$T(1,c,4,1,`tr`,1,e,!0),Of(3,`span`,2),N_(4),kf(),Of(5,`span`,2),N_(6),kf(),Of(7,`span`,2),N_(8),kf(),Of(9,`span`,2),N_(10),kf()),p&2&&(BT(d._firstRowOffset<d.labelMinRequiredCells?0:-1),$b(),zT(d.rows),$b(2),Bv(`id`,d._startDateLabelId),$b(),Bf(` `,d.startDateAccessibleName,`
`),$b(),Bv(`id`,d._endDateLabelId),$b(),Bf(` `,d.endDateAccessibleName,`
`),$b(),Bv(`id`,d._comparisonStartDateLabelId),$b(),rD(` `,d.comparisonDateAccessibleName,` `,d.startDateAccessibleName,`
`),$b(),Bv(`id`,d._comparisonEndDateLabelId),$b(),rD(` `,d.comparisonDateAccessibleName,` `,d.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--%NS%mat-datepicker-calendar-date-today-outline-color, var(--%NS%mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--%NS%mat-datepicker-calendar-body-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-body-label-text-weight, var(--%NS%mat-sys-title-small-weight));
  color: var(--%NS%mat-datepicker-calendar-body-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--%NS%mat-datepicker-calendar-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-datepicker-calendar-text-size, var(--%NS%mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--%NS%mat-datepicker-calendar-date-preview-state-outline-color, var(--%NS%mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--%NS%mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--%NS%mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--%NS%mat-datepicker-calendar-date-text-color, var(--%NS%mat-sys-on-surface));
  border-color: var(--%NS%mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
.mat-calendar-body-cell-content::before {
  border-radius: 50%;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--%NS%mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--%NS%mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--%NS%mat-datepicker-calendar-date-selected-state-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-datepicker-calendar-date-selected-state-text-color, var(--%NS%mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--%NS%mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--%NS%mat-datepicker-calendar-date-today-selected-state-outline-color, var(--%NS%mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container)) 50%, var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--%NS%mat-datepicker-calendar-date-in-range-state-background-color, var(--%NS%mat-sys-primary-container)) 50%, var(--%NS%mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--%NS%mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--%NS%mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--%NS%mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--%NS%mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--%NS%mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2})})()}return r})();function at(r){return r?.nodeName===`TD`}function nt(r){let o;return at(r)?o=r:at(r.parentNode)?o=r.parentNode:at(r.parentNode?.parentNode)&&(o=r.parentNode.parentNode),o?.getAttribute(`data-mat-row`)!=null?o:null}function rt(r,o,e){return e!==null&&o!==e&&r<e&&r===o}function it(r,o,e){return o!==null&&o!==e&&r>=o&&r===e}function ot(r,o,e,t){return t&&o!==null&&e!==null&&o!==e&&r>=o&&r<=e}function Jt(r){let o=r.changedTouches[0];return document.elementFromPoint(o.clientX,o.clientY)}var x=class{start;end;_disableStructuralEquivalency;constructor(o,e){this.start=o,this.end=e}};var he=(()=>{class r{selection;_adapter;_selectionChanged=new X;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let a=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:a})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static ɵfac=function(t){fc()};static ɵprov=P({token:r,factory:r.ɵfac})}return r})();var fa=(()=>{class r extends he{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new r(this._adapter);return e.updateSelection(this.selection,this),e}static ɵfac=function(t){return new(t||r)(T(v))};static ɵprov=P({token:r,factory:r.ɵfac})}return r})();var oa={provide:he,useFactory:()=>g(he,{optional:!0,skipSelf:!0})||new fa(g(v))};var sa=new E(`MAT_DATE_RANGE_SELECTION_STRATEGY`);var st=7;var ya=0;var ea=(()=>{class r{_changeDetectorRef=g(co);_dateFormats=g(B,{optional:!0});_dateAdapter=g(v,{optional:!0});_dir=g(ZA,{optional:!0});_rangeStrategy=g(sa,{optional:!0});_rerenderSubscription=J$1.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof x?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new ye;_userSelection=new ye;dragStarted=new ye;dragEnded=new ye;activeDateChange=new ye;_matCalendarBody;_monthLabel=te(``);_weeks=te([]);_firstWeekOffset=te(0);_rangeStart=te(null);_rangeEnd=te(null);_comparisonRangeStart=te(null);_comparisonRangeEnd=te(null);_previewStart=te(null);_previewEnd=te(null);_isRange=te(!1);_todayDate=te(null);_weekdays=te([]);constructor(){g($A).load(jq),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(qs(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,a=this._getDateFromDayOfMonth(t),n,i;this._selected instanceof x?(n=this._getDateInCurrentMonth(this._selected.start),i=this._getDateInCurrentMonth(this._selected.end)):n=i=this._getDateInCurrentMonth(this._selected),(n!==t||i!==t)&&this.selectedChange.emit(a),this._userSelection.emit({value:a,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!or(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames(`short`)[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((st+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%st),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let a=t?t.rawValue:null,n=this._rangeStrategy.createPreview(a,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(n.start)),this._previewEnd.set(this._getCellCompareValue(n.end)),this.activeDrag&&a){let i=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,a,e);i&&(this._previewStart.set(this._getCellCompareValue(i.start)),this._previewEnd.set(this._getCellCompareValue(i.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames(`narrow`),n=this._dateAdapter.getDayOfWeekNames(`long`).map((i,c)=>({long:i,narrow:t[c],id:ya++}));this._weekdays.set(n.slice(e).concat(n.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),a=[[]];for(let n=0,i=this._firstWeekOffset();n<e;n++,i++){i==st&&(a.push([]),i=0);let c=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),n+1),s=this._shouldEnableDate(c),p=this._dateAdapter.format(c,this._dateFormats.display.dateA11yLabel),d=this.dateClass?this.dateClass(c,`month`):void 0;a[a.length-1].push(new me(n+1,t[n],p,s,d,this._getCellCompareValue(c),c))}this._weeks.set(a)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),a=this._dateAdapter.getMonth(e),n=this._dateAdapter.getDate(e);return new Date(t,a,n).getTime()}return null}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setRanges(e){e instanceof x?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static ɵfac=function(t){return new(t||r)};static ɵcmp=(function(){let e=(a,n)=>n.id;function t(a,n){if(a&1&&(Ja(0,`th`,2)(1,`span`,6),N_(2),xf(),Ja(3,`span`,3),N_(4),xf()()),a&2){let i=n.$implicit;$b(2),nD(i.long),$b(2),nD(i.narrow)}}return xi({type:r,selectors:[[`mat-month-view`]],viewQuery:function(n,i){if(n&1&&zv(J,5),n&2){let c;jf(c=Uf())&&(i._matCalendarBody=c.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`,activeDrag:`activeDrag`},outputs:{selectedChange:`selectedChange`,_userSelection:`_userSelection`,dragStarted:`dragStarted`,dragEnded:`dragEnded`,activeDateChange:`activeDateChange`},exportAs:[`matMonthView`],features:[Mn],decls:8,vars:14,consts:[[`role`,`grid`,1,`mat-calendar-table`],[1,`mat-calendar-table-header`],[`scope`,`col`],[`aria-hidden`,`true`],[`colspan`,`7`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`previewChange`,`dragStarted`,`dragEnded`,`keyup`,`keydown`,`label`,`rows`,`todayValue`,`startValue`,`endValue`,`comparisonStart`,`comparisonEnd`,`previewStart`,`previewEnd`,`isRange`,`labelMinRequiredCells`,`activeCell`,`startDateAccessibleName`,`endDateAccessibleName`],[1,`cdk-visually-hidden`]],template:function(n,i){n&1&&(Ja(0,`table`,0)(1,`thead`,1)(2,`tr`),$T(3,t,5,2,`th`,2,e),xf(),Ja(5,`tr`,3),mc(6,`th`,4),xf()(),Ja(7,`tbody`,5),yc(`selectedValueChange`,function(s){return i._dateSelected(s)})(`activeDateChange`,function(s){return i._updateActiveDate(s)})(`previewChange`,function(s){return i._previewChanged(s)})(`dragStarted`,function(s){return i.dragStarted.emit(s)})(`dragEnded`,function(s){return i._dragEnded(s)})(`keyup`,function(s){return i._handleCalendarBodyKeyup(s)})(`keydown`,function(s){return i._handleCalendarBodyKeydown(s)}),xf()()),n&2&&($b(3),zT(i._weekdays()),$b(4),Lv(`label`,i._monthLabel())(`rows`,i._weeks())(`todayValue`,i._todayDate())(`startValue`,i._rangeStart())(`endValue`,i._rangeEnd())(`comparisonStart`,i._comparisonRangeStart())(`comparisonEnd`,i._comparisonRangeEnd())(`previewStart`,i._previewStart())(`previewEnd`,i._previewEnd())(`isRange`,i._isRange())(`labelMinRequiredCells`,3)(`activeCell`,i._dateAdapter.getDate(i.activeDate)-1)(`startDateAccessibleName`,i.startDateAccessibleName)(`endDateAccessibleName`,i.endDateAccessibleName))},dependencies:[J],encapsulation:2})})()}return r})();var A=24;var dt=4;var ta=(()=>{class r{_changeDetectorRef=g(co);_dateAdapter=g(v,{optional:!0});_dir=g(ZA,{optional:!0});_rerenderSubscription=J$1.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),da(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof x?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new ye;yearSelected=new ye;activeDateChange=new ye;_matCalendarBody;_years=te([]);_todayYear=te(0);_selectedYear=te(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(qs(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-pe(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),a=[];for(let n=0,i=[];n<A;n++)i.push(t+n),i.length==dt&&(a.push(i.map(c=>this._createCellForYear(c))),i=[]);this._years.set(a),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,a=this._dateAdapter.createDate(t,0,1),n=this._getDateFromYear(t);this.yearSelected.emit(a),this.selectedChange.emit(n)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-dt);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,dt);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-pe(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,A-pe(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-A*10:-A);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?A*10:A);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return pe(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),a=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),a=this._dateAdapter.getYearName(t),n=this.dateClass?this.dateClass(t,`multi-year`):void 0;return new me(e,a,a,this._shouldEnableYear(e),n)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let a=t;this._dateAdapter.getYear(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof x){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static ɵfac=function(t){return new(t||r)};static ɵcmp=xi({type:r,selectors:[[`mat-multi-year-view`]],viewQuery:function(t,a){if(t&1&&zv(J,5),t&2){let n;jf(n=Uf())&&(a._matCalendarBody=n.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`},outputs:{selectedChange:`selectedChange`,yearSelected:`yearSelected`,activeDateChange:`activeDateChange`},exportAs:[`matMultiYearView`],decls:5,vars:7,consts:[[`role`,`grid`,1,`mat-calendar-table`],[`aria-hidden`,`true`,1,`mat-calendar-table-header`],[`colspan`,`4`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`keyup`,`keydown`,`rows`,`todayValue`,`startValue`,`endValue`,`numCols`,`cellAspectRatio`,`activeCell`]],template:function(t,a){t&1&&(Ja(0,`table`,0)(1,`thead`,1)(2,`tr`),mc(3,`th`,2),xf()(),Ja(4,`tbody`,3),yc(`selectedValueChange`,function(i){return a._yearSelected(i)})(`activeDateChange`,function(i){return a._updateActiveDate(i)})(`keyup`,function(i){return a._handleCalendarBodyKeyup(i)})(`keydown`,function(i){return a._handleCalendarBodyKeydown(i)}),xf()()),t&2&&($b(4),Lv(`rows`,a._years())(`todayValue`,a._todayYear())(`startValue`,a._selectedYear())(`endValue`,a._selectedYear())(`numCols`,4)(`cellAspectRatio`,4/7)(`activeCell`,a._getActiveCell()))},dependencies:[J],encapsulation:2})}return r})();function da(r,o,e,t,a){let n=r.getYear(o),i=r.getYear(e),c=la(r,t,a);return Math.floor((n-c)/A)===Math.floor((i-c)/A)}function pe(r,o,e,t){return va(r.getYear(o)-la(r,e,t),A)}function la(r,o,e){let t=0;return e?t=r.getYear(e)-A+1:o&&(t=r.getYear(o)),t}function va(r,o){return(r%o+o)%o}var aa=(()=>{class r{_changeDetectorRef=g(co);_dateFormats=g(B,{optional:!0});_dateAdapter=g(v,{optional:!0});_dir=g(ZA,{optional:!0});_rerenderSubscription=J$1.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof x?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new ye;monthSelected=new ye;activeDateChange=new ye;_matCalendarBody;_months=te([]);_yearLabel=te(``);_todayMonth=te(null);_selectedMonth=te(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(qs(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(a);let n=this._getDateFromMonth(t);this.selectedChange.emit(n)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames(`short`);this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(a=>this._createCellForMonth(a,e[a])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForMonth(e,t){let a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),n=this._dateAdapter.format(a,this._dateFormats.display.monthYearA11yLabel),i=this.dateClass?this.dateClass(a,`year`):void 0;return new me(e,t.toLocaleUpperCase(),n,this._shouldEnableMonth(e),i)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let a=this._dateAdapter.createDate(t,e,1);for(let n=a;this._dateAdapter.getMonth(n)==e;n=this._dateAdapter.addCalendarDays(n,1))if(this.dateFilter(n))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let a=this._dateAdapter.getYear(this.maxDate),n=this._dateAdapter.getMonth(this.maxDate);return e>a||e===a&&t>n}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let a=this._dateAdapter.getYear(this.minDate),n=this._dateAdapter.getMonth(this.minDate);return e<a||e===a&&t<n}return!1}_isRtl(){return this._dir&&this._dir.value===`rtl`}_setSelectedMonth(e){e instanceof x?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static ɵfac=function(t){return new(t||r)};static ɵcmp=xi({type:r,selectors:[[`mat-year-view`]],viewQuery:function(t,a){if(t&1&&zv(J,5),t&2){let n;jf(n=Uf())&&(a._matCalendarBody=n.first)}},inputs:{activeDate:`activeDate`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`},outputs:{selectedChange:`selectedChange`,monthSelected:`monthSelected`,activeDateChange:`activeDateChange`},exportAs:[`matYearView`],decls:5,vars:9,consts:[[`role`,`grid`,1,`mat-calendar-table`],[`aria-hidden`,`true`,1,`mat-calendar-table-header`],[`colspan`,`4`,1,`mat-calendar-table-header-divider`],[`mat-calendar-body`,``,3,`selectedValueChange`,`activeDateChange`,`keyup`,`keydown`,`label`,`rows`,`todayValue`,`startValue`,`endValue`,`labelMinRequiredCells`,`numCols`,`cellAspectRatio`,`activeCell`]],template:function(t,a){t&1&&(Ja(0,`table`,0)(1,`thead`,1)(2,`tr`),mc(3,`th`,2),xf()(),Ja(4,`tbody`,3),yc(`selectedValueChange`,function(i){return a._monthSelected(i)})(`activeDateChange`,function(i){return a._updateActiveDate(i)})(`keyup`,function(i){return a._handleCalendarBodyKeyup(i)})(`keydown`,function(i){return a._handleCalendarBodyKeydown(i)}),xf()()),t&2&&($b(4),Lv(`label`,a._yearLabel())(`rows`,a._months())(`todayValue`,a._todayMonth())(`startValue`,a._selectedMonth())(`endValue`,a._selectedMonth())(`labelMinRequiredCells`,2)(`numCols`,4)(`cellAspectRatio`,4/7)(`activeCell`,a._dateAdapter.getMonth(a.activeDate)))},dependencies:[J],encapsulation:2})}return r})();var ca=(()=>{class r{_intl=g(ee);calendar=g(lt);_dateAdapter=g(v,{optional:!0});_dateFormats=g(B,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){g($A).load(jq);let e=g(co);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView==`month`?`multi-year`:`month`}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView==`month`?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView==`year`?-1:-A))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView==`month`?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView==`year`?1:A))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,a=this._dateAdapter;e.currentView===`month`?(this._periodButtonText=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView===`year`?(this._periodButtonText=a.getYearName(e.activeDate),this._periodButtonDescription=a.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView==`month`?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView==`year`?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):da(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-pe(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),a=t+A-1;return[this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),this._dateAdapter.getYearName(this._dateAdapter.createDate(a,0,1))]}_periodButtonLabelId=g(ge).getId(`mat-calendar-period-label-`);static ɵfac=function(t){return new(t||r)};static ɵcmp=(function(){return xi({type:r,selectors:[[`mat-calendar-header`]],exportAs:[`matCalendarHeader`],ngContentSelectors:[`*`],decls:17,vars:13,consts:[[1,`mat-calendar-header`],[1,`mat-calendar-controls`],[`aria-live`,`polite`,1,`cdk-visually-hidden`,3,`id`],[`matButton`,``,`type`,`button`,1,`mat-calendar-period-button`,3,`click`],[`aria-hidden`,`true`],[`viewBox`,`0 0 10 5`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-calendar-arrow`],[`points`,`0,0 5,5 10,0`],[1,`mat-calendar-spacer`],[`matIconButton`,``,`type`,`button`,`disabledInteractive`,``,1,`mat-calendar-previous-button`,3,`click`,`disabled`,`matTooltip`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`disabledInteractive`,``,1,`mat-calendar-next-button`,3,`click`,`disabled`,`matTooltip`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`]],template:function(a,n){a&1&&(r_(),Ja(0,`div`,0)(1,`div`,1)(2,`span`,2),N_(3),xf(),Ja(4,`button`,3),yc(`click`,function(){return n.currentPeriodClicked()}),Ja(5,`span`,4),N_(6),xf(),jg(),Ja(7,`svg`,5),mc(8,`polygon`,6),xf()(),Ug(),mc(9,`div`,7),o_(10),Ja(11,`button`,8),yc(`click`,function(){return n.previousClicked()}),jg(),Ja(12,`svg`,9),mc(13,`path`,10),xf()(),Ug(),Ja(14,`button`,11),yc(`click`,function(){return n.nextClicked()}),jg(),Ja(15,`svg`,9),mc(16,`path`,12),xf()()()()),a&2&&($b(2),Lv(`id`,n._periodButtonLabelId),$b(),nD(n.periodButtonDescription),$b(),ki(`aria-label`,n.periodButtonLabel)(`aria-describedby`,n._periodButtonLabelId),$b(2),nD(n.periodButtonText),$b(),Qv(`mat-calendar-invert`,n.calendar.currentView!==`month`),$b(4),Lv(`disabled`,!n.previousEnabled())(`matTooltip`,n.prevButtonLabel),ki(`aria-label`,n.prevButtonLabel),$b(3),Lv(`disabled`,!n.nextEnabled())(`matTooltip`,n.nextButtonLabel),ki(`aria-label`,n.nextButtonLabel))},dependencies:[te$1,cn,It],encapsulation:2})})()}return r})();var lt=(()=>{class r{_dateAdapter=g(v,{optional:!0});_dateFormats=g(B,{optional:!0});_changeDetectorRef=g(co);_elementRef=g(Rt);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView=`month`;get selected(){return this._selected}set selected(e){e instanceof x?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new ye;yearSelected=new ye;monthSelected=new ye;viewChanged=new ye(!0);_userSelection=new ye;_userDragDrop=new ye;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new X;constructor(){this._intlChanges=g(ee).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new Ce(this.headerComponent||ca),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,a=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,n=t||a||e.dateFilter;if(n&&!n.firstChange){let i=this._getCurrentViewComponent();i&&(this._elementRef.nativeElement.contains(an())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),i._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof x||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static ɵfac=function(t){return new(t||r)};static ɵcmp=(function(){function e(i,c){}function t(i,c){if(i&1){let s=QT();Ja(0,`mat-month-view`,4),sD(`activeDateChange`,function(d){Tg(s);let m=t_();return k_(m.activeDate,d)||(m.activeDate=d),_g(d)}),yc(`_userSelection`,function(d){Tg(s);let m=t_();return _g(m._dateSelected(d))})(`dragStarted`,function(d){Tg(s);let m=t_();return _g(m._dragStarted(d))})(`dragEnded`,function(d){Tg(s);let m=t_();return _g(m._dragEnded(d))}),xf()}if(i&2){let s=t_();iD(`activeDate`,s.activeDate),Lv(`selected`,s.selected)(`dateFilter`,s.dateFilter)(`maxDate`,s.maxDate)(`minDate`,s.minDate)(`dateClass`,s.dateClass)(`comparisonStart`,s.comparisonStart)(`comparisonEnd`,s.comparisonEnd)(`startDateAccessibleName`,s.startDateAccessibleName)(`endDateAccessibleName`,s.endDateAccessibleName)(`activeDrag`,s._activeDrag)}}function a(i,c){if(i&1){let s=QT();Ja(0,`mat-year-view`,5),sD(`activeDateChange`,function(d){Tg(s);let m=t_();return k_(m.activeDate,d)||(m.activeDate=d),_g(d)}),yc(`monthSelected`,function(d){Tg(s);let m=t_();return _g(m._monthSelectedInYearView(d))})(`selectedChange`,function(d){Tg(s);let m=t_();return _g(m._goToDateInView(d,`month`))}),xf()}if(i&2){let s=t_();iD(`activeDate`,s.activeDate),Lv(`selected`,s.selected)(`dateFilter`,s.dateFilter)(`maxDate`,s.maxDate)(`minDate`,s.minDate)(`dateClass`,s.dateClass)}}function n(i,c){if(i&1){let s=QT();Ja(0,`mat-multi-year-view`,6),sD(`activeDateChange`,function(d){Tg(s);let m=t_();return k_(m.activeDate,d)||(m.activeDate=d),_g(d)}),yc(`yearSelected`,function(d){Tg(s);let m=t_();return _g(m._yearSelectedInMultiYearView(d))})(`selectedChange`,function(d){Tg(s);let m=t_();return _g(m._goToDateInView(d,`year`))}),xf()}if(i&2){let s=t_();iD(`activeDate`,s.activeDate),Lv(`selected`,s.selected)(`dateFilter`,s.dateFilter)(`maxDate`,s.maxDate)(`minDate`,s.minDate)(`dateClass`,s.dateClass)}}return xi({type:r,selectors:[[`mat-calendar`]],viewQuery:function(c,s){if(c&1&&zv(ea,5)(aa,5)(ta,5),c&2){let p;jf(p=Uf())&&(s.monthView=p.first),jf(p=Uf())&&(s.yearView=p.first),jf(p=Uf())&&(s.multiYearView=p.first)}},hostAttrs:[1,`mat-calendar`],inputs:{headerComponent:`headerComponent`,startAt:`startAt`,startView:`startView`,selected:`selected`,minDate:`minDate`,maxDate:`maxDate`,dateFilter:`dateFilter`,dateClass:`dateClass`,comparisonStart:`comparisonStart`,comparisonEnd:`comparisonEnd`,startDateAccessibleName:`startDateAccessibleName`,endDateAccessibleName:`endDateAccessibleName`},outputs:{selectedChange:`selectedChange`,yearSelected:`yearSelected`,monthSelected:`monthSelected`,viewChanged:`viewChanged`,_userSelection:`_userSelection`,_userDragDrop:`_userDragDrop`},exportAs:[`matCalendar`],features:[dD([oa]),Mn],decls:5,vars:2,consts:[[3,`cdkPortalOutlet`],[`cdkMonitorSubtreeFocus`,``,`tabindex`,`-1`,1,`mat-calendar-content`],[3,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`,`activeDrag`],[3,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`],[3,`activeDateChange`,`_userSelection`,`dragStarted`,`dragEnded`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`,`activeDrag`],[3,`activeDateChange`,`monthSelected`,`selectedChange`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`],[3,`activeDateChange`,`yearSelected`,`selectedChange`,`activeDate`,`selected`,`dateFilter`,`maxDate`,`minDate`,`dateClass`]],template:function(c,s){if(c&1&&(xv(0,e,0,0,`ng-template`,0),Ja(1,`div`,1),jT(2,t,1,11,`mat-month-view`,2)(3,a,1,6,`mat-year-view`,3)(4,n,1,6,`mat-multi-year-view`,3),xf()),c&2){let p;Lv(`cdkPortalOutlet`,s._calendarHeaderPortal),$b(2),BT((p=s.currentView)===`month`?2:p===`year`?3:p===`multi-year`?4:-1)}},dependencies:[Rt$1,ko,ea,aa,ta],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--%NS%mat-datepicker-calendar-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-datepicker-calendar-text-size, var(--%NS%mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--%NS%mat-datepicker-calendar-period-button-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-period-button-text-weight, var(--%NS%mat-sys-title-small-weight));
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-datepicker-calendar-period-button-text-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--%NS%mat-datepicker-calendar-period-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--%NS%mat-datepicker-calendar-navigation-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--%NS%mat-datepicker-calendar-header-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-size: var(--%NS%mat-datepicker-calendar-header-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-datepicker-calendar-header-text-weight, var(--%NS%mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--%NS%mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return r})();var Da=new E(`mat-datepicker-scroll-strategy`,{providedIn:`root`,factory:()=>{let r=g(ue);return()=>Ve(r)}});var pa=(()=>{class r{_elementRef=g(Rt);_animationsDisabled=_r();_changeDetectorRef=g(co);_globalModel=g(he);_dateAdapter=g(v);_ngZone=g(we);_rangeSelectionStrategy=g(sa,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new X;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(g($A).load(jq),this._closeButtonText=g(ee).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=g(_n);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,`animationstart`,this._handleAnimationEvent),t.listen(e,`animationend`,this._handleAnimationEvent),t.listen(e,`animationcancel`,this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,a=e.value,n=t instanceof x;if(n&&this._rangeSelectionStrategy){let i=this._rangeSelectionStrategy.selectionFinished(a,t,e.event);this._model.updateSelection(i,this)}else a&&(n||!this._dateAdapter.sameDate(a,t))&&this._model.add(a);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add(`mat-datepicker-content-exit`),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith(`_mat-datepicker-content`)||(clearTimeout(this._animationFallback),this._isAnimating=e.type===`animationstart`,t.classList.toggle(`mat-datepicker-content-animating`,this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static ɵfac=function(t){return new(t||r)};static ɵcmp=(function(){function e(t,a){}return xi({type:r,selectors:[[`mat-datepicker-content`]],viewQuery:function(a,n){if(a&1&&zv(lt,5),a&2){let i;jf(i=Uf())&&(n._calendar=i.first)}},hostAttrs:[1,`mat-datepicker-content`],hostVars:6,hostBindings:function(a,n){a&2&&(v_(n.color?`mat-`+n.color:``),Qv(`mat-datepicker-content-touch`,n.datepicker.touchUi)(`mat-datepicker-content-animations-enabled`,!n._animationsDisabled))},inputs:{color:`color`},exportAs:[`matDatepickerContent`],decls:5,vars:26,consts:[[`cdkTrapFocus`,``,`role`,`dialog`,1,`mat-datepicker-content-container`],[3,`yearSelected`,`monthSelected`,`viewChanged`,`_userSelection`,`_userDragDrop`,`id`,`startAt`,`startView`,`minDate`,`maxDate`,`dateFilter`,`headerComponent`,`selected`,`dateClass`,`comparisonStart`,`comparisonEnd`,`startDateAccessibleName`,`endDateAccessibleName`],[3,`cdkPortalOutlet`],[`type`,`button`,`matButton`,`elevated`,1,`mat-datepicker-close-button`,3,`focus`,`blur`,`click`,`color`]],template:function(a,n){a&1&&(Ja(0,`div`,0)(1,`mat-calendar`,1),yc(`yearSelected`,function(c){return n.datepicker._selectYear(c)})(`monthSelected`,function(c){return n.datepicker._selectMonth(c)})(`viewChanged`,function(c){return n.datepicker._viewChanged(c)})(`_userSelection`,function(c){return n._handleUserSelection(c)})(`_userDragDrop`,function(c){return n._handleUserDragDrop(c)}),xf(),xv(2,e,0,0,`ng-template`,2),Ja(3,`button`,3),yc(`focus`,function(){return n._closeButtonFocused=!0})(`blur`,function(){return n._closeButtonFocused=!1})(`click`,function(){return n.datepicker.close()}),N_(4),xf()()),a&2&&(Qv(`mat-datepicker-content-container-with-custom-header`,n.datepicker.calendarHeaderComponent)(`mat-datepicker-content-container-with-actions`,n._actionsPortal),ki(`aria-modal`,!0)(`aria-labelledby`,n._dialogLabelId??void 0),$b(),v_(n.datepicker.panelClass),Lv(`id`,n.datepicker.id)(`startAt`,n.datepicker.startAt)(`startView`,n.datepicker.startView)(`minDate`,n.datepicker._getMinDate())(`maxDate`,n.datepicker._getMaxDate())(`dateFilter`,n.datepicker._getDateFilter())(`headerComponent`,n.datepicker.calendarHeaderComponent)(`selected`,n._getSelected())(`dateClass`,n.datepicker.dateClass)(`comparisonStart`,n.comparisonStart)(`comparisonEnd`,n.comparisonEnd)(`startDateAccessibleName`,n.startDateAccessibleName)(`endDateAccessibleName`,n.endDateAccessibleName),$b(),Lv(`cdkPortalOutlet`,n._actionsPortal),$b(),Qv(`cdk-visually-hidden`,!n._closeButtonFocused),Lv(`color`,n.color||`primary`),$b(),nD(n._closeButtonText))},dependencies:[Xo,lt,Rt$1,te$1],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--%NS%mat-datepicker-calendar-container-background-color, var(--%NS%mat-sys-surface-container-high));
  color: var(--%NS%mat-datepicker-calendar-container-text-color, var(--%NS%mat-sys-on-surface));
  box-shadow: var(--%NS%mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--%NS%mat-datepicker-calendar-container-shape, var(--%NS%mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--%NS%mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--%NS%mat-datepicker-calendar-container-touch-shape, var(--%NS%mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: fit-content;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
}
`],encapsulation:2})})()}return r})();var na=(()=>{class r{_injector=g(ue);_viewContainerRef=g(Nn$1);_dateAdapter=g(v,{optional:!0});_dir=g(ZA,{optional:!0});_model=g(he);_animationsDisabled=_r();_scrollStrategy=g(Da);_inputStateChanges=J$1.EMPTY;_document=g(Y);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView=`month`;get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition=`start`;yPosition=`below`;restoreFocus=!0;yearSelected=new ye;monthSelected=new ye;viewChanged=new ye(!0);dateClass;openedStream=new ye;closedStream=new ye;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=Ll(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=g(ge).getId(`mat-datepicker-`);_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new X;_changeDetectorRef=g(co);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;a instanceof ot$1&&(this._setConnectedPositions(a),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=an(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus==`function`,t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:a,location:n}=this._componentRef;a._animationDone.pipe($e(1)).subscribe(()=>{let i=this._document.activeElement;e&&(!i||i===this._document.activeElement||n.nativeElement.contains(i))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),a._startExitAnimation()}e?setTimeout(t):t()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new Ce(pa,this._viewContainerRef),a=this._overlayRef=Be(this._injector,new me$1({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?`cdk-overlay-dark-backdrop`:`mat-overlay-transparent-backdrop`,this._backdropHarnessClass],direction:this._dir||`ltr`,scrollStrategy:e?An(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?`dialog`:`popup`}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(a).subscribe(n=>{n&&n.preventDefault(),this.close()}),a.keydownEvents().subscribe(n=>{let i=n.keyCode;(i===38||i===40||i===37||i===39||i===33||i===34)&&n.preventDefault()}),this._componentRef=a.attach(t),this._forwardContentValues(this._componentRef.instance),e||sf(()=>{a.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return rt$1(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=Tt(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(`.mat-datepicker-content`).withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition===`end`?`end`:`start`,a=t===`start`?`end`:`start`,n=this.yPosition===`above`?`bottom`:`top`,i=n===`top`?`bottom`:`top`;return e.withPositions([{originX:t,originY:i,overlayX:t,overlayY:n},{originX:t,originY:n,overlayX:t,overlayY:i},{originX:a,originY:i,overlayX:a,overlayY:n},{originX:a,originY:n,overlayX:a,overlayY:i}])}_getCloseStream(e){let t=[`ctrlKey`,`shiftKey`,`metaKey`];return $I(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(Ee(a=>a.keyCode===27&&!or(a)||this.datepickerInput&&or(a,`altKey`)&&a.keyCode===38&&t.every(n=>!or(a,n)))))}static ɵfac=function(t){return new(t||r)};static ɵdir=Jt$1({type:r,inputs:{calendarHeaderComponent:`calendarHeaderComponent`,startAt:`startAt`,startView:`startView`,color:`color`,touchUi:[2,`touchUi`,`touchUi`,ji],disabled:[2,`disabled`,`disabled`,ji],xPosition:`xPosition`,yPosition:`yPosition`,restoreFocus:[2,`restoreFocus`,`restoreFocus`,ji],dateClass:`dateClass`,panelClass:`panelClass`,opened:[2,`opened`,`opened`,ji]},outputs:{yearSelected:`yearSelected`,monthSelected:`monthSelected`,viewChanged:`viewChanged`,openedStream:`opened`,closedStream:`closed`},features:[Mn]})}return r})();var vn=(()=>{class r extends na{static ɵfac=(()=>{let e;return function(a){return(e||(e=ty(r)))(a||r)}})();static ɵcmp=xi({type:r,selectors:[[`mat-datepicker`]],exportAs:[`matDatepicker`],features:[dD([oa,{provide:na,useExisting:r}]),Rv],decls:0,vars:0,template:function(t,a){},encapsulation:2})}return r})();var Q=class{target;targetElement;value=null;constructor(o,e){this.target=o,this.targetElement=e,this.value=this.target.value}};var Ca=(()=>{class r{_elementRef=g(Rt);_dateAdapter=g(v,{optional:!0});_dateFormats=g(B,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,a=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&a.blur&&a.blur()}_disabled;dateChange=new ye;dateInput=new ye;stateChanges=new X;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=J$1.EMPTY;_localeSubscription=J$1.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMinDate();return!a||!t||this._dateAdapter.compareDate(a,t)<=0?null:{matDatepickerMin:{min:a,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMaxDate();return!a||!t||this._dateAdapter.compareDate(a,t)>=0?null:{matDatepickerMax:{max:a,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let a=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(a),this._cvaOnChange(a),this._onTouched(),this._formatValue(a),this.dateInput.emit(new Q(this,this._elementRef.nativeElement)),this.dateChange.emit(new Q(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){wa(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){or(e,`altKey`)&&e.keyCode===40&&[`ctrlKey`,`shiftKey`,`metaKey`].every(n=>!or(e,n))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,a=this._lastValueValid,n=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(n),n=this._dateAdapter.getValidDateOrNull(n);let i=!this._dateAdapter.sameDate(n,this.value);!n||i?this._cvaOnChange(n):(t&&!this.value&&this._cvaOnChange(n),a!==this._lastValueValid&&this._validatorOnChange()),i&&(this._assignValue(n),this.dateInput.emit(new Q(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new Q(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):``}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static ɵfac=function(t){return new(t||r)};static ɵdir=Jt$1({type:r,inputs:{value:`value`,disabled:[2,`disabled`,`disabled`,ji]},outputs:{dateChange:`dateChange`,dateInput:`dateInput`},features:[Mn]})}return r})();function wa(r,o){let e=Object.keys(r);for(let t of e){let{previousValue:a,currentValue:n}=r[t];if(o.isDateInstance(a)&&o.isDateInstance(n)){if(!o.sameDate(a,n))return!0}else return!0}return!1}var ka={provide:fe,useExisting:ia(()=>ua),multi:!0};var Ma={provide:J$2,useExisting:ia(()=>ua),multi:!0};var ua=(()=>{class r extends Ca{_formField=g(Er,{optional:!0});_closedSubscription=J$1.EMPTY;_openedSubscription=J$1.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=te(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=Bt.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute(`aria-labelledby`)}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static ɵfac=function(t){return new(t||r)};static ɵdir=Jt$1({type:r,selectors:[[`input`,`matDatepicker`,``]],hostAttrs:[1,`mat-datepicker-input`],hostVars:6,hostBindings:function(t,a){t&1&&yc(`input`,function(i){return a._onInput(i)})(`change`,function(){return a._onChange()})(`blur`,function(){return a._onBlur()})(`keydown`,function(i){return a._onKeydown(i)}),t&2&&(Bv(`disabled`,a.disabled),ki(`aria-haspopup`,a._datepicker?`dialog`:null)(`aria-owns`,a._ariaOwns())(`min`,a.min?a._dateAdapter.toIso8601(a.min):null)(`max`,a.max?a._dateAdapter.toIso8601(a.max):null)(`data-mat-calendar`,a._datepicker?a._datepicker.id:null))},inputs:{matDatepicker:`matDatepicker`,min:`min`,max:`max`,dateFilter:[0,`matDatepickerFilter`,`dateFilter`]},exportAs:[`matDatepickerInput`],features:[dD([ka,Ma,{provide:Qt,useExisting:r}]),Rv]})}return r})();var Aa=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵdir=Jt$1({type:r,selectors:[[``,`matDatepickerToggleIcon`,``]]})}return r})();var Sa=(()=>{class r{_intl=g(ee);_changeDetectorRef=g(co);_stateChanges=J$1.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=g(new Ic(`tabindex`),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:k(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:k(),a=this.datepicker?$I(this.datepicker.openedStream,this.datepicker.closedStream):k();this._stateChanges.unsubscribe(),this._stateChanges=$I(this._intl.changes,e,t,a).subscribe(()=>this._changeDetectorRef.markForCheck())}static ɵfac=function(t){return new(t||r)};static ɵcmp=(function(){let e=[`button`],t=[[[``,`matDatepickerToggleIcon`,``]]],a=[`[matDatepickerToggleIcon]`];function n(i,c){i&1&&(jg(),Ja(0,`svg`,2),mc(1,`path`,3),xf())}return xi({type:r,selectors:[[`mat-datepicker-toggle`]],contentQueries:function(c,s,p){if(c&1&&vc(p,Aa,5),c&2){let d;jf(d=Uf())&&(s._customIcon=d.first)}},viewQuery:function(c,s){if(c&1&&zv(e,5),c&2){let p;jf(p=Uf())&&(s._button=p.first)}},hostAttrs:[1,`mat-datepicker-toggle`],hostVars:8,hostBindings:function(c,s){c&1&&yc(`click`,function(d){return s._open(d)}),c&2&&(ki(`tabindex`,null)(`data-mat-calendar`,s.datepicker?s.datepicker.id:null),Qv(`mat-datepicker-toggle-active`,s.datepicker&&s.datepicker.opened)(`mat-accent`,s.datepicker&&s.datepicker.color===`accent`)(`mat-warn`,s.datepicker&&s.datepicker.color===`warn`))},inputs:{datepicker:[0,`for`,`datepicker`],tabIndex:`tabIndex`,ariaLabel:[0,`aria-label`,`ariaLabel`],disabled:[2,`disabled`,`disabled`,ji],disableRipple:`disableRipple`},exportAs:[`matDatepickerToggle`],features:[Mn],ngContentSelectors:a,decls:4,vars:7,consts:[[`button`,``],[`matIconButton`,``,`type`,`button`,3,`tabIndex`,`disabled`,`disableRipple`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`fill`,`currentColor`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-datepicker-toggle-default-icon`],[`d`,`M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z`]],template:function(c,s){c&1&&(r_(t),Ja(0,`button`,1,0),jT(2,n,2,0,`:svg:svg`,2),o_(3),xf()),c&2&&(Lv(`tabIndex`,s.disabled?-1:s.tabIndex)(`disabled`,s.disabled)(`disableRipple`,s.disableRipple),ki(`aria-haspopup`,s.datepicker?`dialog`:null)(`aria-label`,s.ariaLabel||s._intl.openCalendarLabel)(`aria-expanded`,s.datepicker?s.datepicker.opened:null),$b(2),BT(s._customIcon?-1:2))},dependencies:[cn],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--%NS%mat-datepicker-toggle-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--%NS%mat-datepicker-toggle-active-state-icon-color, var(--%NS%mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2})})()}return r})();var Dn=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵmod=gr({type:r});static ɵinj=En$1({providers:[ee],imports:[ne,lt$1,ea$1,Et,pa,Sa,ca,qq,Pe]})}return r})();var xa=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;var Ia=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function ut(r,o){let e=Array(r);for(let t=0;t<r;t++)e[t]=o(t);return e}var ma=(()=>{class r$1 extends v{_matDateLocale=g(ce,{optional:!0});constructor(){super();let e=g(ce,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:`utc`});return ut(12,a=>this._format(t,new Date(2017,a,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:`numeric`,timeZone:`utc`});return ut(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:`utc`});return ut(7,a=>this._format(t,new Date(2017,0,a+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:`numeric`,timeZone:`utc`});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<`u`&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,a){let n=this._createDateWithOverflow(e,t,a);return n.getMonth(),n}today(){return new Date}parse(e,t){return typeof e==`number`?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error(`NativeDateAdapter: Cannot format invalid date.`);let a=new Intl.DateTimeFormat(this.locale,s(r({},t),{timeZone:`utc`}));return this._format(a,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let a=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(a)!=((this.getMonth(e)+t)%12+12)%12&&(a=this._createDateWithOverflow(this.getYear(a),this.getMonth(a),0)),a}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join(`-`)}deserialize(e){if(typeof e==`string`){if(!e)return null;if(xa.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,a,n){let i=this.clone(e);return i.setHours(t,a,n,0),i}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!=`string`)return e instanceof Date?new Date(e.getTime()):null;let a=e.trim();if(a.length===0)return null;let n=this._parseTimeString(a);if(n===null){let i=a.replace(/[^0-9:(AM|PM)]/gi,``).trim();i.length>0&&(n=this._parseTimeString(i))}return n||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,a){let n=new Date;return n.setFullYear(e,t,a),n.setHours(0,0,0,0),n}_2digit(e){return(`00`+e).slice(-2)}_format(e,t){let a=new Date;return a.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),a.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(a)}_parseTimeString(e){let t=e.toUpperCase().match(Ia);if(t){let a=parseInt(t[1]),n=parseInt(t[2]),i=t[3]==null?void 0:parseInt(t[3]),c=t[4];if(a===12?a=c===`AM`?0:a:c===`PM`&&(a+=12),mt(a,0,23)&&mt(n,0,59)&&(i==null||mt(i,0,59)))return this.setTime(this.today(),a,n,i||0)}return null}static ɵfac=function(t){return new(t||r$1)};static ɵprov=G({token:r$1,factory:r$1.ɵfac,autoProvided:!1})}return r$1})();function mt(r,o,e){return!isNaN(r)&&r>=o&&r<=e}var ha={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:`numeric`,month:`numeric`,day:`numeric`},timeInput:{hour:`numeric`,minute:`numeric`},monthYearLabel:{year:`numeric`,month:`short`},dateA11yLabel:{year:`numeric`,month:`long`,day:`numeric`},monthYearA11yLabel:{year:`numeric`,month:`long`},timeOptionLabel:{hour:`numeric`,minute:`numeric`}}};var ht=class r extends ma{parse(o,e){if(typeof o==`string`){let t=/^\s*(\d{1,2})[/.-](\d{1,2})[/.-](\d{2}|\d{4})\s*$/.exec(o);if(t){let a=t[3].length===2?2e3+Number(t[3]):Number(t[3]),n=new Date(a,Number(t[2])-1,Number(t[1]));return n.getMonth()===Number(t[2])-1?n:this.invalid()}}return super.parse(o,e)}getFirstDayOfWeek(){return 1}static ɵfac=(()=>{let o;return function(t){return(o||(o=ty(r)))(t||r)}})();static ɵprov=P({token:r,factory:r.ɵfac})};var En=[{provide:ce,useValue:`es-AR`},{provide:v,useClass:ht},{provide:B,useValue:ha}];function Nn(r){if(!r)return null;let[o,e,t]=r.slice(0,10).split(`-`).map(Number);return new Date(o,e-1,t)}function Tn(r){if(!r||isNaN(r.getTime()))return``;let o=e=>String(e).padStart(2,`0`);return`${r.getFullYear()}-${o(r.getMonth()+1)}-${o(r.getDate())}`}function Fn(r){if(!r)return null;let[o,e]=r.split(`:`).map(Number),t=new Date;return t.setHours(o,e,0,0),t}function Rn(r){if(!r||isNaN(r.getTime()))return``;let o=e=>String(e).padStart(2,`0`);return`${o(r.getHours())}:${o(r.getMinutes())}`}export{Nn as a,Tn as c,vn as d,Fn as i,ua as l,Dn as n,Rn as o,En as r,Sa as s,B as t,v as u};