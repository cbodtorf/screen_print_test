(function(){

window.addEventListener('load', function(){
  app.init();
})

var app = {
  init: function() {
    this.styles()
    this.events()
  },
  styles: function() {

  },
  events: function() {
    var sandwichLayersRange = document.querySelector('.sandwich-layers')
    var imgLayerWrappers = document.querySelectorAll('.img-wrapper:not(:first-of-type)')
    var imgLayers = document.querySelectorAll('.img-wrapper img')


    sandwichLayersRange.addEventListener('input', function(){
      console.log(sandwichLayersRange.value);

      var tVal = sandwichLayersRange.value -130;
      imgLayerWrappers.forEach(function(e){
        e.style.marginLeft = tVal + 'px'
      })

      var rVal = sandwichLayersRange.value -30;
      imgLayers.forEach(function(e){
        console.log("tranform", e.style.transform);
        e.style.transform = "rotate3d(-0.2,1,-0.1," + rVal + "deg)"
      })
    })

  }

}

})();
