define(function(a){return function(a){a=a.replace(/^\s+/,'').replace(/\s+$/,'');var b=/^(?:([A-Za-z]+):(\/{0,3}))?([0-9.\-A-Za-z]+\.[0-9A-Za-z]+)?(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,c=["url","scheme","slash","host","port","path","query","hash"],d=b.exec(a),e={};for(var f=0,g=c.length;f<g;f+=1)e[c[f]]=d[f]||"";return e}});