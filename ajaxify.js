/**
 * ajaxify.js
 *
 * Ajaxify Plugin
 *
 * Author: Arvind Gupta
 *
 * Copyright © 2013 Arvind Gupta <arvgta@gmail.com>
 * Released under the MIT License <http: www.opensource.org="" licenses="" mit-license.php="">
 *
 */
 
function pP(dna) { var bp = '(function ($) { var Name = function(options) { Private this.a = function(args) {aBody;}; }; $.fnn = function(arg0) {var r; var $this = $(this); $.fnn.o = $.fnn.o ? $.fnn.o : new Name(options); r = $.fnn.o.a(args); return $this;}; })(jQuery);',
    dnas = dna.split(' | '), name = dnas[0], Name = name.substr(0, 1).toUpperCase() + name.substr(1, name.length - 1), Settings, Private, Mode, Mode2, Args, Args0, ABody;
	Private = 'var d = [];';
    for(var i = 1; i < dnas.length; i++) {
	    var dnap = dnas[i];
		if(dnap.substr(0, 1) == '{') {
		    dnap = dnap.substr(2, dnap.length - 3);
			Settings = 'settings = $.extend({' + dnap + '}, options);';
			Settings += '\n';
			var sa = dnap.indexOf(', ') + 1 ? dnap.split(', ') : [dnap]; 
			for(var j = 0; j < sa.length; j++) { 
			    var si = sa[j];
				var sn = si.substr(1, si.lastIndexOf('"') - 1); 
				Settings +=  (sn + ' = settings["' + sn + '"];\n');
			}
		}
		
		else if(dnap.substr(0, 1) == '(') {
		    var del = dnap.indexOf(')'); 
		    Args = dnap.substr(1, del - 1);
			Mode = Args.indexOf('$this') + 1;
			Args0 = Args.replace('$this, ', '');
			if(Settings) Args0 += ', options';	
            ABody = dnap.substr(del + 2, dnap.length - del - 2);
			Mode2 = ABody.indexOf('return') + 1;
            if(ABody.indexOf(' : ') + 1) { 
                 var ABodies = ABody.split(' : ');
                 var Arg0 = Args0.indexOf(', ') + 1 ? Args0.split(', ')[0] : Args0;
			     ABody = '';
                 for(var i = 0; i < ABodies.length - 1; i++) { var tBody = ABodies[i]; 
                     var tBody1 = ABodies[i + 1]; 
                     var tNewBody = tBody1.substr(0, tBody1.lastIndexOf(';'));
                     var sc = tBody.lastIndexOf(';');
                     tBody = sc + 1 ? tBody.substr(sc + 2, tBody.length - sc - 2) : tBody;
                     if(tBody.length == 1) {
					     ABody += 'if('+Arg0+' ==="'+tBody+'") {...}\n';
					 }
					 else { 
					     ABody += 'if(typeof '+Arg0+' ==="'+tBody+'") {...}\n';
					 }
                     tNewBody = tNewBody.indexOf('this') + 1 ? ('$this.each(function(i) { ' + tNewBody + ';})') : tNewBody;
                     ABody = ABody.replace('...', tNewBody);
                 }
            } else {
                 if(!Mode2) ABody = ABody.indexOf('this') + 1 ? ('$this.each(function(i) { ' + ABody + ';})') : ABody;
            }                 
	    }
		
		else { 
		    Private += ' var ' + dnap; 
	    }
		
    }
	
	if(Settings) Private += (', ' + Settings); else bp = bp.replace(/options/g, '');
	if(Mode) { 
	    bp = bp.replace(/fnn/g, 'fn.'+name);
        if(Mode2) bp = bp.replace(' return $this', ' return r');
    } 		
	else { 
	    bp = bp.replace(/fnn/g, name).replace('var $this = $(this); ', '').replace(' return $this', ' return r');
    }
	bp = bp.replace(/name/g, name).replace(/Name/g, Name).replace('Private', Private).replace(/args/g, Args).replace('aBody', ABody).replace('arg0', Args0);
   	
    //alert(bp);
	try { eval(bp); } catch(e) { alert(e); }
} 
 
