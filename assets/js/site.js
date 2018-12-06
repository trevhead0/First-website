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
  //setup photo gallery
  figure=document.createElement('figure');
  image=document.createElement('img');
  image.setAttribute('src','../assets/images/unicorns.jpg');
  image.setAttribute('id','image-1');
  image.setAttribute('class','pg-content');
  figure.setAttribute('class','pg-figure');
  figure.append(image);
  //image 2
  figure2=document.createElement('figure');
  image=document.createElement('img');
  image.setAttribute('id','image-2');
  image.setAttribute('class','pg-content');
  image.setAttribute('src','../assets/images/cruise.jpg');
  figure2.setAttribute('class','pg-figure');
  figure2.append(image);
  //image 3
  figure3=document.createElement('figure');
  image=document.createElement('img');
  image.setAttribute('id','image-3');
  image.setAttribute('class','pg-content');
  image.setAttribute('src','../assets/images/notdamomma.jpg');
  figure3.setAttribute('class','pg-figure');
  figure3.append(image);
  //image 4
  figure4=document.createElement('figure');
  video=document.createElement('video');
  video.setAttribute('id','video-1');
  video.setAttribute('class','pg-content');
  video.setAttribute('src','../assets/images/to_cool.mp4')
  figure4.setAttribute('class','pg-figure');
  //video.setAttribute('controls','controls') Set this later
  figure4.append(video);
  //image 5
  figure5=document.createElement('figure');
  image=document.createElement('img');
  image.setAttribute('id','image-5');
  image.setAttribute('class','pg-content');
  image.setAttribute('src','../assets/images/adelinegaming.jpg');
  figure5.setAttribute('class','pg-figure');
  figure5.append(image);
  pg.append(figure);
  pg.append(figure2);
  pg.append(figure3);
  pg.append(figure4);
  pg.append(figure5);

  //modify photogallery
}
});
