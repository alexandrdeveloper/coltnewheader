$(function() {

	let aldvBurger = document.querySelector('.aldv-burger');
	let navbar = document.querySelector('.aldv-navbar');

	const menuToggle = () => {
		navbar.classList.toggle('aldv-navbar_visible');
	}

	const burgerTransform = () => {
		aldvBurger.classList.toggle('aldv-burger_close');
	}

	aldvBurger.addEventListener('click', function(e) {
		e.stopPropagation;
		menuToggle(); 
		burgerTransform();
		
	});

	document.addEventListener('click', e => {
		let target = e.target;
		let its_menu = target == navbar || navbar.contains(target);
		let its_hamburger = target == aldvBurger;
		let menu_is_active = navbar.classList.contains('aldv-navbar_visible');
		
		if (!its_menu && !its_hamburger && menu_is_active) {
		  menuToggle();
		  burgerTransform();
		}
	});
	



	



	let subMenuToggle = document.querySelectorAll('.aldv-menu__item_carret');

	let winW = window.innerWidth;

	console.log(winW);

	if (winW < 992) {
		for(const dropdown of subMenuToggle) {
			dropdown.addEventListener('click', function(e) {
				e.preventDefault();
				this.classList.toggle('aldv-menu__item_carret-active');
				this.querySelector('.aldv-submenu').classList.toggle('aldv-submenu_active');
			});
		}
	}

	window.addEventListener('resize', function() {
		let winW = this.innerWidth;
		if (winW < 992) {
			for(const dropdown of subMenuToggle) {
				dropdown.addEventListener('click', function(e) {
					e.preventDefault();
					this.classList.toggle('aldv-menu__item_carret-active');
					this.querySelector('.aldv-submenu').classList.toggle('aldv-submenu_active');
				});
			}
		}
	});
	let menu = document.querySelector('.aldv-navbar__nav');
	let disScrolled = menu.getBoundingClientRect().top;
	
	document.addEventListener('scroll', function() {
		let winPos = window.pageYOffset;
		if (winPos > disScrolled + 40) {
			menu.classList.add('aldv-nav-fixed');
		} else {
			menu.classList.remove('aldv-nav-fixed');
		} 
	});
	let mobileNav = document.querySelector('.aldv-logo_mobile')
	document.addEventListener('scroll', function() {
		let winPos = window.pageYOffset;
		if (winPos > 10) {
			mobileNav.classList.add('aldv-logo_mobile_scrolled');
		} else {
			mobileNav.classList.remove('aldv-logo_mobile_scrolled');
		}

	});
	
		


	

});