/*!
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license.
 * Copyright 2007, 2013 Brian Cherne
 */

(function(e){e.fn.hoverIntent=function(t,n,r){var i={interval:100,sensitivity:7,timeout:0};if(typeof t==="object"){i=e.extend(i,t)}else if(e.isFunction(n)){i=e.extend(i,{over:t,out:n,selector:r})}else{i=e.extend(i,{over:t,out:t,selector:n})}var s,o,u,a;var f=function(e){s=e.pageX;o=e.pageY};var l=function(t,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.abs(u-s)+Math.abs(a-o)<i.sensitivity){e(n).off("mousemove.hoverIntent",f);n.hoverIntent_s=1;return i.over.apply(n,[t])}else{u=s;a=o;n.hoverIntent_t=setTimeout(function(){l(t,n)},i.interval)}};var c=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t);t.hoverIntent_s=0;return i.out.apply(t,[e])};var h=function(t){var n=jQuery.extend({},t);var r=this;if(r.hoverIntent_t){r.hoverIntent_t=clearTimeout(r.hoverIntent_t)}if(t.type=="mouseenter"){u=n.pageX;a=n.pageY;e(r).on("mousemove.hoverIntent",f);if(r.hoverIntent_s!=1){r.hoverIntent_t=setTimeout(function(){l(n,r)},i.interval)}}else{e(r).off("mousemove.hoverIntent",f);if(r.hoverIntent_s==1){r.hoverIntent_t=setTimeout(function(){c(n,r)},i.timeout)}}};return this.on({"mouseenter.hoverIntent":h,"mouseleave.hoverIntent":h},i.selector)}})(jQuery); 

pP('all | ($this, t, fn) t = t.split("*").join("$(this)"); t += ";"; eval(t)');
pP('log | con = window.console | { "verbosity": 0 } | (m, v) if(v >= 0) d = v; verbosity > d && con && con.log(m)');
pP('isHtml | (x) d=x.getResponseHeader("Content-Type"); return d && (d.indexOf("text/html") + 1 || d.indexOf("text/xml") + 1)');

var docType = /<\!DOCTYPE[^>]*>/i;
var tagso = /<(html|head|body|title|meta)([\s\>])/gi;
var tagsc = /<\/(html|head|body|title|meta)\>/gi;
var div12 =  '<div class="document-$1"$2';
var scro = /<(script|link)([\s\>])/gi;
var scrc = /<\/(script|link)\>/gi;
pP('replD | (h) return String(h).replace(docType, "").replace(tagso, div12).replace(tagsc,"</div>")');
pP('replS | (h) return String(h).replace(scro, div12).replace(scrc,"</div>")');
pP('_parseHTML | (h, m) d = m?$.replD(h):$.replS(h); d = $.trim(d); return $(m?$.parseHTML(d, document, true):$.parseHTML(d))');
pP('pages | (h) string : for(var i=0; i<d.length; i++) if(d[i][0]==h) return d[i][1]; return false; object : d.push(h);');
pP('page1 | (o, h) ? : return d; ! : d = h;');
pP('cache1 | (o, h) ? : return d; ! : d = h;');
pP('lDivs | ($t) $t.all("fn(*)", function(s) { s.html($.cache1("?").find("#" + s.attr("id")).html()); }); $t.all("fn(*)", function(s) { $.page1("?").find("#" + s.attr("id")).remove(); });');
pP('lPage2 | (p) $.page1("!", $._parseHTML($.cache1("?").html(), false)); p && p()');
pP('lAjax | (hin, p, mode, post) var xhr = $.ajax({url: hin, type: post?"POST":"GET", data:post?post.data:null, success: function(h) { ' +
'if(!h || !$.isHtml(xhr)) { if(!mode) location = hin; } $.cache1("!",  $._parseHTML(h, true)); $.cache1("?").find(".ignore").remove(); $.pages([hin, $.cache1("?")]); $.lPage2(p); } })');
pP('lPage | (hin, p, mode, post) if(hin.indexOf("#")+1) hin=hin.split("#")[0]; $.cache1("!", post?null:$.pages(hin)); if(!$.cache1("?")) { $.lAjax(hin, p, mode, post); return; } $.lPage2(p); return;');
pP('getPage | ($this, t, p, post) if(!t) return $.page1("?"); if(t.indexOf("/") != -1) { $.lPage(t, p, null, post); return; } if(t == "+") { $.lPage(p, null, true); return; }' +
'if(t.charAt(0) == "#") { $.cache1("?").find(t).html(p); t = "-"; } if(t == "-") { $.lDivs($this); return $this; } return $.page1("?").find(".document-" + t); ');

