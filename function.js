//处理getClass的兼容性问题，在一个对象先找对应的元素

function getClass(classname, obj) {
	var obj = obj || document;
	if (obj.getElementsByClassName) {
		return obj.getElementsByClassName(classname);
	} else {
		var arr = [];
		var alls = document.getElementsByTagName("*");
		for (i = 0; i < alls.length; i++) {
			if (checkClass(alls[i].className, classname)) {
				arr.push(alls[i]);
			}
		}
		return arr;
	}
}

function checkClass(search, match) {
	var brr = search.split(" ");
	for (i = 0; i < brr.length; i++) {
		if (brr[i] == match) {
			return true;
		}
	}
	return false;
}

//获取内容

function getInner(obj, value) {
	if (obj.textContent) {
		if (value == undefined) {
			return obj.textContent; //返回值
		} else {
			obj.textContent = value; //修改值
		}
	} else {
		if (value == undefined) {
			return obj.innerText; //返回值
		} else {
			obj.innerText = value; //修改值
		}
	}
}

//获取属性

function getStyle(obj, style) {
	if (obj.currentStyle) {
		return obj.currentStyle[style];
	} else {
		return getComputedStyle(obj, null)[style];
	}
}

//在某一个范围内获取到所要的元素，某个div或某个对象的子元素

function $(search, obj) { //search表示要得到的标签，obj表示对象
	var obj = obj || document;
	if(typeof(search)=="string"){
		if (search.charAt(0) == "#") { //判断是否为id
		return document.getElementById(search.substr(1))
	  } else if (search.charAt(0) == ".") { //判断是否为类
		return getClass(search.substr(1), obj)
	  } else { //输出标签
		return obj.getElementsByTagName(search)
	  }
	}else if(typeof(search)=="function"){
		window.onload=function(){
			search();
		}

	}
}

// 获取子节点
function getChilds(obj, type) {
	var type = type || "a";
	var all = obj.childNodes; //获取对象的所有子节点
	var arr = []; //定义一个空数组
	for (var i = 0; i < all.length; i++) {
		if (type == "a") {
			if (all[i].nodeType == 1) {
				arr.push(all[i]); //将all[i]放在arr数组里
			}
		} else if (type == "b") {
			if (all[i].nodeType == 1 || (all[i].nodeType == 3 && all[i].nodeValue.replace(/^\s*|\s*$/g, ""))) {
				// if (all[i].nodeType==3) {
				// 	all[i].nodeValue=all[i].nodeValue.replace(/^\s*|\s*$/g, "")
				// };
				arr.push(all[i]);
			}
		}
	}
	return arr;
}

function getFirst(obj) {
	return getChilds(obj)[0];
}

function getLast(obj) {
	var nub = getChilds(obj);
	return nub[nub.length - 1];
}

function getNext(obj, type) {
	var next = obj.nextSibling;
	var type = type || "a";
	if (next == null) {
		return false;
	}
	if (type == "a") {
		while (next.nodeType == 3 || next.nodeType == 8) {
			next = next.nextSibling;
			if (next == null) {
				return false;
			}
		}
	} else if (type == "b") {

		while ((next.nodeType == 3 && !next.nodeValue.replace(/^\s*|\s*$/g, "")) || next.nodeType == 8) {
			next = next.nextSibling;
			if (next == null) {
				return false;
			}
		}
	}
	return next;
}

function getPrevious(obj) {
	var pervious = obj.previousSibling;
	var type = type || "a";
	if (pervious == null) {
		return false;
	}
	if (type == "a") {
		while (pervious.nodeType == 3 || pervious.nodeType == 8) {
			pervious = pervious.previousSibling;
			if (pervious == null) {
				return false;
			}
		}
	} else if (type == "b") {
		while ((pervious.nodeType == 3 && !pervious.nodeValue.replace(/^\s*|\s*$/g, "")) || next.nodeType == 8) {
			pervious = pervious.previousSibling;
			if (pervious == null) {
				return false;
			}
		}
	}
	return pervious;
}

function insertBefore(obj, before) {
	var parent = before.parentNode;
	parent.insertBefore(obj, before)
}

function insertAfter(obj, after) {
	var next = getNext(after);
	var parent = after.parentNode;
	if (next) {
		insertBefore(obj, next)
	} else {
		parent.appendChild(obj)
	}
}
// 事件绑定的添加/删除
function addEvent(obj,event,fun){
	if(obj.attachEvent){
		return obj.attachEvent("on"+event,fun);
	}else{
		return obj.addEventListener(event,fun,false);
	}
}
function removeEvent(obj,event,fun){
	if(obj.detachEvent){
		return obj.detachEvent("on"+event,fun);
	}else{
		return obj.removeEventListener(event,fun,false);
	}
}
// 关于滚轮的兼容性问题(判断滚轮向上还是向下)
// function mouseWheel(obj,funUp,funDown){
// 	if(obj.attachEvent){
// 		obj.attachEvent("onmouseWheel",scroll);	
// 	}else if(obj.addEventListener){
//         obj.addEventListener("mouseWheel",scroll,false);
//         obj.addEventListener("DOMMouseScroll",scroll,false);
// 	}
// 	function scroll(e){
// 		var ev=e||window.event;
// 		var b=ev.wheelDelta||ev.detail;
// 		if(b==120||b==-3){
// 			if(funUp){
// 				funUp();
// 			}
// 		}else if(b==-120||b==3){
// 			if(funDown){
// 				funDown();
// 			}
// 		}
// 	}
// }
function mouseWheel(obj,funUp,funDown){
	if (obj.attachEvent) {//ie滚轮滚动事件
		obj.attachEvent("onmousewheel",scroll)
	}else if(obj.addEventListener){//其他滚轮滚动事件
		obj.addEventListener("DOMMouseScroll",scroll,false)//火狐滚轮滚动事件
		obj.addEventListener("mousewheel",scroll,false)//谷歌滚轮滚动事件
	}
	function scroll(e){
		var ev=e||document.event;
		var d=ev.wheelDelta||detail;
		if (obj.attachEvent) {//阻止ie浏览器默认动作
			ev.returnValue=false;
		}else{//阻止其他浏览器默认动作
			ev.preventDefault();
		}
		if (d==-120||d==3) {//判断向上
			if (funUp) {
				funUp()
			}
		}else if(d==120||d==-3){//判断向下
			if (funDown) {
				funDown()
			}
		}
	}
}