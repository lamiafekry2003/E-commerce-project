"use strict";(self.webpackChunkecommerace_project=self.webpackChunkecommerace_project||[]).push([[528],{7459:(e,t,a)=>{a.d(t,{c:()=>c});var o=a(9060),s=a(12),i=a(3256),l=a(2656),r=a(2496);function c(e){var t,a;let{prod:c}=e,{mutate:d}=(0,i.oV)(i.iA),{mutate:n,data:u}=(0,l.m_)(l.cX);console.log(null===u||void 0===u?void 0:u.data);const[m,v]=(0,o.useState)(!1);return console.log(null===u||void 0===u||null===(t=u.data)||void 0===t?void 0:t.message),(0,r.jsx)("div",{className:"col-md-2",children:(0,r.jsxs)("div",{className:"product  cursor-pointer p-2",children:[(0,r.jsx)("i",{className:m?"fa-solid fa-heart heart text-main":"fa-solid fa-heart-pulse heart text-main",onClick:()=>{n(c._id),v(!m)}}),(0,r.jsxs)(s.cH,{to:"/productDetails/".concat(null===c||void 0===c?void 0:c._id),children:[(0,r.jsx)("img",{src:null===c||void 0===c?void 0:c.imageCover,className:"w-100",alt:null===c||void 0===c?void 0:c.title}),(0,r.jsx)("h2",{className:"h5 text-main ",children:null===c||void 0===c||null===(a=c.category)||void 0===a?void 0:a.name}),(0,r.jsx)("p",{children:null===c||void 0===c?void 0:c.title}),(0,r.jsxs)("div",{className:"box d-flex justify-content-between",children:[(0,r.jsxs)("span",{children:[null===c||void 0===c?void 0:c.price," EGP"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{className:"fa-solid fa-star rating-color"}),null===c||void 0===c?void 0:c.ratingsAverage]})]})]}),(0,r.jsx)("button",{className:"btn btn-bord my-2",onClick:()=>{d(c._id)},children:"Add To Card"})]})})}},3528:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var o=a(9060),s=a(8344),i=a(7459),l=a(128),r=a(496),c=a(2496);function d(){let{data:e,isLoading:t,error:a,isError:d,isFetched:n}=(0,l.Mj)("product",l.qm),[u,m]=(0,o.useState)([]);return t?(0,c.jsx)(s.c,{}):d?(0,c.jsx)("h2",{children:a.message}):(0,c.jsxs)("div",{className:"container",children:[(0,c.jsxs)(r.S,{children:[(0,c.jsx)("title",{children:"Products"}),(0,c.jsx)("meta",{name:"description",content:"Helmet application"})]}),(0,c.jsxs)("div",{className:"w-75 mx-auto  mt-5 p-5 form-group has-search",children:[(0,c.jsx)("span",{className:"fa fa-search form-control-feedback"}),(0,c.jsx)("input",{type:"text",className:"form-control ",placeholder:"search",onChange:function(t){let a=t.target.value,o=null===e||void 0===e?void 0:e.filter((e=>null===e||void 0===e?void 0:e.title.toLowerCase().trim().includes(a.toLowerCase().trim())));m(o)}})]}),(0,c.jsx)("div",{className:"row gy-5",children:u.length?null===u||void 0===u?void 0:u.map((e=>(0,c.jsx)(i.c,{prod:e},e._id))):null===e||void 0===e?void 0:e.map((e=>(0,c.jsx)(i.c,{prod:e},e._id)))})]})}},128:(e,t,a)=>{a.d(t,{Mj:()=>r,So:()=>l,qm:()=>i});var o=a(8372),s=a(8807);function i(){return o.c.get("https://ecommerce.routemisr.com/api/v1/products")}function l(e){return o.c.get("https://ecommerce.routemisr.com/api/v1/products/".concat(e))}function r(e,t){return(0,s.useQuery)(e,t,{select:e=>e.data.data})}}}]);
//# sourceMappingURL=528.297a0748.chunk.js.map