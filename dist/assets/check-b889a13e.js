import{r as f,R as p,i as a}from"./index-16530e70.js";function s(){return s=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},s.apply(this,arguments)}function u(e,o){if(e==null)return{};var r=g(e,o),t,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],!(o.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function g(e,o){if(e==null)return{};var r={},t=Object.keys(e),n,i;for(i=0;i<t.length;i++)n=t[i],!(o.indexOf(n)>=0)&&(r[n]=e[n]);return r}var l=f.forwardRef(function(e,o){var r=e.color,t=r===void 0?"currentColor":r,n=e.size,i=n===void 0?24:n,c=u(e,["color","size"]);return p.createElement("svg",s({ref:o,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),p.createElement("polyline",{points:"20 6 9 17 4 12"}))});l.propTypes={color:a.string,size:a.oneOfType([a.string,a.number])};l.displayName="Check";const h=l;export{h as C};
