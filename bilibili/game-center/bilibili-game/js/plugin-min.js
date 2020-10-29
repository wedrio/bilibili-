/*slideshow*/(function(b,d){var c={carousel:".carousel",items:".slide",slideWidth:false,jumpQueue:true,offset:1,skip:true,pagination:true,auto:6000,autostop:true,hoverPause:false,loop:false,nextText:"Next",previousText:"Previous",transition:"scroll",speed:600,easing:"swing",visible:1,onupdate:null,oncomplete:null};function a(f,e){this.target=f;this.$target=b(f);this.opts=b.extend({},c,e,this.$target.data());this.$carousel=this.$target.children(this.opts.carousel);this.$items=this.$carousel.children(this.opts.items);this.count=this.$items.length;this.scrollable=true;if(this.count>1){this._init()}return this}a.prototype._init=function(){var f=this;this.$wrapper=this.$carousel.wrap('<div style="position:relative;overflow:hidden;">').parent();if(this.opts.pagination){this.$pagination=b('<ul class="slides-pagination">');for(var g=0,e=this.count;g<e;g++){this.$pagination.append('<li><a href="#" data-slides="'+g+'">'+(g+1)+"</a></li>")}this.$target.append(this.$pagination)}if(this.opts.skip){this.$prev=b('<a href="#" class="slides-prev" data-slides="previous">'+this.opts.previousText+"</a>");this.$next=b('<a href="#" class="slides-next" data-slides="next">'+this.opts.nextText+"</a>");this.$target.append(this.$next,this.$prev)}if(this.opts.pagination||this.opts.skip){this.$target.on("click.slides","[data-slides]",function(i){var h=b(this);i.preventDefault();if(!h.hasClass("disabled")){f.to(h.data("slides"),true)}})}this.redraw();if(this.opts.auto){if(this.opts.hoverPause){this.$target.hover(function(){if(!f.stopped){f.pause()}},function(){if(f.paused){f.play()}})}this.play()}};a.prototype._oncomplete=function(){var e=this.current;this.current=this.future;if(this.opts.pagination){this.$pagination.children().removeClass("selected").slice(this.current,this.current+this.opts.visible).addClass("selected")}if(this.opts.skip){if(!this.hasNext()&&!this.opts.loop){this.$next.addClass("disabled")}else{this.$next.removeClass("disabled")}if(!this.hasPrevious()&&!this.opts.loop){this.$prev.addClass("disabled")}else{this.$prev.removeClass("disabled")}}if(this.opts.oncomplete){this._handleCallback(this.opts.oncomplete,[this.current,e])}};a.prototype._handleCallback=function(f,e){f=typeof f==="string"?window[f]:f;if(f.call){f.apply(this,e)}};a.prototype.hasNext=function(){return this.scrollable&&this.current<this.count-1};a.prototype.hasPrevious=function(){return this.current>0};a.prototype.next=function(){this.to(this.current+1)};a.prototype.previous=function(){this.to(this.current-1)};a.prototype.to=function(e,f){if(this.opts.jumpQueue){this.$items.stop(true,true)}else{if(this.$items.queue("fx").length){return}}if(e==="next"){e=this.current+1}else{if(e==="previous"){e=this.current-1}}if(typeof e!=="number"){e=parseInt(e,10)}if(e>=this.count){e=this.opts.loop?0:this.count-1}else{if(e<0){e=this.opts.loop?this.count-1:0}}if(f&&!this.stopped){if(this.opts.autostop){this.stop()}else{if(!this.paused){this.play()}}}if(e!==this.current){this.future=e;this.transition.execute.call(this);if(this.opts.onupdate){this._handleCallback(this.opts.onupdate,[e])}}};a.prototype.redraw=function(e){if(this.transition){this.transition.teardown.call(this)}if(e){this.opts.transition=e}this.current=d;this.transition=this.transitions[this.opts.transition].call(this);this.to(this.opts.offset-1)};a.prototype.play=function(){var e=this;clearInterval(this.timeout);this.paused=this.stopped=false;this.timeout=setInterval(function(){e.to("next")},this.opts.auto)};a.prototype.pause=function(){this.paused=true;clearInterval(this.timeout)};a.prototype.stop=function(){this.stopped=true;this.paused=false;clearInterval(this.timeout)};a.prototype.transitions={crossfade:function(){var e=this;this.$items.filter(function(f){return f!==e.opts.offset-1}).css("display","none");this.execute=function(){var f=this.$items.eq(this.future);var g=this.$items.eq(this.current).css({"z-index":"50"});f.css({position:"absolute",left:0,top:0,"z-index":100}).fadeIn(this.opts.speed,this.opts.easing,function(){e._oncomplete.call(e)});g.css({position:"","z-index":50}).delay(this.opts.speed).hide(0)};this.teardown=function(){this.$items.stop(true,true).removeAttr("style")};return this},scroll:function(){var e=this;var g=0;this.$items.css({"float":"left",width:this.opts.slideWidth});for(var f=0;f<this.count;f++){g+=this.$items.eq(f).outerWidth(true)}this.$carousel.css({minWidth:g});this.execute=function(){var h=this.$items.eq(this.future).position().left+this.$wrapper.scrollLeft();var i=this.$carousel.width()-this.$wrapper.width();var j=h>=i;if(!j||this.scrollable){this.$wrapper.animate({scrollLeft:j?i:h},this.opts.speed,this.opts.easing,function(){e._oncomplete.call(e)})}this.scrollable=!j};this.teardown=function(){this.scrollable=true;this.$items.removeAttr("style");this.$carousel.stop(true,true).removeAttr("style")};return this}};b.fn.slides=function(e){return this.each(function(){if(!b.data(this,"slides")){b.data(this,"slides",new a(this,e))}})};if(typeof define==="function"&&define.amd){define(function(){return a})}else{if(typeof module!=="undefined"&&module.exports){module.exports=a}}})(jQuery);
/*svg-circle*/!function(a,b){var d=function(a){var d,e,c={dom:document.getElementById("puzzle"),length:10,coordX:21,coordY:19,radius:11,bgRadius:13,sAngle:270,space:5e3,speed:50,callback:function(){},distance:10,wBorder:8,hBorder:6};c=b.extend({},c,a),c.spaceAngle=360/(c.space/c.speed),d=c.coordX-c.bgRadius+(2*c.bgRadius+c.distance)*c.length-c.distance+c.wBorder,e=c.coordY+c.bgRadius+c.hBorder,this.rNode=Raphael(c.dom,d+20,e+20),this.rNode.rect(0,0,d,e,e/2).attr({fill:"#000","stroke-width":0,opacity:.3}),this.config=c,this.creatOrigin().deployAnimate(0)};d.prototype={creatOrigin:function(){var f,g,b=this.config,c=this.rNode,d=[],e=b.coordX;for(f=0;f<b.length;f++)g=c.circle(e,b.coordY,0==f?b.bgRadius:b.radius),g.attr("fill","#fff"),g.attr("stroke-width","0"),g.attr({cursor:"pointer"}),d.push({dom:g,x:e,y:b.coordY}),e=e+2*b.bgRadius+b.distance;return this.circleArr=d,this},start:function(){return this.animate(this.start.Obj),this},stop:function(){return this.setAnimate&&clearTimeout(this.setAnimate),this},num:0,deployAnimate:function(a){var d,e,f,b=this.config,c=this.circleArr;for(this.num=a=a>=c.length?0:a,circle=c[a],d=this.angleCoord(b.sAngle,{x:circle.x,y:circle.y}),d.angle=b.sAngle-360,d.coordX=circle.x,d.coordY=circle.y,circle.dom.animate({r:b.bgRadius},50),e=0,f=c.length;f>e;e++)e!=a&&c[e].dom.animate({r:b.radius},50);return this.animate(d),b.callback(a),this},angleCoord:function(a,b){var c=this.config,d=b.x+c.radius*Math.cos(a*Math.PI/180),e=b.y+c.radius*Math.sin(a*Math.PI/180);return{x:d,y:e}},animate:function(a){var b=this,c=this.config,d=this.angleCoord(a.angle,{x:a.coordX,y:a.coordY}),e=c.sAngle-a.angle>180?1:0,f="M"+a.coordX+","+a.coordY+" L"+a.x+","+a.y+" a"+c.radius+","+c.radius+" 0 "+e+",0 "+(d.x-a.x)+","+(d.y-a.y)+" z";return this.path?this.path.animate(Raphael.animation({path:f,fill:"#2dbdf1","stroke-width":0})):this.path=b.rNode.path(f).attr({fill:"#2dbdf1","stroke-width":0}),a.angle>=c.sAngle?(this.deployAnimate(++b.num),!1):((a.angle+=c.spaceAngle)>c.sAngle&&(a.angle=c.sAngle),this.setAnimate=setTimeout(function(){b.animate(a),b.start.Obj=a},c.speed),void 0)}},a.animate=d}(window,jQuery);
/*popup*/
(function($, window, document, undefined) {

    $.extend({
        popup: function(options){

            var defaults = {
                className: '',
                title: '友情提示',
                content: null,
                btnOn: true,
                btnOnText: '确&nbsp;定',
                btnOff: true,
                btnOffText: '取&nbsp;消',
                btnClose: true,
                before: function(){},
                after: function(){}
            };

            var opts = $.extend({}, defaults, options || {});

            var core = function(opts){
                $('body').append(this.html);
                var divH = $('body').find(".popup-div").height();
                $(".popup-div").css({
                    "top": "50%",
                    "margin-top": divH / -2 - 20 + "px"
                });
                this.events();
            };

            core.prototype = {
                html: function(){
                    var h = max($(document.body).outerHeight(), $(window).outerHeight());

                    var content = opts.content = typeof opts.content == 'function' ? opts.content() : opts.content;

                    var btnOn = opts.btnOn ? '<a class="popup-btn-on" href="javascript:;">' + opts.btnOnText + '</a>' : '';

                    var btnOff = opts.btnOff ? '<a class="popup-btn-off" href="javascript:;">' + opts.btnOffText + '</a>' : '';

                    var btnClose = opts.btnClose ? '<a class="popup-close" href="javascript:;">X</a>' : '';

                    var bg = '<div class="popup-bg" style="height:' + h + 'px"></div>';

                    var className = opts.className != null ? opts.className : '';

                    var title = opts.title != null ? '<div class="popup-title">' + opts.title + '</div>' : '';

                    return bg + '<div class="popup-div ' + className + '">' + btnClose + title + '<div class="popup-body">' + content + '</div><div class="popup-btn">' + btnOn + btnOff + '</div></div>';
                },
                events: function(){
                    var self = this;
                    $('.popup-btn-on, .popup-btn-off, .popup-close').click(function(){
                        opts.before();
                        self.remove()
                        opts.after();
                    });
                },
                remove: function(){
                    $('.popup-bg, .popup-div').remove();
                }
            };

            function max(a, b){
                var m = a > b ? a : b;
                return m;
            }

            return new core(opts);

        }
    });

}(jQuery, window, document));