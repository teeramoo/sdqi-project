/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");/* ========================================================================
 * Bootstrap: transition.js v3.2.0
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}t.fn.emulateTransitionEnd=function(e){var n=!1,i=this;t(this).one("bsTransitionEnd",function(){n=!0});var o=function(){n||t(i).trigger(t.support.transition.end)};return setTimeout(o,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),/* ========================================================================
 * Bootstrap: alert.js v3.2.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.alert");o||n.data("bs.alert",o=new i(this)),"string"==typeof e&&o[e].call(n)})}var n='[data-dismiss="alert"]',i=function(e){t(e).on("click",n,this.close)};i.VERSION="3.2.0",i.prototype.close=function(e){function n(){s.detach().trigger("closed.bs.alert").remove()}var i=t(this),o=i.attr("data-target");o||(o=i.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,""));var s=t(o);e&&e.preventDefault(),s.length||(s=i.hasClass("alert")?i:i.parent()),s.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",n).emulateTransitionEnd(150):n())};var o=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=i,t.fn.alert.noConflict=function(){return t.fn.alert=o,this},t(document).on("click.bs.alert.data-api",n,i.prototype.close)}(jQuery),/* ========================================================================
 * Bootstrap: button.js v3.2.0
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.button"),s="object"==typeof e&&e;o||i.data("bs.button",o=new n(this,s)),"toggle"==e?o.toggle():e&&o.setState(e)})}var n=function(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),this.isLoading=!1};n.VERSION="3.2.0",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(e){var n="disabled",i=this.$element,o=i.is("input")?"val":"html",s=i.data();e+="Text",null==s.resetText&&i.data("resetText",i[o]()),i[o](null==s[e]?this.options[e]:s[e]),setTimeout(t.proxy(function(){"loadingText"==e?(this.isLoading=!0,i.addClass(n).attr(n,n)):this.isLoading&&(this.isLoading=!1,i.removeClass(n).removeAttr(n))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var n=this.$element.find("input");"radio"==n.prop("type")&&(n.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&n.prop("checked",!this.$element.hasClass("active")).trigger("change")}t&&this.$element.toggleClass("active")};var i=t.fn.button;t.fn.button=e,t.fn.button.Constructor=n,t.fn.button.noConflict=function(){return t.fn.button=i,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(n){var i=t(n.target);i.hasClass("btn")||(i=i.closest(".btn")),e.call(i,"toggle"),n.preventDefault()})}(jQuery),/* ========================================================================
 * Bootstrap: carousel.js v3.2.0
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.carousel"),s=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e),r="string"==typeof e?e:s.slide;o||i.data("bs.carousel",o=new n(this,s)),"number"==typeof e?o.to(e):r?o[r]():s.interval&&o.pause().cycle()})}var n=function(e,n){this.$element=t(e).on("keydown.bs.carousel",t.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};n.VERSION="3.2.0",n.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},n.prototype.keydown=function(t){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()},n.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},n.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},n.prototype.to=function(e){var n=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){n.to(e)}):i==e?this.pause().cycle():this.slide(e>i?"next":"prev",t(this.$items[e]))},n.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},n.prototype.next=function(){return this.sliding?void 0:this.slide("next")},n.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},n.prototype.slide=function(e,n){var i=this.$element.find(".item.active"),o=n||i[e](),s=this.interval,r="next"==e?"left":"right",a="next"==e?"first":"last",l=this;if(!o.length){if(!this.options.wrap)return;o=this.$element.find(".item")[a]()}if(o.hasClass("active"))return this.sliding=!1;var c=o[0],u=t.Event("slide.bs.carousel",{relatedTarget:c,direction:r});if(this.$element.trigger(u),!u.isDefaultPrevented()){if(this.sliding=!0,s&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=t(this.$indicators.children()[this.getItemIndex(o)]);h&&h.addClass("active")}var d=t.Event("slid.bs.carousel",{relatedTarget:c,direction:r});return t.support.transition&&this.$element.hasClass("slide")?(o.addClass(e),o[0].offsetWidth,i.addClass(r),o.addClass(r),i.one("bsTransitionEnd",function(){o.removeClass([e,r].join(" ")).addClass("active"),i.removeClass(["active",r].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(d)},0)}).emulateTransitionEnd(1e3*i.css("transition-duration").slice(0,-1))):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(d)),s&&this.cycle(),this}};var i=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=n,t.fn.carousel.noConflict=function(){return t.fn.carousel=i,this},t(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(n){var i,o=t(this),s=t(o.attr("data-target")||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var r=t.extend({},s.data(),o.data()),a=o.attr("data-slide-to");a&&(r.interval=!1),e.call(s,r),a&&s.data("bs.carousel").to(a),n.preventDefault()}}),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var n=t(this);e.call(n,n.data())})})}(jQuery),/* ========================================================================
 * Bootstrap: collapse.js v3.2.0
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.collapse"),s=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e);!o&&s.toggle&&"show"==e&&(e=!e),o||i.data("bs.collapse",o=new n(this,s)),"string"==typeof e&&o[e]()})}var n=function(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),this.transitioning=null,this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};n.VERSION="3.2.0",n.DEFAULTS={toggle:!0},n.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},n.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var n=t.Event("show.bs.collapse");if(this.$element.trigger(n),!n.isDefaultPrevented()){var i=this.$parent&&this.$parent.find("> .panel > .in");if(i&&i.length){var o=i.data("bs.collapse");if(o&&o.transitioning)return;e.call(i,"hide"),o||i.data("bs.collapse",null)}var s=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[s](0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[s](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var a=t.camelCase(["scroll",s].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(350)[s](this.$element[0][a])}}},n.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return t.support.transition?void this.$element[n](0).one("bsTransitionEnd",t.proxy(i,this)).emulateTransitionEnd(350):i.call(this)}}},n.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var i=t.fn.collapse;t.fn.collapse=e,t.fn.collapse.Constructor=n,t.fn.collapse.noConflict=function(){return t.fn.collapse=i,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(n){var i,o=t(this),s=o.attr("data-target")||n.preventDefault()||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""),r=t(s),a=r.data("bs.collapse"),l=a?"toggle":o.data(),c=o.attr("data-parent"),u=c&&t(c);a&&a.transitioning||(u&&u.find('[data-toggle="collapse"][data-parent="'+c+'"]').not(o).addClass("collapsed"),o[r.hasClass("in")?"addClass":"removeClass"]("collapsed")),e.call(r,l)})}(jQuery),/* ========================================================================
 * Bootstrap: dropdown.js v3.2.0
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){e&&3===e.which||(t(o).remove(),t(s).each(function(){var i=n(t(this)),o={relatedTarget:this};i.hasClass("open")&&(i.trigger(e=t.Event("hide.bs.dropdown",o)),e.isDefaultPrevented()||i.removeClass("open").trigger("hidden.bs.dropdown",o))}))}function n(e){var n=e.attr("data-target");n||(n=e.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var i=n&&t(n);return i&&i.length?i:e.parent()}function i(e){return this.each(function(){var n=t(this),i=n.data("bs.dropdown");i||n.data("bs.dropdown",i=new r(this)),"string"==typeof e&&i[e].call(n)})}var o=".dropdown-backdrop",s='[data-toggle="dropdown"]',r=function(e){t(e).on("click.bs.dropdown",this.toggle)};r.VERSION="3.2.0",r.prototype.toggle=function(i){var o=t(this);if(!o.is(".disabled, :disabled")){var s=n(o),r=s.hasClass("open");if(e(),!r){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);var a={relatedTarget:this};if(s.trigger(i=t.Event("show.bs.dropdown",a)),i.isDefaultPrevented())return;o.trigger("focus"),s.toggleClass("open").trigger("shown.bs.dropdown",a)}return!1}},r.prototype.keydown=function(e){if(/(38|40|27)/.test(e.keyCode)){var i=t(this);if(e.preventDefault(),e.stopPropagation(),!i.is(".disabled, :disabled")){var o=n(i),r=o.hasClass("open");if(!r||r&&27==e.keyCode)return 27==e.which&&o.find(s).trigger("focus"),i.trigger("click");var a=" li:not(.divider):visible a",l=o.find('[role="menu"]'+a+', [role="listbox"]'+a);if(l.length){var c=l.index(l.filter(":focus"));38==e.keyCode&&c>0&&c--,40==e.keyCode&&c<l.length-1&&c++,~c||(c=0),l.eq(c).trigger("focus")}}}};var a=t.fn.dropdown;t.fn.dropdown=i,t.fn.dropdown.Constructor=r,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,r.prototype.toggle).on("keydown.bs.dropdown.data-api",s+', [role="menu"], [role="listbox"]',r.prototype.keydown)}(jQuery),/* ========================================================================
 * Bootstrap: modal.js v3.2.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e,i){return this.each(function(){var o=t(this),s=o.data("bs.modal"),r=t.extend({},n.DEFAULTS,o.data(),"object"==typeof e&&e);s||o.data("bs.modal",s=new n(this,r)),"string"==typeof e?s[e](i):r.show&&s.show(i)})}var n=function(e,n){this.options=n,this.$body=t(document.body),this.$element=t(e),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};n.VERSION="3.2.0",n.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},n.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},n.prototype.show=function(e){var n=this,i=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(i),this.isShown||i.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.backdrop(function(){var i=t.support.transition&&n.$element.hasClass("fade");n.$element.parent().length||n.$element.appendTo(n.$body),n.$element.show().scrollTop(0),i&&n.$element[0].offsetWidth,n.$element.addClass("in").attr("aria-hidden",!1),n.enforceFocus();var o=t.Event("shown.bs.modal",{relatedTarget:e});i?n.$element.find(".modal-dialog").one("bsTransitionEnd",function(){n.$element.trigger("focus").trigger(o)}).emulateTransitionEnd(300):n.$element.trigger("focus").trigger(o)}))},n.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},n.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},n.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},n.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$element.trigger("hidden.bs.modal")})},n.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},n.prototype.backdrop=function(e){var n=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=t.support.transition&&i;if(this.$backdrop=t('<div class="modal-backdrop '+i+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;o?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(150):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var s=function(){n.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",s).emulateTransitionEnd(150):s()}else e&&e()},n.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},n.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",t+this.scrollbarWidth)},n.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},n.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var i=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=n,t.fn.modal.noConflict=function(){return t.fn.modal=i,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(n){var i=t(this),o=i.attr("href"),s=t(i.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),r=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(o)&&o},s.data(),i.data());i.is("a")&&n.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})}),e.call(s,r,this)})}(jQuery),/* ========================================================================
 * Bootstrap: tooltip.js v3.2.0
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.tooltip"),s="object"==typeof e&&e;(o||"destroy"!=e)&&(o||i.data("bs.tooltip",o=new n(this,s)),"string"==typeof e&&o[e]())})}var n=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)};n.VERSION="3.2.0",n.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},n.prototype.init=function(e,n,i){this.enabled=!0,this.type=e,this.$element=t(n),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport);for(var o=this.options.trigger.split(" "),s=o.length;s--;){var r=o[s];if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=r){var a="hover"==r?"mouseenter":"focusin",l="hover"==r?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},n.prototype.getDelegateOptions=function(){var e={},n=this.getDefaults();return this._options&&t.each(this._options,function(t,i){n[t]!=i&&(e[t]=i)}),e},n.prototype.enter=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),clearTimeout(n.timeout),n.hoverState="in",n.options.delay&&n.options.delay.show?void(n.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show)):n.show()},n.prototype.leave=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),clearTimeout(n.timeout),n.hoverState="out",n.options.delay&&n.options.delay.hide?void(n.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide)):n.hide()},n.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var n=t.contains(document.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!n)return;var i=this,o=this.tip(),s=this.getUID(this.type);this.setContent(),o.attr("id",s),this.$element.attr("aria-describedby",s),this.options.animation&&o.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,l=a.test(r);l&&(r=r.replace(a,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?o.appendTo(this.options.container):o.insertAfter(this.$element);var c=this.getPosition(),u=o[0].offsetWidth,h=o[0].offsetHeight;if(l){var d=r,p=this.$element.parent(),f=this.getPosition(p);r="bottom"==r&&c.top+c.height+h-f.scroll>f.height?"top":"top"==r&&c.top-f.scroll-h<0?"bottom":"right"==r&&c.right+u>f.width?"left":"left"==r&&c.left-u<f.left?"right":r,o.removeClass(d).addClass(r)}var m=this.getCalculatedOffset(r,c,u,h);this.applyPlacement(m,r);var g=function(){i.$element.trigger("shown.bs."+i.type),i.hoverState=null};t.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",g).emulateTransitionEnd(150):g()}},n.prototype.applyPlacement=function(e,n){var i=this.tip(),o=i[0].offsetWidth,s=i[0].offsetHeight,r=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(a)&&(a=0),e.top=e.top+r,e.left=e.left+a,t.offset.setOffset(i[0],t.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),i.addClass("in");var l=i[0].offsetWidth,c=i[0].offsetHeight;"top"==n&&c!=s&&(e.top=e.top+s-c);var u=this.getViewportAdjustedDelta(n,e,l,c);u.left?e.left+=u.left:e.top+=u.top;var h=u.left?2*u.left-o+l:2*u.top-s+c,d=u.left?"left":"top",p=u.left?"offsetWidth":"offsetHeight";i.offset(e),this.replaceArrow(h,i[0][p],d)},n.prototype.replaceArrow=function(t,e,n){this.arrow().css(n,t?50*(1-t/e)+"%":"")},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},n.prototype.hide=function(){function e(){"in"!=n.hoverState&&i.detach(),n.$element.trigger("hidden.bs."+n.type)}var n=this,i=this.tip(),o=t.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(o),o.isDefaultPrevented()?void 0:(i.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?i.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),this.hoverState=null,this)},n.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},n.prototype.hasContent=function(){return this.getTitle()},n.prototype.getPosition=function(e){e=e||this.$element;var n=e[0],i="BODY"==n.tagName;return t.extend({},"function"==typeof n.getBoundingClientRect?n.getBoundingClientRect():null,{scroll:i?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop(),width:i?t(window).width():e.outerWidth(),height:i?t(window).height():e.outerHeight()},i?{top:0,left:0}:e.offset())},n.prototype.getCalculatedOffset=function(t,e,n,i){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-n/2}:"top"==t?{top:e.top-i,left:e.left+e.width/2-n/2}:"left"==t?{top:e.top+e.height/2-i/2,left:e.left-n}:{top:e.top+e.height/2-i/2,left:e.left+e.width}},n.prototype.getViewportAdjustedDelta=function(t,e,n,i){var o={top:0,left:0};if(!this.$viewport)return o;var s=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-s-r.scroll,l=e.top+s-r.scroll+i;a<r.top?o.top=r.top-a:l>r.top+r.height&&(o.top=r.top+r.height-l)}else{var c=e.left-s,u=e.left+s+n;c<r.left?o.left=r.left-c:u>r.width&&(o.left=r.left+r.width-u)}return o},n.prototype.getTitle=function(){var t,e=this.$element,n=this.options;return t=e.attr("data-original-title")||("function"==typeof n.title?n.title.call(e[0]):n.title)},n.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},n.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},n.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},n.prototype.enable=function(){this.enabled=!0},n.prototype.disable=function(){this.enabled=!1},n.prototype.toggleEnabled=function(){this.enabled=!this.enabled},n.prototype.toggle=function(e){var n=this;e&&(n=t(e.currentTarget).data("bs."+this.type),n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n))),n.tip().hasClass("in")?n.leave(n):n.enter(n)},n.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var i=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=n,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this}}(jQuery),/* ========================================================================
 * Bootstrap: popover.js v3.2.0
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.popover"),s="object"==typeof e&&e;(o||"destroy"!=e)&&(o||i.data("bs.popover",o=new n(this,s)),"string"==typeof e&&o[e]())})}var n=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");n.VERSION="3.2.0",n.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),n.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),n.prototype.constructor=n,n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),n=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").empty()[this.options.html?"string"==typeof n?"html":"append":"text"](n),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},n.prototype.hasContent=function(){return this.getTitle()||this.getContent()},n.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},n.prototype.tip=function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip};var i=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=n,t.fn.popover.noConflict=function(){return t.fn.popover=i,this}}(jQuery),/* ========================================================================
 * Bootstrap: scrollspy.js v3.2.0
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(n,i){var o=t.proxy(this.process,this);this.$body=t("body"),this.$scrollElement=t(t(n).is("body")?window:n),this.options=t.extend({},e.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",o),this.refresh(),this.process()}function n(n){return this.each(function(){var i=t(this),o=i.data("bs.scrollspy"),s="object"==typeof n&&n;o||i.data("bs.scrollspy",o=new e(this,s)),"string"==typeof n&&o[n]()})}e.VERSION="3.2.0",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e="offset",n=0;t.isWindow(this.$scrollElement[0])||(e="position",n=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var i=this;this.$body.find(this.selector).map(function(){var i=t(this),o=i.data("target")||i.attr("href"),s=/^#./.test(o)&&t(o);return s&&s.length&&s.is(":visible")&&[[s[e]().top+n,o]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),i=this.options.offset+n-this.$scrollElement.height(),o=this.offsets,s=this.targets,r=this.activeTarget;if(this.scrollHeight!=n&&this.refresh(),e>=i)return r!=(t=s[s.length-1])&&this.activate(t);if(r&&e<=o[0])return r!=(t=s[0])&&this.activate(t);for(t=o.length;t--;)r!=s[t]&&e>=o[t]&&(!o[t+1]||e<=o[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,t(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var n=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',i=t(n).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")};var i=t.fn.scrollspy;t.fn.scrollspy=n,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);n.call(e,e.data())})})}(jQuery),/* ========================================================================
 * Bootstrap: tab.js v3.2.0
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.tab");o||i.data("bs.tab",o=new n(this)),"string"==typeof e&&o[e]()})}var n=function(e){this.element=t(e)};n.VERSION="3.2.0",n.prototype.show=function(){var e=this.element,n=e.closest("ul:not(.dropdown-menu)"),i=e.data("target");if(i||(i=e.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var o=n.find(".active:last a")[0],s=t.Event("show.bs.tab",{relatedTarget:o});if(e.trigger(s),!s.isDefaultPrevented()){var r=t(i);this.activate(e.closest("li"),n),this.activate(r,r.parent(),function(){e.trigger({type:"shown.bs.tab",relatedTarget:o})})}}},n.prototype.activate=function(e,n,i){function o(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),i&&i()}var s=n.find("> .active"),r=i&&t.support.transition&&s.hasClass("fade");r?s.one("bsTransitionEnd",o).emulateTransitionEnd(150):o(),s.removeClass("in")};var i=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=n,t.fn.tab.noConflict=function(){return t.fn.tab=i,this},t(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(n){n.preventDefault(),e.call(t(this),"show")})}(jQuery),/* ========================================================================
 * Bootstrap: affix.js v3.2.0
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.affix"),s="object"==typeof e&&e;o||i.data("bs.affix",o=new n(this,s)),"string"==typeof e&&o[e]()})}var n=function(e,i){this.options=t.extend({},n.DEFAULTS,i),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};n.VERSION="3.2.0",n.RESET="affix affix-top affix-bottom",n.DEFAULTS={offset:0,target:window},n.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(n.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},n.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},n.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=t(document).height(),i=this.$target.scrollTop(),o=this.$element.offset(),s=this.options.offset,r=s.top,a=s.bottom;"object"!=typeof s&&(a=r=s),"function"==typeof r&&(r=s.top(this.$element)),"function"==typeof a&&(a=s.bottom(this.$element));var l=null!=this.unpin&&i+this.unpin<=o.top?!1:null!=a&&o.top+this.$element.height()>=e-a?"bottom":null!=r&&r>=i?"top":!1;if(this.affixed!==l){null!=this.unpin&&this.$element.css("top","");var c="affix"+(l?"-"+l:""),u=t.Event(c+".bs.affix");this.$element.trigger(u),u.isDefaultPrevented()||(this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(n.RESET).addClass(c).trigger(t.Event(c.replace("affix","affixed"))),"bottom"==l&&this.$element.offset({top:e-this.$element.height()-a}))}}};var i=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=n,t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var n=t(this),i=n.data();i.offset=i.offset||{},i.offsetBottom&&(i.offset.bottom=i.offsetBottom),i.offsetTop&&(i.offset.top=i.offsetTop),e.call(n,i)})})}(jQuery);