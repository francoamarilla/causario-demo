import{n as s,t as r}from"./chunk-zSsmmLLa.js";import{$r as qq,$t as Ic,A as V,An as Qv,Br as ko,Bt as E,Cn as P,Ct as $b,Di as xv,Dr as gr,Dt as Au,E as Rd,Ei as xo,Er as g,Et as Ae$1,Fn as Rv,Fr as jq,G as he,Gr as nD,Hr as mc,Ht as En$1,Ir as k,Jr as o_,K as hn,Ln as Sh,M as Vl,Mr as jf,Ni as zv,Nn as Rt$1,Nr as jg,Nt as Bv,O as Ue,Oi as yc,On as Q,Ot as B,P as _r,Pr as ji,Q as me$1,Qn as X,R as bo,Rr as kf,S as Nr,Si as we$1,Sr as en,Ti as xi$1,Tr as fo,U as ge,Vn as Tg,Vt as Ee,Wn as Uf,Wt as G,Yt as Gw,_ as K,_i as ue,_r as co,_t as zl,a as Co,bi as vc,bn as Of,br as dr,bt as $A,cr as _n,dn as Lv,ei as qs,er as Y,fi as t_,fn as MM,ft as un,g as Jo,gi as ty,gn as Nn$1,hi as tw,hn as N_,i as Cc,ii as r_,in as Ja,it as pt$1,jr as jT,jt as Bf,k as Ul,ki as ye,kn as QT,kt as BT,l as Er$1,lr as a_,m as Hl,mi as to,on as Jt,p as Gd,pi as te$1,pn as Mn$1,r as Bt$1,rr as ZA,sr as _g,tn as J,tt as or,ui as sf,vi as ur,vn as O,vr as dD,wi as xf,wt as $e$1,xr as ee$1,xt as $I,yi as v_,yn as OD,yr as di$1,zr as ki}from"./main-GROSGNFX.js";import{a as Mn$2,c as Yt,f as ta,m as tn,p as te$2,t as Gt,u as et$1}from"./chunk-Zdnxfsyz.js";function xi(i){return i&&typeof i.connect==`function`&&!(i instanceof Au)}var q=(function(i){return i[i.REPLACED=0]=`REPLACED`,i[i.INSERTED=1]=`INSERTED`,i[i.MOVED=2]=`MOVED`,i[i.REMOVED=3]=`REMOVED`,i})(q||{});var Cn=class{viewCacheSize=20;_viewCache=[];applyChanges(n,e,t,o,a){n.forEachOperation((r,l,d)=>{let m,c;if(r.previousIndex==null){let p=()=>t(r,l,d);m=this._insertView(p,d,e,o(r)),c=m?q.INSERTED:q.REPLACED}else d==null?(this._detachAndCacheView(l,e),c=q.REMOVED):(m=this._moveView(l,d,e,o(r)),c=q.MOVED);a&&a({context:m?.context,operation:c,record:r})})}detach(){for(let n of this._viewCache)n.destroy();this._viewCache=[]}_insertView(n,e,t,o){let a=this._insertViewFromCache(e,t);if(a){a.context.$implicit=o;return}let r=n();return t.createEmbeddedView(r.templateRef,r.context,r.index)}_detachAndCacheView(n,e){let t=e.detach(n);this._maybeCacheView(t,e)}_moveView(n,e,t,o){let a=t.get(n);return t.move(a,e),a.context.$implicit=o,a}_maybeCacheView(n,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(n);else{let t=e.indexOf(n);t===-1?n.destroy():e.remove(t)}}_insertViewFromCache(n,e){let t=this._viewCache.pop();return t&&e.insert(t,n),t||null}};var Jn=20;var Ae=(()=>{class i{_ngZone=g(we$1);_platform=g(V);_renderer=g(ur).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new X;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Jn){return this._platform.isBrowser?new O(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(tw(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):k()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let o=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Ee(a=>!a||o.indexOf(a)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((o,a)=>{this._targetContainsElement(a,e)&&t.push(a)}),t}_targetContainsElement(e,t){let o=he(t),a=e.getElementRef().nativeElement;do if(o==a)return!0;while(o=o.parentElement);return!1}static ɵfac=function(t){return new(t||i)};static ɵprov=G({token:i,factory:i.ɵfac})}return i})();var ei=(()=>{class i{elementRef=g(Rt$1);scrollDispatcher=g(Ae);ngZone=g(we$1);dir=g(ZA,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new X;_renderer=g(_n);_cleanupScroll;_elementScrolled=new X;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,o=this.dir&&this.dir.value==`rtl`;e.left??=o?e.end:e.start,e.right??=o?e.start:e.end,e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),o&&Ul()!=Ue.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),Ul()==Ue.INVERTED?e.left=e.right:Ul()==Ue.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;zl()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t=`left`,o=`right`,a=this.elementRef.nativeElement;if(e==`top`)return a.scrollTop;if(e==`bottom`)return a.scrollHeight-a.clientHeight-a.scrollTop;let r=this.dir&&this.dir.value==`rtl`;return e==`start`?e=r?o:t:e==`end`&&(e=r?t:o),r&&Ul()==Ue.INVERTED?e==t?a.scrollWidth-a.clientWidth-a.scrollLeft:a.scrollLeft:r&&Ul()==Ue.NEGATED?e==t?a.scrollLeft+a.scrollWidth-a.clientWidth:-a.scrollLeft:e==t?a.scrollLeft:a.scrollWidth-a.clientWidth-a.scrollLeft}static ɵfac=function(t){return new(t||i)};static ɵdir=Jt({type:i,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return i})();var ti=20;var ee=(()=>{class i{_platform=g(V);_listeners;_viewportSize=null;_change=new X;_document=g(Y);constructor(){let e=g(we$1),t=g(ur).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=a=>this._change.next(a);this._listeners=[t.listen(`window`,`resize`,o),t.listen(`window`,`orientationchange`,o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+t,height:o,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),o=e.documentElement,a=o.getBoundingClientRect();return{top:-a.top||e.body?.scrollTop||t.scrollY||o.scrollTop||0,left:-a.left||e.body?.scrollLeft||t.scrollX||o.scrollLeft||0}}change(e=ti){return e>0?this._change.pipe(tw(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(t){return new(t||i)};static ɵprov=G({token:i,factory:i.ɵfac})}return i})();var eo=new E(`CDK_VIRTUAL_SCROLL_VIEWPORT`);var Pe=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=gr({type:i});static ɵinj=En$1({})}return i})();var Ot=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=gr({type:i});static ɵinj=En$1({imports:[qq,Pe,qq,Pe]})}return i})();var Ie=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}};var Ce=class extends Ie{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,e,t,o,a,r){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=o,this.bindings=a||null,this.directives=r||null}};var te=class extends Ie{templateRef;viewContainerRef;context;injector;constructor(n,e,t,o){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=o}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}};var Mt=class extends Ie{element;constructor(n){super(),this.element=n instanceof Rt$1?n.nativeElement:n}};var we=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Ce)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof te)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Mt)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var $e=class extends we{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,o=t.get(dr,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,o=n.injector||this._defaultInjector||ue.NULL,a=o.get(ee$1,t.injector);e=OD(n.component,{elementInjector:o,environmentInjector:a,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(o=>this.outletElement.appendChild(o)),t.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(t);o!==-1&&e.remove(o)}),this._attachedPortal=n,t}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment(`dom-portal`);e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var so=(()=>{class i extends te{constructor(){let e=g(to),t=g(Nn$1);super(e,t)}static ɵfac=function(t){return new(t||i)};static ɵdir=Jt({type:i,selectors:[[``,`cdkPortal`,``]],exportAs:[`cdkPortal`],features:[Rv]})}return i})();var Rt=(()=>{class i extends we{_moduleRef=g(dr,{optional:!0});_document=g(Y);_viewContainerRef=g(Nn$1);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new ye;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,o=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=e,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let o=this._document.createComment(`dom-portal`);e.setAttachedHost(this),t.parentNode.insertBefore(o,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(t,o)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static ɵfac=(()=>{let e;return function(o){return(e||(e=ty(i)))(o||i)}})();static ɵdir=Jt({type:i,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[Rv]})}return i})();var Et=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=gr({type:i});static ɵinj=En$1({})}return i})();var wn=zl();function An(i){return new Je(i.get(ee),i.get(Y))}var Je=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||``,this._previousHTMLStyles.top=n.style.top||``,n.style.left=Vl(-this._previousScrollPosition.left),n.style.top=Vl(-this._previousScrollPosition.top),n.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,t=n.style,o=e.style,a=t.scrollBehavior||``,r=o.scrollBehavior||``;this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,n.classList.remove(`cdk-global-scrollblock`),wn&&(t.scrollBehavior=o.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),wn&&(t.scrollBehavior=a,o.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function In(i,n){return new et(i.get(Ae),i.get(we$1),i.get(ee),n)}var et=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,t,o){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=t,this._config=o}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Ee(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Te=class{enable(){}disable(){}attach(){}};function Pt(i,n){return n.some(e=>{let t=i.bottom<e.top,o=i.top>e.bottom,a=i.right<e.left,r=i.left>e.right;return t||o||a||r})}function Sn(i,n){return n.some(e=>{let t=i.top<e.top,o=i.bottom>e.bottom,a=i.left<e.left,r=i.right>e.right;return t||o||a||r})}function Ve(i,n){return new tt(i.get(Ae),i.get(ee),i.get(we$1),n)}var tt=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,o){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=o}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:o}=this._viewportRuler.getViewportSize();Pt(e,[{width:t,height:o,bottom:o,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Tn=(()=>{class i{_injector=g(ue);noop=()=>new Te;close=e=>In(this._injector,e);block=()=>An(this._injector);reposition=e=>Ve(this._injector,e);static ɵfac=function(t){return new(t||i)};static ɵprov=G({token:i,factory:i.ɵfac})}return i})();var me=class{positionStrategy;scrollStrategy=new Te;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t])}}};var nt=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var Vn=(()=>{class i{_attachedOverlays=[];_document=g(Y);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,o){return o.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static ɵfac=function(t){return new(t||i)};static ɵprov=G({token:i,factory:i.ɵfac})}return i})();var Nn=(()=>{class i extends Vn{_ngZone=g(we$1);_renderer=g(ur).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let o=t.length-1;o>-1;o--){let a=t[o];if(this.canReceiveEvent(a,e,a._keydownEvents)){this._ngZone.run(()=>a._keydownEvents.next(e));break}}};static ɵfac=function(t){return new(t||i)};static ɵprov=G({token:i,factory:i.ɵfac})}return i})();var Bn=(()=>{class i extends Vn{_platform=g(V);_ngZone=g(we$1);_renderer=g(ur).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,o={capture:!0},a=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[a.listen(t,`pointerdown`,this._pointerDownListener,o),a.listen(t,`click`,this._clickListener,o),a.listen(t,`auxclick`,this._clickListener,o),a.listen(t,`contextmenu`,this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=me$1(e)};_clickListener=e=>{let t=me$1(e),o=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let a=this._attachedOverlays.slice();for(let r=a.length-1;r>-1;r--){let l=a[r],d=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,d))){if(On(l.overlayElement,t)||On(l.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>d.next(e)):d.next(e)}}};static ɵfac=function(t){return new(t||i)};static ɵprov=G({token:i,factory:i.ɵfac})}return i})();function On(i,n){let e=typeof ShadowRoot<`u`&&ShadowRoot,t=n;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var Fn=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=xi$1({type:i,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return i})();var zn=(()=>{class i{_platform=g(V);_containerElement;_document=g(Y);_styleLoader=g($A);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||Hl()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let a=0;a<o.length;a++)o[a].remove()}let t=this._document.createElement(`div`);t.classList.add(e),Hl()?t.setAttribute(`platform`,`test`):this._platform.isBrowser||t.setAttribute(`platform`,`server`),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(Fn)}static ɵfac=function(t){return new(t||i)};static ɵprov=G({token:i,factory:i.ɵfac})}return i})();var At=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,o){this._renderer=e,this._ngZone=t,this.element=n.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,o)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents=`none`,n.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function It(i){return i&&i.nodeType===1}var Dt=te$1([]);var it=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new X;_attachments=new X;_detachments=new X;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new X;_outsidePointerEvents=new X;_afterNextRenderRef;constructor(n,e,t,o,a,r,l,d,m,c=!1,p,f){this._portalOutlet=n,this._host=e,this._pane=t,this._config=o,this._ngZone=a,this._keyboardDispatcher=r,this._document=l,this._location=d,this._outsideClickDispatcher=m,this._animationsDisabled=c,this._injector=p,this._renderer=f,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),Q(()=>{Dt.update(t=>t.includes(this)?t:[...t,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=sf(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let t=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>t.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),Q(()=>{Dt.update(e=>e.filter(t=>t!==this))}),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,Q(()=>{Dt.update(e=>e.filter(t=>t!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=r(r({},this._config),n),this._updateElementSize()}setDirection(n){this._config=s(r({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n==`string`?n:n.value:`ltr`}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=Vl(this._config.width),n.height=Vl(this._config.height),n.minWidth=Vl(this._config.minWidth),n.minHeight=Vl(this._config.minHeight),n.maxWidth=Vl(this._config.maxWidth),n.maxHeight=Vl(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?``:`none`}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;It(n)?n.after(this._host):n?.type===`parent`?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new At(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,t){let o=pt$1(e||[]).filter(a=>!!a);o.length&&(t?n.classList.add(...o):n.classList.remove(...o))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=sf(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}};var Mn=`cdk-overlay-connected-position-bounding-box`;var ni=/([A-Za-z%]+)$/;function Tt(i,n){return new ot(n,i.get(ee),i.get(Y),i.get(V),i.get(zn))}var ot=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new X;_resizeSubscription=J.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,t,o,a){this._viewportRuler=e,this._document=t,this._platform=o,this._overlayContainer=a,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(Mn),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,o=this._containerRect,a=[],r;for(let l of this._preferredPositions){let d=this._getOriginPoint(n,o,l),m=this._getOverlayPoint(d,e,l),c=this._getOverlayFit(m,e,t,l);if(c.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,d);return}if(this._canFitWithFlexibleDimensions(c,m,t)){a.push({position:l,origin:d,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(d,l)});continue}(!r||r.overlayFit.visibleArea<c.visibleArea)&&(r={overlayFit:c,overlayPoint:m,originPoint:d,position:l,overlayRect:e})}if(a.length){let l=null,d=-1;for(let m of a){let c=m.boundingBoxRect.width*m.boundingBoxRect.height*(m.position.weight||1);c>d&&(d=c,l=m)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&pe(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Mn),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Rt$1?this._origin.nativeElement:It(this._origin)?this._origin:null}_getOriginPoint(n,e,t){let o;if(t.originX==`center`)o=n.left+n.width/2;else{let r=this._isRtl()?n.right:n.left,l=this._isRtl()?n.left:n.right;o=t.originX==`start`?r:l}e.left<0&&(o-=e.left);let a;return t.originY==`center`?a=n.top+n.height/2:a=t.originY==`top`?n.top:n.bottom,e.top<0&&(a-=e.top),{x:o,y:a}}_getOverlayPoint(n,e,t){let o;t.overlayX==`center`?o=-e.width/2:t.overlayX===`start`?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let a;return t.overlayY==`center`?a=-e.height/2:a=t.overlayY==`top`?0:-e.height,{x:n.x+o,y:n.y+a}}_getOverlayFit(n,e,t,o){let a=En(e),{x:r,y:l}=n,d=this._getOffset(o,`x`),m=this._getOffset(o,`y`);d&&(r+=d),m&&(l+=m);let c=0-r,p=r+a.width-t.width,f=0-l,h=l+a.height-t.height,u=this._subtractOverflows(a.width,c,p),_=this._subtractOverflows(a.height,f,h),Le=u*_;return{visibleArea:Le,isCompletelyWithinViewport:a.width*a.height===Le,fitsInViewportVertically:_===a.height,fitsInViewportHorizontally:u==a.width}}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let o=t.bottom-e.y,a=t.right-e.x,r=Rn(this._overlayRef.getConfig().minHeight),l=Rn(this._overlayRef.getConfig().minWidth),d=n.fitsInViewportVertically||r!=null&&r<=o,m=n.fitsInViewportHorizontally||l!=null&&l<=a;return d&&m}return!1}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let o=En(e),a=this._viewportRect,r=Math.max(n.x+o.width-a.width,0),l=Math.max(n.y+o.height-a.height,0),d=Math.max(a.top-t.top-n.y,0),m=Math.max(a.left-t.left-n.x,0),c=0,p=0;return o.width<=a.width?c=m||-r:c=n.x<this._getViewportMarginStart()?a.left-t.left-n.x:0,o.height<=a.height?p=d||-l:p=n.y<this._getViewportMarginTop()?a.top-t.top-n.y:0,this._previousPushAmount={x:c,y:p},{x:n.x+c,y:n.y+p}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!ii(this._lastScrollVisibility,t)){let o=new nt(n,t);this._positionChanges.next(o)}this._lastScrollVisibility=t}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,o=n.overlayY;n.overlayX===`center`?t=`center`:this._isRtl()?t=n.overlayX===`start`?`right`:`left`:t=n.overlayX===`start`?`left`:`right`;for(let a=0;a<e.length;a++)e[a].style.transformOrigin=`${t} ${o}`}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,o=this._isRtl(),a,r,l;if(e.overlayY===`top`)r=n.y,a=t.height-r+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)l=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),a=t.height-l+this._getViewportMarginTop();else{let h=Math.min(t.bottom-n.y+t.top,n.y),u=this._lastBoundingBoxSize.height;a=h*2,r=n.y-h,a>u&&!this._isInitialRender&&!this._growAfterOpen&&(r=n.y-u/2)}let d=e.overlayX===`start`&&!o||e.overlayX===`end`&&o,m=e.overlayX===`end`&&!o||e.overlayX===`start`&&o,c,p,f;if(m)f=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),c=n.x-this._getViewportMarginStart();else if(d)p=n.x,c=t.right-n.x-this._getViewportMarginEnd();else{let h=Math.min(t.right-n.x+t.left,n.x),u=this._lastBoundingBoxSize.width;c=h*2,p=n.x-h,c>u&&!this._isInitialRender&&!this._growAfterOpen&&(p=n.x-u/2)}return{top:r,left:p,bottom:l,right:f,width:c,height:a}}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left=`0`,o.bottom=o.right=`auto`,o.maxHeight=o.maxWidth=``,o.width=o.height=`100%`;else{let a=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;o.width=Vl(t.width),o.height=Vl(t.height),o.top=Vl(t.top)||`auto`,o.bottom=Vl(t.bottom)||`auto`,o.left=Vl(t.left)||`auto`,o.right=Vl(t.right)||`auto`,e.overlayX===`center`?o.alignItems=`center`:o.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?o.justifyContent=`center`:o.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,a&&(o.maxHeight=Vl(a)),r&&(o.maxWidth=Vl(r))}this._lastBoundingBoxSize=t,pe(this._boundingBox.style,o)}_resetBoundingBoxStyles(){pe(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){pe(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(n,e){let t={},o=this._hasExactPosition(),a=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(o){let c=this._viewportRuler.getViewportScrollPosition();pe(t,this._getExactOverlayY(e,n,c)),pe(t,this._getExactOverlayX(e,n,c))}else t.position=`static`;let l=``,d=this._getOffset(e,`x`),m=this._getOffset(e,`y`);d&&(l+=`translateX(${d}px) `),m&&(l+=`translateY(${m}px)`),t.transform=l.trim(),r.maxHeight&&(o?t.maxHeight=Vl(r.maxHeight):a&&(t.maxHeight=``)),r.maxWidth&&(o?t.maxWidth=Vl(r.maxWidth):a&&(t.maxWidth=``)),pe(this._pane.style,t)}_getExactOverlayY(n,e,t){let o={top:``,bottom:``},a=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,t)),n.overlayY===`bottom`)o.bottom=`${this._document.documentElement.clientHeight-(a.y+this._overlayRect.height)}px`;else o.top=Vl(a.y);return o}_getExactOverlayX(n,e,t){let o={left:``,right:``},a=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,t));let r;if(this._isRtl()?r=n.overlayX===`end`?`left`:`right`:r=n.overlayX===`end`?`right`:`left`,r===`right`)o.right=`${this._document.documentElement.clientWidth-(a.x+this._overlayRect.width)}px`;else o.left=Vl(a.x);return o}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Sn(n,t),isOriginOutsideView:Pt(n,t),isOverlayClipped:Sn(e,t),isOverlayOutsideView:Pt(e,t)}}_subtractOverflows(n,...e){return e.reduce((t,o)=>t-Math.max(o,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e===`x`?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&pt$1(n).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof Rt$1)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();n&&(e.style.display=`block`);let t=e.getBoundingClientRect();return n&&(e.style.display=``),t}};function pe(i,n){for(let e in n)Object.hasOwn(n,e)&&(i[e]=n[e]);return i}function Rn(i){if(typeof i!=`number`&&i!=null){let[n,e]=i.split(ni);return!e||e===`px`?parseFloat(n):null}return i||null}function En(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function ii(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var Dn=`cdk-global-overlay-wrapper`;function rt(i){return new at}var at=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(Dn),this._isDisposed=!1}top(n=``){return this._bottomOffset=``,this._topOffset=n,this._alignItems=`flex-start`,this}left(n=``){return this._xOffset=n,this._xPosition=`left`,this}bottom(n=``){return this._topOffset=``,this._bottomOffset=n,this._alignItems=`flex-end`,this}right(n=``){return this._xOffset=n,this._xPosition=`right`,this}start(n=``){return this._xOffset=n,this._xPosition=`start`,this}end(n=``){return this._xOffset=n,this._xPosition=`end`,this}width(n=``){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=``){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=``){return this.left(n),this._xPosition=`center`,this}centerVertically(n=``){return this.top(n),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:o,height:a,maxWidth:r,maxHeight:l}=this._overlayRef.getConfig(),d=(o===`100%`||o===`100vw`)&&(!r||r===`100%`||r===`100vw`),m=(a===`100%`||a===`100vh`)&&(!l||l===`100%`||l===`100vh`),c=this._xPosition,p=this._xOffset,f=this._overlayRef.getConfig().direction===`rtl`,h=``,u=``,_=``;d?_=`flex-start`:c===`center`?(_=`center`,f?u=p:h=p):f?c===`left`||c===`end`?(_=`flex-end`,h=p):(c===`right`||c===`start`)&&(_=`flex-start`,u=p):c===`left`||c===`start`?(_=`flex-start`,h=p):(c===`right`||c===`end`)&&(_=`flex-end`,u=p),n.position=this._cssPosition,n.marginLeft=d?`0`:h,n.marginTop=m?`0`:this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=d?`0`:u,e.justifyContent=_,e.alignItems=m?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Dn),t.justifyContent=t.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position=``,this._overlayRef=null,this._isDisposed=!0}};var Ln=(()=>{class i{_injector=g(ue);global(){return rt()}flexibleConnectedTo(e){return Tt(this._injector,e)}static ɵfac=function(t){return new(t||i)};static ɵprov=G({token:i,factory:i.ɵfac})}return i})();var Ne=new E(`OVERLAY_DEFAULT_CONFIG`);function Be(i,n){i.get($A).load(Fn);let e=i.get(zn),t=i.get(Y),o=i.get(ge),a=i.get(en),r=i.get(ZA),l=i.get(_n,null,{optional:!0})||i.get(ur).createRenderer(null,null),d=new me(n),m=i.get(Ne,null,{optional:!0})?.usePopover??!0;d.direction=d.direction||r.value,!t.body||!(`showPopover`in t.body)?d.usePopover=!1:d.usePopover=n?.usePopover??m;let c=t.createElement(`div`),p=t.createElement(`div`);c.id=o.getId(`cdk-overlay-`),c.classList.add(`cdk-overlay-pane`),p.appendChild(c),d.usePopover&&(p.setAttribute(`popover`,`manual`),p.classList.add(`cdk-overlay-popover`));let f=d.usePopover?d.positionStrategy?.getPopoverInsertionPoint?.():null;return It(f)?f.after(p):f?.type===`parent`?f.element.appendChild(p):e.getContainerElement().appendChild(p),new it(new $e(c,a,i),p,c,d,i.get(we$1),i.get(Nn),t,i.get(fo),i.get(Bn),n?.disableAnimations??i.get(Gw,null,{optional:!0})===`NoopAnimations`,i.get(ee$1),l)}var Wn=(()=>{class i{scrollStrategies=g(Tn);_positionBuilder=g(Ln);_injector=g(ue);create(e){return Be(this._injector,e)}position(){return this._positionBuilder}static ɵfac=function(t){return new(t||i)};static ɵprov=G({token:i,factory:i.ɵfac})}return i})();var oi=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var ai=new E(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=g(ue);return()=>Ve(i)}});var Se=(()=>{class i{elementRef=g(Rt$1);static ɵfac=function(t){return new(t||i)};static ɵdir=Jt({type:i,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return i})();var jn=new E(`cdk-connected-overlay-default-config`);var st=(()=>{class i{_dir=g(ZA,{optional:!0});_injector=g(ue);_overlayRef;_templatePortal;_backdropSubscription=J.EMPTY;_attachSubscription=J.EMPTY;_detachSubscription=J.EMPTY;_positionSubscription=J.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=g(ai);_ngZone=g(we$1);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!=`string`&&this._assignConfig(e)}backdropClick=new ye;positionChange=new ye;attach=new ye;detach=new ye;overlayKeydown=new ye;overlayOutsideClick=new ye;constructor(){let e=g(to),t=g(Nn$1),o=g(jn,{optional:!0}),a=g(Ne,{optional:!0});this.usePopover=a?.usePopover===!1?null:`global`,this._templatePortal=new te(e,t),this.scrollStrategy=this._scrollStrategyFactory(),o&&this._assignConfig(o)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=oi);let e=this._overlayRef=Be(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!or(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let o=this._getOriginElement(),a=me$1(t);(!o||o!==a&&!o.contains(a))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new me({direction:this._dir||`ltr`,positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(o=>({originX:o.originX,originY:o.originY,overlayX:o.overlayX,overlayY:o.overlayY,offsetX:o.offsetX||this.offsetX,offsetY:o.offsetY||this.offsetY,panelClass:o.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let e=Tt(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Se?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Se?this.origin.elementRef.nativeElement:this.origin instanceof Rt$1?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Sh(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static ɵfac=function(t){return new(t||i)};static ɵdir=Jt({type:i,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,ji],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,ji],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,ji],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,ji],push:[2,`cdkConnectedOverlayPush`,`push`,ji],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,e=>e===`url-change`||e===`pop-state`?e:ji(e)],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,ji],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[Mn$1]})}return i})();var lt=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=gr({type:i});static ɵinj=En$1({providers:[Wn],imports:[qq,Et,Ot,Ot]})}return i})();var ri=Math.pow(2,31)-1;var Fe=class{_overlayRef;instance;containerInstance;_afterDismissed=new X;_afterOpened=new X;_onAction=new X;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,ri))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var Hn=new E(`MatSnackBarData`);var Oe=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var si=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵdir=Jt({type:i,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return i})();var li=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵdir=Jt({type:i,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return i})();var ci=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵdir=Jt({type:i,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return i})();var di=(()=>{class i{snackBarRef=g(Fe);data=g(Hn);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(t){return new(t||i)};static ɵcmp=(function(){function e(t,o){if(t&1){let a=QT();Ja(0,`div`,1)(1,`button`,2),yc(`click`,function(){Tg(a);let l=t_();return _g(l.action())}),N_(2),xf()()}if(t&2){let a=t_();$b(2),Bf(` `,a.data.action,` `)}}return xi$1({type:i,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(o,a){o&1&&(Ja(0,`div`,0),N_(1),xf(),jT(2,e,3,1,`div`,1)),o&2&&($b(),Bf(` `,a.data.message,`
`),$b(),BT(a.hasAction?2:-1))},dependencies:[te$2,si,li,ci],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return i})();var Vt=`_mat-snack-bar-enter`;var Nt=`_mat-snack-bar-exit`;var hi=(()=>{class i extends we{_ngZone=g(we$1);_elementRef=g(Rt$1);_changeDetectorRef=g(co);_platform=g(V);_animationsDisabled=_r();snackBarConfig=g(Oe);_document=g(Y);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=g(ue);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new X;_onExit=new X;_onEnter=new X;_animationState=`void`;_live;_label;_role;_liveElementId=g(ge).getId(`mat-snack-bar-container-live-`);constructor(){super();let e=this.snackBarConfig;e.politeness===`assertive`&&!e.announcementMessage?this._live=`assertive`:e.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Nt?this._completeExit():e===Vt&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?sf(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Vt)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(Vt)},200)))}exit(){return this._destroyed?k(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?sf(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Nt)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Nt),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(r=>e.classList.add(r)):e.classList.add(t)),this._exposeToModals();let o=this._label.nativeElement,a=`mdc-snackbar__label`;o.classList.toggle(a,!o.querySelector(`.${a}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let o=0;o<t.length;o++){let a=t[o],r=a.getAttribute(`aria-owns`);this._trackedModals.add(a),r?r.indexOf(e)===-1&&a.setAttribute(`aria-owns`,r+` `+e):a.setAttribute(`aria-owns`,e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute(`aria-owns`);if(t){let o=t.replace(this._liveElementId,``).trim();o.length>0?e.setAttribute(`aria-owns`,o):e.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector(`[aria-hidden]`),o=e.querySelector(`[aria-live]`);if(t&&o){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(a=document.activeElement),t.removeAttribute(`aria-hidden`),o.appendChild(t),a?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(t){return new(t||i)};static ɵcmp=(function(){let e=[`label`];function t(o,a){}return xi$1({type:i,selectors:[[`mat-snack-bar-container`]],viewQuery:function(a,r){if(a&1&&zv(Rt,7)(e,7),a&2){let l;jf(l=Uf())&&(r._portalOutlet=l.first),jf(l=Uf())&&(r._label=l.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(a,r){a&1&&yc(`animationend`,function(d){return r.onAnimationEnd(d.animationName)})(`animationcancel`,function(d){return r.onAnimationEnd(d.animationName)}),a&2&&Qv(`mat-snack-bar-container-enter`,r._animationState===`visible`)(`mat-snack-bar-container-exit`,r._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!r._animationsDisabled)},features:[Rv],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(a,r){a&1&&(Ja(0,`div`,1)(1,`div`,2,0)(3,`div`,3),xv(4,t,0,0,`ng-template`,4),xf(),mc(5,`div`),xf()()),a&2&&($b(5),ki(`aria-live`,r._live)(`role`,r._role)(`id`,r._liveElementId))},dependencies:[Rt],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})})()}return i})();var pi=new E(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new Oe});var Yn=(()=>{class i{_live=g(Jo);_injector=g(ue);_breakpointObserver=g(un);_parentSnackBar=g(i,{optional:!0,skipSelf:!0});_defaultConfig=g(pi);_animationsDisabled=_r();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=di;snackBarContainerComponent=hi;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t=``,o){let a=r(r({},this._defaultConfig),o);return a.data={message:e,action:t},a.announcementMessage===e&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let o=t&&t.viewContainerRef&&t.viewContainerRef.injector,a=ue.create({parent:o||this._injector,providers:[{provide:Oe,useValue:t}]}),r=new Ce(this.snackBarContainerComponent,t.viewContainerRef,a),l=e.attach(r);return l.instance.snackBarConfig=t,l.instance}_attach(e,t){let o=r(r(r({},new Oe),this._defaultConfig),t),a=this._createOverlay(o),r$1=this._attachSnackBarContainer(a,o),l=new Fe(r$1,a);if(e instanceof to){let d=new te(e,null,{$implicit:o.data,snackBarRef:l});l.instance=r$1.attachTemplatePortal(d)}else{let m=new Ce(e,void 0,this._createInjector(o,l));l.instance=r$1.attachComponentPortal(m).instance}return this._breakpointObserver.observe(Gd.HandsetPortrait).pipe(ko(a.detachments())).subscribe(d=>{a.overlayElement.classList.toggle(this.handsetCssClass,d.matches)}),o.announcementMessage&&r$1._onAnnounce.subscribe(()=>{this._live.announce(o.announcementMessage,o.politeness)}),this._animateSnackBar(l,o),this._openedSnackBarRef=l,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new me;t.direction=e.direction;let o=rt(this._injector),a=e.direction===`rtl`,r=e.horizontalPosition===`left`||e.horizontalPosition===`start`&&!a||e.horizontalPosition===`end`&&a,l=!r&&e.horizontalPosition!==`center`;return r?o.left(`0`):l?o.right(`0`):o.centerHorizontally(),e.verticalPosition===`top`?o.top(`0`):o.bottom(`0`),t.positionStrategy=o,t.disableAnimations=this._animationsDisabled,Be(this._injector,t)}_createInjector(e,t){let o=e&&e.viewContainerRef&&e.viewContainerRef.injector;return ue.create({parent:o||this._injector,providers:[{provide:Fe,useValue:t},{provide:Hn,useValue:e.data}]})}static ɵfac=function(t){return new(t||i)};static ɵprov=G({token:i,factory:i.ɵfac})}return i})();var Xn=class i{snack=g(Yn);ok(n,e=3e3){this.snack.open(n,`Cerrar`,{duration:e})}conDeshacer(n,e,t=8e3){this.snack.open(n,`Deshacer`,{duration:t}).onAction().subscribe(()=>e())}error(n){this.snack.open(ta(n),`Cerrar`,{duration:6e3})}static ɵfac=function(e){return new(e||i)};static ɵprov=P({token:i,factory:i.ɵfac,providedIn:`root`})};var Gn=(()=>{class i{_animationsDisabled=_r();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||i)};static ɵcmp=xi$1({type:i,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,o){t&2&&Qv(`mat-pseudo-checkbox-indeterminate`,o.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,o.state===`checked`)(`mat-pseudo-checkbox-disabled`,o.disabled)(`mat-pseudo-checkbox-minimal`,o.appearance===`minimal`)(`mat-pseudo-checkbox-full`,o.appearance===`full`)(`_mat-animation-noopable`,o._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,o){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return i})();var ht=new E(`MAT_OPTION_PARENT_COMPONENT`);var pt=new E(`MatOptgroup`);var mi=(()=>{class i{label;disabled=!1;_labelId=g(ge).getId(`mat-optgroup-label-`);_inert;constructor(){let e=g(ht,{optional:!0});this._inert=e?.inertGroups??!1}static ɵfac=function(t){return new(t||i)};static ɵcmp=(function(){let e=[`*`,[[`mat-option`],[`ng-container`]]];return xi$1({type:i,selectors:[[`mat-optgroup`]],hostAttrs:[1,`mat-mdc-optgroup`],hostVars:3,hostBindings:function(a,r){a&2&&ki(`role`,r._inert?null:`group`)(`aria-disabled`,r._inert?null:r.disabled.toString())(`aria-labelledby`,r._inert?null:r._labelId)},inputs:{label:`label`,disabled:[2,`disabled`,`disabled`,ji]},exportAs:[`matOptgroup`],features:[dD([{provide:pt,useExisting:i}])],ngContentSelectors:[`*`,`mat-option, ng-container`],decls:5,vars:4,consts:[[`role`,`presentation`,1,`mat-mdc-optgroup-label`,3,`id`],[1,`mdc-list-item__primary-text`]],template:function(a,r){a&1&&(r_(e),Of(0,`span`,0)(1,`span`,1),N_(2),o_(3),kf()(),o_(4,1)),a&2&&(Qv(`mdc-list-item--disabled`,r.disabled),Bv(`id`,r._labelId),$b(2),Bf(``,r.label,` `))},styles:[`.mat-mdc-optgroup {
  color: var(--%NS%mat-optgroup-label-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-optgroup-label-text-font, var(--%NS%mat-sys-title-small-font));
  line-height: var(--%NS%mat-optgroup-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-optgroup-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-optgroup-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: var(--%NS%mat-optgroup-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}

.mat-mdc-optgroup-label {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  outline: none;
}
.mat-mdc-optgroup-label.mdc-list-item--disabled {
  opacity: 0.38;
}
.mat-mdc-optgroup-label .mdc-list-item__primary-text {
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  white-space: normal;
  color: inherit;
}
`],encapsulation:2})})()}return i})();var Bt=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}};var mt=(()=>{class i{_element=g(Rt$1);_changeDetectorRef=g(co);_parent=g(ht,{optional:!0});group=g(pt,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=g(ge).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=te$1(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new ye;_text;_stateChanges=new X;constructor(){let e=g($A);e.load(Gt),e.load(jq),this._signalDisableRipple=!!this._parent&&di$1(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let o=this._getHostElement();typeof o.focus==`function`&&o.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!or(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Bt(this,e))}static ɵfac=function(t){return new(t||i)};static ɵcmp=(function(){let e=[`text`],t=[[[`mat-icon`]],`*`],o=[`mat-icon`,`*`];function a(d,m){if(d&1&&mc(0,`mat-pseudo-checkbox`,1),d&2){let c=t_();Lv(`disabled`,c.disabled)(`state`,c.selected?`checked`:`unchecked`)}}function r(d,m){if(d&1&&mc(0,`mat-pseudo-checkbox`,3),d&2){let c=t_();Lv(`disabled`,c.disabled)}}function l(d,m){if(d&1&&(Ja(0,`span`,4),N_(1),xf()),d&2){let c=t_();$b(),Bf(`(`,c.group.label,`)`)}}return xi$1({type:i,selectors:[[`mat-option`]],viewQuery:function(m,c){if(m&1&&zv(e,7),m&2){let p;jf(p=Uf())&&(c._text=p.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(m,c){m&1&&yc(`click`,function(){return c._selectViaInteraction()})(`keydown`,function(f){return c._handleKeydown(f)}),m&2&&(Bv(`id`,c.id),ki(`aria-selected`,c.selected)(`aria-disabled`,c.disabled.toString()),Qv(`mdc-list-item--selected`,c.selected)(`mat-mdc-option-multiple`,c.multiple)(`mat-mdc-option-active`,c.active)(`mdc-list-item--disabled`,c.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,ji]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:o,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(m,c){m&1&&(r_(t),jT(0,a,1,2,`mat-pseudo-checkbox`,1),o_(1),Ja(2,`span`,2,0),o_(4,1),xf(),jT(5,r,1,1,`mat-pseudo-checkbox`,3),jT(6,l,2,1,`span`,4),mc(7,`div`,5)),m&2&&(BT(c.multiple?0:-1),$b(5),BT(!c.multiple&&c.selected&&!c.hideSingleSelectionIndicator?5:-1),$b(),BT(c.group&&c.group._inert?6:-1),$b(),Lv(`matRippleTrigger`,c._getHostElement())(`matRippleDisabled`,c.disabled||c.disableRipple))},dependencies:[Gn,Mn$2],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return i})();function Un(i,n,e){if(e.length){let t=n.toArray(),o=e.toArray(),a=0;for(let r=0;r<i+1;r++)t[r].group&&t[r].group===o[a]&&a++;return a}return 0}function Kn(i,n,e,t){return i<e?i:i+n>e+t?Math.max(0,i-t+n):e}var ze=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new X;bulk={select:n=>this._select(n),deselect:n=>this._deselect(n),setSelection:n=>this._setSelection(n)};constructor(n=!1,e,t=!0,o){this._multiple=n,this._emitChanges=t,this.compareWith=o,e&&e.length&&(n?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){return this._select(n)}deselect(...n){return this._deselect(n)}setSelection(...n){return this._setSelection(n)}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_select(n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(a=>this._getConcreteValue(a)));n.forEach(a=>this._markSelected(a)),e.filter(a=>!t.has(this._getConcreteValue(a,t))).forEach(a=>this._unmarkSelected(a));let o=this._hasQueuedChanges();return this._emitChangeEvent(),o}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var ui=(()=>{class i{_listeners=[];notify(e,t){for(let o of this._listeners)o(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(t){return new(t||i)};static ɵprov=G({token:i,factory:i.ɵfac})}return i})();var Zn=class{applyChanges(n,e,t,o,a){n.forEachOperation((r,l,d)=>{let m,c;if(r.previousIndex==null){let p=t(r,l,d);m=e.createEmbeddedView(p.templateRef,p.context,p.index),c=q.INSERTED}else d==null?(e.remove(l),c=q.REMOVED):(m=e.get(l),e.move(m,d),c=q.MOVED);a&&a({context:m?.context,operation:c,record:r})})}detach(){}};var qn=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=gr({type:i});static ɵinj=En$1({imports:[qq]})}return i})();var Ft=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=gr({type:i});static ɵinj=En$1({imports:[Yt,qn,mt,qq]})}return i})();var vi=new E(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=g(ue);return()=>Ve(i)}});var bi=new E(`MAT_SELECT_CONFIG`);var yi=new E(`MatSelectTrigger`);var zt=class{source;value;constructor(n,e){this.source=n,this.value=e}};var Er=(()=>{class i{_viewportRuler=g(ee);_changeDetectorRef=g(co);_elementRef=g(Rt$1);_dir=g(ZA,{optional:!0});_idGenerator=g(ge);_renderer=g(_n);_parentFormField=g(Er$1,{optional:!0});ngControl=g(K,{self:!0,optional:!0});_liveAnnouncer=g(Jo);_defaultOptions=g(bi,{optional:!0});_animationsDisabled=_r();_popoverLocation;_initialized=new X;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let o=this.panel.nativeElement,a=Un(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&a===1?o.scrollTop=0:o.scrollTop=Kn(r.offsetTop,r.offsetHeight,o.scrollTop,o.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new zt(this,e)}_scrollStrategyFactory=g(vi);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new X;_errorStateTracker;stateChanges=new X;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=te$1(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Bt$1.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=xo(()=>{let e=this.options;return e?e.changes.pipe(qs(e),Ae$1(()=>$I(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ae$1(()=>this.optionSelectionChanges))});openedChange=new ye;_openedStream=this.openedChange.pipe(Ee(e=>e),B(()=>{}));_closedStream=this.openedChange.pipe(Ee(e=>!e),B(()=>{}));selectionChange=new ye;valueChange=new ye;constructor(){let e=g(tn),t=g(bo,{optional:!0}),o=g(Co,{optional:!0}),a=g(new Ic(`tabindex`),{optional:!0}),r=g(Ne,{optional:!0}),l=g(Rd,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new et$1(e,l||this.ngControl,o,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=r?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new ze(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ko(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ko(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(qs(null),ko(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let o=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?o.setAttribute(`aria-labelledby`,e):o.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe($e$1(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(o),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,a=>{a.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),o=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,o=t===40||t===38||t===37||t===39,a=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&a&&!or(e)||(this.multiple||e.altKey)&&o)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;r.onKeydown(e);let d=this.selected;d&&l!==d&&this._liveAnnouncer.announce(d.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,o=e.keyCode,a=o===40||o===38,r=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!r&&(o===13||o===32)&&t.activeItem&&!or(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&o===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(d=>!d.disabled&&!d.selected);this.options.forEach(d=>{d.disabled||(l?d.select():d.deselect())})}else{let l=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==l&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!or(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(o=>{if(this._selectionModel.isSelected(o))return!1;try{return(o.value!=null||this.canSelectNullableOptions)&&this._compareWith(o.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof Se?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new hn(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=$I(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ko(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),$I(...this.options.map(t=>t._stateChanges)).pipe(ko(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let o=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(o!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),o!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,o)=>this.sortComparator?this.sortComparator(t,o,e):e.indexOf(t)-e.indexOf(o)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(o=>o.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=me$1(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||i)};static ɵcmp=(function(){let e=[`trigger`],t=[`panel`],o=[[[`mat-select-trigger`]],`*`],a=[`mat-select-trigger`,`*`];function r(p,f){if(p&1&&(Ja(0,`span`,4),N_(1),xf()),p&2){let h=t_();$b(),nD(h.placeholder)}}function l(p,f){p&1&&o_(0)}function d(p,f){if(p&1&&(Ja(0,`span`,11),N_(1),xf()),p&2){let h=t_(2);$b(),nD(h.triggerValue)}}function m(p,f){if(p&1&&(Ja(0,`span`,5),jT(1,l,1,0)(2,d,2,1,`span`,11),xf()),p&2){let h=t_();$b(),BT(h.customTrigger?1:2)}}function c(p,f){if(p&1){let h=QT();Ja(0,`div`,12,1),yc(`keydown`,function(_){Tg(h);let Le=t_();return _g(Le._handleKeydown(_))}),o_(2,1),xf()}if(p&2){let h=t_();v_(h.panelClass),Qv(`mat-select-panel-animations-enabled`,!h._animationsDisabled)(`mat-primary`,h._parentFormField?.color===`primary`)(`mat-accent`,h._parentFormField?.color===`accent`)(`mat-warn`,h._parentFormField?.color===`warn`)(`mat-undefined`,!h._parentFormField?.color),ki(`id`,h.id+`-panel`)(`aria-multiselectable`,h.multiple)(`aria-label`,h.ariaLabel||null)(`aria-labelledby`,h._getPanelAriaLabelledby())}}return xi$1({type:i,selectors:[[`mat-select`]],contentQueries:function(f,h,u){if(f&1&&vc(u,yi,5)(u,mt,5)(u,pt,5),f&2){let _;jf(_=Uf())&&(h.customTrigger=_.first),jf(_=Uf())&&(h.options=_),jf(_=Uf())&&(h.optionGroups=_)}},viewQuery:function(f,h){if(f&1&&zv(e,5)(t,5)(st,5),f&2){let u;jf(u=Uf())&&(h.trigger=u.first),jf(u=Uf())&&(h.panel=u.first),jf(u=Uf())&&(h._overlayDir=u.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(f,h){f&1&&yc(`keydown`,function(_){return h._handleKeydown(_)})(`focus`,function(){return h._onFocus()})(`blur`,function(){return h._onBlur()}),f&2&&(ki(`id`,h.id)(`tabindex`,h.disabled?-1:h.tabIndex)(`aria-controls`,h.panelOpen?h.id+`-panel`:null)(`aria-expanded`,h.panelOpen)(`aria-label`,h.ariaLabel||null)(`aria-required`,h.required.toString())(`aria-disabled`,h.disabled.toString())(`aria-invalid`,h.errorState)(`aria-activedescendant`,h._getAriaActiveDescendant()),Qv(`mat-mdc-select-disabled`,h.disabled)(`mat-mdc-select-invalid`,h.errorState)(`mat-mdc-select-required`,h.required)(`mat-mdc-select-empty`,h.empty)(`mat-mdc-select-multiple`,h.multiple)(`mat-select-open`,h.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,ji],disableRipple:[2,`disableRipple`,`disableRipple`,ji],tabIndex:[2,`tabIndex`,`tabIndex`,p=>p==null?0:MM(p)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,ji],placeholder:`placeholder`,required:[2,`required`,`required`,ji],multiple:[2,`multiple`,`multiple`,ji],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,ji],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,MM],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,ji]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[dD([{provide:Nr,useExisting:i},{provide:ht,useExisting:i}]),Mn$1],ngContentSelectors:a,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(f,h){if(f&1&&(r_(o),Ja(0,`div`,2,0),yc(`click`,function(){return h.open()}),Ja(3,`div`,3),jT(4,r,2,1,`span`,4)(5,m,3,1,`span`,5),xf(),Ja(6,`div`,6)(7,`div`,7),jg(),Ja(8,`svg`,8),mc(9,`path`,9),xf()()()(),xv(10,c,3,16,`ng-template`,10),yc(`detach`,function(){return h.close()})(`backdropClick`,function(){return h.close()})(`overlayKeydown`,function(_){return h._handleOverlayKeydown(_)})),f&2){let u=a_(1);$b(3),ki(`id`,h._valueId),$b(),BT(h.empty?4:5),$b(6),Lv(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,h._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,h._scrollStrategy)(`cdkConnectedOverlayOrigin`,h._preferredOverlayOrigin||u)(`cdkConnectedOverlayPositions`,h._positions)(`cdkConnectedOverlayWidth`,h._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,h._popoverLocation)}},dependencies:[Se,st],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear forwards;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return i})();var Dr=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=gr({type:i});static ɵinj=En$1({imports:[lt,Ft,qq,Pe,Cc,Ft]})}return i})();export{ot as A,zn as B,eo as C,me as D,lt as E,te as F,ui as I,we as L,q as M,rt as N,mi as O,so as P,xi as R,ei as S,it as T,Un as _,Ce as a,Zn as b,Er as c,Gn as d,Kn as f,Tt as g,Rt as h,Bt as i,pt as j,mt as k,Et as l,Pe as m,An as n,Cn as o,Ot as p,Be as r,Dr as s,Ae as t,Ft as u,Ve as v,ht as w,ee as x,Xn as y,ze as z};