// The addScript plugin
(function ($) {

// The Script class
var Script = function(options) { var //Private
    
    insert = function($Script, PK) {
        if(PK == 'href') {
            $('head').append('<link rel="stylesheet" type="text/css" ' + PK + '="' + $Script + '" />');
        } else {
            $('head').append('<script type="text/javascript" ' + PK + '="' + $Script + '" />');
        }
        $.log(PK + ' + : ' + $Script);
    },
    
    remove = function($Script, PK) {
        if(PK == 'href' ) $("link["+ PK + "*='" + $Script + "']").remove();
        else $("script["+ PK + "*='" + $Script + "']").remove();
        $.log(PK + ' - : ' + $Script);
    },
    
    find = function($Script, $Scripts) { //Find and flag common if found
        if(!$Script) return false;
        for(var i = 0; i < $Scripts.length; i++) { 
            if($Scripts[i][0] == $Script) {
                $Scripts[i][1] = 1;  //Found -> flag as common
                return true;
            }
        }
        
        return false;
    };
    
    //Protected
    this.a = function($Script, operator, PK, $Scripts) { 
        switch(operator) {
            case 'f' : return find($Script, $Scripts);
            case 'i' : return insert($Script, PK);
            case 'r' : return remove($Script, PK);
            default : $.log('Bad operator in Script');
        }
    }; //end "a" function
    
}; //end Script class

// Register jQuery function
$.addScript = function(newScript, operator, PK, Scripts) {
    $.addScript.o = $.addScript.o ? $.addScript.o : new Script();
    return $.addScript.o.a(newScript, operator, PK, Scripts);
};

})(jQuery); //end addScript plugin


