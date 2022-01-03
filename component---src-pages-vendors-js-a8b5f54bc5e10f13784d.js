"use strict";(self.webpackChunkdiy_flavor_safety=self.webpackChunkdiy_flavor_safety||[]).push([[785],{6002:function(e,r,n){var t=n(4942),a=n(5987),o=n(5900),s=n.n(o),i=n(7294),c=(n(2473),n(5210)),l=n(982),d=n(9541),u=n(4550),f=n(5893),p=["className","bsPrefix","variant","horizontal","numbered","as"];function v(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function m(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?v(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var b=i.forwardRef((function(e,r){var n,t=(0,c.Ch)(e,{activeKey:"onSelect"}),o=t.className,i=t.bsPrefix,u=t.variant,v=t.horizontal,b=t.numbered,g=t.as,h=void 0===g?"div":g,y=(0,a.Z)(t,p),j=(0,d.vE)(i,"list-group");return v&&(n=!0===v?"horizontal":"horizontal-".concat(v)),(0,f.jsx)(l.Z,m(m({ref:r},y),{},{as:h,className:s()(o,j,u&&"".concat(j,"-").concat(u),n&&"".concat(j,"-").concat(n),b&&"".concat(j,"-numbered"))}))}));b.displayName="ListGroup",r.Z=Object.assign(b,{Item:u.Z})},4550:function(e,r,n){var t=n(4942),a=n(885),o=n(5987),s=n(5900),i=n.n(s),c=n(7294),l=n(5655),d=n(3904),u=n(9148),f=n(9541),p=n(5893),v=["bsPrefix","active","disabled","eventKey","className","variant","action","as"];function m(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function b(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?m(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var g=c.forwardRef((function(e,r){var n=e.bsPrefix,t=e.active,s=e.disabled,c=e.eventKey,m=e.className,g=e.variant,h=e.action,y=e.as,j=(0,o.Z)(e,v);n=(0,f.vE)(n,"list-group-item");var O=(0,d.v)(b({key:(0,u.h)(c,j.href),active:t},j)),x=(0,a.Z)(O,2),w=x[0],Z=x[1],C=(0,l.Z)((function(e){if(s)return e.preventDefault(),void e.stopPropagation();w.onClick(e)}));s&&void 0===j.tabIndex&&(j.tabIndex=-1,j["aria-disabled"]=!0);var P=y||(h?j.href?"a":"button":"div");return(0,p.jsx)(P,b(b(b({ref:r},j),w),{},{onClick:C,className:i()(m,n,Z.isActive&&"active",s&&"disabled",g&&"".concat(n,"-").concat(g),h&&"".concat(n,"-action"))}))}));g.displayName="ListGroupItem",r.Z=g},5651:function(e,r,n){n.d(r,{Z:function(){return p}});var t=n(5444),a=n(5697),o=n.n(a),s=n(7294),i=n(1809),c=n(2623),l=n(6002),d=n(4550),u=n(4165),f=n(5893);function p({name:e,code:r,flavorCount:n,link:a,description:o,flavors:p,ingredients:v}){const m=[...p],b=[...v];return m.sort(((e,r)=>e.category.toLowerCase().localeCompare(r.category.toLowerCase())||e.name.toLowerCase().localeCompare(r.name.toLowerCase()))),b.sort(((e,r)=>e.category.toLowerCase().localeCompare(r.category.toLowerCase())||e.name.toLowerCase().localeCompare(r.name.toLowerCase()))),(0,f.jsxs)(i.Z,{className:"my-3",children:[(0,f.jsx)(i.Z.Header,{children:(0,f.jsxs)("h3",{children:[(0,f.jsx)("span",{children:e}),a?(0,f.jsx)("span",{className:"ml-auto",children:(0,f.jsx)("a",{href:a.href,target:"_blank",rel:"noopener noreferrer",children:a.title})}):null,(0,f.jsxs)("span",{children:[" (",r,")"]}),(0,f.jsxs)(c.Z,{bg:"secondary",className:"float-end",children:[n," flavors"]})]})}),(0,f.jsxs)(i.Z.Body,{children:[o?(0,f.jsx)("p",{children:o}):null,null!=m&&m.length?(0,f.jsxs)(s.Fragment,{children:[(0,f.jsxs)("h6",{className:"my-3",children:["Flavors with concerning ingredients (",m.length,")"]}),(0,f.jsx)(l.Z,{activeKey:"",children:m.map((e=>(0,f.jsx)(d.Z,{action:!0,as:t.Link,to:(0,u.getFlavorSlug)(e),variant:(0,u.getCategoryVariant)(e.category),children:e.name},`${e.name}-${e.casNumbers.join("--")}`)))})]}):null,null!=b&&b.length?(0,f.jsxs)(s.Fragment,{children:[(0,f.jsxs)("h6",{className:"my-3",children:["Ingredients used by this vendor (",b.length,")"]}),(0,f.jsx)(l.Z,{activeKey:"",children:b.map((e=>(0,f.jsx)(d.Z,{action:!0,as:t.Link,to:(0,u.getIngredientSlug)(e),variant:(0,u.getCategoryVariant)(e.category),children:e.name},e.casNumber)))})]}):null]})]})}p.propTypes={name:o().string.isRequired,code:o().string.isRequired,flavorCount:o().number.isRequired,link:o().shape({title:o().string.isRequired,href:o().string.isRequired}),description:o().string,flavors:o().arrayOf(o().object),ingredients:o().arrayOf(o().object)}},3494:function(e,r,n){n.r(r),n.d(r,{default:function(){return f}});var t=n(5697),a=n.n(t),o=n(7294),s=n(6187),i=n(994),c=n(5753),l=n(2335),d=n(5651),u=n(5893);function f({data:e}){const{flavors:{nodes:r},ingredients:{nodes:n},vendors:{nodes:t}}=e,a=(0,o.useMemo)((()=>{const e=t.flatMap((e=>{const t=r.filter((r=>r.vendor===e.code)),a=n.filter((e=>t.some((r=>r.casNumbers.includes(e.casNumber)))));return t.length?[{...e,flavors:t,ingredients:a}]:[]}));return e.sort(((e,r)=>e.name.localeCompare(r.name))),e}),[t]);return(0,u.jsxs)(c.Z,{children:[(0,u.jsx)(l.Z,{title:"Vendor Info"}),(0,u.jsxs)(s.Z,{children:[(0,u.jsx)(i.Z,{children:(0,u.jsx)("h1",{children:"Vendor Info"})}),a.map((e=>(0,o.createElement)(d.Z,{...e,key:e.code,flavors:e.flavors,ingredients:e.ingredients})))]})]})}f.propTypes={data:a().object.isRequired}}}]);
//# sourceMappingURL=component---src-pages-vendors-js-a8b5f54bc5e10f13784d.js.map