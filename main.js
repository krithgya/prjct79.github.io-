var images = ["https://as2.ftcdn.net/jpg/01/15/47/87/500_F_115478791_GG0yIcVA8Mhe6MAXEvgcfyL7JtuVfYvm.jpg", "https://cdn2.vectorstock.com/i/1000x1000/70/11/young-man-cartoon-vector-17297011.jpg", "https://i.pinimg.com/736x/26/54/0c/26540c6037f048c80ffcf0be31c944ff.jpg","https://flyclipart.com/thumb2/older-sister-clipart-clip-art-images-95937.png" ,"https://previews.123rf.com/images/tigatelu/tigatelu1906/tigatelu190600001/124855563-wektorowa-ilustracja-kresk%C3%B3wka-szcz%C4%99%C5%9Bliwa-rodzina-na-bia%C5%82ym-tle.jpg"];
var names = ["Mom", "Dad", "Me", "Sister" ,"Us"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}
