﻿$(function(){

    

    
    
    
    if ($('.catalog')) {
        $('.accordeon, .accordeon .level2, .accordeon .level3').hide();
        $('.catmenu').click(function(){
            $(this).toggleClass('open');
            $('.accordeon').toggle('slow');
        })
        $('.accordeon .level1 > .menupoint').click(function(){
            if ($(this).parent().find('div').length && !$(this).parent().hasClass('open')) {
                $('.level1.open').removeClass('open').find('.level2, .level3').hide('slow');
                $(this).parent().addClass('open').find('.level2').show('slow');
                return false;
            }
        });
        $('.accordeon .level2 > .menupoint').click(function(){
            if ($(this).parent().find('div').length && !$(this).parent().hasClass('open')) {
                $(this).parent().parent().find('.level2.open').removeClass('open').find('.level3').hide('slow');
                $(this).parent().addClass('open').find('.level3').show('slow');
                return false;
            }
        });
    }
    
    if ($('.retaimer').length) {
        retimer();
        setInterval(retimer, 500);
    }
    
    if ($('.slider_block').length) {
        setInterval(function(){
            sliderRun('toleft');
        }, 4000);
        $('.slider .to_left').click(function(){
            sliderRun('toleft');
        });
        $('.slider .to_right').click(function(){
            sliderRun('toright');
        });
    }
})
let slideFlag = false;


function sliderRun(direction) {
    if (slideFlag) return;
    slideFlag = true;
    let hlp = $('.slider_block').index($('.slider_block.curr'));
    let width = $('.slider_block.curr').width();
    let next;
    if (direction == 'toleft') {
        next = hlp + 1;
        if (next > $('.slider_block').length - 1) next -= $('.slider_block').length;
        $('.slider_block').eq(next).css('left', width + 'px').addClass('curr');
        next = '-=' + width;
    } else if (direction == 'toright') {
        next = hlp - 1;
        if (next < 0) next += $('.slider_block').length;
        $('.slider_block').eq(next).css('left', -width + 'px').addClass('curr');
        next = '+=' + width;
    } else {
        console.error('invalid direction');
        slideFlag = false;
        return;
    }
    $('.slider_block.curr').animate({left: next}, 2000, function() {
        $('.slider_block').eq(hlp).removeClass('curr').prop('style','');
        slideFlag = false;
    });
}



function retimer() {
    let limit = new Date($('.retaimer').data('fordate'));
    let now = new Date();
    let delta = Math.floor((limit.getTime() - now.getTime()) / 1000);
    if (delta < 0) delta = 0;
    let sec = delta % 60;
    $('.retaimer .num')[3].innerHTML = `${addChar(sec)}<span class="subnum">${multiple(sec, ['секунда', 'секунды', 'секунд'])}</span>`;
    delta = Math.floor(delta / 60);
    let minute = delta % 60;
    $('.retaimer .num')[2].innerHTML = `${addChar(minute)}<span class="subnum">${multiple(minute, ['минута', 'минуты', 'минут'])}</span>`;
    delta = Math.floor(delta / 60);
    let hour = delta % 24;
    $('.retaimer .num')[1].innerHTML = `${addChar(hour)}<span class="subnum">${multiple(hour, ['час', 'часа', 'часов'])}</span>`;
    delta = Math.floor(delta / 24);
    $('.retaimer .num')[0].innerHTML = `${delta}<span class="subnum">${multiple(delta, ['день', 'дня', 'дней'])}</span>`;
}
function addChar(c) {
    c += '';
    if (c.length < 2) {
        c = '0' + c;
    }
    return c;
}
function multiple(num, words) {
    num = num % 100;
    if (Math.floor(num / 10) != 1) {
        if (num % 10 == 1) {
            return words[0];
        } else if ((num % 10 > 1) && (num % 10 < 5)) {
            return words[1];
        }
    }
    return words[2];
}
























function retimer() {
    let limit = new Date($('.retaimer').data('fordate'));
    let now = new Date();
    let delta = Math.floor((limit.getTime() - now.getTime()) / 1000);
    let sec = delta % 60
    $('.retaimer .num')[3].innerHTML = `${addChar(sec)}<span class="subnum">${multiple(sec, ['секунда', 'секунды', 'секунд'])}</span>`;
	delta = Math.floor(delta / 60);
	let minute = delta % 60;
	$('.retaimer .num')[2].innerHTML = `${addChar(minute)}<span class="subnum">${multiple(minute, ['минута', 'минуты', 'минут'])}</span>`;
	delta = Math.floor(delta / 60);
	let hour = delta % 24;
	$('.retaimer .num')[1].innerHTML = `${addChar(hour)}<span class="subnum">${multiple(hour, ['час', 'часа', 'часов'])}</span>`;
	delta = Math.floor(delta / 24);
	$('.retaimer .num')[0].innerHTML = `${delta}<span class="subnum">${multiple(delta, ['день', 'дня', 'дней'])}</span>`;
}
function addChar(c) {
    c += '';
    if (c.length < 2) {
        c = '0' + c;
    }
    return c;
}
function multiple(num, words) {
    num = num % 100;
    if (Math.floor(num / 10) != 1) {
        if (num % 10 == 1) {
            return words[0];
        } else if ((num % 10 > 1) && (num % 10 < 5)) {
            return words[1];
        }
    }
    return words[2];
}