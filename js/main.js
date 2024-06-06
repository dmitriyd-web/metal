document.addEventListener('DOMContentLoaded', function(){
	
	//	tablet menu
	/*
	if ( window.innerWidth <= 1024 ) {
		$(".header-site__nav ul li.has-child > a:nth-child(1)").on("click", function(e){
			if ( !($(this).parent("li").hasClass("open")) ) {
				e.preventDefault()
				$(this).closest("ul").find(".open").removeClass("open")
				$(this).parent("li").addClass("open")
			}
		})
	}
	*/
	//	mobile menu
	/*
	const mobileClose = document.querySelector(".mobile-menu__close")
	const mobileToggle = document.querySelector(".mobile-toggle")
	const mobileMenu = document.querySelector(".mobile-menu")
	
	if ( window.innerWidth <= 576 ) {
		mobileToggle.addEventListener("click", ()=> {
			mobileMenu.classList.add("open")
			document.body.classList.add("no-scroll")
		})
		mobileClose.addEventListener("click", (e)=> {
			e.preventDefault()
			mobileMenu.classList.remove("open")
			document.body.classList.remove("no-scroll")
		})
		$(".mobile-menu ul:nth-child(2) > li.has-child > a").on("click", function(e){
			if ( !($(this).parent("li").hasClass("open")) ) {
				e.preventDefault()
				$(this).closest("ul").find(".open").removeClass("open")
				$(this).parent("li").addClass("open")
			}
		})
	}
	*/
	
	//	open/close popup
	/*
	const buttons = document.querySelectorAll(".btn")
	const btnOrder = document.querySelector(".btn-order")
	const overlay = document.querySelector(".overlay")
	const popupForm = document.querySelector(".popup-form")
	const formClose = document.querySelector(".form-close")
	const successPopup = document.querySelector(".popup-success")
	const errorPopup = document.querySelector(".popup-error")
	const closeList = []
	closeList.push(overlay, formClose)
	function closeSuccessForm( popupName ) {
		overlay.classList.remove("open")
		successPopup.classList.remove("open")
	}
	function closeErrorForm( popupName ) {
		overlay.classList.remove("open")
		errorPopup.classList.remove("open")
	}
	
	buttons.forEach((element) => {
		element.addEventListener("click", ()=> {
			overlay.classList.add("open")
			popupForm.classList.add("open")
		})
	})
	
	closeList.forEach((element) => {
		element.addEventListener("click", ()=> {
			overlay.classList.remove("open")
			popupForm.classList.remove("open")
		})
	})
	*/
	
	//	video
	
	const videoItem = document.getElementById("video")
	const btnPlay = document.querySelector('.play-video')
	if ( btnPlay && videoItem ) {
		btnPlay.addEventListener('click',function(){
			btnPlay.classList.add("hide-video")
			videoItem.play();
		})
	}
	
	
	//	main-slider
	const primarySliderExists = document.querySelector(".primary-slider")
	if ( primarySliderExists ) {
		const primarySlider = new Swiper('.primary-slider', {
			// Optional parameters
			slidesPerView: 1,
		    spaceBetween: 0,
			loop: true,
			navigation: {
				nextEl: '.primary-pagination__btn--next',
				prevEl: '.primary-pagination__btn--prev',
			},
		});
	}
	
	//	main-slider
	const mainSliderExists = document.querySelector(".main-slider")
	if ( mainSliderExists ) {
		const mainSlider = new Swiper('.main-slider', {
			// Optional parameters
			slidesPerView: 1,
		    spaceBetween: 0,
			loop: true,
			navigation: {
				nextEl: '.slider-pagination__btn--next',
				prevEl: '.slider-pagination__btn--prev',
			},
		});
		$(".slider-pagination__btn--next").click()
	}
	
	//	reviews-slider
	const reviewsSliderExists = document.querySelector(".reviews-slider")
	if ( reviewsSliderExists ) {
		const reviewsSlider = new Swiper('.reviews-slider', {
			// Optional parameters
			//slidesPerView: 3,
		    //spaceBetween: 20,
			breakpoints: {
				320: {
				  slidesPerView: 1,
				  spaceBetween: 20
				},
				// when window width is >= 480px
				768: {
				  slidesPerView: 2
				},
				// when window width is >= 640px
				1200: {
				  slidesPerView: 3
				}
			},
			loop: true,
			navigation: {
				nextEl: '.reviews-slider-pagination__btn--prev',
				prevEl: '.reviews-slider-pagination__btn--next',
			},
			
		});
	}
	
	//	inscription-list
	
	$(".category-list p, .category-list li").on("click", function(e){
		e.preventDefault()
		if ( $(".category-list").hasClass("open") ) {
			$(".category-list").removeClass("open")
			$(".category-list p").text( $(this).text() )
		}	else {
			$(".category-list").addClass("open")
		}
	})
	
	//	inscription-list
	
	$(".inscription-list p, .inscription-list li").on("click", function(e){
		e.preventDefault()
		if ( $(".inscription-list").hasClass("open") ) {
			$(".inscription-list").removeClass("open")
			$(".inscription-list p").text( $(this).text() )
		}	else {
			$(".inscription-list").addClass("open")
		}
	})
	
	//	next from catalog
	$(".order-column .step-image .choose-category .next-step").on("click", function(e){
		e.preventDefault()
		$(".order-column .step-image").removeClass("show")
		$(".step-text").addClass("show")
	})
	
	//	back to catalog
	$(".step-text .back-katalog").on("click", function(e){
		e.preventDefault()
		$(".step-text, .card-info, .other-side").removeClass("show")
		$(".order-column .step-image, .first-side").addClass("show")
		$(".card-side__left").addClass("current")
		$(".card-side__right").removeClass("current")
	})	
	
	//	card-side__right
	$(".card-side__right").on("click", function(e){	
		if ( $(this).hasClass("current") )	 {
			e.preventDefault()
		}	else {
			$(this).addClass("current")
			$(".card-side__left").removeClass("current")
			$(".first-side").removeClass("show")
			$(".card-info, .other-side").addClass("show")
		}
	})
	
	//	card-side__left
	$(".card-side__left").on("click", function(e){
		if ( $(this).hasClass("current") )	 {
			e.preventDefault()
		}	else {
			e.preventDefault()
			$(this).addClass("current")
			$(".card-side__right").removeClass("current")
			$(".card-info, .other-side").removeClass("show")
			$(".first-side").addClass("show")
		}
	})
	
	//	open/close order popup
	$(".btn.btn-order").on("click", function(e){
		e.preventDefault()
		$(".overlay, .open-popup").addClass("open")
	})
	$(".overlay").on("click", function(e){
		e.preventDefault()
		$(".overlay, .open-popup, .open-individual").removeClass("open")
	})
	
	//	open/close individual popup
	$(".btn.btn-gold").on("click", function(e){
		e.preventDefault()
		$(".overlay, .open-individual").addClass("open")
	})
	
	//	change order form
	$(".open-popup .form-item .delivery-type").on("click", function(e){
		if ( $(this).hasClass("chosen") )	 {
			e.preventDefault()
		}	else {
			e.preventDefault()
			$(".open-popup .form-item .delivery-type").removeClass("chosen")
			$(this).addClass("chosen")
			$(".open-popup .form-delivery").val($(this).find("p").text())
		}
	})
	$(".open-popup .form-item .card-type").on("click", function(e){
		if ( $(this).hasClass("chosen") )	 {
			e.preventDefault()
		}	else {
			e.preventDefault()
			$(".open-popup .form-item .card-type").removeClass("chosen")
			$(this).addClass("chosen")
			$(".open-popup .form-card").val($(this).find("p").text())
		}
	})
	
	//	change order form
	$(".open-individual .form-item .delivery-type").on("click", function(e){
		if ( $(this).hasClass("chosen") )	 {
			e.preventDefault()
		}	else {
			e.preventDefault()
			$(".open-individual .form-item .delivery-type").removeClass("chosen")
			$(this).addClass("chosen")
			$(".open-individual .form-delivery").val($(this).find("p").text())
		}
	})
	$(".open-individual .form-item .card-type").on("click", function(e){
		if ( $(this).hasClass("chosen") )	 {
			e.preventDefault()
		}	else {
			e.preventDefault()
			$(".open-individual .form-item .card-type").removeClass("chosen")
			$(this).addClass("chosen")
			$(".open-individual .form-card").val($(this).find("p").text())
		}
	})
	
})