(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{24:function(e,a,t){e.exports=t(50)},29:function(e,a,t){},32:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l),s=(t(29),t(3)),o=t(4),i=t(6),m=t(5),u=t(9),d=t(20),h=t.n(d),p=(t(32),t(21)),E=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.certificates,a=this.props.data.github,t=this.props.data.name,n=this.props.data.description,l=this.props.data.designation;this.props.data.address.city,this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}))}return r.a.createElement("header",{id:"home"},r.a.createElement(p.a,{type:"cobweb",color:"#D4AF37",num:"150",bg:!0}),r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Projects and Background")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")),r.a.createElement("li",null,r.a.createElement("a",{className:"nav-right-btn",href:"#writing"},"Writing Portfolio")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("br",null),r.a.createElement("h1",{className:"responsive-headline"},t),r.a.createElement("br",null),r.a.createElement("h3",null,n,"."),r.a.createElement("br",null),r.a.createElement("h3",null,l),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},r.a.createElement("a",{href:e,className:"button btn project-btn",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-book"}),"Certificates"),r.a.createElement("a",{href:a,className:"button btn github-btn",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-github"}),"Github")))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component),f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,r.a.createElement("a",{href:"#footer"},"\xa9 Copyright Ishan Minhas")))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),b=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data){this.props.data.name;var e="images/"+this.props.data.image,a=this.props.data.bio,t=this.props.data.misc,n=(this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email,this.props.data.resumedownload)}return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"profile-pic",src:e,alt:"Nordic Giant Profile Pic"})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,a),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null," Working Languages: ",t," "),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns download"},r.a.createElement("p",null,r.a.createElement("a",{href:n,className:"button",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-download"}),"View/Download Resume")))))))}}]),t}(n.Component),v=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"getRandomColor",value:function(){for(var e="#",a=0;a<6;a++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(this.props.data){this.props.data.skillmessage;var a=this.props.data.education.map((function(e){return r.a.createElement("div",{key:e.school},r.a.createElement("h3",null,e.school),r.a.createElement("p",{className:"info"},e.degree," ",r.a.createElement("span",null,"\u2022"),r.a.createElement("em",{className:"date"},e.graduated)),r.a.createElement("p",null,e.description))})),t=this.props.data.work.map((function(e){return r.a.createElement("div",{key:e.company},r.a.createElement("h3",null,e.company),r.a.createElement("p",{className:"info"},e.title,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.years)),r.a.createElement("p",null,e.description))})),n=this.props.data.skills.map((function(a){var t="bar-expand "+a.name.toLowerCase();return r.a.createElement("li",{key:a.name},r.a.createElement("span",{style:{width:a.level,backgroundColor:e.getRandomColor()},className:t}),r.a.createElement("em",null,a.name))}))}return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Education"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},a))),r.a.createElement("a",{id:"project"})),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Projects"))),r.a.createElement("div",{className:"nine columns main-col"},t)),r.a.createElement("div",{className:"row skill"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Skills"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("br",null),r.a.createElement("div",{className:"bars"},r.a.createElement("ul",{className:"skills"},n)))))}}]),t}(n.Component),g=t(22),N=t(23),w=t.n(N),k=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleChange=function(e){return n.setState(Object(g.a)({},e.target.name,e.target.value))},n.handleForm=function(e){w.a.post("https://formcarry.com/s/MAZVc9lP_",n.state,{headers:{Accept:"application/json"}}).then((function(e){e.data.success,console.log(e.data.message)})).catch((function(e){console.log(e)})),e.preventDefault()},n.state={contactName:"",contactEmail:"",contactSubject:"",contactMessage:""},n}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data){this.props.data.name,this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email;var e=this.props.data.contactmessage}return r.a.createElement("section",{id:"contact"},r.a.createElement("div",{className:"row section-head"},r.a.createElement("div",{className:"two columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Get In Touch."))),r.a.createElement("div",{className:"ten columns"},r.a.createElement("p",{className:"lead"},e))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"eight columns"},r.a.createElement("form",{id:"contactForm",onSubmit:this.handleForm},r.a.createElement("fieldset",null,r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"contactName",name:"name"},"Name ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"contactEmail",name:"email"},"Email ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"contactSubject",name:"subject"},"Subject"),r.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"contactMessage",name:"message"},"Message ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})),r.a.createElement("div",null,r.a.createElement("button",{className:"submit",name:"Send"},"Submit"),r.a.createElement("span",{id:"image-loader"},r.a.createElement("img",{alt:"",src:"images/loader.gif"}))))),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("a",{id:"writing"}),r.a.createElement("aside",{className:"four columns footer-widgets"},r.a.createElement("div",{className:"widget widget_tweets"},r.a.createElement("h2",{className:"widget-title"},r.a.createElement("font",{color:"#BFBFFF"},"Writings")),r.a.createElement("ul",{id:"twitter"},r.a.createElement("li",null,r.a.createElement("span",null,r.a.createElement("a",{href:"https://bethenovelpoet.wordpress.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h4",null,"Check out my writing blog!")))),r.a.createElement("li",null,r.a.createElement("span",null,r.a.createElement("a",{href:"https://www.instagram.com/scribesbyarshika/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h4",null,"Check out my Instagram writing account!")))),r.a.createElement("li",null,r.a.createElement("span",null,r.a.createElement("a",{href:"https://store.pothi.com/book/arshika-lalan-dear-diary/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h4",null,"Check out my published poetry book!")))))))))}}]),t}(n.Component),y=(n.Component,function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={foo:"bar",resumeData:{}},u.a.initialize("UA-110570651-1"),u.a.pageview(window.location.pathname),n}return Object(o.a)(t,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,{data:this.state.resumeData.main}),r.a.createElement(b,{data:this.state.resumeData.main}),r.a.createElement(v,{data:this.state.resumeData.resume}),r.a.createElement(k,{data:this.state.resumeData.main}),r.a.createElement(f,{data:this.state.resumeData.main}))}}]),t}(n.Component)),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Mywebsite",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Mywebsite","/service-worker.js");j?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):C(e)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.221ba773.chunk.js.map