// The addScripts plugin
(function ($) {

// The Scripts class
var Scripts = function(options) { var //Private
    //Build up two two dimensional arrays, old and new - [PK, flag]
    //Flag: 0 = new, 1 = common, 2 = old
    $scriptsO = [], PK, pass = 0,
    
    settings = $.extend({
        'deltas'    : true,
    }, options);
    
    //Protected
    this.a = function($newScripts, PK, same) { $.log("Entering Scripts a()");
        if(!settings['deltas']) {  //No deltas -> just add all scripts
            $newScripts.each(function(){
                $.addScript($(this)[0], 'i', PK);
            });
            
            return; //Quick return - no tampering of private variables
        }
        
        if(pass) $newScripts.each(function(){ 
            if($(this).attr('data-class') == 'always') { $.log('Class always detected!');
                $.addScript($(this).attr(PK), 'i', PK);
                $(this).remove();
            }
        });
        
       
        
        if(PK=='src') {  pass++; return; }
        
        if(same) { //Add all old scripts and return quickly 
            for(var i = 0; i < $scriptsN.length; i++) { //Old Array is master
                if($scriptsN[i][1] == 0) { $.addScript($scriptsN[i][0], 'i', PK); $.log('Adding old script : ' +  $scriptsN[i][0]); }
            }
            
            return;
        }
        
        //Delta loading start - delta was true
        $scriptsN = [];
        
        //Initialise new Array freshly
        $newScripts.each(function(){
            $scriptsN.push([$(this).attr(PK), 0]); //assume new
            if(!pass) $scriptsO.push([$(this).attr(PK), 0]); //only on first pass - copy to old Array
        });
        
        pass++;
        
        //A priori we're expecting just "old new" and "old common" (0/1)
        
        // Pass 1 - find common
        for(var i = 0; i < $scriptsO.length; i++) { //Old Array is master
            $scriptsO[i][1] = 2; // State: default -> old
            // Try to find in new Array -> if found -> common -> State = 1 IN BOTH arrays -> do nothing
            if($.addScript($scriptsO[i][0], 'f', PK, $scriptsN)) $scriptsO[i][1] = 1;
        }
        
        // Pass 2 - free "Old old"
        for(var i = 0; i < $scriptsO.length; i++) { //Old Array is master
            if($scriptsO[i][1] == 2) { 
                if($scriptsO[i][0]) $.addScript($scriptsO[i][0], 'r', PK);
                $scriptsO.splice(i, 1); //...and variable
            }
        }
        
        // Pass 3 - Genuinely new? -> reiterate new Array, creating where State still is 0
        for(var i = 0; i < $scriptsN.length; i++) { //New Array is master
            if($scriptsN[i][1] == 0) $.addScript($scriptsN[i][0], 'i', PK);
        }
                
        // Pass 4 - New becomes old
        $scriptsO = $scriptsN.slice();
            
    }; //end "a" function
    
}; //end Scripts class

// Register jQuery function
$.fn.addScripts = function(pk, same, options) {
    $this = $(this);
    if(pk == 'href') { 
        $.fn.addScripts.h = $this.length ? $.fn.addScripts.h : new Scripts(options);
        if($this.length) $.fn.addScripts.h.a($this, pk, same);
    } else {
        $.fn.addScripts.s = $this.length ? $.fn.addScripts.s : new Scripts(options);
        if($this.length) $.fn.addScripts.s.a($this, pk, same);
    }
    return $this;
};

})(jQuery); //end addScripts plugin

// The Scripts plugin
(function ($) {

// The Scripts class
var Scripts = function(options) { var //Private
    delta, $script, $scripts = {}, $scriptsO = {}, pass = 0,
    
    settings = $.extend({
        'deltas'    : true
    }, options),
    
    det = function(same) { if(same) return; $.log('Entering det');
        var links = $().getPage('link'),
            jss = $().getPage('script');
            
        $scripts.c = links.filter(function() { 
                return $(this).attr('rel').indexOf('stylesheet') != -1; });
        $scripts.s = jss.filter(function() { 
                return $(this).attr('src'); });
        $scripts.t = jss.filter(function() { 
                return !($(this).attr('src')); });
    }, 
    
    _inline = function(txt) { var strs = settings['inline-hints'], r = false;
        strs = strs.split(', ');
        for(var i=0; i<strs.length; i++) if(txt.indexOf(strs[i]) + 1) r = true;
        return r;
    },
    
    addtxts = function() { $.log('Entering addtxts');
        $scripts.t.each(function(){ var txt = $(this).html();
            if(txt.indexOf(').ajaxify(')==-1 //Recognise own inline script, as we don't want a recursion :-)
                && (settings['inline'] || $(this).hasClass('ajaxy') || _inline(txt))) { 
                 try {
                    $.globalEval(txt);
                } catch(e) {
                    alert(e);
                }
            }
            
            return true;
        });
    },
    
    add = function(same) { $.log('Entering scripts.add()');
        $scripts.c.addScripts('href', same);
        $scripts.s.addScripts('src', same);
        addtxts();
    };
        
    //Protected
    this.a = function(same) {
        det(same);
        if(pass++) add(same); else { $scripts.c.addScripts('href'); $scripts.s.addScripts('src'); }   
        $scriptsO.t = null;
    };
    
    delta = settings['deltas'];
    $().addScripts('href', null, settings);
    $().addScripts('src', null, settings); 
    
    
}; //end Scripts class

// Register jQuery function
$.scripts = function(options, same) {
    $.scripts.o = $.scripts.o ? $.scripts.o : new Scripts(options);
    $.scripts.o.a(same);
};

})(jQuery); //end Scripts plugin

