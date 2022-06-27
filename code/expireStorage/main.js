// Just a file to make index.html work. For the expireStorage code, go to expireStorage.js
document.getElementById("time").onkeydown=function(expires){
	if(expires.key=="Enter")document.getElementById("submit").click();
}
document.getElementById("submit").onclick=function(){
	setExpiryItem("key","This is 'key'!",document.getElementById("time").value);
}
document.getElementById("retrieve").onclick=function(){
	var r=getExpiryItem("key");
	if(r.msg=="Success")
		document.getElementById("value").textContent=r.val;
	else if(r.msg=="Not set")
		document.getElementById("value").innerHTML="<span style='color:red'>Please set key before retrieving it!</span>";
	else if(r.msg=="Expired")
		document.getElementById("value").innerHTML="<span style='color:red'>'key' has expired</span>";
}
