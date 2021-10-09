(this["webpackJsonpnasa-api-hackathon"]=this["webpackJsonpnasa-api-hackathon"]||[]).push([[0],{42:function(e,t,a){},43:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(11),i=a.n(n),r=(a(42),a(3)),o=a(2),l=a(10),d=(a(43),a(14)),m=(a(23),a(0));function j(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{className:"h2 text-center",children:e.image_heading}),Object(m.jsx)(d.a,{children:Object(m.jsx)("img",{className:"img-fluid",src:e.image_src,alt:e.img_alt})}),Object(m.jsx)("p",{className:"h2 text-center mt-4",children:e.informationTitle})]})}j.defaultProps={image_heading:"Set The image by image_heading in the props",image_src:"Set the img src by image_src in the props",informationTitle:"Set the Title here by informationTitle from the props",img_alt:"Set the img alt by img_alt from the props"};var b=a(5),h=a.n(b);var x=function(){var e=Object(c.useState)({date:""}),t=Object(l.a)(e,2),a=t[0],n=t[1];return s.a.useEffect((function(){h.a.get("https://api.nasa.gov/planetary/apod?api_key=".concat("BaJdMCMCqaioVVTgQals11eQWDF1B5U3fTT1sYVZ")).then((function(e){n(e.data)}))}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"container pt-5 mt-3",style:{minHeight:"100vh"},children:Object(m.jsxs)("div",{className:"row p-5 rounded shadow my-5",children:[Object(m.jsx)("p",{className:"h1 text-secondary text-center",children:"Today's Hit"}),Object(m.jsx)("hr",{}),Object(m.jsx)(j,{image_heading:a.title,image_src:a.hdurl,img_alt:"Seen of the day",informationTitle:"Information about the Picture"}),Object(m.jsxs)("p",{className:"text-center mt-4",children:["This picture was taken by ",Object(m.jsx)("b",{children:a.copyright})," on ",Object(m.jsx)("b",{children:function(e){var t=e.substring(0,4),a=e.substring(4,6),c=e.substring(6,8);return new Date(t,a-1,c).toDateString()}(a.date.replace("-",""))})]}),Object(m.jsx)("p",{className:"h3 text-center mt-3",children:"Explanation"}),Object(m.jsx)("p",{className:"col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2 mx-auto text-justify lh-lg fs-5 mt-4",children:a.explanation})]})})})};function u(){var e=Object(c.useState)("none"),t=Object(l.a)(e,2),a=t[0],s=t[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"container mt-5 pt-5",style:{minHeight:"100vh"},children:[Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("h1",{className:"centre",children:"Enter the search term"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter the search term here",id:"input"})]}),Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){console.log("Once more");var e=document.getElementById("input").value;h.a.get("https://images-api.nasa.gov/search?page=1&q=".concat(e,"&media_type=image")).then((function(e){if(s(""),console.log(e),i.a.unmountComponentAtNode(document.getElementById("data_div")),console.log(e.data.collection.items.length),0===e.data.collection.items.length)return console.log("No results found"),void(document.getElementById("end").style.display="");document.getElementById("end").style.display="none";var t=Object(m.jsx)("div",{className:"row",children:e.data.collection.items.map((function(e,t){try{return Object(m.jsx)("div",{className:"col-lg-4 d-flex align-items-stretch",children:Object(m.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(m.jsx)("img",{src:e.links[0].href,className:"card-img-top",alt:"Search Result"}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:e.data[0].title}),Object(m.jsx)("p",{className:"card-text",children:Object(m.jsx)("b",{dangerouslySetInnerHTML:{__html:e.data[0].description}})})]}),Object(m.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(m.jsxs)("li",{className:"list-group-item",children:["Taken on - ",Object(m.jsx)("b",{children:e.data[0].date_created})]},0),Object(m.jsxs)("li",{className:"list-group-item",children:["Center -",Object(m.jsx)("b",{children:e.data[0].center})]},1),Object(m.jsxs)("li",{className:"list-group-item",children:["NASA Id - ",e.data[0].nasa_id]},2)]}),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsx)(r.a,{basename:"/",children:Object(m.jsx)(r.b,{to:"/image/".concat(e.data[0].nasa_id),className:"card-link",children:"Details"})})})]})},t)}catch(a){console.log("Done")}}))});console.log("Rendering"),i.a.render(t,document.getElementById("data_div")),console.log("Rendered")}))},children:"Search for it"}),Object(m.jsx)("div",{style:{textAlign:"center",display:a},children:Object(m.jsx)("div",{id:"data_div"})}),Object(m.jsxs)("div",{style:{textAlign:"center"},children:[Object(m.jsx)("br",{}),Object(m.jsx)("h3",{id:"end",style:{display:"none"},children:"Sorry No results found"})]})]})})}var p=a.p+"static/media/space.171ab69a.svg",g=a.p+"static/media/launch.d11f9622.svg";function O(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"container mt-4 pt-5",style:{minHeight:"100vh"},children:Object(m.jsxs)("div",{className:"rounded shadow p-5 pt-2 mb-5 mt-5",children:[Object(m.jsxs)("div",{className:"row flex-row row-reverse mb-5 mt-5",children:[Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsxs)("p",{className:"h1 text-center",children:[Object(m.jsx)("span",{className:"base-color",children:"Space"})," Exploration"]}),Object(m.jsx)("hr",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("p",{className:"h2 text-center",children:["About ",Object(m.jsx)("span",{className:"base-color",children:"us"})]})]}),Object(m.jsx)("div",{className:"col-12 col-md-10 col-lg-6 mt-3",children:Object(m.jsx)("img",{className:"user-select-none",src:p,alt:"Logo"})}),Object(m.jsx)("div",{className:"col-12 col-md-10 col-lg-6 mt-md-3 d-flex align-items-center",children:Object(m.jsxs)("p",{className:"h5 text-justify lh-xl",children:["This is a place to research about space and this was made as a hackathon project and we use ",Object(m.jsx)("b",{children:"official"})," NASA API that we got from ",Object(m.jsx)("a",{className:"decoration-none",href:"https://api.nasa.gov",target:"_blank",rel:"noreferrer",children:"here"}),". We have added ",Object(m.jsx)("b",{children:"personal account"})," for you to bookmark things in it and we have used ",Object(m.jsx)("b",{children:"SAWO Labs"})," in it. We are even working on a ",Object(m.jsx)("b",{children:"discord bot"})," for you to make easy to use it in ",Object(m.jsx)("b",{children:"discord"})," without any problem."]})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-12 mt-5",children:Object(m.jsxs)("p",{className:"h2 text-center",children:["Contact ",Object(m.jsx)("span",{className:"base-color",children:"us"})]})}),Object(m.jsx)("div",{className:"col-12 col-md-10 col-lg-6 mt-3",children:Object(m.jsx)("img",{className:"user-select-none",src:g,alt:"Logo"})}),Object(m.jsx)("div",{className:"col-12 col-md-10 col-lg-6 mt-md-3 d-flex align-items-center",children:Object(m.jsxs)("form",{className:"w-100",action:"https://formspree.io/f/meqvdnwj",method:"post",children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"#Email",className:"form-label",children:"Email address"}),Object(m.jsx)("input",{type:"email",className:"form-control shadow-none",id:"Email","aria-describedby":"emailHelp",name:"Email"})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"#Name",className:"form-label",children:"Name"}),Object(m.jsx)("input",{className:"form-control shadow-none",id:"Name","aria-describedby":"emailHelp",name:"Name"})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"#Message",className:"form-label",children:"Message"}),Object(m.jsx)("textarea",{type:"text",className:"form-control shadow-none",id:"Message",name:"Message"})]}),Object(m.jsx)("button",{type:"submit",className:"btn w-50 border-0 shadow-none py-2 text-white offset-3 mt-3",children:"Submit"})]})})]})]})})})}function f(e){return Object(m.jsx)("nav",{className:"navbar navbar-expand-md navbar-light shadow-sm border-bottom bg-light p-3 fixed-top",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)(r.c,{className:"navbar-brand",to:"/",activeClassName:"active",children:e.title}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(m.jsx)("div",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(m.jsxs)("div",{className:"d-flex justify-content-around mt-4 mt-md-0",children:[Object(m.jsx)("div",{className:"nav-item",children:Object(m.jsx)(r.c,{className:"nav-link","aria-current":"page",exact:!0,to:"/",activeClassName:"active",children:"Home"})}),Object(m.jsx)("div",{className:"nav-item",children:Object(m.jsx)(r.c,{activeClassName:"active",className:"nav-link",exact:!0,to:e.apod_link,children:e.apod_text})}),Object(m.jsx)("div",{className:"nav-item",children:Object(m.jsx)(r.c,{className:"nav-link",to:e.image_search_link,exact:!0,activeClassName:"active",children:e.image_search})}),Object(m.jsx)("div",{className:"nav-item",children:Object(m.jsx)(r.c,{activeClassName:"active",className:"nav-link",exact:!0,to:"/bookmarks",children:"Your Bookmarks"})}),Object(m.jsx)("div",{className:"nav-item",children:Object(m.jsx)(r.c,{activeClassName:"active",className:"nav-link",exact:!0,to:"/login",children:"Login"})}),Object(m.jsx)("div",{className:"nav-item",children:Object(m.jsx)(r.c,{activeClassName:"active",className:"nav-link",exact:!0,to:"/logout",children:"Logout"})})]})})})]})})}f.defaultProps={title:"Set title here",aboutText:"About Text here",aboutLink:"/about",image_search:"Image Search",image_search_link:"/search",apod_text:"APOD",apod_link:"/apod"};var v=a(21);function N(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),c=0;c<a.length;c++){for(var s=a[c];" "===s.charAt(0);)s=s.substring(1);if(0===s.indexOf(t))return s.substring(t.length,s.length)}return""}function y(e){var t=Object(c.useState)([]),a=Object(l.a)(t,2),s=a[0],n=a[1];function i(){var e=N("user-id");h.a.post("".concat("https://back-end-space.herokuapp.com","/bookmarks"),{payload:{"user-id":e}}).then((function(e){n(e.data)}))}return Object(c.useEffect)((function(){var e=N("user-id");h.a.post("".concat("https://back-end-space.herokuapp.com","/bookmarks"),{payload:{"user-id":e}}).then((function(e){n(e.data)}))}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"container mt-5 pt-5",style:{minHeight:"100vh"},children:[Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)("h1",{children:e.title}),Object(m.jsx)(d.a,{children:Object(m.jsx)("img",{src:e.img_src,className:"img-fluid",alt:e.NASA_id})}),""!==N("user-id")?s.includes(window.location.href)?Object(m.jsx)("button",{className:"btn btn-danger",style:{float:"right",margin:"30px"},title:"Remove this image as Bookmarked",onClick:function(){h.a.post("".concat("https://back-end-space.herokuapp.com","/delete_bookmark"),{payload:{"user-id":N("user-id"),url:window.location.href}}).then((function(e){i()}))},children:Object(m.jsx)("i",{className:"fas fa-times"})}):Object(m.jsx)("button",{className:"btn btn-danger",style:{float:"right",margin:"30px"},title:"Bookmark this image",onClick:function(){h.a.post("".concat("https://back-end-space.herokuapp.com","/add_bookmark"),{payload:{"user-id":N("user-id"),url:window.location.href}}).then((function(e){i()}))},children:Object(m.jsx)("i",{className:"fa fa-bookmark"})}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(r.b,{to:"/login?redirect=#image/".concat(e.NASA_id),children:Object(m.jsx)("button",{className:"btn btn-danger",style:{float:"right",marginBottom:"10px"},title:"Login to Bookmark this image",children:"Login To Bookmark this image"})})}),Object(m.jsxs)(v.MobileView,{children:[Object(m.jsx)("br",{}),Object(m.jsxs)("button",{style:{float:"right",textAlign:"center"},className:"btn btn-danger",onClick:function(){navigator.share({title:"Share this Image",text:e.NASA_id,url:window.location.href})},children:[Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-share",viewBox:"0 0 16 16",children:Object(m.jsx)("path",{d:"M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"})})," Share"]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}),Object(m.jsxs)(v.BrowserView,{children:[Object(m.jsx)("br",{}),Object(m.jsx)("a",{className:"btn-floating btn btn-tw",type:"button",role:"button",title:"Share on twitter",href:"https://twitter.com/intent/tweet?url=".concat(window.location.href),rel:"noreferrer",target:"_blank",children:Object(m.jsx)("i",{className:"fab fa-2x fa-twitter",style:{color:"#00acee"}})}),Object(m.jsx)("a",{className:"btn-floating btn btn-tw",type:"button",role:"button",title:"Share on facebook",href:"https://www.facebook.com/sharer/sharer.php?u=".concat(window.location.href),target:"_blank",rel:"noreferrer",children:Object(m.jsx)("i",{className:"fab fa-2x fa-facebook-square"})})]})]}),Object(m.jsx)("br",{}),Object(m.jsx)("hr",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsxs)("h2",{children:["NASA ID - ",Object(m.jsx)("b",{children:e.NASA_id})]}),Object(m.jsxs)("h2",{children:["Taken on - ",Object(m.jsx)("b",{children:e.taken_on})]}),Object(m.jsxs)("h2",{children:["Center - ",Object(m.jsx)("b",{children:e.center})]})]}),Object(m.jsx)("h2",{children:"Description"}),Object(m.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]})})}function k(e){var t="https://images-assets.nasa.gov/image/".concat(e.match.params.id,"/").concat(e.match.params.id,"~thumb.jpg"),a=e.match.params.id,c=s.a.useState({title:"Loading",center:"Loading",description:"Loading",taken_on:"Loading"}),n=Object(l.a)(c,2),i=n[0],r=n[1];return s.a.useEffect((function(){h.a.get("https://images-assets.nasa.gov/image/".concat(e.match.params.id,"/metadata.json")).then((function(e){var t={title:e.data["AVAIL:Title"],center:e.data["AVAIL:Center"],taken_on:e.data["AVAIL:DateCreated"]};""!==e.data["AVAIL:Description"]?t.description=e.data["AVAIL:Description"].replace("\n","<br/>"):t.description="<em>No Description Provided</em>",console.log(t),r(t)})).catch((function(e){window.location.href="#/404"}))}),[e.match.params.id]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(y,{title:i.title,center:i.center,description:i.description,img_src:t,NASA_id:a,taken_on:i.taken_on})})}function w(){return Object(m.jsxs)("div",{className:"container mt-5 pt-5",style:{minHeight:"100vh"},children:[Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{style:{textAlign:"center"},children:[Object(m.jsx)("h1",{children:"404 Page not found"}),Object(m.jsxs)("p",{children:["You have reached the end of ",Object(m.jsx)("b",{children:"SPACE"})," but you can return back to ",Object(m.jsx)("b",{children:"Earth"})," by ",Object(m.jsx)(r.b,{to:"/",children:" Home "})]})]})]})}function _(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("footer",{children:Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsx)("div",{className:"row bg-light border-top",children:Object(m.jsx)("div",{className:"col-10 offset-1 py-3",children:Object(m.jsxs)("div",{className:"nav d-flex justify-content-between align-items-center",children:[Object(m.jsxs)("div",{className:"col-12 col-md-6 justify-content-center justify-content-md-start text-center text-md-start",children:["Design and Developed by Space Exploration",Object(m.jsxs)("p",{className:"text-muted mb-0",children:["Illustrations By ",Object(m.jsx)("a",{className:"text-reset",href:"https://storyset.com/",children:"Storyset"})]})]}),Object(m.jsxs)("div",{className:"col-12 col-md-6 items d-flex justify-content-center justify-content-md-end text-secondary",children:[Object(m.jsx)("div",{className:"nav-item text-reset",children:Object(m.jsx)("a",{className:"nav-link text-reset",href:"https://api.nasa.gov",target:"_blank",rel:"noreferrer",children:"Home"})}),Object(m.jsx)("div",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link text-reset",href:"https://api.nasa.gov",target:"_blank",rel:"noreferrer",children:"Term Of Use"})}),Object(m.jsx)("div",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link text-reset",href:"https://api.nasa.gov",target:"_blank",rel:"noreferrer",children:"Privacy & Policy"})})]})]})})})})})})}y.defaultProps={description:"<em>No Description Provided</em>"};var S=a(22),A="7db5557d-bd1b-4a77-8b14-0a09da4f233e";function I(){function e(e){console.log(e),h.a.post("".concat("https://back-end-space.herokuapp.com","/create_account"),{payload:e}).then((function(t){!function(e,t,a){var c=new Date;c.setTime(c.getTime()+24*a*60*60*1e3);var s="expires="+c.toUTCString();document.cookie=e+"="+t+";"+s+";path=/"}("user-id",e.user_id,30);var a=window.location.href,c=a.indexOf("?");console.log(c);var s=a.slice(c);console.log(s),window.location.href=-1===c?"#/sucess":"#/sucess".concat(s)}))}return Object(c.useEffect)((function(){var t={onSuccess:e,identifierType:"email",apiKey:A,containerID:"sawo-container-email"},a={onSuccess:e,identifierType:"phone_number_sms",apiKey:A,containerID:"sawo-container-phone"},c=new S.a(t),s=new S.a(a);c.showForm(),s.showForm()}),[]),Object(m.jsxs)("div",{className:"container mt-5 pt-5",style:{minHeight:"100vh"},children:[Object(m.jsx)("br",{}),Object(m.jsxs)("div",{style:{textAlign:"center"},children:[Object(m.jsx)("div",{id:"sawo-container-email",style:{height:"450px",width:"450px"}}),Object(m.jsx)("div",{id:"sawo-container-phone",style:{height:"450px",width:"450px",display:"none"}})]}),Object(m.jsxs)("div",{style:{textAlign:"center"},children:[Object(m.jsx)("button",{className:"btn btn-warning",id:"email",style:{display:"none"},onClick:function(){document.getElementById("sawo-container-email").style.display="",document.getElementById("sawo-container-phone").style.display="none",document.getElementById("number").style.display="",document.getElementById("email").style.display="none"},children:"Verify by email"}),Object(m.jsx)("button",{className:"btn btn-warning",id:"number",onClick:function(){document.getElementById("sawo-container-email").style.display="none",document.getElementById("sawo-container-phone").style.display="",document.getElementById("number").style.display="none",document.getElementById("email").style.display=""},children:"Verify by number"})]})]})}function E(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),c=0;c<a.length;c++){for(var s=a[c];" "===s.charAt(0);)s=s.substring(1);if(0===s.indexOf(t))return s.substring(t.length,s.length)}return""}function C(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],s=t[1];function n(){var e=window.location.href;return console.log(e.split("#")[0]),e.split("#")[0]}return Object(c.useEffect)((function(){if(""===E("user-id"))return window.location.href="#/login?redirect=#bookmarks",Object(m.jsx)(m.Fragment,{});h.a.post("".concat("https://back-end-space.herokuapp.com","/bookmarks"),{payload:{"user-id":E("user-id")}}).then((function(e){s(e.data)}))}),[]),console.log(a),Object(m.jsxs)("div",{className:"conatiner mt-4 pt-5 text-center",style:{minHeight:"100vh"},children:[Object(m.jsx)("h1",{children:"Your boomarks"}),Object(m.jsx)("p",{children:"Your bookmarks are synced with your account"}),Object(m.jsx)("div",{className:"row",children:Array(a)[0].map((function(e,t){return console.log(e),Object(m.jsx)("div",{className:"col-lg-4",id:t,link:e,children:Object(m.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(m.jsx)("img",{src:"https://images-assets.nasa.gov/image/".concat(e.split("/").slice(-1),"/").concat(e.split("/").slice(-1),"~thumb.jpg"),className:"card-img-top",alt:"..."}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:decodeURI(e.split("/").slice(-1))}),Object(m.jsx)("button",{className:"btn btn-danger mx-3",onClick:function(){return function(e){var t=document.getElementById(e);h.a.post("".concat("https://back-end-space.herokuapp.com","/delete_bookmark"),{payload:{"user-id":E("user-id"),url:t.getAttribute("link")}}).then((function(e){t.remove()}))}(t)},children:Object(m.jsx)("i",{className:"fa fa-times","aria-hidden":"true"})}),Object(m.jsx)(r.b,{to:e.replace(n(),"").replace("#",""),children:Object(m.jsx)("button",{className:"btn btn-primary",children:"Details"})})]})]})},t)}))})]})}function T(){return Object(c.useEffect)((function(){!function(){var e=window.location.href.slice(window.location.href.indexOf("?")),t=new URLSearchParams(e).get("redirect");null===t?console.log("Do not go anywhere"):(console.log("Ok so you can now go"),console.log(t),setTimeout((function(){window.location.href=t}),5e3))}()}),[]),Object(m.jsxs)("div",{className:"container mt-4 pt-5",style:{minHeight:"100vh"},children:[Object(m.jsx)("h1",{className:"text-center",children:Object(m.jsx)("span",{className:"base-color",children:"You are Now Logged in"})}),Object(m.jsxs)("h3",{className:"text-center",children:["Now you are ready to explore the ",Object(m.jsx)("b",{className:"base-color",children:"SPACE"}),", have fun."]}),Object(m.jsx)("br",{}),Object(m.jsxs)("h3",{children:["If you have come here from a ",Object(m.jsx)("b",{className:"base-color",children:" page "})," of this ",Object(m.jsx)("b",{className:"base-color",children:" site "})," you will be ",Object(m.jsx)("b",{className:"base-color",children:"redirected"})," to that page in ",Object(m.jsx)("b",{className:"base-color",children:" 5 seconds."})]})]})}function B(){return Object(c.useEffect)((function(){!function(e,t,a){var c=new Date;c.setTime(c.getTime()+24*a*60*60*1e3);var s="expires="+c.toGMTString();document.cookie=e+"="+t+";"+s+";path=/"}("user-id","",0),window.location.href="#/"}),[]),Object(m.jsx)("div",{className:"conatiner mt-5 pt-5",style:{minHeight:"100vh"}})}var L=function(){return Object(m.jsxs)(r.a,{basename:"/",children:[Object(m.jsx)(f,{title:"Space Exploration",aboutText:"About Us",aboutLink:"/about"}),Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/",exact:!0,component:O}),Object(m.jsx)(o.a,{path:"/apod",exact:!0,component:x}),Object(m.jsx)(o.a,{path:"/search",exact:!0,component:u}),Object(m.jsx)(o.a,{path:"/image/:id",exact:!0,component:k}),Object(m.jsx)(o.a,{path:"/login",exact:!0,component:I}),Object(m.jsx)(o.a,{path:"/404",exact:!0,component:w}),Object(m.jsx)(o.a,{path:"/bookmarks",exact:!0,component:C}),Object(m.jsx)(o.a,{path:"/sucess",exact:!0,component:T}),Object(m.jsx)(o.a,{path:"/logout",exact:!0,component:B}),Object(m.jsx)(o.a,{path:"/",component:w})]}),Object(m.jsx)(_,{})]})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root")),D()}},[[74,1,2]]]);
//# sourceMappingURL=main.17203bd4.chunk.js.map