(function(){var e=function(e){var t=this,n=e;e.require().script("effects/core").done(function(){var e=function(){(function(e,t){e.effects.effect.puff=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"hide"),s=i==="hide",o=parseInt(t.percent,10)||150,u=o/100,a={height:r.height(),width:r.width()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:i,complete:n,percent:s?o:100,from:s?a:{height:a.height*u,width:a.width*u}}),r.effect(t)},e.effects.effect.scale=function(t,n){var r=e(this),i=e.extend(!0,{},t),s=e.effects.setMode(r,t.mode||"effect"),o=parseInt(t.percent,10)||(parseInt(t.percent,10)==0?0:s=="hide"?0:100),u=t.direction||"both",a=t.origin,f={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()},l={y:u!="horizontal"?o/100:1,x:u!="vertical"?o/100:1};i.effect="size",i.queue=!1,i.complete=n,s!="effect"&&(i.origin=a||["middle","center"],i.restore=!0),i.from=t.from||(s=="show"?{height:0,width:0}:f),i.to={height:f.height*l.y,width:f.width*l.x,outerHeight:f.outerHeight*l.y,outerWidth:f.outerWidth*l.x},i.fade&&(s=="show"&&(i.from.opacity=0,i.to.opacity=1),s=="hide"&&(i.from.opacity=1,i.to.opacity=0)),r.effect(i)},e.effects.effect.size=function(t,n){var r=e(this),i=["position","top","bottom","left","right","width","height","overflow","opacity"],s=["position","top","bottom","left","right","overflow","opacity"],o=["width","height","overflow"],u=["fontSize"],a=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],f=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],l=e.effects.setMode(r,t.mode||"effect"),c=t.restore||l!=="effect",h=t.scale||"both",p=t.origin||["middle","center"],d,v,m,g=r.css("position");l==="show"&&r.show(),d={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()},r.from=t.from||d,r.to=t.to||d,m={from:{y:r.from.height/d.height,x:r.from.width/d.width},to:{y:r.to.height/d.height,x:r.to.width/d.width}};if(h=="box"||h=="both")m.from.y!==m.to.y&&(i=i.concat(a),r.from=e.effects.setTransition(r,a,m.from.y,r.from),r.to=e.effects.setTransition(r,a,m.to.y,r.to)),m.from.x!==m.to.x&&(i=i.concat(f),r.from=e.effects.setTransition(r,f,m.from.x,r.from),r.to=e.effects.setTransition(r,f,m.to.x,r.to));(h=="content"||h=="both")&&m.from.y!==m.to.y&&(i=i.concat(u),r.from=e.effects.setTransition(r,u,m.from.y,r.from),r.to=e.effects.setTransition(r,u,m.to.y,r.to)),e.effects.save(r,c?i:s),r.show(),e.effects.createWrapper(r),r.css("overflow","hidden").css(r.from),p&&(v=e.effects.getBaseline(p,d),r.from.top=(d.outerHeight-r.outerHeight())*v.y,r.from.left=(d.outerWidth-r.outerWidth())*v.x,r.to.top=(d.outerHeight-r.to.outerHeight)*v.y,r.to.left=(d.outerWidth-r.to.outerWidth)*v.x),r.css(r.from);if(h=="content"||h=="both")a=a.concat(["marginTop","marginBottom"]).concat(u),f=f.concat(["marginLeft","marginRight"]),o=i.concat(a).concat(f),r.find("*[width]").each(function(){var n=e(this),r={height:n.height(),width:n.width()};c&&e.effects.save(n,o),n.from={height:r.height*m.from.y,width:r.width*m.from.x},n.to={height:r.height*m.to.y,width:r.width*m.to.x},m.from.y!=m.to.y&&(n.from=e.effects.setTransition(n,a,m.from.y,n.from),n.to=e.effects.setTransition(n,a,m.to.y,n.to)),m.from.x!=m.to.x&&(n.from=e.effects.setTransition(n,f,m.from.x,n.from),n.to=e.effects.setTransition(n,f,m.to.x,n.to)),n.css(n.from),n.animate(n.to,t.duration,t.easing,function(){c&&e.effects.restore(n,o)})});r.animate(r.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){r.to.opacity===0&&r.css("opacity",r.from.opacity),l=="hide"&&r.hide(),e.effects.restore(r,c?i:s),c||(g==="static"?r.css({position:"relative",top:r.to.top,left:r.to.left}):e.each(["top","left"],function(e,t){r.css(t,function(n,i){var s=parseInt(i,10),o=e?r.to.left:r.to.top,u=e?r.to.outerWidth-r.from.outerWidth:r.to.outerHeight-r.from.outerHeight,a=p[e]===t,f=p[e]==="middle"||p[e]==="center";return i==="auto"?o+"px":s+o+"px"})})),e.effects.removeWrapper(r),n()}})}})(n)};e(),t.resolveWith(e)})};dispatch("effects/scale").containing(e).to("Foundry/2.1 Modules")})();