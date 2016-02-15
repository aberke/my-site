


var module = function(){

	var selectedTab = null;
	var selectedContent = null;

	var selectContent = function(eltID) {
		if (selectedContent != null) {
			selectedContent.className = "";
		}
		var content = document.getElementById(eltID);
		content.className = "selected";
		selectedContent = content;
	}
	
	var selectTab = function(element){

		// unselect old tab
		if (selectedTab != null) {
			selectedTab.className = "";
		}
		
		// select new tab
		element.className = "selected";
		selectedTab = element;
	};	
	var init = function(){
		selectTab(document.getElementById('handle-tab'));
		selectContent('handle-div');
	}
	return{
		init:init,
		selectTab: selectTab,
		selectContent: selectContent,
	};
}();
var selectTab = module.selectTab;
var selectContent = module.selectContent;

window.addEventListener('load', function() {
    module.init();
}, false);