// The Ajaxify plugin
(function ($) { var

// The Ajaxify class
Ajaxify = function($this, options) { var //Private
    settings = $.extend({
        selector: "a:not(.no-ajaxy)",
        requestKey: "pronto",
        requestDelay: 0,
        verbosity: 0,
        deltas: true,
        inline: false,
        cb: null,
        on: true
    }, options),  

    //Helper functions
   
    cPage = function(e) { //Handle scripts on page
        $.scripts(settings, e && e.same); 
        if(settings['cb']) settings['cb']();
    },
    
    initPage = function(e){
        $.log('Statechange: ');
        var href = location.href;
        $.log(href);
        cPage(e);
    };
    
    // Run constructor
    $(function () { //on DOMready
       var supported = window.history && window.history.pushState && window.history.replaceState;
       $.log('Entering ajaxify...', 1, settings);
       if(!supported) { $.log('HTML5 History API not supported properly - exiting'); return; }
       if(!$.parseHTML) { $.log('Probably jQuery version too low - 1.8+ is required - exiting'); return; }
       if(!settings['on']) { $.log('Plugin set off manually - exiting'); return; }
       
       $this.pronto(settings);
       $(window).on("pronto.render", initPage);
	
       $().getPage(location.href, cPage);
    });
	
}; //end Ajaxify class

// Register jQuery function
$.fn.ajaxify = function(options) { 
    $this = $(this);
    new Ajaxify($this, options);
	return $this;
};
    
})(jQuery); //end Ajaxify plugin


/*
* Pronto Plugin
* @author Ben Plum, Arvind Gupta
* @version 0.6.3
*
* Copyright © 2013 Ben Plum: mr@benplum.com, Arvind Gupta: arvgta@gmail.com
* Released under the MIT License
*/
 
