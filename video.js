var filter = document.getElementById("filter");
var filters = document.querySelectorAll(".filters");
var upload = document.querySelectorAll(".upload");
var uploads = document.querySelectorAll(".uploads");
var noti = document.querySelectorAll(".noti");
var notis = document.querySelectorAll(".notis");



filter.addEventListener("click",function(){
	popup(filters);
});

upload.addEventListener("click",function(){
	popup(uploads);
});

noti.addEventListener("click",function(){
	popup(notis);
});

function popup(elem){
	elem.classList.toggle("popup");
}