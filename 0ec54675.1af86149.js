(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{158:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return m}));var r=t(2),o=t(11),i=(t(0),t(216)),a={id:"examples-custom-form",title:"Custom form"},c={id:"examples-custom-form",isDocsHomePage:!1,title:"Custom form",description:"In uniforms, every form is just an injectable set of functionalities.",source:"@site/../docs/examples-custom-form.md",permalink:"/docs/examples-custom-form",sidebar:"docs",previous:{title:"Custom bridge & validator",permalink:"/docs/examples-custom-bridge"},next:{title:"Forms",permalink:"/docs/api-forms"}},s=[{value:"<code>ModifierForm</code>",id:"modifierform",children:[]}],u={rightToc:s};function m(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In uniforms, every form is just an injectable set of functionalities.\nThus, we can live without many higher order components, using composed ones instead.\nIf you want to get a deeper dive into it, we encourage you to read the source of AutoForm or QuickForm in the core package."),Object(i.b)("h3",{id:"modifierform"},Object(i.b)("inlineCode",{parentName:"h3"},"ModifierForm")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { BaseForm } from 'uniforms';\n\nconst Modifier = parent =>\n  class extends parent {\n    // Expose injector.\n    //   It's not required, but recommended.\n    static Modifier = Modifier;\n\n    // Alter component display name.\n    //   It's not required, but recommended.\n    static displayName = `Modifier${parent.displayName}`;\n\n    // Here you can override any form methods or create additional ones.\n    getModel(mode) {\n      if (mode === 'submit') {\n        const doc = super.getModel('submit');\n        const keys = this.getContextSchema().getSubfields();\n\n        const update = keys.filter(key => doc[key] !== undefined);\n        const remove = keys.filter(key => doc[key] === undefined);\n\n        // It's a good idea to omit empty modifiers.\n        const $set = update.reduce(\n          (acc, key) => ({ ...acc, [key]: doc[key] }),\n          {}\n        );\n        const $unset = remove.reduce((acc, key) => ({ ...acc, [key]: '' }), {});\n\n        return { $set, $unset };\n      }\n\n      return super.getModel(mode);\n    }\n  };\n\n// Now we have to inject our functionality. This one is a ModifierForm. Use any\n// form component you want.\nconst ModifierForm = Modifier(BaseForm);\n")))}m.isMDXComponent=!0},216:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return l}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),m=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=m(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=m(t),p=r,l=d["".concat(a,".").concat(p)]||d[p]||f[p]||i;return t?o.a.createElement(l,c(c({ref:n},u),{},{components:t})):o.a.createElement(l,c({ref:n},u))}));function l(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);