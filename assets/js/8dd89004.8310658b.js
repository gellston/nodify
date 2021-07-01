(self.webpackChunknodify_docs=self.webpackChunknodify_docs||[]).push([[8745],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(i,".").concat(d)]||m[d]||l[d]||a;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var u=2;u<a;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},973:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return i},default:function(){return s}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),p={},c={unversionedId:"api/DebugConverter",id:"api/DebugConverter",isDocsHomePage:!1,title:"DebugConverter Class",description:"Namespace: Nodify",source:"@site/docs/api/DebugConverter.md",sourceDirName:"api",slug:"/api/DebugConverter",permalink:"/nodify/docs/api/DebugConverter",editUrl:"https://github.com/miroiu/nodify/edit/docs/docs/api/DebugConverter.md",version:"current",frontMatter:{},sidebar:"api",previous:{title:"ConnectorEventHandler Delegate",permalink:"/nodify/docs/api/ConnectorEventHandler"},next:{title:"DependencyObjectExtensions Class",permalink:"/nodify/docs/api/DependencyObjectExtensions"}},i=[{value:"Constructors",id:"constructors",children:[{value:"DebugConverter()",id:"debugconverter",children:[]}]},{value:"Methods",id:"methods",children:[{value:"Convert(Object, Type, Object, CultureInfo)",id:"convertobject-type-object-cultureinfo",children:[]},{value:"ConvertBack(Object, Type, Object, CultureInfo)",id:"convertbackobject-type-object-cultureinfo",children:[]},{value:"ProvideValue(IServiceProvider)",id:"providevalueiserviceprovider",children:[]}]}],u={toc:i};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Namespace:")," Nodify  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Assembly:")," Nodify  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inheritance:")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Object"},"Object")," \u2192 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Windows.Markup.MarkupExtension"},"MarkupExtension")," \u2192 ",(0,a.kt)("a",{parentName:"p",href:"DebugConverter"},"DebugConverter"),"  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implements:")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Windows.Data.IValueConverter"},"IValueConverter"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class DebugConverter : MarkupExtension, IValueConverter  \n")),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"debugconverter"},"DebugConverter()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public DebugConverter();  \n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"convertobject-type-object-cultureinfo"},"Convert(Object, Type, Object, CultureInfo)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public virtual object Convert(object value, Type targetType, object parameter, CultureInfo culture);  \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),"  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"value")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Object"},"Object"),"  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"targetType")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Type"},"Type"),"  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"parameter")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Object"},"Object"),"  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"culture")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Globalization.CultureInfo"},"CultureInfo"),"  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),"  "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Object"},"Object"),"  "),(0,a.kt)("h3",{id:"convertbackobject-type-object-cultureinfo"},"ConvertBack(Object, Type, Object, CultureInfo)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public virtual object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture);  \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),"  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"value")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Object"},"Object"),"  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"targetType")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Type"},"Type"),"  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"parameter")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Object"},"Object"),"  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"culture")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Globalization.CultureInfo"},"CultureInfo"),"  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),"  "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Object"},"Object"),"  "),(0,a.kt)("h3",{id:"providevalueiserviceprovider"},"ProvideValue(IServiceProvider)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public override object ProvideValue(IServiceProvider serviceProvider);  \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),"  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"serviceProvider")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.IServiceProvider"},"IServiceProvider"),"  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),"  "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Object"},"Object")))}s.isMDXComponent=!0}}]);