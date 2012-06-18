<h1>linkanim.js</h1>

A link animation tool for animation effect on your web site.
Note that this requires a browser with support for CSS 3D transforms. If CSS 3D is not supported, the presentation will degrade to less exciting 2D transitions.
This is a jQuery plugin so you need to import jQuery on your page.

Want to see how it looks in action ? Check out the <a href="http://arthurhamon.com/linkanim">demo page</a>

<h2>Getting started</h2>
<h3>Markup</h3>

You have to add the <code>linkanim</code> class on all the <code>&lt;a&gt;</code> where you want the effect.

You can choose between three different animation.
 * Horizontal rotation, use the <code>la-hori</code> class on your <code>&lt;a&gt;</code> balise.
 * Vertical rotation, use the <code>la-verti</code> class on your <code>&lt;a&gt;</code> balise.
 * Helix rotation, use the <code>la-heli</code> class on your <code>&lt;a&gt;</code> balise.

<h3>Configuration</h3>

Include this in your html.
<pre><code>&lt;script src="js/linkanim.js"&gt;&lt;/script&gt;</code></pre>

If you want you can change the color, the background-color and the time transition. Watch the example.
<pre><code>
	//Linkanim options
	$(document).ready(function(){
        		        
        $('a').linkanim({
       		baseColor		:"#198DE5", // Add your 'a' style color (just if you haven't the good color after effect)
        	color			:"#ffffff", // 'a' Color after the transformation
        	backgroundColor	:"#198DE5", // 'a' background color after the transformation
        	duration		: "1s"      // duration of the animation
        });		        
	});
</code></pre>

<h3>Exemple</h3>

<pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
	&lt;head&gt;
		&lt;meta http-equiv="Content-Type" content="text/html" charset="UTF-8"&gt;
		&lt;meta name="author" content="Arthur Hamon"&gt;
		
		&lt;title&gt;LinkAnim&lt;/title&gt;
		
		&lt;link rel="stylesheet" href="style.css" /&gt;
		
		&lt;script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"&gt;&lt;/script&gt;
		&lt;script type="text/javascript" src="linkanim.js"&gt;&lt;/script&gt;		
		
		&lt;script&gt;
			
			//Linkanim options
			$(document).ready(function(){
		        		        
		        $('a').linkanim({
		        	color			:"#ffffff",
		        	backgroundColor	:"#198DE5",
		        	duration		: "1s"
		        });		        
			});
			
		&lt;/script&gt;
	&lt;/head&gt;
	&lt;body&gt;
	
		&lt;h1&gt;
		    &lt;a class="linkanim la-verti" href="http://slipsum.com/">Samuel L Ipsum&lt;/a&gt;
		&lt;/h1&gt;
		&lt;p&gt;
			Do you see any &lt;a class="linkanim la-heli" href="#"&gt;Teletubbies&lt;/a&gt;
			in here? Do you see a slender &lt;a class="linkanim la-hori" href="#"&gt;plastic&lt;/a&gt;
			tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a 
			blank expression on his face sitting outside on a 
			&lt;a class="linkanim la-veri" href="#"&gt;mechanical helicopter&lt;/a&gt;
			that shakes when you put &lt;a class="linkanim la-verti" href="#"&gt;quarters&lt;/a&gt; in it? No? Well, that's what you see at a toy store. And you 
			must think you're in a toy store, because you're here shopping for an infant named Jeb.
		&lt;/p&gt;
	&lt;/body&gt;
&lt;/html&gt;
</code>
</pre>
