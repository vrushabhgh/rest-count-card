
fetch("https://restcountries.eu/rest/v2/all")
.then((resp)=>{
  return resp.json();
})
.then((data)=>{
  flam(data);
}) 
.catch((err)=>{
  console.log(err);
});

function handleOnClick(lat,lon){
  console.log(lat,lon);
  let data = fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9db255fec1fc81af01c6efe029be8469`);
console.log(data);
  data.then((res) =>{
    return res.json();
  })
  .then((daa) => {
    console.log(daa);
  })
 
}



function flam(params){
  console.log(params)
  var container = flag('div','container');
  var row = flag('div','row');
  
   params.forEach(obj=>{       
      var col = flag('div','col-lg-4 mt-4');
      var card = flag('div','card');
      var cardhead=flag('div','card-header');
      cardhead.innerHTML=obj.name; 

      var cardbody = flag("div", "card-body");
      var img = flag("img", "card-img-top mb-2 mt-2 ml-2 mr-2");
    img.setAttribute("src", obj.flag);
    var a = flag("a");
    a.append(img);
    var capital = flag('h5','card-title');
    capital.innerHTML="Capital: "+obj.capital;
    var region = flag('h5','card-title');
    region.innerHTML="Region: "+obj.region;
    var countrycode = flag('h5','card-title');
    countrycode.innerHTML="Country Code: "+obj.alpha3Code;
    var weatherbtn=flag("button","btn-warning")
    weatherbtn.innerHTML="Wheather check";
    weatherbtn.setAttribute("onClick",`handleOnClick(${obj.latlng[0]},${obj.latlng[1]})`);
    cardbody.append(img,capital,region,countrycode,weatherbtn);
    card.append(cardhead ,cardbody);
    col.append(card);
    row.append(col);
    container.append(row);
  });
  document.body.append(container);
}


  function flag(elemName, elemClass = "", elemId = "") {
    var element = document.createElement(elemName);
    element.setAttribute("class", elemClass);
    element.setAttribute("id", elemId);
    return element;
  }