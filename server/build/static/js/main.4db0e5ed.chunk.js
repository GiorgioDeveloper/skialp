(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,a){e.exports=a(90)},48:function(e,t,a){},50:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),l=a.n(o),u=(a(48),a(8)),s=a.n(u),c=a(13),i=a(1),p=a(2),m=a(4),h=a(3),g=a(5),d=(a(50),a(17)),f=a(16),v=a(19),E=a.n(v),b=E.a.create({baseURL:"https://skialpone.herokuapp.com/",withCredentials:!0}),y=function(e){return b.post("auth/signup",e)},O=function(){var e=Object(c.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.post("/auth/login",t);case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(c.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.get("/auth/isLoggedIn");case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.get("/auth/logout");case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),w=a(6),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",errorMessage:null},a.onChangeHandler=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(f.a)({},n,r))},a.submitHandler=function(e){e.preventDefault(),y(a.state).then((function(e){console.log(e),a.props.history.push("/Login")})).catch((function(e){console.log(e.response.data,"tesssst"),a.setState({errorMessage:e.response.data.errorMessage})}))},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"this is the signup page"),r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement("input",{type:"text",name:"username",placeholder:"username",onChange:this.onChangeHandler}),r.a.createElement("input",{type:"password",name:"password",placeholder:"password",onChange:this.onChangeHandler}),r.a.createElement("button",{type:"submit"},"submit")),r.a.createElement("p",null,"Already have a login?",r.a.createElement(w.b,{to:"/login"}," Login "),r.a.createElement("p",null,this.state.errorMessage)))}}]),t}(r.a.Component),U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.onChangeHandler=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(f.a)({},n,r))},a.submitHandler=function(){var e=Object(c.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O(a.state);case 4:n=e.sent,a.props.setUserState(n.currentUser),a.props.history.push("/Home"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"this is the login page"),r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement("input",{type:"text",name:"username",placeholder:"username",onChange:this.onChangeHandler}),r.a.createElement("input",{type:"password",name:"password",placeholder:"password",onChange:this.onChangeHandler}),r.a.createElement("button",{type:"submit"},"submit")),r.a.createElement("p",null,"You don't have an account?",r.a.createElement(w.b,{to:"/signup"}," Signup")))}}]),t}(r.a.Component),A=a(40),k=function(e){var t=e.component,a=e.loggedinUser,n=Object(A.a)(e,["component","loggedinUser"]);return r.a.createElement(d.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,Object.assign({},e,n,{loggedinUser:a})):r.a.createElement(d.a,{to:"/"})}}))},D=E.a.create({baseURL:"https://skialpone.herokuapp.com/",withCredentials:!0}),x=function(){var e=Object(c.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.post("/create-tour",t);case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(c.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.post("/profile",t);case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),H=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).formRef=r.a.createRef(),a.submitHandler=function(e){e.preventDefault();var t=new FormData(a.formRef.current);I(t).then((function(e){console.log(e),a.props.setUserState(e),a.props.history.push("/profile")})).catch((function(e){console.log(e)}))},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return console.log(this.props,"vedi props"),r.a.createElement("div",null,r.a.createElement("h1",null,"Hi ",this.props.username," update your profile"),r.a.createElement("form",{ref:this.formRef,onSubmit:this.submitHandler},r.a.createElement("input",{type:"file",name:"profilePicture"}),r.a.createElement("input",{type:"text",name:"name",placeholder:"name"}),r.a.createElement("input",{type:"text",name:"surname",placeholder:"surname"}),r.a.createElement("input",{type:"text",name:"age",placeholder:"age"}),r.a.createElement("input",{type:"text",name:"skiLevel",placeholder:"skiLevel"}),r.a.createElement("input",{type:"text",name:"about",placeholder:"about"}),r.a.createElement("button",{type:"submit"},"submit")))}}]),t}(r.a.Component),L=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.loggedinUser;return console.log(this.props,"props from app.js"),r.a.createElement("div",null,e.name&&e.surname?r.a.createElement("div",null,r.a.createElement("h1",null,"Hi ",e.username," this is your profile"),r.a.createElement("h2",null,"Name: ",e.name),r.a.createElement("h2",null,"surname: ",e.surname),r.a.createElement("h2",null,"Age: ",e.age),r.a.createElement("h2",null,"Ski Level: ",e.skiLevel),r.a.createElement("h2",null,"Total Tours: ",e.tours.length),r.a.createElement("h2",null,"Total gain: "),r.a.createElement("p",null,"About: ",e.about),(e.profilePicture,r.a.createElement("img",{src:e.profilePicture,alt:"profile-foto",className:"profile-foto"})),r.a.createElement("p",null,r.a.createElement(w.b,{to:"/update-profile"},"Update Profile"))):r.a.createElement(H,{setUserState:this.props.setUserState}))}}]),t}(r.a.Component);function T(e){return e.getUTCFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}var R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={radioBtn:"",tours:a.props.tours,toursTemp:[]},a.getToursByDate=function(e){var t,n=new Date,r=T(n);"yesterday"===e.target.value?(n.setDate(n.getDate()-1),t=T(n)):"lastWeek"===e.target.value?(n.setDate(n.getDate()-7),t=T(n)):"lastMonth"===e.target.value?(n.setDate(n.getDate()-30),t=T(n),console.log(n,"today")):"all"===e.target.value&&(t=n="2019-01-01"),b.get("/tours-by-date?today=".concat(r,"&startDate=").concat(t)).then((function(e){console.log(e.data,"date tours"),a.props.setToursState(e.data.tours)})).catch((function(e){console.log(e)}))},a.searchLocation=function(e){var t=a.props.tours.filter((function(t){return t.mountainId.location.toUpperCase().includes(e.target.value.toUpperCase())}));console.log(e.target.value),""===e.target.value?a.props.setToursState(a.props.toursArray):a.props.setToursState(t)},a.searchRecom=function(e){var t=a.props.toursArray.filter((function(t){return t.recomended.toUpperCase().includes(e.target.value.toUpperCase())}));console.log(e.target.value),""===e.target.value?a.setState({radioBtn:"",tours:a.props.toursArray}):(a.setState({radioBtn:e.target.value}),a.props.setToursState(t))},a.searchSnow=function(e){var t=a.props.tours.filter((function(t){return t.snowQuality.toUpperCase().includes(e.target.value.toUpperCase())}));""===e.target.value?a.props.setToursState(a.props.toursArray):(a.props.setToursState(t),console.log(t,"filtered array"))},a.searchDifficulty=function(e){var t=a.props.tours.filter((function(t){return t.mountainId.difficulty.toUpperCase()==e.target.value.toUpperCase()}));""===e.target.value?a.props.setToursState(a.props.toursArray):(a.props.setToursState(t),a.setState({toursTemp:t}))},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("select",{name:"Date",onChange:this.getToursByDate},r.a.createElement("option",{value:"all"},"ALL"),r.a.createElement("option",{value:"yesterday"},"Yesterday"),r.a.createElement("option",{value:"lastWeek"},"Last week"),r.a.createElement("option",{value:"lastMonth"},"Last month")),r.a.createElement("select",{type:"text",name:"snowQuality",placeholder:"snow quality",onChange:this.searchLocation},r.a.createElement("option",{value:""},"ALL"),r.a.createElement("option",{value:"Alpi Occidentali<"},"Alpi Occidentali"),r.a.createElement("option",{value:"Alpi Orientali"},"Alpi Orientali"),r.a.createElement("option",{value:"Alpi Retiche"},"Alpi Retiche"),r.a.createElement("option",{value:"Dolomiti"},"Dolomiti"),r.a.createElement("option",{value:"Alpi Giulie"},"Alpi Giulie"),r.a.createElement("option",{value:"Alpi Pennine"},"Alpi Pennine"),r.a.createElement("option",{value:"Alpi Apuane"},"Alpi Apuane"),r.a.createElement("option",{value:"Alpi Centrali"},"Alpi Centrali")),r.a.createElement("select",{type:"text",name:"snowQuality",placeholder:"snow quality",onChange:this.searchSnow},r.a.createElement("option",{value:""},"ALL"),r.a.createElement("option",{value:"powder"},"Powder"),r.a.createElement("option",{value:"crud"},"Crud"),r.a.createElement("option",{value:"crust"},"Crust"),r.a.createElement("option",{value:"slush"},"Slush"),r.a.createElement("option",{value:"ice"},"Ice")),r.a.createElement("select",{type:"text",name:"snowQuality",placeholder:"snow quality",onChange:this.searchDifficulty},r.a.createElement("option",{value:""},"ALL"),r.a.createElement("option",{value:"MS"},"MS"),r.a.createElement("option",{value:"MSA"},"MSA"),r.a.createElement("option",{value:"BS"},"BS"),r.a.createElement("option",{value:"BSA"},"BSA"),r.a.createElement("option",{value:"OS"},"OS"),r.a.createElement("option",{value:"OSA"},"OSA")),r.a.createElement("div",null,r.a.createElement("td",null,r.a.createElement("input",{type:"radio",name:"Yes",value:"Yes",checked:"Yes"===this.state.radioBtn,onChange:this.searchRecom}),"YES"),r.a.createElement("td",null,r.a.createElement("input",{type:"radio",name:"No",value:"No",checked:"No"===this.state.radioBtn,onChange:this.searchRecom}),"NO"),r.a.createElement("td",null,r.a.createElement("input",{type:"radio",name:"",value:"",checked:""===this.state.radioBtn,onChange:this.searchRecom}),"ALL")),this.props.tours.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(w.b,{to:"/tour/".concat(e._id)},r.a.createElement("img",{src:e.picture[0],alt:"mountain",className:"mountain-foto"}),r.a.createElement("p",null,e.mountainId.mountainName),r.a.createElement("p",null,e.mountainId.location),r.a.createElement("p",null,e.mountainId.region),r.a.createElement("p",null,"Height: ",e.mountainId.height," mt"),r.a.createElement("p",null,"Elevation Gain: ",e.mountainId.elevationGain," mt"),r.a.createElement("p",null,"Difficulty: ",e.mountainId.difficulty),r.a.createElement("p",null,"Snow Quality: ",e.snowQuality," - ",e.snowDepth," cm")))})))}}]),t}(r.a.Component),N=[],M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={tours:[]},a.setToursState=function(e){a.setState({tours:e})},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.get("/all-tours").then((function(t){N=t.data.tours,e.setState({tours:t.data.tours})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Hi ",this.props.loggedinUser.username," find your tour"),r.a.createElement(R,{tours:this.state.tours,toursArray:N,setToursState:this.setToursState}))}}]),t}(r.a.Component),B=[],P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={tours:[]},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.get("/your-tours").then((function(t){B=t.data.tours,e.setState({tours:t.data.tours})}))}},{key:"render",value:function(){return console.log(B,"tours array"),r.a.createElement("div",null,r.a.createElement("h1",null,"Hi ",this.props.loggedinUser.username," find your tour"),r.a.createElement(R,{tours:this.state.tours,toursArray:B}))}}]),t}(r.a.Component),Q=a(41),Y=a.n(Q),q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={value:"",suggestions:[],mountains:[]},a.getSuggestions=function(e){var t=e.trim().toLowerCase(),n=t.length;return 0===n?[]:a.state.mountains.filter((function(e){return e.mountainName.toLowerCase().slice(0,n)===t}))},a.getSuggestionValue=function(e){return e.mountainName},a.renderSuggestion=function(e){return r.a.createElement("div",null,e.mountainName)},a.onChange=function(e,t){var n=t.newValue,r="",o=a.state.mountains.filter((function(e){return e.mountainName.includes(n)}));o.length>0?(r=o[0]._id,console.log("la montagna c e")):(console.log("array vuota"),r=""),a.setState({value:n}),a.props.setValue(n,r)},a.onSuggestionsFetchRequested=function(e){var t=e.value;a.setState({suggestions:a.getSuggestions(t)})},a.onSuggestionsClearRequested=function(){a.setState({suggestions:[]})},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.get("/mountains").then((function(t){return e.setState({mountains:t.data.mountains})}))}},{key:"render",value:function(){var e=this.state,t=e.value,a=e.suggestions,n={placeholder:"mountain",value:t,onChange:this.onChange};return r.a.createElement(Y.a,{suggestions:a,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:this.getSuggestionValue,renderSuggestion:this.renderSuggestion,inputProps:n})}}]),t}(r.a.Component),V=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={mountainName:"",mountainId:""},a.formRef=r.a.createRef(),a.setValue=function(e,t){a.setState({mountainName:e,mountainId:t})},a.onChangeHandler=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(f.a)({},n,r))},a.submitHandler=function(e){e.preventDefault();var t=new FormData(a.formRef.current);x(t).then((function(e){console.log(a.state.mountainId),a.props.history.push("/your-tours")})).catch((function(e){a.setState({errorMessage:e.response.data.errorMessage})}))},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"this is the Create-Tour page"),r.a.createElement("form",{ref:this.formRef,onSubmit:this.submitHandler},r.a.createElement("input",{type:"file",name:"picture",multiple:!0}),r.a.createElement("input",{type:"date",name:"date"}),r.a.createElement(q,{type:"text",name:"mountainName",setValue:this.setValue}),r.a.createElement("input",{type:"hidden",name:"mountainId",value:this.state.mountainId}),r.a.createElement("select",{type:"text",name:"snowQuality",placeholder:"snowQuality"},r.a.createElement("option",{value:"powder"},"Powder"),r.a.createElement("option",{value:"crud"},"Crud"),r.a.createElement("option",{value:"crust"},"Crust"),r.a.createElement("option",{value:"slush"},"Slush"),r.a.createElement("option",{value:"ice"},"Ice")),r.a.createElement("select",{type:"number",name:"snowDepth",placeholder:"snowDepth"},r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"15"},"15"),r.a.createElement("option",{value:"20"},"20"),r.a.createElement("option",{value:"25"},"25"),r.a.createElement("option",{value:"30"},"30"),r.a.createElement("option",{value:"35"},"35"),r.a.createElement("option",{value:"40"},"40"),r.a.createElement("option",{value:"45"},"45"),r.a.createElement("option",{value:"50"},"50")),r.a.createElement("select",{type:"text",name:"recomended",placeholder:"recomended"},r.a.createElement("option",{value:"Yes"},"Yes"),r.a.createElement("option",{value:"No"},"No")),r.a.createElement("input",{type:"text",name:"description",placeholder:"description"}),r.a.createElement("button",{type:"submit"},"submit")))}}]),t}(r.a.Component),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).logoutHandler=function(){try{j(),a.props.setUserState(null),a.props.history.push("/")}catch(e){console.log(e)}},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",null,this.props.loggedinUser?r.a.createElement("div",null,r.a.createElement("h1",null,"hello ",this.props.loggedinUser.username," welcome on SKIALP"),r.a.createElement("p",null,r.a.createElement(w.b,{to:"/your-tours"},"Your Tours")),r.a.createElement("p",null,r.a.createElement(w.b,{to:"/create-tour"},"Create Tour")),r.a.createElement("p",null,r.a.createElement(w.b,{to:"/all-tours"},"All Tours")),r.a.createElement("p",null,r.a.createElement(w.b,{to:"/profile"},"Profile")),r.a.createElement("p",null,r.a.createElement(w.b,{to:"/",onClick:this.logoutHandler},"Logout"))):r.a.createElement("div",null,r.a.createElement("h1",null,"SKIALP"),r.a.createElement("p",null,r.a.createElement(w.b,{to:"/"},"Home")),r.a.createElement("p",null,r.a.createElement(w.b,{to:"/login"},"Login"))))}}]),t}(r.a.Component),G=(a(84),a(42)),_=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(G.Carousel,null,this.props.pictures.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("img",{src:e}))})))}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={tour:null,message:null,tourId:null},a.getTour=function(){var e=a.props.match.params.id;b.get("/tour/".concat(e)).then((function(e){console.log(e),a.setState({tour:e.data.tour,tourId:e.data.tour._id})}))},a.onChangeHandler=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(f.a)({},n,r))},a.submitHandler=function(e){var t={message:a.state.message,tourId:a.state.tourId};e.preventDefault(),console.log(a.state.message),b.post("/create-comment",t).then((function(e){a.getTour()})).catch((function(e){console.log(e)}))},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getTour()}},{key:"render",value:function(){var e=this.state.tour;return r.a.createElement("div",null,r.a.createElement("div",null," ",e?r.a.createElement("div",null,r.a.createElement(_,{pictures:e.picture}),r.a.createElement("p",null,e.mountainId.mountainName),r.a.createElement("p",null,e.mountainId.location),r.a.createElement("p",null,e.mountainId.region),r.a.createElement("p",null,"Height: ",e.mountainId.height," mt"),r.a.createElement("p",null,"Elevation Gain: ",e.mountainId.elevationGain," mt"),r.a.createElement("p",null,"Difficulty: ",e.mountainId.difficulty),r.a.createElement("p",null,r.a.createElement("a",{href:e.mountainId.link,target:"_blank"},"Tour Details")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.aineva.it/bollettini/#top",target:"_blank"},"AINEVA")),r.a.createElement("p",null,"Snow Quality: ",e.snowQuality," - ",e.snowDepth," cm"),r.a.createElement("p",null,"Description: ",e.description),r.a.createElement("div",null,this.state.tour.comments.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,"Created by ",e.username),r.a.createElement("p",null,e.message))})))):r.a.createElement("p",null,"loading Tour")),r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement("textarea",{type:"text",name:"message",placeholder:"message",onChange:this.onChangeHandler}),r.a.createElement("button",{type:"submit"},"submit")))}}]),t}(r.a.Component),J=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).setUserState=function(t){e.setState({loggedinUser:t})},e.componentDidMount=Object(c.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S();case 3:a=t.sent,e.setState({loggedinUser:a}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.setState({loggedinUser:null});case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e.state={loggedinUser:null,err:null},e}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state.loggedinUser,"da app.js"),r.a.createElement("div",{className:"App"},r.a.createElement(F,{loggedinUser:this.state.loggedinUser,setUserState:this.setUserState}),r.a.createElement("p",null),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/signup",component:C}),r.a.createElement(d.b,{path:"/login",render:function(t){return r.a.createElement(U,Object.assign({},t,{setUserState:e.setUserState}))}}),r.a.createElement(k,{path:"/profile",loggedinUser:this.state.loggedinUser,setUserState:this.setUserState,component:L}),r.a.createElement(k,{path:"/update-profile",loggedinUser:this.state.loggedinUser,setUserState:this.setUserState,component:H}),r.a.createElement(k,{path:"/all-tours",loggedinUser:this.state.loggedinUser,component:M}),r.a.createElement(k,{path:"/your-tours",loggedinUser:this.state.loggedinUser,component:P}),r.a.createElement(k,{path:"/create-tour",loggedinUser:this.state.loggedinUser,component:V}),r.a.createElement(k,{path:"/tour/:id",loggedinUser:this.state.loggedinUser,component:W})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w.a,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.4db0e5ed.chunk.js.map