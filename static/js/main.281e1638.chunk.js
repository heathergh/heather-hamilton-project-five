(this["webpackJsonpheather-hamilton-project-five"]=this["webpackJsonpheather-hamilton-project-five"]||[]).push([[0],{23:function(e,t,a){e.exports=a(55)},28:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),o=a.n(s),l=(a(28),function(e){return r.a.createElement("header",null,r.a.createElement("h1",null,"Image Search"),r.a.createElement("p",null,"Search for an image in the input below. Download your favourite ones or visit the original page. Made the with the Unsplash API."))}),c=a(2),i=a(3),u=a(4),m=a(7),h=a(5),g=a(8),p=a(6),d=a.n(p),f=a(22),w=a.n(f),E=function(e){var t=e.id,a=e.url,n=e.alt,s=e.name,o=e.profileUrl;return r.a.createElement("div",{className:"card-wrapper"},r.a.createElement("img",{src:"".concat(a),alt:"".concat(n),id:t,tabIndex:"0"}),r.a.createElement("p",{className:"photo-credit"},r.a.createElement("a",{href:"".concat(o),target:"_blank",rel:"noopener noreferrer"},s)))},v=function(e){var t=e.downloadUrl;return r.a.createElement("a",{className:"download-link",download:!0,href:"".concat(t,"?force=true")},"Download Original Image")},b=function(e){return r.a.createElement("ul",null,e.searchResults.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(E,{id:e.id,url:e.urls.small,alt:e.alt_description,postUrl:e.links.html,name:e.user.name,profileUrl:e.user.links.html}),r.a.createElement(v,{downloadUrl:e.links.download}))})))},I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).updateParentImages=function(e){a.props.renderImages()},a.searchForImages=function(e){e.preventDefault(),""===a.state.searchTerm?a.props.errorState("Please fill in this field"):(a.props.toggleLoader(!0),d()({method:"get",url:"https://api.unsplash.com//search/photos",headers:{Authorization:"Client-ID c7e460e950c6ce50f9be85a30ccb19fb6ae9997faeea7dade15fdb1f30b331a8"},params:{query:a.state.searchTerm,per_page:a.props.numOfResults}}).then((function(e){a.props.getPages(e.data.total_pages),a.props.noResults||a.props.getImages(e.data.results),a.props.toggleLoader(!1)})).catch((function(e){console.error("Something went wrong: ".concat(e))})))},a.getUserInput=function(e){e.preventDefault(),""!==e.target.value&&a.setState({searchTerm:e.target.value},(function(){a.props.getSearchTerm(a.state.searchTerm)}))},a.state={searchTerm:""},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"form-wrapper",onSubmit:this.searchForImages},r.a.createElement("label",{htmlFor:"search",className:"visuallyHidden"},"What images do you want to search for?"),r.a.createElement("input",{id:"search",onChange:this.getUserInput,placeholder:"Search for an image"}))}}]),t}(n.Component),S=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},O=function(e){return r.a.createElement("div",{className:"error"},r.a.createElement("h2",null,e.children))},j=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).getImages=function(t){e.setState({images:t})},e.getMoreImages=function(t){e.setState({newImages:t})},e.updateImages=function(){var t=Object(c.a)(e.state.images),a=Object(c.a)(e.state.newImages);e.setState({images:[].concat(Object(c.a)(t),Object(c.a)(a)),pageCount:e.state.pageCount+1})},e.setSearchTerm=function(t){e.setState({searchTerm:t})},e.toggleLoader=function(t){e.setState({isLoading:t})},e.setTotalPages=function(t){e.setState({pages:t})},e.setErrorStates=function(t){e.setState({noResults:!0,errorMessage:t})},e.fetchMoreImages=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight&&d()({method:"get",url:"https://api.unsplash.com//search/photos",headers:{Authorization:"Client-ID c7e460e950c6ce50f9be85a30ccb19fb6ae9997faeea7dade15fdb1f30b331a8"},params:{query:e.state.searchTerm,page:e.state.pageCount,per_page:e.state.perPage}}).then((function(t){e.setState({newImages:t.data.results},(function(){e.state.pageCount<e.state.pages&&e.updateImages()}))})).catch((function(e){console.error("Something went wrong: ".concat(e))}))},e.state={images:[],newImages:[],searchTerm:"",isLoading:!1,pageCount:2,pages:0,perPage:20,noResults:!1,errorMessage:""},e}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",w()(this.fetchMoreImages,150),!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.fetchMoreImages,!0)}},{key:"render",value:function(){return r.a.createElement("main",{className:"wrapper"},r.a.createElement(I,{getImages:this.getImages,getSearchTerm:this.setSearchTerm,toggleLoader:this.toggleLoader,getPages:this.setTotalPages,numOfResults:this.state.perPage,noResultsState:this.state.noResults,errorState:this.setErrorStates}),r.a.createElement("section",{className:"image-list-wrapper"},this.state.isLoading?r.a.createElement(S,null):r.a.createElement(b,{searchResults:this.state.images}),""!==this.state.errorMessage?r.a.createElement(O,null,this.state.errorMessage):null))}}]),t}(n.Component),k=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(l,null),r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.281e1638.chunk.js.map