import{S as t,i as s,s as e,e as l,t as n,b as o,f as r,g as a,d as h,h as c,j as f,k as i,l as u,a as g,q as p,c as d,n as m,m as v}from"./client.931013e7.js";function E(t,s,e){const l=t.slice();return l[1]=s[e],l}function b(t){let s,e,g,p,d=t[1].title+"";return{c(){s=l("li"),e=l("a"),g=n(d),this.h()},l(t){s=o(t,"LI",{});var l=r(s);e=o(l,"A",{rel:!0,href:!0});var n=r(e);g=a(n,d),n.forEach(h),l.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",p="blog/"+t[1].slug)},m(t,l){f(t,s,l),i(s,e),i(e,g)},p(t,s){1&s&&d!==(d=t[1].title+"")&&u(g,d),1&s&&p!==(p="blog/"+t[1].slug)&&c(e,"href",p)},d(t){t&&h(s)}}}function j(t){let s,e,u,j,x,L=t[0],R=[];for(let s=0;s<L.length;s+=1)R[s]=b(E(t,L,s));return{c(){s=g(),e=l("h1"),u=n("Recent posts"),j=g(),x=l("ul");for(let t=0;t<R.length;t+=1)R[t].c();this.h()},l(t){p('[data-svelte="svelte-hfp9t8"]',document.head).forEach(h),s=d(t),e=o(t,"H1",{});var l=r(e);u=a(l,"Recent posts"),l.forEach(h),j=d(t),x=o(t,"UL",{class:!0});var n=r(x);for(let t=0;t<R.length;t+=1)R[t].l(n);n.forEach(h),this.h()},h(){document.title="Blog",c(x,"class","svelte-1frg2tf")},m(t,l){f(t,s,l),f(t,e,l),i(e,u),f(t,j,l),f(t,x,l);for(let t=0;t<R.length;t+=1)R[t].m(x,null)},p(t,[s]){if(1&s){let e;for(L=t[0],e=0;e<L.length;e+=1){const l=E(t,L,e);R[e]?R[e].p(l,s):(R[e]=b(l),R[e].c(),R[e].m(x,null))}for(;e<R.length;e+=1)R[e].d(1);R.length=L.length}},i:m,o:m,d(t){t&&h(s),t&&h(e),t&&h(j),t&&h(x),v(R,t)}}}function x(){return this.fetch("blog.json").then((t=>t.json())).then((t=>({posts:t})))}function L(t,s,e){let{posts:l}=s;return t.$$set=t=>{"posts"in t&&e(0,l=t.posts)},[l]}export default class extends t{constructor(t){super(),s(this,t,L,j,e,{posts:0})}}export{x as preload};
