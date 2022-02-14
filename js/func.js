window.onload= function(){
	let navBtn = document.getElementById("jsMenu");
	let closeBtn = document.getElementById("closeBtn");
	
	navBtn.onclick = function(evt){
		document.getElementById("jsNav").classList.remove("nav_hidden");
		document.getElementById("jsNav").classList.add("nav_visible");
	}
	
	closeBtn.onclick = function(){
		document.getElementById("jsNav").classList.remove("nav_visible");
		document.getElementById("jsNav").classList.add("nav_hidden");
	}
}