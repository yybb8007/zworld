
define(["jquery","myutil","app/myfn"],function($,x,url){
	function getBannerData(div2){
		var xhr=x();
		xhr.open("get",url.getBaseURL()+"/zbanner2");
		xhr.send(null);
		xhr.onreadystatechange=function(e){
			if (xhr.readyState===4) {
				var navs=JSON.parse(xhr.responseText);
				navs.forEach(function(elem,index){
					var a=document.createElement("a");
					var img=document.createElement("img");
					img.setAttribute("src",elem["imgUrl"]);
					a.appendChild(img);
					a.setAttribute("href",elem["href"]);
					div2.appendChild(a);
				})
				
				$('#banner2 .div1').css('left','0');
				var index=0;
				var timer=setInterval(show,2000);
				function show(){
					var left=$('#banner2 .div1').offset().left;
					index++;
					$('#banner2 .div1').css('left',left-1920+'px');
					
					$("#banner2 span:eq("+index+")").css("background","red").siblings().css("background","black");
					
					if(index==4){
						index=0;
						$("#banner2 span:first").css("background","red").siblings().css("background","black");
					}
					
					if(left==-5760){
						$('#banner2 .div1').css('left','0');
					}
					$("#banner2 span:first").on("mouseenter",function(e){
						index=0;
						clearInterval(timer);
						var left=$("#banner2 .div1").offset().left=0;
						$('#banner2 .div1').css('left',left+'px');
						$("#banner2 span:first").css("background","red").siblings().css("background","black");
					})
					$("#banner2 span:eq(1)").on("mouseenter",function(e){
						index=1;
						clearInterval(timer);
						var left=$("#banner2 .div1").offset().left=-1920;
						$('#banner2 .div1').css('left',left+'px');
						$("#banner2 span:first").css("background","red").siblings().css("background","black");
					})
					$("#banner2 span:eq(2)").on("mouseenter",function(e){
						index=2;
						clearInterval(timer);
						var left=$("#banner2 .div1").offset().left=-3840;
						$('#banner2 .div1').css('left',left+'px');
						$("#banner2 span:first").css("background","red").siblings().css("background","black");
					})
					$("#banner2 span:last").on("mouseenter",function(e){
						index=3;
						clearInterval(timer);
						var left=$("#banner2 .div1").offset().left=-5760;
						$('#banner2 .div1').css('left',left+'px');
						$("#banner2 span:first").css("background","red").siblings().css("background","black");
					})
					$("banner2 span").on("mouseout",function(e){
						timer=setInterval(show,2000);
					})
					
					
				}
			}
		}
	}
	return getBannerData;
})


