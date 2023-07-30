(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{431:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return y}));var r=n(3),o=n(7),a=(n(0),n(627)),i=n(631),s=n(632),c=["components"],p={id:"third-party-typescript",title:"TypeScript",sidebar_label:"TypeScript"},l={unversionedId:"docs/third-party-typescript",id:"version-7.35.0/docs/third-party-typescript",isDocsHomePage:!1,title:"TypeScript",description:"Strongly typed components",source:"@site/versioned_docs/version-7.35.0/docs/third-party-typescript.mdx",slug:"/docs/third-party-typescript",permalink:"/react-native-navigation/docs/third-party-typescript",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.35.0/docs/third-party-typescript.mdx",version:"7.35.0",sidebar_label:"TypeScript",sidebar:"version-7.35.0/docs",previous:{title:"Community libraries",permalink:"/react-native-navigation/docs/community-libraries"},next:{title:"MobX",permalink:"/react-native-navigation/docs/third-party-mobx"}},u=[{value:"Strongly typed components",id:"strongly-typed-components",children:[]},{value:"Typed props in commands",id:"typed-props-in-commands",children:[]}],m={toc:u},d="wrapper";function y(e){var t=e.components,n=Object(o.a)(e,c);return Object(a.b)(d,Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"strongly-typed-components"},"Strongly typed components"),Object(a.b)("p",null,"Both functional and class components can be typed to get the benefits of strongly typed options and props."),Object(a.b)(i.a,{defaultValue:"clazz",values:[{label:"Class Component",value:"clazz"},{label:"Functional Component",value:"functional"}],mdxType:"Tabs"},Object(a.b)(s.a,{value:"clazz",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx",metastring:"file=./third-party-typescript/strongly-typed-components-class.tsx",file:"./third-party-typescript/strongly-typed-components-class.tsx"},"import { NavigationComponent, NavigationComponentProps } from 'react-native-navigation';\n\ninterface Props extends NavigationComponentProps {\n  age: number;\n}\n\nexport default class MyComponent extends NavigationComponent<Props> {\n  // Options are strongly typed\n  static options() {\n    return {\n      statusBar: {\n        // Some options are of union type. We're using `as const` to let the-\n        // TS compiler know this value is not a regular string\n        style: 'dark' as const,\n      },\n      topBar: {\n        title: {\n          text: 'My Screen',\n        },\n      },\n    };\n  }\n\n  constructor(props: Props) {\n    super(props);\n  }\n}\n"))),Object(a.b)(s.a,{value:"functional",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx",metastring:"file=./third-party-typescript/strongly-typed-components-fn.tsx",file:"./third-party-typescript/strongly-typed-components-fn.tsx"},"import { View } from 'react-native';\nimport { NavigationFunctionComponent } from 'react-native-navigation';\n\ninterface Props {\n  name: string;\n}\n\nconst MyFunctionalComponent: NavigationFunctionComponent<Props> = ({ componentId, name }) => {\n  return <View />;\n};\n\n// Static options are also supported!\nMyFunctionalComponent.options = {\n  topBar: {\n    title: {\n      text: 'Hello functional component',\n    },\n  },\n};\nexport default MyFunctionalComponent;\n")))),Object(a.b)("h2",{id:"typed-props-in-commands"},"Typed props in commands"),Object(a.b)("p",null,"Arguments are passed to components view the ",Object(a.b)("inlineCode",{parentName:"p"},"passProp"),". This is a common source for errors as these props tend to change overtime. Luckily we can type the passProps property to avoid these regressions. The example below shows how to declare types for passProps when pushing a screen."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx",metastring:"file=./third-party-typescript/typed-props-in-commands.tsx",file:"./third-party-typescript/typed-props-in-commands.tsx"},"import { Navigation } from 'react-native-navigation';\n\ninterface Props {\n  name: string;\n}\n\nNavigation.push<Props>(componentId, {\n  component: {\n    name: 'MyComponent',\n    passProps: {\n      name: 'Bob',\n      // @ts-expect-error\n      color: 'red', // Compilation error! color isn't declared in Props\n    },\n  },\n});\n")),Object(a.b)("p",null,"The following commands accept typed passProps:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"push"),Object(a.b)("li",{parentName:"ul"},"setStackRoot"),Object(a.b)("li",{parentName:"ul"},"showModal"),Object(a.b)("li",{parentName:"ul"},"showOverlay")))}y.isMDXComponent=!0},627:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,y=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(y,s(s({ref:t},p),{},{components:n})):o.a.createElement(y,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},628:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},629:function(e,t,n){"use strict";var r=n(0),o=n(630);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},630:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},631:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(629),i=n(628),s=n(55),c=n.n(s);var p=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,u=e.values,m=e.groupId,d=e.className,y=Object(a.a)(),b=y.tabGroupChoices,f=y.setTabGroupChoices,v=Object(r.useState)(s),g=v[0],h=v[1],O=r.Children.toArray(e.children),j=[];if(null!=m){var w=b[m];null!=w&&w!==g&&u.some((function(e){return e.value===w}))&&h(w)}var x=function(e){var t=e.target,n=j.indexOf(t),r=O[n].props.value;h(r),null!=m&&(f(m,r),setTimeout((function(){var e,n,r,o,a,i,s,p;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,s=i.innerHeight,p=i.innerWidth,n>=0&&a<=p&&o<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case l:var r=j.indexOf(e.target)+1;n=j[r]||j[0];break;case p:var o=j.indexOf(e.target)-1;n=j[o]||j[j.length-1]}null===(t=n)||void 0===t||t.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:C,onFocus:x,onClick:x},n)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},632:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);