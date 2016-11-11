
define(['jquery','myutil','app/myfn'],function($,x,url) {
    function getNavData(root){
        var xhr=x();
        xhr.open('get',url.getBaseURL()+'/znav2');
        xhr.send(null);
        xhr.onreadystatechange=function(e){
            if(xhr.readyState === 4){
                var navs = JSON.parse(xhr.responseText);
                navs.forEach(function (elem, index) {
                    var li=document.createElement("li");
					var a=document.createElement("a");
					var img=document.createElement("img");
					li.appendChild(img);
					img.setAttribute("src",elem["imgUrl"]);
					li.appendChild(a);
					a.setAttribute("href",elem["url"]);
					a.innerHTML=elem["name"];
					root.appendChild(li);
                })
                $("<div></div>").appendTo("#nav2 ul li:eq(2)");
            
            }
        }
    }
    return getNavData;
});










