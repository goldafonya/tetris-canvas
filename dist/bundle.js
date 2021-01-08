(()=>{"use strict";let t=(t=21)=>{let e="",o=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let r=63&o[t];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e};var e=function(e,o,r){this.y=e,this.x=o,this.id=t(),this.cell=r},o=function(){function e(e,o){this.color="white",this.id=t(),this.ctx=e,this.step=o}return e.prototype.draw=function(t,e){var o=this.ctx,r=this.step;o.beginPath(),o.rect(e+1,t+1,r-1,r-1),o.fillStyle=this.color,o.fill(),o.strokeStyle="white",o.stroke(),o.closePath()},e}(),r=function(){function t(t){this.blocksList=t,this.state=1}return t.getOffset=function(){return[0,1]},t.getBlocksForFigure=function(t){return[[1,t],[1,t+1],[2,t],[2,t+1]]},t.prototype.getMoveDownCord=function(){return this.blocksList.map((function(t){return[t.y+1,t.x]}))},t.prototype.getMoveLeftCord=function(){return this.blocksList.map((function(t){return[t.y,t.x-1]}))},t.prototype.getMoveRightCord=function(){return this.blocksList.map((function(t){return[t.y,t.x+1]}))},t.prototype.apply=function(t){this.blocksList.forEach((function(e,o){e.y=t[o][0],e.x=t[o][1]}))},t.prototype.rotate=function(){return this.blocksList.map((function(t){var e=t.x;return[t.y,e]}))},t.prototype.rotateApply=function(t){},t}(),n=function(){function t(t){this.blocksList=t,this.state=1}return t.getOffset=function(){return[0,3]},t.getBlocksForFigure=function(t){return[[1,t],[1,t+1],[1,t+2],[1,t+3]]},t.prototype.getMoveDownCord=function(){return this.blocksList.map((function(t){return[t.y+1,t.x]}))},t.prototype.getMoveLeftCord=function(){return this.blocksList.map((function(t){return[t.y,t.x-1]}))},t.prototype.getMoveRightCord=function(){return this.blocksList.map((function(t){return[t.y,t.x+1]}))},t.prototype.apply=function(t){this.blocksList.forEach((function(e,o){e.y=t[o][0],e.x=t[o][1]}))},t.prototype.rotate=function(){var t=this.blocksList,e=t[0],o=t[1],r=t[2],n=t[3];switch(this.state){case 1:return[[e.y,e.x],[o.y+1,o.x-1],[r.y+2,r.x-2],[n.y+3,n.x-3]];case 2:return[[e.y,e.x],[o.y-1,o.x+1],[r.y-2,r.x+2],[n.y-3,n.x+3]];default:throw new Error("default case - "+this.state)}},t.prototype.rotateApply=function(t){this.blocksList.forEach((function(e,o){e.y=t[o][0],e.x=t[o][1]})),this.state++,3===this.state&&(this.state=1)},t}(),i=function(){function t(t){this.blocksList=t,this.state=1}return t.getOffset=function(){return[0,2]},t.getBlocksForFigure=function(t){return[[1,t],[1,t+1],[2,t+1],[2,t+2]]},t.prototype.getMoveDownCord=function(){return this.blocksList.map((function(t){return[t.y+1,t.x]}))},t.prototype.getMoveLeftCord=function(){return this.blocksList.map((function(t){return[t.y,t.x-1]}))},t.prototype.getMoveRightCord=function(){return this.blocksList.map((function(t){return[t.y,t.x+1]}))},t.prototype.apply=function(t){this.blocksList.forEach((function(e,o){e.y=t[o][0],e.x=t[o][1]}))},t.prototype.rotate=function(){var t=this.blocksList,e=t[0],o=t[1],r=t[2],n=t[3];switch(this.state){case 1:return[[e.y,e.x+2],[o.y+1,o.x+1],[r.y,r.x],[n.y+1,n.x-1]];case 2:return[[e.y,e.x-2],[o.y-1,o.x-1],[r.y,r.x],[n.y-1,n.x+1]];default:throw new Error("default case - "+this.state)}},t.prototype.rotateApply=function(t){this.blocksList.forEach((function(e,o){e.y=t[o][0],e.x=t[o][1]})),this.state++,3===this.state&&(this.state=1)},t}(),s=function(){function t(t){this.blocksList=t,this.state=1}return t.getOffset=function(){return[1,1]},t.getBlocksForFigure=function(t){return[[1,t],[1,t+1],[2,t],[2,t-1]]},t.prototype.getMoveDownCord=function(){return this.blocksList.map((function(t){return[t.y+1,t.x]}))},t.prototype.getMoveLeftCord=function(){return this.blocksList.map((function(t){return[t.y,t.x-1]}))},t.prototype.getMoveRightCord=function(){return this.blocksList.map((function(t){return[t.y,t.x+1]}))},t.prototype.apply=function(t){this.blocksList.forEach((function(e,o){e.y=t[o][0],e.x=t[o][1]}))},t.prototype.rotate=function(){var t=this.blocksList,e=t[0],o=t[1],r=t[2],n=t[3];switch(this.state){case 1:return[[e.y+1,e.x+1],[o.y+2,o.x],[r.y,r.x],[n.y-1,n.x+1]];case 2:return[[e.y-1,e.x-1],[o.y-2,o.x],[r.y,r.x],[n.y+1,n.x-1]];default:throw new Error("default case - "+this.state)}},t.prototype.rotateApply=function(t){this.blocksList.forEach((function(e,o){e.y=t[o][0],e.x=t[o][1]})),this.state++,3===this.state&&(this.state=1)},t}(),u=function(){function t(t){this.blocksList=t,this.state=1}return t.getOffset=function(){return[0,2]},t.getBlocksForFigure=function(t){return[[1,t],[1,t+1],[1,t+2],[2,t+1]]},t.prototype.getMoveDownCord=function(){return this.blocksList.map((function(t){return[t.y+1,t.x]}))},t.prototype.getMoveLeftCord=function(){return this.blocksList.map((function(t){return[t.y,t.x-1]}))},t.prototype.getMoveRightCord=function(){return this.blocksList.map((function(t){return[t.y,t.x+1]}))},t.prototype.apply=function(t){this.blocksList.forEach((function(e,o){e.y=t[o][0],e.x=t[o][1]}))},t.prototype.rotate=function(){var t=this.blocksList,e=t[0],o=t[1],r=t[2],n=t[3];switch(this.state){case 1:return[[e.y-1,e.x+1],[o.y,o.x],[r.y+1,r.x-1],[n.y-1,n.x-1]];case 2:return[[e.y+1,e.x+1],[o.y,o.x],[r.y-1,r.x-1],[n.y-1,n.x+1]];case 3:return[[e.y+1,e.x-1],[o.y,o.x],[r.y-1,r.x+1],[n.y+1,n.x+1]];case 4:return[[e.y-1,e.x-1],[o.y,o.x],[r.y+1,r.x+1],[n.y+1,n.x-1]];default:throw new Error("default case - "+this.state)}},t.prototype.rotateApply=function(t){this.blocksList.forEach((function(e,o){e.y=t[o][0],e.x=t[o][1]})),this.state++,5===this.state&&(this.state=1)},t}(),c=function(){function t(t){this.blocksList=t,this.state=1}return t.getOffset=function(){return[0,2]},t.getBlocksForFigure=function(t){return[[1,t+2],[2,t],[2,t+1],[2,t+2]]},t.prototype.getMoveDownCord=function(){return this.blocksList.map((function(t){return[t.y+1,t.x]}))},t.prototype.getMoveLeftCord=function(){return this.blocksList.map((function(t){return[t.y,t.x-1]}))},t.prototype.getMoveRightCord=function(){return this.blocksList.map((function(t){return[t.y,t.x+1]}))},t.prototype.apply=function(t){this.blocksList.forEach((function(e,o){e.y=t[o][0],e.x=t[o][1]}))},t.prototype.rotate=function(){var t=this.blocksList,e=t[0],o=t[1],r=t[2],n=t[3];switch(this.state){case 1:return[[e.y,e.x-2],[o.y+1,o.x+1],[r.y,r.x],[n.y-1,n.x-1]];case 2:return[[e.y+2,e.x],[o.y-1,o.x+1],[r.y,r.x],[n.y+1,n.x-1]];case 3:return[[e.y,e.x+2],[o.y-1,o.x-1],[r.y,r.x],[n.y+1,n.x+1]];case 4:return[[e.y-2,e.x],[o.y+1,o.x-1],[r.y,r.x],[n.y-1,n.x+1]];default:throw new Error("default case - "+this.state)}},t.prototype.rotateApply=function(t){this.blocksList.forEach((function(e,o){e.y=t[o][0],e.x=t[o][1]})),this.state++,5===this.state&&(this.state=1)},t}(),a=function(){function t(t){this.blocksList=t,this.state=1}return t.getOffset=function(){return[0,2]},t.getBlocksForFigure=function(t){return[[1,t],[2,t],[2,t+1],[2,t+2]]},t.prototype.getMoveDownCord=function(){return this.blocksList.map((function(t){return[t.y+1,t.x]}))},t.prototype.getMoveLeftCord=function(){return this.blocksList.map((function(t){return[t.y,t.x-1]}))},t.prototype.getMoveRightCord=function(){return this.blocksList.map((function(t){return[t.y,t.x+1]}))},t.prototype.apply=function(t){this.blocksList.forEach((function(e,o){e.y=t[o][0],e.x=t[o][1]}))},t.prototype.rotate=function(){var t=this.blocksList,e=t[0],o=t[1],r=t[2],n=t[3];switch(this.state){case 1:return[[e.y,e.x+2],[o.y-1,o.x+1],[r.y,r.x],[n.y+1,n.x-1]];case 2:return[[e.y+2,e.x],[o.y+1,o.x+1],[r.y,r.x],[n.y-1,n.x-1]];case 3:return[[e.y,e.x-2],[o.y+1,o.x-1],[r.y,r.x],[n.y-1,n.x+1]];case 4:return[[e.y-2,e.x],[o.y-1,o.x-1],[r.y,r.x],[n.y+1,n.x+1]];default:throw new Error("default case - "+this.state)}},t.prototype.rotateApply=function(t){this.blocksList.forEach((function(e,o){e.y=t[o][0],e.x=t[o][1]})),this.state++,5===this.state&&(this.state=1)},t}(),f=null,h=null,y=function(t){var e=t.touches[0];f=e.clientX,h=e.clientY},p=!1,l="#353839",x=function(){function t(t,e,o,r){var n,i,s,u,c,a=this;this.currentFigure=null,this.isFinish=!1,this.moveFigureDown=function(){var t=a.currentFigure.getMoveDownCord();a.isCanMove(t)?a.currentFigure.apply(t):(a.blockOfBoard=a.blockOfBoard.concat(a.currentFigure.blocksList),a.checkBoard(),a.getNewFigure())},this.moveFigureLeft=function(){var t=a.currentFigure.getMoveLeftCord();a.isCanMove(t)&&a.currentFigure.apply(t)},this.moveFigureRight=function(){var t=a.currentFigure.getMoveRightCord();a.isCanMove(t)&&a.currentFigure.apply(t)},this.rotateFigure=function(){var t=a.currentFigure.rotate();a.isCanMove(t)&&a.currentFigure.rotateApply(t)},this.context=t,this.step=e,this.sizeY=o,this.sizeX=r,this.initBoard(),this.intervalId=setInterval((function(){a.isFinish||(null===a.currentFigure?a.getNewFigure():a.moveFigureDown())}),1e3),document.addEventListener("keydown",(function(t){a.isFinish||("ArrowRight"===t.code&&a.moveFigureRight(),"ArrowLeft"===t.code&&a.moveFigureLeft(),t.code,"ArrowDown"===t.code&&a.moveFigureDown(),"Space"===t.code&&a.rotateFigure())})),document.addEventListener("touchstart",(n=this.rotateFigure,function(t){if(!p)return p=!0,setTimeout((function(){p=!1}),300),!1;t.preventDefault(),n()}),!1),document.addEventListener("touchstart",y,!1),document.addEventListener("touchmove",(i={leftSwipe:this.moveFigureLeft,downSwipe:this.moveFigureDown,rightSwipe:this.moveFigureRight},s=i.leftSwipe,u=i.downSwipe,c=i.rightSwipe,function(t){if(f&&h){var e=t.touches[0].clientX,o=t.touches[0].clientY,r=f-e,n=h-o;Math.abs(r)>Math.abs(n)?r>0?s():c():n>0||u(),f=null,h=null}}),!1)}return t.prototype.initBoard=function(){for(var t=new Array,r=this.sizeX,n=this.sizeY,i=this.context,s=this.step,u=0;u<r;u++)for(var c=0;c<n;c++)if(0!==u&&0!==c&&u!==r-1&&c!==n-1);else{var a=new o(i,s);a.color=l,t.push(new e(c,u,a))}this.blockOfBoard=t},t.prototype.draw=function(){var t=this;this.blockOfBoard.forEach((function(e,o){var r=e.cell,n=e.x,i=e.y,s=n*t.step,u=i*t.step;r.draw(u,s)})),null!==this.currentFigure&&this.currentFigure.blocksList.forEach((function(e){var o=e.cell,r=e.x,n=e.y,i=r*t.step,s=n*t.step;o.draw(s,i)}))},t.prototype.getNewFigure=function(){var t,f=(t=[r,n,i,s,u,c,a])[Math.floor(Math.random()*t.length)],h=f.getOffset(),y=h[0],p=h[1],l=Math.floor(Math.random()*(this.sizeX-(2+p))+(1+y)),x=f.getBlocksForFigure(l);if(this.isCanMove(x)){for(var g,d=[],v=(g=["#0341AE","#72CB3B","#FFD500","#FF971C","#FF3213"])[Math.floor(Math.random()*g.length)],w=0,k=x;w<k.length;w++){var m=k[w],L=m[0],F=m[1],b=new o(this.context,this.step);b.color=v,d.push(new e(L,F,b))}this.currentFigure=new f(d)}else this.finish()},t.prototype.isCanMove=function(t){return!this.blockOfBoard.some((function(e){var o=e.y,r=e.x;return t.some((function(t){var e=t[0],n=t[1];return o===e&&r===n}))}))},t.prototype.checkBoard=function(){this.sizeX;var t=new Map,e=-1,o=[],r=[];this.blockOfBoard.forEach((function(t){t.cell.color===l?r.push(t):o.push(t)})),o.forEach((function(e){var o=e.x,r=e.y;t.set(r+"_"+o,e)}));for(var n=this.sizeY-2;n>0;n--){for(var i=!0,s=1;s<this.sizeX-1;s++)t.has(n+"_"+s)||(i=!1);if(i){-1===e&&(e=n);break}}-1!==e&&(o=(o=o.filter((function(t){return!(t.y===e)}))).map((function(t){return t.y<e&&(t.y=t.y+1),t}))),this.blockOfBoard=o.concat(r),-1!==e&&this.checkBoard()},t.prototype.finish=function(){clearInterval(this.intervalId),this.isFinish=!0,console.log("THE END"),alert("THE END")},t}();window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},setTimeout((function(){var t=document.querySelector("#canvas");if("CANVAS"!==t.tagName)throw new Error("not canvas");var e=t.getContext("2d"),o=t.width,r=t.height,n=r/30,i=o/30;console.log("size h",n),console.log("size v",i);var s=new x(e,30,n,i);window.requestAnimFrame((function t(){window.requestAnimFrame(t),e.beginPath(),e.rect(0,0,o,r),e.fillStyle="white",e.fill(),e.closePath(),s.draw()}))}))})();
//# sourceMappingURL=bundle.js.map