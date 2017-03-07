$(".done").click(function(){
	var dataObj = [];
	var inputs = $("input").toArray(),i,cls,val;
	for(i=0;i<inputs.length;i++){
		cls = inputs[i].className;
		val = inputs[i].value;
		dataObj.push(val);
	}
	chrome.storage.local.set({"data":dataObj});
	$("#succes").fadeIn();
})