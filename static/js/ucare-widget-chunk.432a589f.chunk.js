"use strict";(self.webpackChunkvacancies=self.webpackChunkvacancies||[]).push([[923],{882:function(e,n,r){r.r(n);var t=r(789),u=r(975),a=r(540),o=r.n(a),c=r(577),l=r(77),i=r.n(l),f=(r(947),function(e){var n=function(e){var n=(0,u.useRef)(e);return(0,u.useEffect)((function(){n.current=e}),[e]),n}(e);return(0,u.useCallback)((function(){return n.current&&n.current.apply(n,arguments)}),[n])});var s=function(e,n){var r=e.id,a=e.name,o=e.value,l=e.onFileSelect,s=e.onChange,d=e.onDialogOpen,C=e.onDialogClose,p=e.onTabChange,A=e.apiRef,E=e.customTabs,L=e.validators,v=e.tabsCss,g=e.locale,O=e.localeTranslations,R=e.localePluralize,w=e.previewUrlCallback,b=(0,t.a)(e,["id","name","value","onFileSelect","onChange","onDialogOpen","onDialogClose","onTabChange","apiRef","customTabs","validators","tabsCss","locale","localeTranslations","localePluralize","previewUrlCallback"]),h=(0,u.useRef)(null),U=(0,u.useRef)(null),_=f(l),m=f(s),D=f(d),P=f(C),T=f(p);(0,c.u)(E,n);var I=function(e,n){var r=!0,t=(0,u.useRef)();t.current?r=!!(n&&t.current.deps&&i()(n,t.current.deps)):t.current={deps:n,result:e()};var a=r?t.current:{deps:n,result:e()};return t.current=a,a.result}((function(){return e=b,Object.entries(e).reduce((function(e,n){var r=(0,t.b)(n,2),u=r[0],a=r[1];return(0,t.c)((0,t.c)({},e),{},(0,t.d)({},"data-".concat(u.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase()),a))}),{});var e}),[b]);return(0,c.a)((function(){return g&&(window.UPLOADCARE_LOCALE=g),R&&(window.UPLOADCARE_LOCALE_PLURALIZE=R),O&&(window.UPLOADCARE_LOCALE_TRANSLATIONS=O),w&&(window.UPLOADCARE_PREVIEW_URL_CALLBACK=w),n.plugin((function(e){e.locale.rebuild({locale:g||null,localeTranslations:O||null,localePluralize:R||null})})),function(){g&&delete window.UPLOADCARE_LOCALE,R&&delete window.UPLOADCARE_LOCALE_PLURALIZE,O&&delete window.UPLOADCARE_LOCALE_TRANSLATIONS,w&&delete window.UPLOADCARE_PREVIEW_URL_CALLBACK}}),[g,O,R,w]),(0,u.useEffect)((function(){U.current=n.Widget(h.current);var e=h.current.nextSibling;return function(){return e&&e.parentNode.removeChild(e)}}),[n,I]),function(e,n){(0,u.useEffect)((function(){if(null!=n){var r=e.current;return n.forEach((function(e){r.validators.push(e)})),function(){r.validators.length=0}}}),[e,n])}(U,L),(0,u.useEffect)((function(){return U.current.onUploadComplete.add(m),U.current.onChange.add(_),function(){U.current.onUploadComplete.remove(m),U.current.onChange.remove(_)}}),[m,_,n,I]),(0,u.useEffect)((function(){var e,n=function(n){(e=n).done(P).fail(P).progress(T),D(n)};return U.current.onDialogOpen.add(n),function(){U.current.onDialogOpen.remove(n),e&&e.reject()}}),[I,P,D,T]),(0,u.useEffect)((function(){var e=[],n=function(n){e=n?n.files?n.files():[n]:[]};return U.current.onChange.add(n),function(){e.forEach((function(e){return e.cancel()})),U.current.onChange.remove(n)}}),[I]),(0,u.useEffect)((function(){U.current.value(o)}),[o]),(0,u.useEffect)((function(){n&&v&&"string"===typeof v&&(0===v.indexOf("https://")?n.tabsCss.addUrl(v):n.tabsCss.addStyle(v))}),[n,v]),(0,u.useImperativeHandle)(A,(function(){return{openDialog:function(){return U.current.openDialog()},reloadInfo:function(){return U.current.reloadInfo()},getInput:function(){return U.current.inputElement}}}),[]),(0,u.useCallback)((function(){return u.createElement("input",(0,t._)({type:"hidden",ref:h,id:r,name:a},I))}),[I,r,a])};n.default=function(e){var n=s(e,o());return u.createElement(n,null)}}}]);
//# sourceMappingURL=ucare-widget-chunk.432a589f.chunk.js.map