if (jQuery) (function($) {

var $this, $window = $(window),
currentURL = '',
requestTimer = null,
post = null;

// Default Options
var options = {
    selector: "a",
    requestKey: "pronto",
    requestDelay: 0,
    forms: true,
    turbo: true,
    scrollTop: false
};

// Private Methods

// Init
function _init(opts) { 
     $.extend(options, opts || {});
     options.$body = $("body");
     options.$container = $(options.container);

     // Capture current url & state
     currentURL = window.location.href;

     // Set initial state
     _saveState();

     // Bind state events
     $window.on("popstate", _onPop);

     if(options.turbo) $(options.selector).hoverIntent( _prefetch );
     options.$body.on("click.pronto", options.selector, _click);
     ajaxify_forms();
}

function _prefetch(e) {
     var link = e.currentTarget;
     if(window.location.protocol !== link.protocol || window.location.host !== link.host) return;
     $().getPage('+', link.href);
}

function b(m, n) {
    if (m.indexOf("?") > 0) {
        m = m.substring(0, m.indexOf("?"))
    }
    
    return m + "?" + n
}

function k(m) {
    var o = m.serialize();
    var n;
        n = $("input[name][type=submit]", m);

    if (n.length == 0) { $.log('Nothing found in function k() !');
        return o
    }
    
    var p = n.attr("name") + "=" + n.val();
    if (o.length > 0) {
        o += "&" + p
    } else {
        o = p
    }
    
    return o
}

function ajaxify_forms(s) { 
if(!options.forms) return;

// capture submit
$('form').submit(function(q) {

    var f = $(q.target);
    if (!f.is("form")) {
        f = f.filter("input[type=submit]").parents("form:first");
        if (f.length == 0) {
            return true
        }
    }
    
    var p = k(f);
    var q = "get", m = f.attr("method");
    if (m.length > 0 && m.toLowerCase() == "post") q = "post";
    
    var h, a = f.attr("action");
    if ( a != null && a.length > 0) h = a;
    else h = currentURL;
    
    if (q == "get") h = b(h, p);
    else { post = {};  post.data = p; }
    
    $.log('Action href : ' + h);
    $window.trigger("pronto.submit", h);
    _request(h);
     
     // prevent submitting again
     return false;
});
}

// Handle link clicks
function _click(e) {
     var link = e.currentTarget; post = null;

     // Ignore everything but normal click
     if ( (e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
     || (window.location.protocol !== link.protocol || window.location.host !== link.host)
     ) {
          return;
     }
     
     // Update state on hash change
     if (link.hash && link.href.replace(link.hash, '') === window.location.href.replace(location.hash, '') || link.href === window.location.href + '#') {
        _saveState();
        return;
     }

     e.preventDefault();
     e.stopPropagation();

     if (currentURL == link.href) {
         _saveState();
     } else {
         _request(link.href);
     } 
}

// Request new url
function _request(url) { 
     // Fire request event
     $window.trigger("pronto.request");

     var req2 = function(){ 	
         _render(url, 0, true);
     };

     $().getPage(url, req2, post);
}

// Handle back/forward navigation
function _onPop(e) {
     var data = e.originalEvent.state;

     // Check if data exists
     if (data !== null && data.url !== currentURL) {
         // Fire request event
         $window.trigger("pronto.request");  
         var req3 = function(){ 	
             _render(data.url, data.scroll, false);
         };

         $().getPage(data.url, req3);
     }
}

function _render(url, scrollTop, doPush) {      
     if (requestTimer !== null) {
          clearTimeout(requestTimer);
          requestTimer = null;
     }
     
     requestTimer = setTimeout(function() {
       _doRender(url, scrollTop, doPush)
     }, options.requestDelay);
}

function _doPush(url, doPush) {
     // Update current url
     currentURL = url;

     // Push new states to the stack on new url
     if (doPush) {
          history.pushState(
               (options.scrollTop ? {
                    url: currentURL,
                    scroll: 0
          } : { url: currentURL}
        ), "state-"+currentURL, currentURL);
     } else {
     
     // Set state if moving back/forward
     _saveState();
     }
}
   
// Render HTML
function _doRender(url, scrollTop, doPush) { 
     // Fire load event
     $window.trigger("pronto.load");

     // Trigger analytics page view
     _gaCaptureView(url);

     // Update current state
     _saveState();

     // Update title
     $('title').html($().getPage('title').html());

     // Update DOM
     $this.getPage('-');
     ajaxify_forms();     
     
     // Scroll to hash if given
     if(url.indexOf('#') + 1) { 
         $('html, body').animate({
            scrollTop: $( '#' + url.split('#')[1] ).offset().top
         }, 500);
     }

     _doPush(url, doPush);

     //$.log('Trigger pronto render : ' + (post ? 1 : 0));
     
     // Fire render event
     var event = jQuery.Event("pronto.render");
     event.same = post ? true : false;
     $window.trigger(event);

     //Set Scroll position
     if(options.scrollTop) $window.scrollTop(scrollTop);
}

// Save current state
function _saveState() {
     // Update state
     if(options.scrollTop) {
          history.replaceState({
          url: currentURL,
          scroll: $window.scrollTop()
     }, "state-"+currentURL, currentURL);
     } else {
          history.replaceState({
               url: currentURL
          }, "state-"+currentURL, currentURL);
     }
}

// Google Analytics support
function _gaCaptureView(url) {
     if (typeof _gaq === "undefined") _gaq = [];
     _gaq.push(['_trackPageview'], url);
}

// Define Plugin
$.fn.pronto = function(opts) {
     $this = $(this);
     _init(opts);
     return $this;
};
})(jQuery);