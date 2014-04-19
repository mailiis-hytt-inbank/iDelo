var idAdmin = getUserIdAdmin();
Id = 0;
Admin = idAdmin[1]
if (Admin==0){
  Id = idAdmin[0];
}

$(function(){
  collectSessionData();
  if(Admin==1){
    $('.left-list').append('<li><a href="add_type.html">Lisa uus tüüp</a></li><li><a href="add_citizen.html">Lisa uus kodanik</a></li>');
  }
})