(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{dhqo:function(e,t,r){r("8+KV"),r("pIFo"),r("Oyvg"),e.exports=function(){var e=[],t=[],r={},a={},n={};function o(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function i(e,t){return e===t?t:e===e.toLowerCase()?t.toLowerCase():e===e.toUpperCase()?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.substr(1).toLowerCase():t.toLowerCase()}function s(e,t){return e.replace(/\$(\d{1,2})/g,(function(e,r){return t[r]||""}))}function l(e,t){return e.replace(t[0],(function(r,a){var n=s(t[1],arguments);return i(""===r?e[a-1]:r,n)}))}function u(e,t,a){if(!e.length||r.hasOwnProperty(e))return t;for(var n=a.length;n--;){var o=a[n];if(o[0].test(t))return l(t,o)}return t}function c(e,t,r){return function(a){var n=a.toLowerCase();return t.hasOwnProperty(n)?i(a,n):e.hasOwnProperty(n)?i(a,e[n]):u(n,a,r)}}function m(e,t,r,a){return function(a){var n=a.toLowerCase();return!!t.hasOwnProperty(n)||!e.hasOwnProperty(n)&&u(n,n,r)===n}}function h(e,t,r){return(r?t+" ":"")+(1===t?h.singular(e):h.plural(e))}return h.plural=c(n,a,e),h.isPlural=m(n,a,e),h.singular=c(a,n,t),h.isSingular=m(a,n,t),h.addPluralRule=function(t,r){e.push([o(t),r])},h.addSingularRule=function(e,r){t.push([o(e),r])},h.addUncountableRule=function(e){"string"!=typeof e?(h.addPluralRule(e,"$0"),h.addSingularRule(e,"$0")):r[e.toLowerCase()]=!0},h.addIrregularRule=function(e,t){t=t.toLowerCase(),e=e.toLowerCase(),n[e]=t,a[t]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return h.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return h.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return h.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(h.addUncountableRule),h}()},lkz9:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return d})),r.d(t,"query",(function(){return f}));r("a1Th"),r("Btvt"),r("I5cv"),r("91GP"),r("f3/d");var a=r("dhqo"),n=r.n(a),o=r("Wbzz"),i=r("q1tI"),s=r.n(i),l=r("7vrA"),u=r("3Z9Z"),c=r("JI6e"),m=r("7oih"),h=r("EYWl"),p=r("zbQT");var d=function(e){var t,r;r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a;a=i;function i(t){var r,a=(r=e.call(this,t)||this).props.data,n=a.flavors.nodes,o=a.ingredients.nodes,i=a.vendor;return r.state={flavors:n,ingredients:o,vendor:i},r}return i.prototype.render=function(){var e=this.state,t=e.flavors,r=e.ingredients,a=e.vendor,i="Vendor Info - "+a.name,d=a.name+" uses "+r.length+" concerning "+n()("ingredient",r.length)+" in "+t.length+" "+n()("flavor",t.length)+".";return s.a.createElement(m.a,null,s.a.createElement(h.a,{title:i,description:d}),s.a.createElement(l.a,null,s.a.createElement(u.a,{className:"mb-3"},s.a.createElement(c.a,null,s.a.createElement(o.Link,{to:"/vendors"},"Vendors")," » ",a.name)),s.a.createElement(u.a,null,s.a.createElement(c.a,null,s.a.createElement(p.a,Object.assign({},a,{flavors:t,ingredients:r}))))))},i}(i.Component),f="2661056220"},tUrg:function(e,t,r){"use strict";r("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},zbQT:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));r("XfO3"),r("HEwt"),r("rGqo"),r("rE2o"),r("ioFf"),r("a1Th"),r("Btvt"),r("I5cv"),r("Vd3H"),r("f3/d"),r("tUrg");var a=r("Wbzz"),n=r("q1tI"),o=r.n(n),i=r("6xyR"),s=r("65eO"),l=r("sjrs"),u=r("NAXS"),c=r("7Qib");function m(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function p(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var d=function(e){var t,r;r=e,(t=$).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var h,d,f,g;h=$;function $(){return e.apply(this,arguments)||this}return $.prototype.render=function(){var e=this.props,t=e.code,r=e.link,a=e.name,n=e.flavorCount;return o.a.createElement(i.a,{className:"my-3"},o.a.createElement(i.a.Header,null,o.a.createElement("h3",null,o.a.createElement("span",null,a),r?o.a.createElement("span",{className:"ml-auto"},o.a.createElement("a",{href:r.href,target:"_blank",rel:"noopener noreferrer"},r.title)):null,o.a.createElement("span",null," (",t,")"),o.a.createElement(s.a,{variant:"secondary",className:"float-right"},n," flavors"))),o.a.createElement(i.a.Body,null,this.description,this.flavors,this.ingredients))},d=$,(f=[{key:"description",get:function(){var e=this.props.description;return e?o.a.createElement("p",null,e):null}},{key:"flavors",get:function(){var e=this.props.flavors;return(null==e?void 0:e.length)?o.a.createElement(n.Fragment,null,o.a.createElement("h6",{className:"my-3"},"Flavors with concerning ingredients (",e.length,")"),o.a.createElement(l.a,{activeKey:""},e.map((function(e){return o.a.createElement(u.a,{action:!0,as:a.Link,key:e.name,to:Object(c.getFlavorSlug)(e)},e.name)})))):null}},{key:"ingredients",get:function(){var e=m(this.props.ingredients);return e.sort((function(e,t){return e.category.toLowerCase().localeCompare(t.category.toLowerCase())||e.name.toLowerCase().localeCompare(t.name.toLowerCase())})),(null==e?void 0:e.length)?o.a.createElement(n.Fragment,null,o.a.createElement("h6",{className:"my-3"},"Ingredients used by this vendor (",e.length,")"),o.a.createElement(l.a,{activeKey:""},e.map((function(e){return o.a.createElement(u.a,{action:!0,as:a.Link,key:e.casNumber,to:Object(c.getIngredientSlug)(e),variant:Object(c.getCategoryVariant)(e.category)},e.name)})))):null}}])&&p(d.prototype,f),g&&p(d,g),$}(n.Component)}}]);
//# sourceMappingURL=component---src-pages-vendor-js-c4d02af2666ea6775798.js.map