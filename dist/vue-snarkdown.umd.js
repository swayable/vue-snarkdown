(function(u,a){typeof exports=="object"&&typeof module<"u"?module.exports=a(require("vue")):typeof define=="function"&&define.amd?define(["vue"],a):(u=typeof globalThis<"u"?globalThis:u||self,u["Vue Snarkdown"]=a(u.Vue))})(this,function(u){"use strict";var a={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function w(n){return n.replace(RegExp("^"+(n.match(/^(\t| )+/)||"")[0],"gm"),"")}function c(n){return(n+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function h(n,x){var r,i,e,p,t,$=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,s=[],d="",f=x||{},m=0;function k(o){var l=a[o[1]||""],g=s[s.length-1]==o;return l?l[1]?(g?s.pop():s.push(o),l[0|g]):l[0]:o}function v(){for(var o="";s.length;)o+=k(s[s.length-1]);return o}for(n=n.replace(/^\[(.+?)\]:\s*(.+)$/gm,function(o,l,g){return f[l.toLowerCase()]=g,""}).replace(/^\n+|\n+$/g,"");e=$.exec(n);)i=n.substring(m,e.index),m=$.lastIndex,r=e[0],i.match(/[^\\](\\\\)*\\$/)||((t=e[3]||e[4])?r='<pre class="code '+(e[4]?"poetry":e[2].toLowerCase())+'"><code'+(e[2]?' class="language-'+e[2].toLowerCase()+'"':"")+">"+w(c(t).replace(/^\n+|\n+$/g,""))+"</code></pre>":(t=e[6])?(t.match(/\./)&&(e[5]=e[5].replace(/^\d+/gm,"")),p=h(w(e[5].replace(/^\s*[>*+.-]/gm,""))),t==">"?t="blockquote":(t=t.match(/\./)?"ol":"ul",p=p.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),r="<"+t+">"+p+"</"+t+">"):e[8]?r='<img src="'+c(e[8])+'" alt="'+c(e[7])+'">':e[10]?(d=d.replace("<a>",'<a href="'+c(e[11]||f[i.toLowerCase()])+'">'),r=v()+"</a>"):e[9]?r="<a>":e[12]||e[14]?r="<"+(t="h"+(e[14]?e[14].length:e[13]>"="?1:2))+">"+h(e[12]||e[15],f)+"</"+t+">":e[16]?r="<code>"+c(e[16])+"</code>":(e[17]||e[1])&&(r=k(e[17]||"--"))),d+=i,d+=r;return(d+n.substring(m)+v()).replace(/^\n+|\n+$/g,"")}return{name:"VueSnarkdown",props:{markdown:{type:String}},computed:{html(){const n=this.markdown||this.slotMarkdown||"";return h(n)},slotMarkdown(){return(this.$slots.default?this.$slots.default()[0].children:void 0)||""}},render(){return u.h("div",{innerHTML:this.html})}}});
