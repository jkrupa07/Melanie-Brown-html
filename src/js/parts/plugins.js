import "slick-carousel";

export class Plugins {

  init() {
    this.hideShow();
  }
  hideShow(){
    $(document).ready(function(){
      $("#hide").click(function(){
        $("p").hide();
      });
      $("#show").click(function(){
        $("p").show();
      });
    });
  }

}
