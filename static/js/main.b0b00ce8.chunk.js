(this["webpackJsonpnasa-api-hackathon"]=this["webpackJsonpnasa-api-hackathon"]||[]).push([[0],{41:function(e,t,a){},42:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(9),i=a.n(s),r=(a(41),a(4)),l=a(2),o=a(12),j=(a(42),a(14)),b=(a(22),a(0));function d(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"centre",children:Object(b.jsx)("h1",{children:e.image_heading})}),Object(b.jsx)(j.a,{children:Object(b.jsx)("img",{className:"img-fluid",src:e.image_src,alt:e.img_alt})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"centre",children:Object(b.jsx)("h1",{children:e.informationTitle})})]})}d.defaultProps={image_heading:"Set The image by image_heading in the props",image_src:"Set the img src by image_src in the props",informationTitle:"Set the Title here by informationTitle from the props",img_alt:"Set the img alt by img_alt from the props"};var h=a(11),m=a.n(h);var x=function(){var e=Object(c.useState)({date:""}),t=Object(o.a)(e,2),a=t[0],s=t[1];return n.a.useEffect((function(){m.a.get("https://api.nasa.gov/planetary/apod?api_key=".concat("BaJdMCMCqaioVVTgQals11eQWDF1B5U3fTT1sYVZ")).then((function(e){s(e.data)}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(d,{image_heading:a.title,image_src:a.hdurl,img_alt:"Seen of the day",informationTitle:"Information about the Picture"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"centre",children:Object(b.jsxs)("p",{children:["This picture was taken by ",Object(b.jsx)("b",{children:a.copyright})," on ",Object(b.jsx)("b",{children:function(e){var t=e.substring(0,4),a=e.substring(4,6),c=e.substring(6,8);return new Date(t,a-1,c).toDateString()}(a.date.replace("-",""))})]})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"centre",children:Object(b.jsx)("h1",{children:"Explanation"})}),Object(b.jsxs)("div",{className:"col-md-3 box",children:[Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:a.explanation}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})]})};function O(){return Object(b.jsx)("h1",{children:"Hello This is my about"})}function g(){var e=Object(c.useState)("none"),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("h1",{className:"centre",children:"Enter the search term"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter the search term here",id:"input"})]}),Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){console.log("Once more");var e=document.getElementById("input").value;m.a.get("https://images-api.nasa.gov/search?page=1&q=".concat(e,"&media_type=image")).then((function(e){if(n(""),console.log(e),i.a.unmountComponentAtNode(document.getElementById("data_div")),console.log(e.data.collection.items.length),0===e.data.collection.items.length)return console.log("No results found"),void(document.getElementById("end").style.display="");document.getElementById("end").style.display="none";var t=Object(b.jsx)("div",{className:"row",children:e.data.collection.items.map((function(e,t){try{return Object(b.jsx)("div",{className:"col-lg-4 d-flex align-items-stretch",children:Object(b.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(b.jsx)("img",{src:e.links[0].href,className:"card-img-top",alt:"Search Result"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:e.data[0].title}),Object(b.jsx)("p",{className:"card-text",children:Object(b.jsx)("b",{dangerouslySetInnerHTML:{__html:e.data[0].description}})})]}),Object(b.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(b.jsxs)("li",{className:"list-group-item",children:["Taken on - ",Object(b.jsx)("b",{children:e.data[0].date_created})]},0),Object(b.jsxs)("li",{className:"list-group-item",children:["Center -",Object(b.jsx)("b",{children:e.data[0].center})]},1),Object(b.jsxs)("li",{className:"list-group-item",children:["NASA Id - ",e.data[0].nasa_id]},2)]}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)(r.a,{basename:"/",children:[Object(b.jsx)(r.b,{to:"/image/".concat(e.data[0].nasa_id),className:"card-link",children:"Details"}),Object(b.jsx)(r.b,{to:"#",className:"card-link",children:"Another link"})]})})]})},t)}catch(a){console.log("Done")}}))});console.log("Rendering"),i.a.render(t,document.getElementById("data_div")),console.log("Rendered")}))},children:"Search for it"}),Object(b.jsx)("div",{style:{textAlign:"center",display:a},children:Object(b.jsx)("div",{id:"data_div"})}),Object(b.jsxs)("div",{style:{textAlign:"center"},children:[Object(b.jsx)("br",{}),Object(b.jsx)("h3",{id:"end",style:{display:"none"},children:"Sorry No results found"})]})]})})}function u(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"centre",children:"Space Exploration"}),Object(b.jsx)("br",{}),Object(b.jsx)("h2",{className:"centre",children:"About us"}),Object(b.jsx)("br",{}),Object(b.jsxs)("h4",{children:["This is a place to research about space and this was made as a hackathon project and we use ",Object(b.jsx)("b",{children:"official"})," NASA API that we got from ",Object(b.jsx)("a",{href:"https://api.nasa.gov",target:"_blank",rel:"noreferrer",children:"here"}),". We are planning to add personal account for you to bookmark things in it in the future release and even much more. We are even working on a ",Object(b.jsx)("b",{children:"discord bot"})," for you to make easy to use it in ",Object(b.jsx)("b",{children:"discord"})," without any problem."]})]})})}function p(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(r.b,{className:"navbar-brand",to:"/",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{className:"nav-link",to:e.aboutLink,children:e.aboutText})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{className:"nav-link",to:e.image_search_link,children:e.image_search})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{className:"nav-link",to:e.apod_link,children:e.apod_text})})]})})]})})}p.defaultProps={title:"Set title here",aboutText:"About Text here",aboutLink:"/about",image_search:"Image Search",image_search_link:"/search",apod_text:"APOD",apod_link:"/apod"};var f=a(21);function v(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"centre",children:[Object(b.jsx)("h1",{children:e.title}),Object(b.jsx)(j.a,{children:Object(b.jsx)("img",{src:e.img_src,className:"img-fluid",alt:e.NASA_id})}),Object(b.jsxs)(f.MobileView,{children:[Object(b.jsx)("br",{}),Object(b.jsxs)("button",{style:{float:"right",textAlign:"center"},className:"btn btn-danger",onClick:function(){navigator.share({title:"Share this Image",text:e.NASA_id,url:window.location.href})},children:[Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-share",viewBox:"0 0 16 16",children:Object(b.jsx)("path",{d:"M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"})})," Share"]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]}),Object(b.jsxs)(f.BrowserView,{children:[Object(b.jsx)("br",{}),Object(b.jsx)("a",{class:"btn-floating btn btn-tw",type:"button",role:"button",title:"Share on twitter",href:"https://twitter.com/intent/tweet?url=".concat(window.location.href),rel:"noopener",target:"_blank",children:Object(b.jsx)("i",{class:"fab fa-2x fa-twitter",style:{color:"#00acee"}})}),Object(b.jsx)("a",{class:"btn-floating btn btn-tw",type:"button",role:"button",title:"Share on facebook",href:"https://www.facebook.com/sharer/sharer.php?u=".concat(window.location.href),target:"_blank",rel:"noopener",children:Object(b.jsx)("i",{class:"fab fa-2x fa-facebook-square"})})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("hr",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"centre",children:[Object(b.jsxs)("h2",{children:["NASA ID - ",Object(b.jsx)("b",{children:e.NASA_id})]}),Object(b.jsxs)("h2",{children:["Taken on - ",Object(b.jsx)("b",{children:e.taken_on})]}),Object(b.jsxs)("h2",{children:["Center - ",Object(b.jsx)("b",{children:e.center})]})]}),Object(b.jsx)("h2",{children:"Description"}),Object(b.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]})})}function N(e){var t="https://images-assets.nasa.gov/image/".concat(e.match.params.id,"/").concat(e.match.params.id,"~thumb.jpg"),a=e.match.params.id,c=n.a.useState({title:"Loading",center:"Loading",description:"Loading",taken_on:"Loading"}),s=Object(o.a)(c,2),i=s[0],r=s[1];return n.a.useEffect((function(){m.a.get("https://images-assets.nasa.gov/image/".concat(e.match.params.id,"/metadata.json")).then((function(e){var t={title:e.data["AVAIL:Title"],center:e.data["AVAIL:Center"],taken_on:e.data["AVAIL:DateCreated"]};""!==e.data["AVAIL:Description"]?t.description=e.data["AVAIL:Description"].replace("\n","<br/>"):t.description="<em>No Description Provided</em>",console.log(t),r(t)})).catch((function(e){window.location.href="#/404"}))}),[e.match.params.id]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(v,{title:i.title,center:i.center,description:i.description,img_src:t,NASA_id:a,taken_on:i.taken_on})})}function _(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{style:{textAlign:"center"},children:[Object(b.jsx)("h1",{children:"404 Page not found"}),Object(b.jsxs)("p",{children:["You have reached the end of ",Object(b.jsx)("b",{children:"SPACE"})," but you can return back to ",Object(b.jsx)("b",{children:"Earth"})," by ",Object(b.jsx)(r.b,{to:"/",children:" Home "})]})]})]})}v.defaultProps={description:"<em>No Description Provided</em>"};var y=function(){return Object(b.jsxs)(r.a,{basename:"/",children:[Object(b.jsx)(p,{title:"Space Exploration",aboutText:"About Us",aboutLink:"/about"}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/",exact:!0,component:u}),Object(b.jsx)(l.a,{path:"/apod",exact:!0,component:x}),Object(b.jsx)(l.a,{path:"/about",exact:!0,component:O}),Object(b.jsx)(l.a,{path:"/search",exact:!0,component:g}),Object(b.jsx)(l.a,{path:"/image/:id",exact:!0,component:N}),Object(b.jsx)(l.a,{path:"/404",exact:!0,component:_}),Object(b.jsx)(l.a,{path:"/",component:_})]})]})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,75)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),k()}},[[73,1,2]]]);
//# sourceMappingURL=main.b0b00ce8.chunk.js.map