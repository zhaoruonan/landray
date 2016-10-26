// JavaScript Document

            $(function() {
                var bodyEl = $('html,body'); //ff和ie需要html，chrome需要body，万恶的兼容性啊
                var siderBtn = $('.sider li');
                var boxEl = $('.box');
                var boxIndex = 0; //定义一个变量保存上次滚动到的是第几个box
                // 隐藏页面滚动条并且初始化页面位置为顶部
                bodyEl.css({'overflow': 'hidden'}).scrollTop(0);
                /**
                 * 为按钮绑定事件
                 * @returns {undefined}
                 */
                siderBtn.click(function() {
                    var btnIndex = $(this).index();
                    var tarBoxTop = boxEl.eq(btnIndex).offset().top; //取得box的offset.top值
                    var isAnimate = bodyEl.is(":animated"); //当前是否处于动画状态
                    var m = btnIndex - boxIndex; //算当前的按钮和当前显示的box的差值
                    //如果是0就不操作于不是动画状态才执行
                    if (m != 0 && !isAnimate) {
                        //如果是1代表是临近的
                        if (m == 1 || m == -1) {
                            bodyEl.animate({scrollTop: tarBoxTop}, 1000);
                        } else {
                            bodyEl.fadeOut(400);
                            setTimeout(function() {
                                bodyEl.fadeIn(400).scrollTop(tarBoxTop);
                            }, 400);
                        }
                        //改变右侧按钮的焦点
                        $('span', siderBtn).removeClass('cur');
                        $('span', $(this)).addClass('cur');
                        boxIndex = btnIndex;
                    }
                });
                /**
                 * 鼠标滚轮触发后的事件
                 */
                var mouseWheel = function(event) {
                    if (!event) {
                        event = window.event;
                    }
                    var delta = 0;//为了保存滚轮的滚动值
                    var tarBoxTop = boxEl.eq(boxIndex).offset().top; //取得当前box的offset.top值
                    var isAnimate = bodyEl.is(":animated"); //当前是否处于动画状态
                    //取滚轮滚动的值
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;//兼容chrome
                        if (window.opera) {//兼容opera
                            delta = -delta;
                        }
                    } else if (event.detail) {
                        delta = -event.detail / 3;//兼容ff
                    }
                    //判断是向上滚还是向下
                    if (delta > 0) {
                        if (boxIndex != 0) {
                            if (!isAnimate) {
                                bodyEl.animate({scrollTop: tarBoxTop - 1000}, 1000);
                                boxIndex--;
                            }
                        }
                    } else {
                        if (boxIndex != 4) {
                            if (!isAnimate) {
                                bodyEl.animate({scrollTop: tarBoxTop + 1000}, 1000);
                                boxIndex++;
                            }
                        }
                    }
                    //改变右侧按钮的焦点
                    $('span', siderBtn).removeClass('cur').eq(boxIndex).addClass('cur');
                };
                //绑定滚轮事件
                if (window.addEventListener) {
                    window.addEventListener('DOMMouseScroll', mouseWheel, false); //火狐和IE
                }
                window.onmousewheel = document.onmousewheel = mouseWheel; //chrome
            });

     