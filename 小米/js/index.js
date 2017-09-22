/*
* @Author: dell
* @Date:   2017-09-20 15:07:22
* @Last Modified by:   dell
* @Last Modified time: 2017-09-23 00:17:05
*/
window.onload = function(){
	let banner = document.getElementsByClassName('banner')[0];
	let list = document.getElementsByClassName('img-list')[0];
	let imgs = list.getElementsByTagName('li');
	let imgsw = parseInt(getComputedStyle(list,null).width);
	let yuan = document.getElementsByClassName('yuan')[0];
	let yuans = yuan.getElementsByTagName('li');
	let left = document.getElementsByClassName('banner-left')[0];
	let right = document.getElementsByClassName('banner-right')[0];
	let kuang = document.getElementsByClassName('dakuang')[0];
	let kuangw = parseInt(getComputedStyle(kuang,null).width);
	let goods = kuang.getElementsByClassName('goods')[0];
	let lis = document.getElementsByClassName('li8')[0];
	let a = lis.getElementsByTagName('a');
	let lis1 = document.getElementsByClassName('li2')[0];
	let a1 = lis1.getElementsByTagName('a');

	let now = 0;
	let next = 0;
	let flag = true;
	let t = setInterval(move, 3000);
	let t2 = setInterval(fn, 3000);

	lis1.onclick = function(){
		animate(goods,{left:-kuangw});
		if(goods.style.left = '-1226px'){
			a.style.color = 'green';
		}
	}
	lis.onclick = function(){
		goods.style.left = -kuangw+'px';
		animate(goods,{left:0});
	}
	lis.onmouseover = function(){
		clearInterval(t2);
	}
	lis.onmouseout = function(){
		t2 = setInterval(fn, 3000);
	}
	lis1.onmouseover = function(){
		clearInterval(t2);
	}
	lis1.onmouseout = function(){
		t2 = setInterval(fn, 3000);
	}

	function fn(){
		animate(goods,{left:-kuangw});
		if(goods.style.left == '-1226px'){
			animate(goods,{left:0});
		}
		if(goods.style.left == '0px'){
			animate(goods,{left:-kuangw});
		}
	}


	for(let i=0;i<yuans.length;i++){
		yuans[i].onclick = function(){
			if(now == i){return;}
			yuans[i].style.background = 'red';
			yuans[now].style.background = '#17171c';
			imgs[i].style.left = imgsw+'px';
			animate(imgs[now],{left:-imgsw});
			animate(imgs[i],{left:0});
			now = next = i;
		}
	}
	


	function move(){
		next++;
		if(next == imgs.length){
			next = 0;
		}
			imgs[next].style.left = `${imgsw}px`;
			animate(imgs[now],{left:-imgsw});
			animate(imgs[next],{left:0},function(){
				flag = true;
			}); 
			yuans[next].style.background = 'red';
			yuans[now].style.background = '#17171c';
			now = next;
	}


	function moveL(){
		next--;
		if(next<0){
			next = imgs.length-1;
		}
			imgs[next].style.left = -imgsw+'px';
			animate(imgs[now],{left:imgsw});
			animate(imgs[next],{left:0},function(){
				flag = true;
			}); 
			yuans[next].style.background = 'red';
			yuans[now].style.background = '#17171c';
			now = next;
	}

	


	left.onclick = function(){
		if(!flag){
			return;
		}
		moveL();
		flag = false;
	}
	right.onclick = function(){
		if(!flag){
			return;
		}
		move();
		flag = false;
	}


	banner.onmouseover = function(){
		clearInterval(t);
	}
	banner.onmouseout = function(){
		t = setInterval(move, 3000);
	}
}