require(["commons"],function(commons){
	require(["app/index3nav","app/index4banner","app/index5banner","app/index7main","app/index0sousuo","app/CityWalk7main"],function(nav2,banner2,banner4,main2,sousuo,main7){
	    var root=document.querySelector("#nav2 ul");
	    nav2(root);
	    
	    var div2=document.querySelector("#banner2 .div1");
	    banner2(div2);
	    
	    var ul=document.querySelector("#banner4 .ul");
	    banner4(ul);
	    
	    var div1=document.querySelector("#main2 .div1");
	    main2(div1);
	    
	    var li=document.querySelector("#nav1 .ul2 li:first-of-type");
	    sousuo(li);
	    
	    var main3=document.querySelector("#main3");
	    main7(main3);
	});
})


