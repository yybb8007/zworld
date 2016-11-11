define(["myutil","app/myfn"],function(x,url){
	function getKeyWordData(sousuo){
		$('#nav1 .ul2 input').on('keyup',function(){
			$('#nav1 .ul2 li:first ul').remove();
			var keyword=$('#nav1 .ul2 input').val();
			var xhr=x();
			var ul=document.createElement('ul');
			sousuo.appendChild(ul);
			xhr.open("get",url.getBaseURL()+'/ajax/'+keyword);
			xhr.send(null);
			xhr.onreadystatechange=function(e){
				if(xhr.readyState===4){
		            var navs=JSON.parse(xhr.responseText);
		            navs.forEach(function (elem, index) {
						console.log(elem);
						if(elem['belong_name']!=undefined){
							var li=document.createElement('li');
							var img=document.createElement('img');
							img.setAttribute('src',elem["src"]);
							li.appendChild(img);
							
							var a=document.createElement('a');
							a.setAttribute('href',elem.url);
							a.innerHTML=elem.belong_name;
							li.appendChild(a);
							var a1=document.createElement('a');
							a1.setAttribute('href',elem.url);
							a1.innerHTML=elem.cn_name;
							li.appendChild(a1);
							var a2=document.createElement('a');
							a2.setAttribute('href',elem.url);
							a2.innerHTML=elem.en_name;
							li.appendChild(a2);
							ul.appendChild(li);
						}else{
							var li=document.createElement('li');
							var a=document.createElement('a');
							a.setAttribute('href',elem.url);
							a.innerHTML=elem["word"];
							li.appendChild(a);
							ul.appendChild(li);
						}
					})
            	}
			}
			$('#nav1 .ul2 li:first').on('mouseleave',function(){
				$('nav1 .ul2 li:first ul').remove();
			})
		})
	}
	return getKeyWordData;
});

