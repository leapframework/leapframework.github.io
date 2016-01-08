
$(function(){


//指引页

	if($("[ZeroClipboard]").size() > 0){
		//指引页 代码复制
		// 定义一个新的复制对象
		var clip = new ZeroClipboard($('.code .prettyprint_btn'), {
		 moviePath: "../ZeroClipboard.swf"
		} );
		// 复制内容到剪贴板成功后的操作
		clip.on( 'complete', function(client, args) {
			$('.code .prettyprint_btn').next('.tip').hide();
			$(this).next('.tip').show();
		});
		//点击页面其他地方tip消失
		$(document).click(function(){
			$('.code .prettyprint_btn').next('.tip').hide();
		});
	

		
		//	  指引页每个li的进入界面的动画	 : not(linux,windows)
//			$('ul.tutorial-list > li:first-child').addClass('fadein');
			$(document).on("scroll", function(){
				$('ul.tutorial-list > li').not('.tutorial.eclipse > li:first-child,.tutorial.maven3 > li:first-child').each(function(i, v){	
//					console.log(i);
					var guide_top = $(this).offset().top - $(document).scrollTop() + 150;
					if(guide_top <= $(window).height()){
						$(this).addClass('fadein');
					}
				});
				
				
				
			});	


//tab点击 内容切换
		$('ul.tab li').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			var index = $(this).index();
			$(this).parent().next('ol').children('li').eq(index).addClass('active').siblings().removeClass('active');
			$(this).parent().next('ol').children('li').eq(index).children('ul').children('li:not(:first-child)').removeClass('fadein');	
			$('ul.linux > li,ul.windows > li').removeClass('fadein');
		})				
	
//maven3中系统选择 tab切换	
		$('ul.tab_system li:first-child').click(function(){
				$('ul.linux').show();
				$('ul.windows').hide();
				$('ul.linux > li:first-child').addClass('fadein');
				
		});
			$('ul.tab_system li:last-child').click(function(){
				$('ul.linux').hide();
				$('ul.windows').show();
				$('ul.windows > li:first-child').addClass('fadein');
		})	
	
	
	}


	
	


})

//$("[data-toggle='tooltip']").tooltip();   










