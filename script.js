// // chrome.runtime.sendMessage(document.getElementsByTagName('title')[0].innerText); //sending message
// $("input:password").attr("type","text");
// console.log(localStorage["pass"]);
// $("input:submit").click(function(){
// 	// localStorage["mysetting"] += " "+$("input:password").val();
// 	// console.log(localStorage["mysetting"]);
// 	if(!($("input:password").val())){
// 		localStorage["pass"] += " "+$("input:password").val();
// 		console.log(localStorage["pass"])
// 	}
// })
// localStorage["user_id"] = "15MF10030";
// localStorage["password"] = "aB1@414798";
// localStorage["ans1"] = "swift";
// localStorage["ans2"] = "hondadio";
// localStorage["ans3"] = "pollocks";
// localStorage["ques1"] = "My car";
// localStorage["ques2"] = "My vehicle";
// localStorage["ques3"] = "My highschool";

$(document).ready(function(){
	chrome.storage.local.get('data',function(data){
		// var username=data[0];
		$("#user_id").val(data.data[0]);
		$("#password").val(data.data[1]);
		$("#user_id").focus();
		$("#user_id").blur();
		setTimeout(function(){
			if(data.data[2] == $("#question").html()){
				$("#answer").val(data.data[3]);
				$("input:submit").trigger("click");
			}
			if(data.data[4] == $("#question").html()){
				$("#answer").val(data.data[5]);
				$("input:submit").trigger("click");
			}
			if(data.data[6] == $("#question").html()){
				$("#answer").val(data.data[7]);
				$("input:submit").trigger("click");
			}
		},1000);
		// alert(data[0]);
		// console.log(data);
	});
// ;	console.log("hey");
// 	$("#user_id").val(localStorage["user_id"]);
// 	$("#password").val(localStorage["password"]);
// 	$("#user_id").focus();
// 	// $(".well").trigger("click");
// 	$("#user_id").blur();
// 	setTimeout(function(){

// 		for(i=1;i<=3;i++){
// 			console.log($("#question").html());
// 			if($("#question").html() == localStorage["ques"+i]){
// 				$("#answer").val(localStorage["ans"+i]);
// 				console.log("done");
// 				$("input:submit").trigger("click");
// 				break;
// 			}
// 			console.log("trying")
// 		}
// 	},200);
});