define(['myutil','app/myfn'],function(x,url) {
    function getMainData(main3){
        var xhr=x();
        xhr.open('get',url.getBaseURL()+'/zcmain3');
        xhr.send(null);
        xhr.onreadystatechange=function(e){
            if(xhr.readyState===4){
                var navs = JSON.parse(xhr.responseText);
                navs.forEach(function (elem, index) {
                	var div=document.createElement('div');
					main3.appendChild(div);
					var ul =document.createElement('ul');
					div.appendChild(ul);
					var li=document.createElement('li');
					ul.appendChild(li);
					var img=document.createElement('img');
					li.appendChild(img);
					img.setAttribute('src',elem['imgurl']);
					var li1=document.createElement('li');
					ul.appendChild(li1)
					var span=document.createElement('span');
					span.innerHTML=elem['address'];
					li1.appendChild(span);
					var span1=document.createElement('span');
					span1.innerHTML=elem['browseCount']+'　　　　'+elem['soldCount'];
					li1.appendChild(span1);
					var span2=document.createElement('span');
					span2.innerHTML='次浏览'+'　　'+'件已售'
					li1.appendChild(span2);
					var h3=document.createElement('h3');
					h3.innerHTML=elem['title'];
					li1.appendChild(h3);
					var ul1=document.createElement('ul');
					li1.appendChild(ul1);
					elem['introduce'].forEach(function(ele){
						var li2=document.createElement('li');
						li2.innerHTML=ele;
						ul1.appendChild(li2);
					})
					var span3=document.createElement('span');
					span3.innerHTML=elem['oldPrice']+'元'+'　　　　'+'元起';
					li1.appendChild(span3);
					var span4=document.createElement('span');
					span4.innerHTML=elem['newPrice'];
					li1.appendChild(span4);
					var a=document.createElement('a');
					a.innerHTML='立即预定';
					li1.appendChild(a);
				})
            }
        }
        //热门目的地下拉菜单动画
		$("#nav2>a").on("mouseenter",function(e){
		 	$("#banner4").css("display","block").on("mouseleave",function(e){
		 	$("#banner4").css("display","none");
		 });
		 })
		
		//第二行搜索框
		$("#banner1 input:first").on("click",function(e){
			$("#banner1 ul").css("display","block").on("mouseleave",function(e){
				$(this).css("display","none");
			});
		})
		
		//列表1/2切换
		$("#main3>span:first").on("click",function(e){
			$("#main3>div:first,#main3>div:eq(1),#main3>div:eq(2)").css("display","block");
			$("#main3>div:eq(3),#main3>div:eq(4),#main3>div:eq(5)").css("display","none");
			$(this).css("background","#16C1A0");
			$("#main3>span:last").css("background","none");
		})
		$("#main3>span:last").on("click",function(e){
			$("#main3>div:first,#main3>div:eq(1),#main3>div:eq(2)").css("display","none");
			$("#main3>div:eq(3),#main3>div:eq(4),#main3>div:eq(5)").css("display","block");
			$(this).css("background","#16C1A0");
			$("#main3>span:first").css("background","none");
		})
		
		
    }
    return getMainData;
});


