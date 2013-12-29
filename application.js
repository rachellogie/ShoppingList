$(document).ready(function(){

	var numItems = 3;

	$("form").submit(function(event){
		event.preventDefault();
		var item = document.getElementById("newItem").value;
		reset();
		if(checkItemValid(item)){
			if(numItems < 10){
				setMessage("Click on an item to cross it off.");
				console.log(item);
				/*$("ul").append('<li><form><input type="checkbox" name="box" class="checkbox">' 
					+ item + '</form></li>');*/
				$("ul").append('<li><span>' + item + '</span></li>');
				numItems++;
			} else {
				setMessage("You glutton! Only ten items allowed. Click an item to cross it off.");
			}
		}
	});

	//when you click on an item, it adds or deletes it from the checked class
	$("ul").on("click","span", function(event){
		event.preventDefault();
		$(this).toggleClass("checked");
	});

	//delete crossed-off items button
	$("form").on("click","#deleteCrossed", function(event){
		event.preventDefault();
		var itemsToDelete = $("li span.checked").length;
		numItems = numItems - itemsToDelete;
		console.log("numItems is now: " + numItems);
		$("li span.checked").remove();
		console.log("li removed");
		setMessage("Click on an item to cross it off.");

	});

	//clear everything button
	$("form").on("click","#deleteAll", function(event){
		event.preventDefault();
		$("li").remove();
		console.log("li removed");
		numItems = 0;
		setMessage("Click on an item to cross it off.");
	});


	function setMessage(message){
		$("p").html(message);
	}

	function reset(){
		$(".inputform")[0].reset();
	}

	function checkItemValid(item){
		if($.trim(item) == ""){
			return false;
		} else {
			return true;
		}
	}









});