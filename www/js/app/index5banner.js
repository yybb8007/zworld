
define(["jquery","myutil","app/myfn"],function($,x,url){
	function getBannerData(ul){
		var xhr=x();
		xhr.open("get",url.getBaseURL()+"/zmenu");
		xhr.send(null);
		xhr.onreadystatechange=function(e){
			if(xhr.readyState===4){
                var navs=JSON.parse(xhr.responseText);
                navs.forEach(function (elem, index) {
					var div=document.createElement("div");
                    var li=document.createElement("li");
                    var p=document.createElement("p");
					li.appendChild(p);
					p.innerHTML=elem["title"];
					
					var as=navs[index].mainCity;
					as.forEach(function(elem1,index1){
						var a=document.createElement("a");
						a.innerHTML=elem.mainCity[index1];
						a.setAttribute("href","#");
						li.appendChild(a);
					})
					
					elem['moreCity'].forEach(function(elem2){
						var city=document.createElement("div");
						div.appendChild(city);
						var h3=document.createElement("h3");
						city.appendChild(h3);
						h3.innerHTML=elem2.cityName;
						elem2['items'].forEach(function(elem3){
							var a=document.createElement("a");
							a.innerHTML=elem3;
							city.appendChild(a);
						})
					})
					li.appendChild(div);
					ul.appendChild(li);
					
					var img = document.createElement('img');
					img.setAttribute('src',elem["moreCityImg"]);
					div.appendChild(img);
				})
                $('#banner4 ul li').on('mouseenter',function(e){
					$(this).children('div').css('display','block');
					$(this).siblings().children('div').css('display','none');
				}).on("mouseleave",function(e){
					$(this).children('div').css('display','none');
				})
				//第一行动画
				$("#nav1 #ul1>li:eq(4)").on("mouseenter",function(e){
					$("#nav1 #ul1>li:eq(4) #sq").slideDown();
				}).on("mouseleave",function(e){
					$("#nav1 #ul1>li:eq(4) #sq").slideUp();
				})
				
				$("#nav1 #ul1>li:eq(4) #sq ul li:first").on("mouseenter",function(e){
					$("#nav1 #ul1>li:eq(4) #sq ul li:first .div1").css("display","block");
				}).on("mouseleave",function(e){
					$("#nav1 #ul1>li:eq(4) #sq ul li:first .div1").css("display","none");
				})
				
				$("#nav1 #ul1>li:eq(8)").on("mouseenter",function(e){
					$("#nav1 #ul1>li:eq(8) #yd").slideDown();
				}).on("mouseleave",function(e){
					$("#nav1 #ul1>li:eq(8) #yd").slideUp();
				})
				
				
				$("#nav1>ul:eq(1)>li:first").on("mouseenter",function(e){
					$("#ss").animate({
						"width":"150px"
					});
				}).on("mouseleave",function(e){
					$("#ss").animate({
						"width":"0"
					});
				})
				
            }
		}
	}
	return getBannerData;
})

