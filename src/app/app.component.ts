import { Component } from '@angular/core';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','./css/font-awesome.min.css']
})
export class AppComponent {
  title = 'app';



  constructor(){
  
  }
  
  ngOnInit(){
    $(".mobileMenuItem, .brand, .brand-text").on({
      click : function(){
        $('html,body').animate({ scrollTop: $("body").offset().top }, 'slow');
        $("#desktopMenu").slideUp();
      }});

    $(".parent").on({
      click : function(){
        $('html,body').animate({ scrollTop: $("body").offset().top }, 'slow');
        if ($(window).width() < "992")
        {      
          var $thisSubmenu = $(this).find(".submenu");
          var $submenu = $(".submenu");
   
          if($thisSubmenu.hasClass('open')){
            $submenu.stop().slideUp();            
            $submenu.removeClass('open');
          }else{
            $submenu.stop().slideUp();          
            $thisSubmenu.stop().slideDown();
            $thisSubmenu.addClass('open');
          }
        }
      },
      mouseenter : function(){
        if ($(window).width() > "992")
        {  
          $(this).find(".submenu").stop().slideDown();
        }
      },
      mouseleave : function(){
        if ($(window).width() > "992") 
        {  
          $(".submenu").stop().slideUp();    
         
        }
      }
    });

    if ($(window).width() < "992")
    {
      $("#desktopMenu ul li").on('click',function(){
        $("#desktopMenu").slideUp();
        $('html,body').animate({ scrollTop: $("body").offset().top }, 'slow');
        });   
        $("#desktopMenu>li").on('click',function (){
            if($(this).hasClass('parent') != true){
              $("#desktopMenu").slideUp();
              $('html,body').animate({ scrollTop: $("body").offset().top }, 'slow');
            }
        })
    }
  
    $("#toggleMenu").click(function(){
      $("#desktopMenu").stop().slideToggle("slow");
      $(".submenu").stop().slideUp();     
     $('html,body').animate({ scrollTop: $("body").offset().top }, 'slow');
    });
  }
}
