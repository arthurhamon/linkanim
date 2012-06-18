/* A jQuery plugin tooltip
 * Name		: linkanim
 * Author	: Arthur Hamon
 * Version	: 1.0
 * License	: Dual licensed under the MIT or GPL Version 2 licenses
 */
(function($){
	
	//Attache la fonction linkanim à jquery
	$.fn.linkanim = function(options){
		
		//Recuperation de la couleur de l'utilisateur
		var uti_color = $('a').css('color');
		var uti_bgColor = $('a').css('background-color');
		
		//Paramètres par default de la function		
		var settings = $.extend({	
			baseColor			: uti_color,		
			color				: uti_color,
			backgroundColor		: uti_bgColor,
			duration			: "400ms"
		}, options );
		
		//code du plug
		
		/*
		 * Ajout de la balise span dans chaque lien avec la class linkanim
		 */
		var liens = $('a.linkanim');
		for( var i=0; i<liens.length; i++){
			var lien = liens[i];
			var text = lien.innerHTML;
			lien.innerHTML = '<span>'+text+'</span>';
		};		
		
		/*
		 * Style CSS de base
		 */
		$('.linkanim').css({
			'display'						: 'inline-block',
			'overflow'						: 'hidden',
			'vertical-align'				: 'top'
		});
		
		$('.linkanim span').css({
			'display'						: 'block',
			'padding'						: '0 2px',
			"-webkit-transition"			: 'all '+settings.duration+' ease',
		    "-moz-transition"				: 'all '+settings.duration+' ease',
		    "-o-transition"					: 'all '+settings.duration+' ease',
		    "-ms-transition"				: 'all '+settings.duration+' ease', 
		    
		    "-webkit-transform-style"		: 'preserve-3d',
		    "-moz-transform-style"			: 'preserve-3d',
		    "-o-transform-style"			: 'preserve-3d',
		    "-ms-transform-style"			: 'preserve-3d'
		});
		
		/*
		 * Fonction des effets
		 */
		this.laVerti = function(dom){
			$(dom).css({
				'background-color'		: settings.backgroundColor,
				'color'					: settings.color,
				"-webkit-transform"		: 'translate3d( 0px, 0px, -50px ) rotateX( 180deg )',
				"-moz-transform"		: 'translate3d( 0px, 0px, -50px ) rotateX( 180deg )',
				"-o-transform"			: 'translate3d( 0px, 0px, -50px ) rotateX( 180deg )',
				"-ms-transform"			: 'translate3d( 0px, 0px, -50px ) rotateX( 180deg )'
				
			});
		};
		
		this.laHori = function(dom){
			$(dom).css({
				'background-color'		: settings.backgroundColor,
				'color'					: settings.color,
				"-webkit-transform"		: 'translate3d( 0px, 0px, -50px ) rotateY( 180deg )',
				"-moz-transform"		: 'translate3d( 0px, 0px, -50px ) rotateY( 180deg )',
				"-o-transform"			: 'translate3d( 0px, 0px, -50px ) rotateY( 180deg )',
				"-ms-transform"			: 'translate3d( 0px, 0px, -50px ) rotateY( 180deg )'
				
			});
		};
		
		this.laHeli = function(dom){
			$(dom).css({
				'background-color'		: settings.backgroundColor,
				'color'					: settings.color,
				"-webkit-transform"		: 'translate3d( 0px, 0px, -50px ) rotateX( 180deg ) rotateY( 180deg )',
				"-moz-transform"		: 'translate3d( 0px, 0px, -50px ) rotateX( 180deg ) rotateY( 180deg )',
				"-o-transform"			: 'translate3d( 0px, 0px, -50px ) rotateX( 180deg ) rotateY( 180deg )',
				"-ms-transform"			: 'translate3d( 0px, 0px, -50px ) rotateX( 180deg ) rotateY( 180deg )'
				
			});
		};
		
		this.resetCss = function(dom){
			$(dom).css({
				'background-color'		: uti_bgColor,
				'color'					: settings.baseColor,
				"-webkit-transform"		: 'translate3d( 0px, 0px, 0px ) rotateX( 0deg ) rotateY( 0deg )',
				"-moz-transform"		: 'translate3d( 0px, 0px, 0px ) rotateX( 0deg ) rotateY( 0deg )',
				"-o-transform"			: 'translate3d( 0px, 0px, 0px ) rotateX( 0deg ) rotateY( 0deg )',
				"-ms-transform"			: 'translate3d( 0px, 0px, 0px ) rotateX( 0deg ) rotateY( 0deg )'
			});
		};
		
		/*
		 * Hover des "a"
		 */		
		var self = this; //Recupere l'élèment sur lequel on est
		$('.la-verti span').on('mouseover',
			function(){				
				self.laVerti(this);
			}).on('mouseout',
			function(){
				self.resetCss(this);
			}
		);
		
		$('.la-hori span').on('mouseover',
			function(){
				self.laHori(this);
			}).on('mouseout',
			function(){
				self.resetCss(this);
			}
		);
		
		$('.la-heli span').on('mouseover',
			function(){
				self.laHeli(this);
			}).on('mouseout',
			function(){
				self.resetCss(this);
			}
		);
		
	}
})( jQuery );