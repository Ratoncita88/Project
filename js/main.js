$(function(){
    
	
    if($('.table').length){
		writeTable();
		$(document).on('click', '.quantity button', function(){
			let delta = 1;
			if (this.innerHTML == '-') {
				delta = -1;
			}
			let id = +$(this).parents('tr').find('.id').prop('id').slice(6);
			for (item of tovardata){
				if (item.id == id) {
					item.qty += delta;
					if (item.qty <= 0) removeTovar(id);
					break;
				}
			}
			writeTable();
		})
		$(document).on('click', '.delete button', function(){
			let id = +$(this).parents('tr').find('.id').prop('id').slice(6);
			if (removeTovar(id)) writeTable();

		})
		$('#date').focus(makeCalendar);
		$('.form button').click(function(){
			makeOrder();
		})
	}
  
    
    if ($('.gallery').length) {
        galstep = $('.smallimage').width(); // померили ширину блока с мелкой картинкой
        galgap = parseInt($('.gallery_rail').css('gap')); // померили промежуток между картинками
        /* подключаем кнопки */
        $('.g_left').click(function(){
            galSlide('left'); // если двигать блок некуда, кнопка не видна - и нажать на нее не получится. если по дизайну неактивная кнопка должна быть видна, тут лучше сделать проверку класса.
        });
        $('.g_right').click(function(){
            galSlide('right');
        });
        $('.smallimage img').click(function(){
            $('.bigimage img').prop('src', $(this).prop('src').split('min').join('big'));
        });
        $('.bigimage img').click(function(){
            lightbox(this);
        });
    }
    
    
    
    if ($('.retaimer').length) {
        retimer();
        setInterval(retimer, 500);
    }
    
    /*if ($('.slider_block').length) {
		setInterval(function(){
            sliderRun('toleft');
        }, 4000);
        $('.slider .to_left').click(function(){
            sliderRun('toleft');
        });
        $('.slider .to_right').click(function(){
            sliderRun('toright');
        });
    }*/
		if ($('.slider_block').length) {
        slideFlag['slider'] = false;
        setInterval(function(){
            sliderRun('slider', 'toleft');
        }, 4000);
        $('.slider .to_left').click(function(){
            sliderRun('slider', 'toleft');
        });
        $('.slider .to_right').click(function(){
            sliderRun('slider', 'toright');
        });
        $('.slider .points span').click(function(){
            if (!$(this).hasClass('active')) {
                sliderRun('slider', $('.slider .points span').index(this));
            }
        });
    }
    if ($('.slider2_block').length) {
        slideFlag['slider2'] = false;
        setInterval(function(){
            sliderRun('slider2','toleft');
        }, 4000);
        $('.slider2 .to_left').click(function(){
            sliderRun('slider2','toleft');
        });
        $('.slider2 .to_right').click(function(){
            sliderRun('slider2','toright');
        });
    }

})
$(function() {

				var dd = new DropDown( $('#dd') );

				$(document).click(function() {
					// all dropdowns
					$('.wrapper-dropdown-3').removeClass('active');
				});

			});
$(document).ready(function(){
			$(".set > a").on("click", function(){
			if($(this).hasClass('active')){
			$(this).removeClass("active");
			$(this).siblings('.content').slideUp(200);
			$(".set > a i").removeClass("fa-minus").addClass("fa-plus");
			}else{
			$(".set > a i").removeClass("fa-minus").addClass("fa-plus");
			$(this).find("i").removeClass("fa-plus").addClass("fa-minus");
			$(".set > a").removeClass("active");
			$(this).addClass("active");
			$('.content').slideUp(200);
			$(this).siblings('.content').slideDown(200);
			}
			});
		});













