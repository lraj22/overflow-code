window.expireStorage={
	"storage": localStorage, // sessionStorage and localforage are also options if you change this
	"deleteOnExpiredRead": true, // delete if expired and tried to read?
	"setItem": function(key, value, expires){
		expireStorage.storage.setItem(key, JSON.stringify({"e": Date.now()+parseInt(expires), "v": value}));
	},
	"getItem": function(name){
		try{
			var result = expireStorage.storage.getItem(name);
			if(!result)
				return {"msg": "Not set"};
			result = JSON.parse(result);
		} catch(s){
			if(s instanceof SyntaxError)
				return {"msg": "Not expireStorage key"};
			else
				return {"msg": "Error...?"};
		}
		if(Date.now() > result.e){
			if(expireStorage.deleteOnExpiredRead)
				expireStorage.storage.removeItem(name);
			return {"msg": "Expired", "expires": result.e};
		}
		return {"msg": "Success", "expires": result.e, "val": result.v};
	},
	"deleteExpired": function(){
		var length = expireStorage.storage.length, key, value;
		if(typeof length === "function")
			length = length();
		for(var i = 0; i < length; i++){
			try{
				key = expireStorage.storage.key(i);
				value = JSON.parse(expireStorage.storage.getItem(key));
				if(Date.now() > result.e)
					expireStorage.storage.removeItem(key);
			} catch(s){}
		}
	}
};
