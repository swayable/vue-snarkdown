(function(l,a){typeof exports=="object"&&typeof module<"u"?module.exports=a(require("vue")):typeof define=="function"&&define.amd?define(["vue"],a):(l=typeof globalThis<"u"?globalThis:l||self,l["Vue Snarkdown"]=a(l.Vue))})(this,function(l){"use strict";var a={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function k(n){return n.replace(RegExp("^"+(n.match(/^(\t| )+/)||"")[0],"gm"),"")}function c(n){return(n+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function f(n,i){var r,p,e,g,t,$=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,s=[],d="",h=i||{},w=0;function v(o){var u=a[o[1]||""],m=s[s.length-1]==o;return u?u[1]?(m?s.pop():s.push(o),u[0|m]):u[0]:o}function x(){for(var o="";s.length;)o+=v(s[s.length-1]);return o}for(n=n.replace(/^\[(.+?)\]:\s*(.+)$/gm,function(o,u,m){return h[u.toLowerCase()]=m,""}).replace(/^\n+|\n+$/g,"");e=$.exec(n);)p=n.substring(w,e.index),w=$.lastIndex,r=e[0],p.match(/[^\\](\\\\)*\\$/)||((t=e[3]||e[4])?r='<pre class="code '+(e[4]?"poetry":e[2].toLowerCase())+'"><code'+(e[2]?' class="language-'+e[2].toLowerCase()+'"':"")+">"+k(c(t).replace(/^\n+|\n+$/g,""))+"</code></pre>":(t=e[6])?(t.match(/\./)&&(e[5]=e[5].replace(/^\d+/gm,"")),g=f(k(e[5].replace(/^\s*[>*+.-]/gm,""))),t==">"?t="blockquote":(t=t.match(/\./)?"ol":"ul",g=g.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),r="<"+t+">"+g+"</"+t+">"):e[8]?r='<img src="'+c(e[8])+'" alt="'+c(e[7])+'">':e[10]?(d=d.replace("<a>",'<a href="'+c(e[11]||h[p.toLowerCase()])+'">'),r=x()+"</a>"):e[9]?r="<a>":e[12]||e[14]?r="<"+(t="h"+(e[14]?e[14].length:e[13]>"="?1:2))+">"+f(e[12]||e[15],h)+"</"+t+">":e[16]?r="<code>"+c(e[16])+"</code>":(e[17]||e[1])&&(r=v(e[17]||"--"))),d+=p,d+=r;return(d+n.substring(w)+x()).replace(/^\n+|\n+$/g,"")}return{name:"VueSnarkdown",props:{markdown:{type:String}},computed:{html(){const n=this.markdown||this.slotMarkdown||"";return f(n)},slotMarkdown(){var i,r;let n=(r=(i=this.$slots.default())==null?void 0:i[0])==null?void 0:r.children;return!this.markdown&&!n&&console.warn("No markdown found in default slot. Provide markdown prop or default slot."),console.log(n),n||""}},render(){return l.h("div",{innerHTML:this.html})}}});
