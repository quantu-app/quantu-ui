(function(a){var p=a.util.clone(a.languages.javascript),r="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function c(n,e){return n=n.replace(/<S>/g,function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"}).replace(/<BRACES>/g,function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"}).replace(/<SPREAD>/g,function(){return r}),RegExp(n,e)}r=c(r).source,a.languages.jsx=a.languages.extend("markup",p),a.languages.jsx.tag.pattern=c(`</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:"(?:\\\\[^]|[^\\\\"])*"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>`),a.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,a.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,a.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,a.languages.jsx.tag.inside.comment=p.comment,a.languages.insertBefore("inside","attr-name",{spread:{pattern:c("<SPREAD>"),inside:a.languages.jsx}},a.languages.jsx.tag),a.languages.insertBefore("inside","special-attr",{script:{pattern:c("=<BRACES>"),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:a.languages.jsx}}},a.languages.jsx.tag);var g=function(n){return n?typeof n=="string"?n:typeof n.content=="string"?n.content:n.content.map(g).join(""):""},l=function(n){for(var e=[],s=0;s<n.length;s++){var t=n[s],u=!1;if(typeof t!="string"&&(t.type==="tag"&&t.content[0]&&t.content[0].type==="tag"?t.content[0].content[0].content==="</"?e.length>0&&e[e.length-1].tagName===g(t.content[0].content[1])&&e.pop():t.content[t.content.length-1].content==="/>"||e.push({tagName:g(t.content[0].content[1]),openedBraces:0}):e.length>0&&t.type==="punctuation"&&t.content==="{"?e[e.length-1].openedBraces++:e.length>0&&e[e.length-1].openedBraces>0&&t.type==="punctuation"&&t.content==="}"?e[e.length-1].openedBraces--:u=!0),(u||typeof t=="string")&&e.length>0&&e[e.length-1].openedBraces===0){var i=g(t);s<n.length-1&&(typeof n[s+1]=="string"||n[s+1].type==="plain-text")&&(i+=g(n[s+1]),n.splice(s+1,1)),s>0&&(typeof n[s-1]=="string"||n[s-1].type==="plain-text")&&(i=g(n[s-1])+i,n.splice(s-1,1),s--),n[s]=new a.Token("plain-text",i,null,i)}t.content&&typeof t.content!="string"&&l(t.content)}};a.hooks.add("after-tokenize",function(n){n.language!=="jsx"&&n.language!=="tsx"||l(n.tokens)})})(Prism);
