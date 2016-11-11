
define(['jquery','myutil','app/myfn'],function($,x,url) {
    function getMainData(div1){
        var xhr=x();
		xhr.open('get',url.getBaseURL()+'/zmain2');
		xhr.send(null);
		xhr.onreadystatechange=function(e){
			if(xhr.readyState === 4){
				var ul=document.createElement("ul");
				var navs = JSON.parse(xhr.responseText);
				navs.forEach(function(elem){
					var li=document.createElement('li');
					li.innerHTML=elem['title'];
					ul.appendChild(li);
//					console.log(div1);
					div1.appendChild(ul);
					var div2=document.createElement('div');
					li.appendChild(div2);
					
					elem['data'].forEach(function(elem1){
						var a=document.createElement('a');
						div2.appendChild(a);
						var img=document.createElement('img');
						img.setAttribute('src',elem1["imgUrl"]);
						a.appendChild(img);
						var span1=document.createElement('span');
						span1.innerHTML=elem1["price"]+"元起";
						
						a.appendChild(span1);
						var span2=document.createElement('span');
						
						span2.innerHTML=elem1['title'];
												
						a.appendChild(span2);
						
						
						if(elem1['time']!=undefined){
							var span3=document.createElement('span');
							span3.innerHTML=elem1['time'];
							a.appendChild(span3);
						}
						var span4=document.createElement('span');
						span4.innerHTML="机+酒";
						a.appendChild(span4);
					})
				})
				$("#main2>.div1>ul>li").on("mouseenter",function(e){
					$(this).siblings().children("div").css("display","none");
					$(this).children("div").css("display","block");
				}).on("mouseleave",function(e){
					$(this).siblings().children("div").css("display","none");
				})
            }
        }
    }
    return getMainData;
});












