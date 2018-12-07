(function(){
  if(typeof (document.querySelector)==="undefined"){
    return;}
  else{
    console.log("we are good");
  }})();
//  ---------------------------------------------
document.addEventListener('DOMContentLoaded', function(){
  // only use java(this function) if page fully loaded

  var qs=document.querySelector('html');
  qs.className='js';

  //grab my photogallery i want to work with
  if(document.querySelector('#family-page')!=null){
  var pg=document.querySelector('#photo-gallery')
  console.log(pg);


  //setup photo gallery and i Probably should have made them class hidden and just used toggle, but eh
  //I am going for no photgallery if they dont have js(but once again it could be default hidden and js unhides it.)
  document.querySelector('.focus').remove();
  var urls= ['../assets/images/family','../assets/images/unicorns.jpg','../assets/images/cruise.jpg','../assets/images/notdamomma.jpg','../assets/images/adelinegaming.jpg','../assets/images/to_cool.mp4']
  var figid= ['start-image','image-1','image-2','image-3','image-4','video-1'];

  for(var i=0;i<urls.length;i++)
  { figure=document.createElement('figure');
    image=document.createElement('img');
    if(i==0)
    figure.setAttribute('class','focus')
    image.setAttribute('src',urls[i]);
    image.setAttribute('id',figid[i]);
    image.classList.add('pg-content');
    if(i!=0)
    figure.classList.add('nonfocus');
    figure.append(image);
    pg.append(figure)}

  //modify photogallery

  pg.addEventListener('click',function(e){
  var focus=document.querySelector('.focus');
  focus.classList.toggle('focus');
  focus.classList.toggle('nonfocus')
  e.target.parentElement.classList.toggle('focus');
  e.target.parentElement.classList.toggle('nonfocus')
  });

}
});
