module = function(){
	var settings = {activeName: null, resumeSectionActivated: null}
	
	var tabClicked = function(name){
		// hide what was active
		if(settings.activeName!=null){
			document.getElementById(settings.activeName+'-div').className='tab-div';
			document.getElementById(settings.activeName+'-tab').className='';
		}
		
		//activate new tab
		settings.activeName = name;
	    document.getElementById(name+"-div").className='tab-div-active';
	    document.getElementById(name+"-tab").className='active';
	};
	var resumeSectionActivate = function(name){
		// hide what was active
		if(settings.resumeSectionActivated!=null){
			document.getElementById(settings.resumeSectionActivated+'-tab').className='';
			document.getElementById(settings.resumeSectionActivated).className='';
		}
		//activate new tab
		settings.resumeSectionActivated = name;
	    document.getElementById(name).className='active';
	    document.getElementById(name+"-tab").className='active';
	};	
	var init = function(){
		tabClicked('handle');
		resumeSectionActivate("resume-contact");
	}
	return{init:init, tabClicked:tabClicked, resumeSectionActivate:resumeSectionActivate}
}();
module.init();
var tabClicked = module.tabClicked;
var resumeSectionActivate = module.resumeSectionActivate;

