(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){"use strict";(function(t){var c=n(11),a=n(0),i=n.n(a),o=n(3);n(22);class s extends i.a.Component{constructor(){super(),this.handleClick=this.handleClick.bind(this)}handleClick(){const{dispatch:t}=this.props;t({type:"INCREASE_I",payload:{j:2}})}render(){const{i:t}=this.props;return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,t),i.a.createElement("button",{type:"button",onClick:this.handleClick},"+"))}}e.a=Object(c.hot)(t)(Object(o.b)(t=>({i:t.i}),t=>({dispatch:t}))(s))}).call(this,n(8)(t))},12:function(t,e,n){t.exports=n(24)},22:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),i=n(1),o=n(3),s=n(10),r=n(2);const l={i:0};var p=Object(r.b)((t=l,e)=>"INCREASE_I"===e.type?{...t,i:t.i+e.payload.j}:t);window.store=p,Object(i.render)(a.a.createElement(o.a,{store:p},a.a.createElement(s.a,null)),document.getElementById("root"))}},[[12,1,2]]]);