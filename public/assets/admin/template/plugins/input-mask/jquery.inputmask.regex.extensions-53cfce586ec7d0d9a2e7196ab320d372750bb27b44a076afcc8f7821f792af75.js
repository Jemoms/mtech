!function(e){e.extend(e.inputmask.defaults.aliases,{Regex:{mask:"r",greedy:!1,repeat:"*",regex:null,regexTokens:null,tokenizer:/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,quantifierFilter:/[0-9]+[^,]/,definitions:{r:{validator:function(e,s,r,a,t){function n(){this.matches=[],this.isGroup=!1,this.isQuantifier=!1,this.isLiteral=!1}function i(){var e,s,r=new n,a=[];for(t.regexTokens=[];e=t.tokenizer.exec(t.regex);)switch(s=e[0],s.charAt(0)){case"[":case"\\":a.length>0?a[a.length-1].matches.push(s):r.matches.push(s);break;case"(":!r.isGroup&&r.matches.length>0&&t.regexTokens.push(r),r=new n,r.isGroup=!0,a.push(r);break;case")":var i=a.pop();a.length>0?a[a.length-1].matches.push(i):(t.regexTokens.push(i),r=new n);break;case"{":var h=new n;h.isQuantifier=!0,h.matches.push(s),a.length>0?a[a.length-1].matches.push(h):r.matches.push(h);break;default:var u=new n;u.isLiteral=!0,u.matches.push(s),a.length>0?a[a.length-1].matches.push(u):r.matches.push(u)}r.matches.length>0&&t.regexTokens.push(r)}function h(e,s){var r=!1;s&&(c+="(",o++);for(var a=0;a<e.matches.length;a++){var n=e.matches[a];if(1==n.isGroup)r=h(n,!0);else if(1==n.isQuantifier){n=n.matches[0];for(var i=t.quantifierFilter.exec(n)[0].replace("}",""),u=c+"{1,"+i+"}",l=0;o>l;l++)u+=")";var p=new RegExp("^("+u+")$");r=p.test(g),c+=n}else if(1==n.isLiteral){n=n.matches[0];for(var u=c,f="",l=0;o>l;l++)f+=")";for(var k=0;k<n.length;k++){u=(u+n[k]).replace(/\|$/,"");var p=new RegExp("^("+u+f+")$");if(r=p.test(g))break}c+=n}else{c+=n;for(var u=c.replace(/\|$/,""),l=0;o>l;l++)u+=")";var p=new RegExp("^("+u+")$");r=p.test(g)}if(r)break}return s&&(c+=")",o--),r}null==t.regexTokens&&i();var u=s.slice(),c="",l=!1,o=0;u.splice(r,0,e);for(var g=u.join(""),p=0;p<t.regexTokens.length;p++){var n=t.regexTokens[p];if(l=h(n,n.isGroup))break}return l},cardinality:1}}}})}(jQuery);