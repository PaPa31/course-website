(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1NdR":function(e,t,n){},EDuE:function(e,t,n){},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),s=n("Wbzz"),o=n("+ZDr"),c=n.n(o),i=n("VgBE"),l=(n("1NdR"),i.sorter),u=function(e){var t=e.content,n=e.title;console.log(l);var r=t.map((function(e){return e.node.frontmatter})).sort(l).reduce((function(e,t){return e.length?(e[e.length-1][0].section.split(",")[0]===t.section.split(",")[0]?e[e.length-1].push(t):e.push([t]),e):(e.push([t]),e)}),[]);return a.a.createElement("div",{className:"main-card"},a.a.createElement("h1",{className:"lesson-title gradient"},n),a.a.createElement("div",{className:"lesson-content"},a.a.createElement("ol",{className:"sections-name"},r.map((function(e){return a.a.createElement("li",{key:e[0].section},a.a.createElement("h3",{className:"lesson-section-title"},e[0].section),a.a.createElement("ol",null,e.map((function(e){return a.a.createElement("li",{key:e.path},a.a.createElement(c.a,{to:e.path},e.title))}))))})))))};n("EDuE"),t.default=function(){return a.a.createElement(s.a,{query:"4265117101",render:function(e){return a.a.createElement("div",{className:"index"},a.a.createElement("div",{className:"jumbotron gradient"},a.a.createElement("h1",null,e.site.siteMetadata.title),a.a.createElement("h2",null,e.site.siteMetadata.subtitle)),a.a.createElement(u,{title:"Table of Contents",content:e.allMarkdownRemark.edges}))}})}},VgBE:function(e,t){function n(e){if(!/^\d+[A-Z]+$/.test(e))throw new Error(e+" does not match the section format. It must be <numbers><capital letters>, like 16A or 5F (case sensitive)");return[/^\d+/.exec(e)[0],/[A-Z]+$/.exec(e)[0]]}var r=function(e){return e.split("").map((function(e,t){return e.charCodeAt(0)*Math.pow(10,t)})).reduce((function(e,t){return e+t}))};e.exports.splitSections=n,e.exports.sorter=function(e,t){var a,s;e.attributes&&e.attributes.order?(a=e.attributes.order,s=t.attributes.order):(a=e.order,s=t.order);var o=n(a),c=o[0],i=o[1],l=n(s),u=l[0],m=l[1];return c!==u?c-u:r(i)-r(m)}}}]);
//# sourceMappingURL=component---src-pages-index-js-832caf77ae4899c5cee0.js.map