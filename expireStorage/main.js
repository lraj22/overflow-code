// Just a file to make index.html work. For the expireStorage code, go to expireStorage.js

document.querySelectorAll("[id]").forEach(function(e){window[e.id]=e;});
time.onkeydown=function(e){
	if(e.key==="Enter")submit.click();
};
submit.onclick=function(){
	expireStorage.setItem(setKey.value,content.value,time.value);
};
retrieve.onclick=function(){
	var r=expireStorage.getItem(getKey.value);
	switch(r.msg){
		case "Success":
			value.textContent=r.val;
			break;
		case "Not set":
			value.innerHTML='<span style="color:red">Please set the key before retrieving it!</span>';
			break;
		case "Expired":
			value.innerHTML='<span style="color:red">That key has expired</span>';
			break;
		case "Not expireStorage key":
			value.innerHTML='<span style="color:red">That key exists, but it was not created by expireStorage.</span>';
			break;
		default:
			value.innerHTML="<span style='color:red'><b>SOMETHING HAS GONE WRONG</b></span>";
	}
	expires.textContent=r.expires;
};
doer.onchange=function(){
	expireStorage.deleteOnExpiredRead=this.checked;
};
storageType.onchange=function(){
	expireStorage.storage=window[this.value];
};