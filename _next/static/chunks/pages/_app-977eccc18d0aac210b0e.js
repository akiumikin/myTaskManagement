_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"76vg":function(e,t,n){"use strict";var r=n("TqRt"),o=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("q1tI")),i=(0,r(n("8/g6")).default)(a.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.default=i},E2gh:function(e,t,n){"use strict";var r=n("TqRt"),o=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("q1tI")),i=(0,r(n("8/g6")).default)(a.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");t.default=i},O3kt:function(e,t,n){"use strict";var r=n("TqRt"),o=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("q1tI")),i=(0,r(n("8/g6")).default)(a.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");t.default=i},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),i=n("elyg"),c=n("nOHt"),s=n("vNVm"),l={};function d(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",u=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),p=u.href,f=u.as,b=e.children,m=e.replace,v=e.shallow,g=e.scroll,j=e.locale;"string"===typeof b&&(b=a.default.createElement("a",null,b));var h=a.Children.only(b),O=h&&"object"===typeof h&&h.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),x=r(y,2),E=x[0],w=x[1],k=a.default.useCallback((function(e){E(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,E]);(0,a.useEffect)((function(){var e=w&&t&&(0,i.isLocalURL)(p),r="undefined"!==typeof j?j:n&&n.locale,o=l[p+"%"+f+(r?"%"+r:"")];e&&!o&&d(n,p,f,{locale:r})}),[f,p,w,j,t,n]);var C={ref:k,onClick:function(e){h.props&&"function"===typeof h.props.onClick&&h.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,p,f,m,v,g,j)},onMouseEnter:function(e){(0,i.isLocalURL)(p)&&(h.props&&"function"===typeof h.props.onMouseEnter&&h.props.onMouseEnter(e),d(n,p,f,{priority:!0}))}};if(e.passHref||"a"===h.type&&!("href"in h.props)){var S="undefined"!==typeof j?j:n&&n.locale,P=(0,i.getDomainLocale)(f,S,n&&n.locales,n&&n.domainLocales);C.href=P||(0,i.addBasePath)((0,i.addLocale)(f,S,n&&n.defaultLocale))}return a.default.cloneElement(h,C)};t.default=u},cha2:function(e,t,n){"use strict";n.r(t);var r=n("rePB"),o=n("nKUr"),a=n("q1tI"),i=n.n(a),c=n("ODXe"),s=n("iuhU"),l=n("R/WZ");var d=n("tr08"),u=n("wx14"),p=n("Ff2n"),f=(n("17x9"),n("Xt1q")),b=n("H2TA"),m=n("dRu9"),v=n("wpWl"),g=n("4Hym"),j=n("bfFb"),h={entering:{opacity:1},entered:{opacity:1}},O={enter:v.b.enteringScreen,exit:v.b.leavingScreen},y=a.forwardRef((function(e,t){var n=e.children,r=e.disableStrictModeCompat,o=void 0!==r&&r,i=e.in,s=e.onEnter,l=e.onEntered,f=e.onEntering,b=e.onExit,v=e.onExited,y=e.onExiting,x=e.style,E=e.TransitionComponent,w=void 0===E?m.a:E,k=e.timeout,C=void 0===k?O:k,S=Object(p.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","TransitionComponent","timeout"]),P=Object(d.a)(),R=P.unstable_strictMode&&!o,T=a.useRef(null),N=Object(j.a)(n.ref,t),L=Object(j.a)(R?T:void 0,N),B=function(e){return function(t,n){if(e){var r=R?[T.current,t]:[t,n],o=Object(c.a)(r,2),a=o[0],i=o[1];void 0===i?e(a):e(a,i)}}},M=B(f),I=B((function(e,t){Object(g.b)(e);var n=Object(g.a)({style:x,timeout:C},{mode:"enter"});e.style.webkitTransition=P.transitions.create("opacity",n),e.style.transition=P.transitions.create("opacity",n),s&&s(e,t)})),D=B(l),A=B(y),_=B((function(e){var t=Object(g.a)({style:x,timeout:C},{mode:"exit"});e.style.webkitTransition=P.transitions.create("opacity",t),e.style.transition=P.transitions.create("opacity",t),b&&b(e)})),q=B(v);return a.createElement(w,Object(u.a)({appear:!0,in:i,nodeRef:R?T:void 0,onEnter:I,onEntered:D,onEntering:M,onExit:_,onExited:q,onExiting:A,timeout:C},S),(function(e,t){return a.cloneElement(n,Object(u.a)({style:Object(u.a)({opacity:0,visibility:"exited"!==e||i?void 0:"hidden"},h[e],x,n.props.style),ref:L},t))}))})),x=a.forwardRef((function(e,t){var n=e.children,r=e.classes,o=e.className,i=e.invisible,c=void 0!==i&&i,l=e.open,d=e.transitionDuration,f=e.TransitionComponent,b=void 0===f?y:f,m=Object(p.a)(e,["children","classes","className","invisible","open","transitionDuration","TransitionComponent"]);return a.createElement(b,Object(u.a)({in:l,timeout:d},m),a.createElement("div",{className:Object(s.a)(r.root,o,c&&r.invisible),"aria-hidden":!0,ref:t},n))})),E=Object(b.a)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(x),w=n("i8i4"),k=n("l3Wi");function C(e,t){var n=function(e,t){var n,r=t.getBoundingClientRect();if(t.fakeTransform)n=t.fakeTransform;else{var o=window.getComputedStyle(t);n=o.getPropertyValue("-webkit-transform")||o.getPropertyValue("transform")}var a=0,i=0;if(n&&"none"!==n&&"string"===typeof n){var c=n.split("(")[1].split(")")[0].split(",");a=parseInt(c[4],10),i=parseInt(c[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(a-r.left,"px)"):"right"===e?"translateX(-".concat(r.left+r.width-a,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(i-r.top,"px)"):"translateY(-".concat(r.top+r.height-i,"px)")}(e,t);n&&(t.style.webkitTransform=n,t.style.transform=n)}var S={enter:v.b.enteringScreen,exit:v.b.leavingScreen},P=a.forwardRef((function(e,t){var n=e.children,r=e.direction,o=void 0===r?"down":r,i=e.in,c=e.onEnter,s=e.onEntered,l=e.onEntering,f=e.onExit,b=e.onExited,v=e.onExiting,h=e.style,O=e.timeout,y=void 0===O?S:O,x=e.TransitionComponent,E=void 0===x?m.a:x,P=Object(p.a)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),R=Object(d.a)(),T=a.useRef(null),N=a.useCallback((function(e){T.current=w.findDOMNode(e)}),[]),L=Object(j.a)(n.ref,N),B=Object(j.a)(L,t),M=function(e){return function(t){e&&(void 0===t?e(T.current):e(T.current,t))}},I=M((function(e,t){C(o,e),Object(g.b)(e),c&&c(e,t)})),D=M((function(e,t){var n=Object(g.a)({timeout:y,style:h},{mode:"enter"});e.style.webkitTransition=R.transitions.create("-webkit-transform",Object(u.a)({},n,{easing:R.transitions.easing.easeOut})),e.style.transition=R.transitions.create("transform",Object(u.a)({},n,{easing:R.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",l&&l(e,t)})),A=M(s),_=M(v),q=M((function(e){var t=Object(g.a)({timeout:y,style:h},{mode:"exit"});e.style.webkitTransition=R.transitions.create("-webkit-transform",Object(u.a)({},t,{easing:R.transitions.easing.sharp})),e.style.transition=R.transitions.create("transform",Object(u.a)({},t,{easing:R.transitions.easing.sharp})),C(o,e),f&&f(e)})),z=M((function(e){e.style.webkitTransition="",e.style.transition="",b&&b(e)})),H=a.useCallback((function(){T.current&&C(o,T.current)}),[o]);return a.useEffect((function(){if(!i&&"down"!==o&&"right"!==o){var e=Object(k.a)((function(){T.current&&C(o,T.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[o,i]),a.useEffect((function(){i||H()}),[i,H]),a.createElement(E,Object(u.a)({nodeRef:T,onEnter:I,onEntered:A,onEntering:D,onExit:q,onExited:z,onExiting:_,appear:!0,in:i,timeout:y},P),(function(e,t){return a.cloneElement(n,Object(u.a)({ref:B,style:Object(u.a)({visibility:"exited"!==e||i?void 0:"hidden"},h,n.props.style)},t))}))})),R=n("kKAo"),T=n("NqtD"),N={left:"right",right:"left",top:"down",bottom:"up"};var L={enter:v.b.enteringScreen,exit:v.b.leavingScreen},B=a.forwardRef((function(e,t){var n=e.anchor,r=void 0===n?"left":n,o=e.BackdropProps,i=e.children,c=e.classes,l=e.className,b=e.elevation,m=void 0===b?16:b,v=e.ModalProps,g=(v=void 0===v?{}:v).BackdropProps,j=Object(p.a)(v,["BackdropProps"]),h=e.onClose,O=e.open,y=void 0!==O&&O,x=e.PaperProps,w=void 0===x?{}:x,k=e.SlideProps,C=e.TransitionComponent,S=void 0===C?P:C,B=e.transitionDuration,M=void 0===B?L:B,I=e.variant,D=void 0===I?"temporary":I,A=Object(p.a)(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"]),_=Object(d.a)(),q=a.useRef(!1);a.useEffect((function(){q.current=!0}),[]);var z=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?N[t]:t}(_,r),H=a.createElement(R.a,Object(u.a)({elevation:"temporary"===D?m:0,square:!0},w,{className:Object(s.a)(c.paper,c["paperAnchor".concat(Object(T.a)(z))],w.className,"temporary"!==D&&c["paperAnchorDocked".concat(Object(T.a)(z))])}),i);if("permanent"===D)return a.createElement("div",Object(u.a)({className:Object(s.a)(c.root,c.docked,l),ref:t},A),H);var U=a.createElement(S,Object(u.a)({in:y,direction:N[z],timeout:M,appear:q.current},k),H);return"persistent"===D?a.createElement("div",Object(u.a)({className:Object(s.a)(c.root,c.docked,l),ref:t},A),U):a.createElement(f.a,Object(u.a)({BackdropProps:Object(u.a)({},o,g,{transitionDuration:M}),BackdropComponent:E,className:Object(s.a)(c.root,c.modal,l),open:y,onClose:h,ref:t},A,j),U)})),M=Object(b.a)((function(e){return{root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:"1px solid ".concat(e.palette.divider)},paperAnchorDockedTop:{borderBottom:"1px solid ".concat(e.palette.divider)},paperAnchorDockedRight:{borderLeft:"1px solid ".concat(e.palette.divider)},paperAnchorDockedBottom:{borderTop:"1px solid ".concat(e.palette.divider)},modal:{}}}),{name:"MuiDrawer",flip:!1})(B),I={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},D=function(e){return Object(u.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};var A=Object(b.a)((function(e){return{"@global":{html:I,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(u.a)({margin:0},D(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,n=void 0===t?null:t;return e.classes,a.createElement(a.Fragment,null,n)})),_=a.forwardRef((function(e,t){var n=e.classes,r=e.className,o=e.color,i=void 0===o?"primary":o,c=e.position,l=void 0===c?"fixed":c,d=Object(p.a)(e,["classes","className","color","position"]);return a.createElement(R.a,Object(u.a)({square:!0,component:"header",elevation:4,className:Object(s.a)(n.root,n["position".concat(Object(T.a)(l))],n["color".concat(Object(T.a)(i))],r,"fixed"===l&&"mui-fixed"),ref:t},d))})),q=Object(b.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(_),z=a.forwardRef((function(e,t){var n=e.classes,r=e.className,o=e.component,i=void 0===o?"div":o,c=e.disableGutters,l=void 0!==c&&c,d=e.variant,f=void 0===d?"regular":d,b=Object(p.a)(e,["classes","className","component","disableGutters","variant"]);return a.createElement(i,Object(u.a)({className:Object(s.a)(n.root,n[f],r,!l&&n.gutters),ref:t},b))})),H=Object(b.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(r.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(z),U=n("ofer"),F=n("wb2y"),V=n("PsDL"),W=n("uniG"),G=n.n(W),X=n("76vg"),J=n.n(X),K=n("E2gh"),Y=n.n(K);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=240,ee=Object(l.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(Q,"px)"),marginLeft:Q,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:Q,flexShrink:0},drawerPaper:{width:Q},drawerHeader:Z(Z({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function te(e){var t=ee(),n=Object(d.a)(),a=i.a.useState(!1),l=Object(c.a)(a,2),u=l[0],p=l[1],f=function(){p(!1)};return Object(o.jsxs)("div",{className:t.root,children:[Object(o.jsx)(A,{}),Object(o.jsx)(q,{position:"fixed",className:Object(s.a)(t.appBar,Object(r.a)({},t.appBarShift,u)),children:Object(o.jsxs)(H,{children:[Object(o.jsx)(V.a,{color:"inherit","aria-label":"open drawer",onClick:function(){p(!0)},edge:"start",className:Object(s.a)(t.menuButton,u&&t.hide),children:Object(o.jsx)(G.a,{})}),Object(o.jsx)(U.a,{variant:"h6",noWrap:!0,children:"React Component Sample"})]})}),Object(o.jsxs)(M,{className:t.drawer,variant:"persistent",anchor:"left",open:u,classes:{paper:t.drawerPaper},children:[Object(o.jsx)("div",{className:t.drawerHeader,children:Object(o.jsx)(V.a,{onClick:f,children:"ltr"===n.direction?Object(o.jsx)(J.a,{}):Object(o.jsx)(Y.a,{})})}),Object(o.jsx)(F.a,{}),e.sidemenu]}),Object(o.jsxs)("main",{className:Object(s.a)(t.content,Object(r.a)({},t.contentShift,u)),onClick:f,children:[Object(o.jsx)("div",{className:t.drawerHeader}),e.mainContent]})]})}var ne=n("YFqc"),re=n.n(ne),oe={URL:{BASE:"/frontComponent"}},ae=n("eD//"),ie=n("VD++"),ce=n("ucBr"),se=n("MquD"),le="undefined"===typeof window?a.useEffect:a.useLayoutEffect,de=a.forwardRef((function(e,t){var n=e.alignItems,r=void 0===n?"center":n,o=e.autoFocus,i=void 0!==o&&o,c=e.button,l=void 0!==c&&c,d=e.children,f=e.classes,b=e.className,m=e.component,v=e.ContainerComponent,g=void 0===v?"li":v,h=e.ContainerProps,O=(h=void 0===h?{}:h).className,y=Object(p.a)(h,["className"]),x=e.dense,E=void 0!==x&&x,k=e.disabled,C=void 0!==k&&k,S=e.disableGutters,P=void 0!==S&&S,R=e.divider,T=void 0!==R&&R,N=e.focusVisibleClassName,L=e.selected,B=void 0!==L&&L,M=Object(p.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),I=a.useContext(se.a),D={dense:E||I.dense||!1,alignItems:r},A=a.useRef(null);le((function(){i&&A.current&&A.current.focus()}),[i]);var _=a.Children.toArray(d),q=_.length&&Object(ce.a)(_[_.length-1],["ListItemSecondaryAction"]),z=a.useCallback((function(e){A.current=w.findDOMNode(e)}),[]),H=Object(j.a)(z,t),U=Object(u.a)({className:Object(s.a)(f.root,b,D.dense&&f.dense,!P&&f.gutters,T&&f.divider,C&&f.disabled,l&&f.button,"center"!==r&&f.alignItemsFlexStart,q&&f.secondaryAction,B&&f.selected),disabled:C},M),F=m||"li";return l&&(U.component=m||"div",U.focusVisibleClassName=Object(s.a)(f.focusVisible,N),F=ie.a),q?(F=U.component||m?F:"div","li"===g&&("li"===F?F="div":"li"===U.component&&(U.component="div")),a.createElement(se.a.Provider,{value:D},a.createElement(g,Object(u.a)({className:Object(s.a)(f.container,O),ref:H},y),a.createElement(F,U,_),_.pop()))):a.createElement(se.a.Provider,{value:D},a.createElement(F,Object(u.a)({ref:H},U),_))})),ue=Object(b.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(de),pe=a.forwardRef((function(e,t){var n=e.classes,r=e.className,o=Object(p.a)(e,["classes","className"]),i=a.useContext(se.a);return a.createElement("div",Object(u.a)({className:Object(s.a)(n.root,r,"flex-start"===i.alignItems&&n.alignItemsFlexStart),ref:t},o))})),fe=Object(b.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(pe),be=a.forwardRef((function(e,t){var n=e.children,r=e.classes,o=e.className,i=e.disableTypography,c=void 0!==i&&i,l=e.inset,d=void 0!==l&&l,f=e.primary,b=e.primaryTypographyProps,m=e.secondary,v=e.secondaryTypographyProps,g=Object(p.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),j=a.useContext(se.a).dense,h=null!=f?f:n;null==h||h.type===U.a||c||(h=a.createElement(U.a,Object(u.a)({variant:j?"body2":"body1",className:r.primary,component:"span",display:"block"},b),h));var O=m;return null==O||O.type===U.a||c||(O=a.createElement(U.a,Object(u.a)({variant:"body2",className:r.secondary,color:"textSecondary",display:"block"},v),O)),a.createElement("div",Object(u.a)({className:Object(s.a)(r.root,o,j&&r.dense,d&&r.inset,h&&O&&r.multiline),ref:t},g),h,O)})),me=Object(b.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(be),ve=n("oZgQ"),ge=n.n(ve),je=n("O3kt"),he=n.n(je),Oe=n("qBB9"),ye=n.n(Oe);function xe(e){return Object(o.jsx)(re.a,{href:e.to,children:Object(o.jsxs)(ue,{button:!0,style:{paddingTop:0,paddingBottom:0},children:[Object(o.jsx)(fe,{children:e.icon}),Object(o.jsx)(me,{primary:e.title})]})})}function Ee(e){return Object(o.jsx)(re.a,{href:e.to,children:Object(o.jsx)(ue,{button:!0,style:{paddingTop:0,paddingBottom:0},children:Object(o.jsx)(me,{secondary:e.title,style:{marginLeft:70}})})})}function we(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(ae.a,{children:Object(o.jsx)(xe,{to:"".concat(oe.URL.BASE,"/about"),title:"about",icon:Object(o.jsx)(he.a,{})})}),Object(o.jsx)(F.a,{}),Object(o.jsxs)(ae.a,{children:[Object(o.jsx)(xe,{to:"".concat(oe.URL.BASE,"/form"),title:"input form",icon:Object(o.jsx)(ge.a,{})}),Object(o.jsx)(Ee,{to:"".concat(oe.URL.BASE,"/form/text"),title:"text"}),Object(o.jsx)(Ee,{to:"".concat(oe.URL.BASE,"/form/radio"),title:"radio"}),Object(o.jsx)(Ee,{to:"".concat(oe.URL.BASE,"/form/checkbox"),title:"checkbox"})]}),Object(o.jsx)(F.a,{}),Object(o.jsxs)(ae.a,{children:[Object(o.jsx)(xe,{to:"".concat(oe.URL.BASE,"/others"),title:"others content",icon:Object(o.jsx)(ye.a,{})}),Object(o.jsx)(Ee,{to:"".concat(oe.URL.BASE,"/others/validation"),title:"validation"}),Object(o.jsx)(Ee,{to:"".concat(oe.URL.BASE,"/others/avoidSSR"),title:"avoid SSR"}),Object(o.jsx)(Ee,{to:"".concat(oe.URL.BASE,"/others/prismjs"),title:"prism.js"}),Object(o.jsx)(Ee,{to:"".concat(oe.URL.BASE,"/others/quill"),title:"quill"})]})]})}function ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ke(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return i.a.useEffect((function(){var e=document.querySelector("#jss-server-side");e&&e.parentElement.removeChild(e)}),[]),Object(o.jsx)(te,{sidemenu:Object(o.jsx)(we,{}),mainContent:Object(o.jsx)(t,Ce({},n))})}},oZgQ:function(e,t,n){"use strict";var r=n("TqRt"),o=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("q1tI")),i=(0,r(n("8/g6")).default)(a.createElement("path",{d:"M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"}),"Input");t.default=i},qBB9:function(e,t,n){"use strict";var r=n("TqRt"),o=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("q1tI")),i=(0,r(n("8/g6")).default)(a.createElement(a.Fragment,null,a.createElement("path",{d:"M12 2l-5.5 9h11z"}),a.createElement("circle",{cx:"17.5",cy:"17.5",r:"4.5"}),a.createElement("path",{d:"M3 13.5h8v8H3z"})),"Category");t.default=i},uniG:function(e,t,n){"use strict";var r=n("TqRt"),o=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("q1tI")),i=(0,r(n("8/g6")).default)(a.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.default=i},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,o=(0,a.useRef)(),l=(0,a.useState)(!1),d=r(l,2),u=d[0],p=d[1],f=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||u||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,u]);return(0,a.useEffect)((function(){c||u||(0,i.default)((function(){return p(!0)}))}),[u]),[f,u]};var a=n("q1tI"),i=o(n("0G5g")),c="undefined"!==typeof IntersectionObserver;var s=new Map}},[[0,1,0,2,4,3]]]);