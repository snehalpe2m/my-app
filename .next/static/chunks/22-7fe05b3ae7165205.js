(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22],{8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,i=[],o=!0,l=!1;try{for(t=t.call(e);!(o=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==t.return||t.return()}finally{if(l)throw a}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var i,o=(i=t(7294))&&i.__esModule?i:{default:i},l=t(6273),c=t(387),s=t(7190);var u={};function f(e,r,t,n){if(e&&l.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[r+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=c.useRouter(),i=o.default.useMemo((function(){var r=a(l.resolveHref(n,e.href,!0),2),t=r[0],i=r[1];return{href:t,as:e.as?l.resolveHref(n,e.as):i||t}}),[n,e.href,e.as]),d=i.href,h=i.as,p=e.children,v=e.replace,m=e.shallow,b=e.scroll,j=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var x=(r=o.default.Children.only(p))&&"object"===typeof r&&r.ref,y=a(s.useIntersection({rootMargin:"200px"}),2),g=y[0],_=y[1],w=o.default.useCallback((function(e){g(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,g]);o.default.useEffect((function(){var e=_&&t&&l.isLocalURL(d),r="undefined"!==typeof j?j:n&&n.locale,a=u[d+"%"+h+(r?"%"+r:"")];e&&!a&&f(n,d,h,{locale:r})}),[h,d,_,j,t,n]);var N={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,i,o,c){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),null==o&&n.indexOf("#")>=0&&(o=!1),r[a?"replace":"push"](t,n,{shallow:i,locale:c,scroll:o}))}(e,n,d,h,v,m,b,j)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var O="undefined"!==typeof j?j:n&&n.locale,P=n&&n.isLocaleDomain&&l.getDomainLocale(h,O,n&&n.locales,n&&n.domainLocales);N.href=P||l.addBasePath(l.addLocale(h,O,n&&n.defaultLocale))}return o.default.cloneElement(r,N)};r.default=d},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,i=[],o=!0,l=!1;try{for(t=t.call(e);!(o=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==t.return||t.return()}finally{if(l)throw a}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!l,s=i.useRef(),u=a(i.useState(!1),2),f=u[0],d=u[1],h=a(i.useState(r?r.current:null),2),p=h[0],v=h[1],m=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=c.get(r);if(t)return t;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return c.set(r,t={id:r,observer:a,elements:n}),t}(t),a=n.id,i=n.observer,o=n.elements;return o.set(e,r),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{root:p,rootMargin:t}))}),[n,p,t,f]);return i.useEffect((function(){if(!l&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),i.useEffect((function(){r&&v(r.current)}),[r]),[m,f]};var i=t(7294),o=t(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},6022:function(e,r,t){"use strict";t.d(r,{MV:function(){return s},$_:function(){return d},h4:function(){return b},VM:function(){return g},tl:function(){return C},V8:function(){return O}});var n=t(5893),a=t(7294),i=t(6658),o=t.n(i);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var c=function(e){var r=e.level,t=void 0===r?"h1":r,i=e.children,o=e.className,c=function(e){var r=l({},e);return a.createElement(t,r,i)};return(0,n.jsx)(c,{className:o,children:i})};var s=function(e){var r=e.title,t=void 0===r?"Get in touch":r,a=e.buttonText,i=e.buttonURL,l=e.children,s=e.headingLevel,u=void 0===s?"h1":s;return(0,n.jsx)("section",{className:o().cta,children:(0,n.jsxs)("div",{className:o().wrap,children:[(0,n.jsx)(c,{level:u,className:o().title,children:t}),(0,n.jsxs)("div",{className:o().intro,children:[(0,n.jsx)("div",{className:o().children,children:l}),a&&i&&(0,n.jsx)("div",{className:o()["button-wrap"],children:(0,n.jsx)("a",{href:i,className:"button",children:a})})]})]})})},u=t(2393),f=t.n(u);var d=function(e){var r=e.copyrightHolder,t=void 0===r?"Company Name":r,a=(new Date).getFullYear();return(0,n.jsx)("footer",{className:f().main,children:(0,n.jsx)("div",{className:f().wrap,children:(0,n.jsx)("p",{children:"\xa9 ".concat(a," ").concat(t,". All rights reserved.")})})})},h=t(2280),p=t.n(h),v=t(1664),m=t(3161);var b=function(e){var r,t=e.title,a=void 0===t?"Headless by WP Engine":t,i=e.description,o=(0,m.Lp.useQuery().menuItems)({where:{location:m.xn.PRIMARY}}).nodes;return(0,n.jsx)("header",{children:(0,n.jsxs)("div",{className:p().wrap,children:[(0,n.jsxs)("div",{className:p()["title-wrap"],children:[(0,n.jsx)("p",{className:p()["site-title"],children:(0,n.jsx)(v.default,{href:"/",children:(0,n.jsx)("a",{children:a})})}),i&&(0,n.jsx)("p",{className:p().description,children:i})]}),(0,n.jsx)("div",{className:p().menu,children:(0,n.jsxs)("ul",{children:[null===o||void 0===o?void 0:o.map((function(e){return(0,n.jsx)("li",{children:(0,n.jsx)(v.default,{href:null!==(r=e.url)&&void 0!==r?r:"",children:(0,n.jsx)("a",{href:e.url,children:e.label})})},"".concat(e.label,"$-menu"))})),(0,n.jsx)("li",{children:(0,n.jsx)(v.default,{href:"https://github.com/wpengine/faustjs",children:(0,n.jsx)("a",{className:"button",href:"https://github.com/wpengine/faustjs",children:"GitHub"})})})]})})]})})},j=t(5768),x=t.n(j);function y(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var g=function(e){var r=e.title,t=void 0===r?"Hero Title":r,a=e.id,i=e.bgImage,o=e.buttonText,l=e.buttonURL,c=e.button2Text,s=e.button2URL,u=e.children;return(0,n.jsx)("section",function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){y(e,r,t[r])}))}return e}({},a&&{id:a},{style:{backgroundImage:i?"url(".concat(i,")"):"none"},className:x().hero,children:(0,n.jsxs)("div",{className:x().wrap,children:[(0,n.jsx)("h1",{children:t}),(0,n.jsxs)("div",{className:x().intro,children:[(0,n.jsx)("div",{className:x().children,children:u}),o&&l&&(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:l,className:"button",children:o})}),c&&s&&(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:s,className:"button button-secondary",children:c})})]})]})}))},_=t(4970),w=t.n(_);function N(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var O=function(e){var r,t,a=e.posts,i=e.intro,o=e.heading,l=e.id,s=e.headingLevel,u=void 0===s?"h1":s,f=e.postTitleLevel,d=void 0===f?"h2":f,h=e.readMoreText,p=void 0===h?"Read more":h;return(0,n.jsx)("section",function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){N(e,r,t[r])}))}return e}({className:w()["posts-block"]},l&&{id:l},{children:(0,n.jsxs)("div",{className:"wrap",children:[o&&(0,n.jsx)(c,{level:u,className:w().heading,children:o}),i&&(0,n.jsx)("p",{className:w().intro,children:i}),(0,n.jsxs)("div",{className:"posts",children:[a.map((function(e){return(0,n.jsx)("div",{className:w().single,id:"post-".concat(e.id),children:(0,n.jsxs)("div",{children:[(0,n.jsx)(c,{level:d,className:w().title,children:(0,n.jsx)(v.default,{href:"/posts/".concat(e.slug),children:(0,n.jsx)("a",{children:e.title()})})}),(0,n.jsx)("div",{className:w().excerpt,dangerouslySetInnerHTML:{__html:null!==(r=e.excerpt())&&void 0!==r?r:""}}),(0,n.jsx)(v.default,{href:"/posts/".concat(e.slug),children:(0,n.jsx)("a",{"aria-label":"Read more about ".concat(e.title||"the post"),children:p})})]})},null!==(t=e.id)&&void 0!==t?t:"")})),a&&(null===a||void 0===a?void 0:a.length)<1&&(0,n.jsx)("p",{children:"No posts found."})]})]})}))};function P(e){return(0,n.jsx)(v.default,{href:e.href,children:(0,n.jsx)("a",{"aria-label":"Next page.",children:"Next Page \u2192"})})}function L(e){return(0,n.jsx)(v.default,{href:e.href,children:(0,n.jsx)("a",{"aria-label":"Previous page.",children:"\u2190 Previous Page"})})}function C(e){var r=e.pageInfo,t=e.basePath,a="".concat(t,"/before/").concat(null===r||void 0===r?void 0:r.startCursor),i="".concat(t,"/after/").concat(null===r||void 0===r?void 0:r.endCursor);return(0,n.jsx)("nav",{className:"pagination","aria-label":"Pagination",children:(0,n.jsx)("div",{className:"wrap",children:(0,n.jsxs)("ul",{children:[r.hasPreviousPage&&(0,n.jsx)("li",{className:"pagination-previous",children:(0,n.jsx)(L,{href:a})}),r.hasNextPage&&(0,n.jsx)("li",{className:"pagination-next",children:(0,n.jsx)(P,{href:i})})]})})})}},6658:function(e){e.exports={cta:"CTA_cta__46Bdf",wrap:"CTA_wrap__uwNew",children:"CTA_children__hLTn7",title:"CTA_title__hIPik",intro:"CTA_intro__ulsH6","button-wrap":"CTA_button-wrap__VOKOZ"}},2393:function(e){e.exports={wrap:"Footer_wrap__4e6e3",main:"Footer_main__SP1FG"}},2280:function(e){e.exports={"site-title":"Header_site-title__Otw1K","title-wrap":"Header_title-wrap__4e17x",description:"Header_description__EJ3Db",wrap:"Header_wrap__R9imJ",menu:"Header_menu__6BMG0"}},5768:function(e){e.exports={hero:"Hero_hero__EXu9N",wrap:"Hero_wrap__tZ7RL",children:"Hero_children__vRawC",intro:"Hero_intro__Xv0zz"}},4970:function(e){e.exports={title:"Posts_title__q_vy3",single:"Posts_single__rpTye"}},1664:function(e,r,t){e.exports=t(8418)}}]);