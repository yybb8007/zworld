
define({
	baseUrl:"http://localhost",
	port:7000,
	getBaseURL:function(){
		return this.baseUrl+":"+this.port;
	}
})