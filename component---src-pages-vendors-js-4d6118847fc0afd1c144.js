(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"6VaU":function(e,t,r){"use strict";var n=r("XKFU"),a=r("xF/b"),o=r("S/j/"),i=r("ne8i"),l=r("2OiF"),c=r("zRwo");n(n.P,"Array",{flatMap:function(e){var t,r,n=o(this);return l(e),t=i(n.length),r=c(n,0),a(r,n,n,t,0,1,e,arguments[1]),r}}),r("nGyu")("flatMap")},NAXS:function(e,t,r){"use strict";var n=r("k1TG"),a=r("8o2o"),o=r("TSYQ"),i=r.n(o),l=r("q1tI"),c=r.n(l),s=r("VWqr"),u=r("ILyh"),f=r("vUet"),m=c.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.active,m=e.disabled,p=e.className,v=e.variant,d=e.action,b=e.as,y=e.eventKey,h=e.onClick,g=Object(a.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);r=Object(f.b)(r,"list-group-item");var E=Object(l.useCallback)((function(e){if(m)return e.preventDefault(),void e.stopPropagation();h&&h(e)}),[m,h]);return c.a.createElement(s.a,Object(n.a)({ref:t},g,{eventKey:Object(u.b)(y,g.href),as:b||(d?g.href?"a":"button":"div"),onClick:E,className:i()(p,r,o&&"active",m&&"disabled",v&&r+"-"+v,d&&r+"-action")}))}));m.defaultProps={variant:null,active:!1,disabled:!1},m.displayName="ListGroupItem",t.a=m},"bP+6":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return u})),r.d(t,"query",(function(){return f}));r("f3/d"),r("Vd3H"),r("91GP"),r("Z2Ku"),r("L9s1"),r("6VaU");var n=r("q1tI"),a=r.n(n),o=r("7vrA"),i=r("3Z9Z"),l=r("7oih"),c=r("EYWl"),s=r("zbQT");var u=function(e){var t,r;function n(t){var r,n=(r=e.call(this,t)||this).props.data,a=n.flavors.nodes,o=n.ingredients.nodes,i=n.vendors.nodes;return r.state={vendors:i.flatMap((function(e){var t=a.filter((function(t){return t.vendor===e.code})),r=o.filter((function(e){return t.some((function(t){return t.casNumbers.includes(e.casNumber)}))}));return t.length?[Object.assign({},e,{flavors:t,ingredients:r})]:[]}))},r.state.vendors.sort((function(e,t){return e.name.localeCompare(t.name)})),r}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.state.vendors;return a.a.createElement(l.a,null,a.a.createElement(c.a,{title:"Vendor Info"}),a.a.createElement(o.a,null,a.a.createElement(i.a,null,a.a.createElement("h1",null,"Vendor Info")),e.map((function(e){return a.a.createElement(s.a,Object.assign({},e,{key:e.code,flavors:e.flavors,ingredients:e.ingredients}))}))))},n}(n.Component),f="2692145388"},sjrs:function(e,t,r){"use strict";var n=r("k1TG"),a=r("8o2o"),o=r("TSYQ"),i=r.n(o),l=r("q1tI"),c=r.n(l),s=(r("2W6z"),r("JCAc")),u=r("vUet"),f=r("rQNl"),m=r("NAXS"),p=c.a.forwardRef((function(e,t){var r,o=Object(s.a)(e,{activeKey:"onSelect"}),l=o.className,m=o.bsPrefix,p=o.variant,v=o.horizontal,d=o.as,b=void 0===d?"div":d,y=Object(a.a)(o,["className","bsPrefix","variant","horizontal","as"]);return m=Object(u.b)(m,"list-group"),r=v?!0===v?"horizontal":"horizontal-"+v:null,c.a.createElement(f.a,Object(n.a)({ref:t},y,{as:b,className:i()(l,m,p&&m+"-"+p,r&&m+"-"+r)}))}));p.defaultProps={variant:null,horizontal:null},p.displayName="ListGroup",p.Item=m.a,t.a=p},tUrg:function(e,t,r){"use strict";r("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},"xF/b":function(e,t,r){"use strict";var n=r("EWmC"),a=r("0/R4"),o=r("ne8i"),i=r("m0Pp"),l=r("K0xU")("isConcatSpreadable");e.exports=function e(t,r,c,s,u,f,m,p){for(var v,d,b=u,y=0,h=!!m&&i(m,p,3);y<s;){if(y in c){if(v=h?h(c[y],y,r):c[y],d=!1,a(v)&&(d=void 0!==(d=v[l])?!!d:n(v)),d&&f>0)b=e(t,r,v,o(v.length),b,f-1)-1;else{if(b>=9007199254740991)throw TypeError();t[b]=v}b++}y++}return b}},zbQT:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));r("a1Th"),r("Btvt"),r("XfO3"),r("HEwt"),r("rGqo"),r("rE2o"),r("ioFf"),r("Vd3H"),r("f3/d"),r("tUrg");var n=r("Wbzz"),a=r("q1tI"),o=r.n(a),i=r("6xyR"),l=r("65eO"),c=r("sjrs"),s=r("NAXS"),u=r("7Qib");function f(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var v=function(e){var t,r,m,v,d;function b(){return e.apply(this,arguments)||this}return r=e,(t=b).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,b.prototype.render=function(){var e=this.props,t=e.code,r=e.link,n=e.name,a=e.flavorCount;return o.a.createElement(i.a,{className:"my-3"},o.a.createElement(i.a.Header,null,o.a.createElement("h3",null,o.a.createElement("span",null,n),r?o.a.createElement("span",{className:"ml-auto"},o.a.createElement("a",{href:r.href,target:"_blank",rel:"noopener noreferrer"},r.title)):null,o.a.createElement("span",null," (",t,")"),o.a.createElement(l.a,{variant:"secondary",className:"float-right"},a," flavors"))),o.a.createElement(i.a.Body,null,this.description,this.flavors,this.ingredients))},m=b,(v=[{key:"description",get:function(){var e=this.props.description;return e?o.a.createElement("p",null,e):null}},{key:"flavors",get:function(){var e=f(this.props.flavors);return e.sort((function(e,t){return e.name.toLowerCase().localeCompare(t.name.toLowerCase())})),(null==e?void 0:e.length)?o.a.createElement(a.Fragment,null,o.a.createElement("h6",{className:"my-3"},"Flavors with concerning ingredients (",e.length,")"),o.a.createElement(c.a,{activeKey:""},e.map((function(e){return o.a.createElement(s.a,{action:!0,as:n.Link,key:e.name,to:Object(u.getFlavorSlug)(e)},e.name)})))):null}},{key:"ingredients",get:function(){var e=f(this.props.ingredients);return e.sort((function(e,t){return e.category.toLowerCase().localeCompare(t.category.toLowerCase())||e.name.toLowerCase().localeCompare(t.name.toLowerCase())})),(null==e?void 0:e.length)?o.a.createElement(a.Fragment,null,o.a.createElement("h6",{className:"my-3"},"Ingredients used by this vendor (",e.length,")"),o.a.createElement(c.a,{activeKey:""},e.map((function(e){return o.a.createElement(s.a,{action:!0,as:n.Link,key:e.casNumber,to:Object(u.getIngredientSlug)(e),variant:Object(u.getCategoryVariant)(e.category)},e.name)})))):null}}])&&p(m.prototype,v),d&&p(m,d),b}(a.Component)}}]);
//# sourceMappingURL=component---src-pages-vendors-js-4d6118847fc0afd1c144.js.map