const produtc = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
};
let productsArray;
let tempProductsArray=[];
let priceRangeArray=[];

const sizeArray=["S","M","L","XL","XXL","XXXL"]

function randomColor(){
      let r = Math.floor(Math.random() * 256); // Random between 0-255
      let g = Math.floor(Math.random() * 256); // Random between 0-255
      let b = Math.floor(Math.random() * 256); // Random between 0-255
      return 'rgb(' + r + ',' + g + ',' + b + ')';
    // Create some random color
}

function randomSize(){
  let str="";
  for(let i=0;i<3;i++){
    let randomInd=Math.floor(Math.random()*sizeArray.length)
    str+=sizeArray[randomInd]+","
  }
  return str.substring(0,str.length-1);
}
const input=document.querySelector("main-content>input");
const menItems=document.getElementsByClassName("items")[0];
const womenItems=document.getElementsByClassName("items")[1];
const jwelleryItems=document.getElementsByClassName("items")[2];
const electronicItems=document.getElementsByClassName("items")[3];

//SECTIONS
const menSection=document.querySelectorAll("main-content>section")[0]
const womenSection=document.querySelectorAll("main-content>section")[1]
const jewelSection=document.querySelectorAll("main-content>section")[2]
const eleSection=document.querySelectorAll("main-content>section")[3]

//FILTERS
let filterByMen=document.getElementsByClassName("filter")[1];
let filterByWomen=document.getElementsByClassName("filter")[2];
let filterByJewellery=document.getElementsByClassName("filter")[3];
let filterByElectronics=document.getElementsByClassName("filter")[4];
let filterAll=document.getElementsByClassName("filter")[0];
let activeClass="filter active"
let filterByRating=document.querySelectorAll("datalist>option");
let range=document.getElementById("range");
let checkbox1=document.getElementById("0-25")
let checkbox2=document.getElementById("25-50")
let checkbox3=document.getElementById("50-100")


checkbox1.addEventListener("change",(e)=>{
  console.log(e.target.checked);

for(let i=0;i<productsArray.length;i++){
//  tempProductsArray=[]
  let item=productsArray[i];
  if(e.target.checked===true){
    if(item.price>=0&&item.price<=25){
      tempProductsArray.push(item);
    }
  }
  else{
    tempProductsArray.push(item);
  }
}
 showData(tempProductsArray);
 tempProductsArray=[]
})
checkbox2.addEventListener("change",(e)=>{
  console.log(e.target.checked);
  
for(let i=0;i<productsArray.length;i++){
  // tempProductsArray=[]
  let item=productsArray[i];
  if(e.target.checked===true){
    if(item.price>=25&&item.price<=50){
      tempProductsArray.push(item);
    }
  }
  else{
    tempProductsArray.push(item);
  }
}
 showData(tempProductsArray);
 tempProductsArray=[]
})
checkbox3.addEventListener("change",(e)=>{
  console.log(e.target.checked);
  
for(let i=0;i<productsArray.length;i++){
  // tempProductsArray=[]
  let item=productsArray[i];
  if(e.target.checked===true){
    if(item.price>=50&&item.price<=100){
      tempProductsArray.push(item);
    }
  }
  else{
    tempProductsArray.push(item);
  }
}
 showData(tempProductsArray);
 tempProductsArray=[]
})


// filterByPrice.addEventListener("click",)
range.addEventListener("change",(e)=>{
  tempProductsArray=[];
  console.log(e.target.value);
  for(let i=0;i<productsArray.length;i++){
    let item=productsArray[i];
    let rating=parseInt(item.rating.rate);
    let val=parseInt(e.target.value);
    if(rating<=val){
      tempProductsArray.push(item);
    }
  
  }
  showData(tempProductsArray);
})
// console.log(filterByRating[0].value);

//FILTER BY RATING
// for(let i=0;i<filterByRating.length;i++){
//   filterByRating[i].addEventListener("click",(e)=>{
//     console.log("hi",e);
//   // console.log(event.target.value);
//   })
// }

//SEARCH ITEMS
input.addEventListener("keyup",(e)=>{
   searchResult(e.target.value.toLowerCase());
})

function searchResult(searchString){
  let tempItems=[];
  for(let i=0;i<productsArray.length;i++){
let product=productsArray[i];
    if(product.title.toLowerCase().includes(searchString)){
      tempItems.push(product);
      console.log(product.title);
    }
  }
  console.log(tempItems.length);

   showData(tempItems);
}


filterAll.addEventListener("click",()=>{
  changeClass(filterByMen,filterByWomen,filterByJewellery,filterByElectronics);
  menSection.style.display="block"
  womenSection.style.display="block"
  jewelSection.style.display="block"
  eleSection.style.display="block"
  filterAll.className=activeClass;
})

// filter by men
filterByMen.addEventListener("click",()=>{
  filterByMen.className=activeClass
  changeClass(filterAll,filterByWomen,filterByJewellery,filterByElectronics);
  menSection.style.display="block"
  womenSection.style.display="none"
  jewelSection.style.display="none"
  eleSection.style.display="none"
// console.log(section);
})

//filter by women
filterByWomen.addEventListener("click",()=>{
  filterByWomen.className=activeClass;
  changeClass(filterByMen,filterAll,filterByJewellery,filterByElectronics);

  womenSection.style.display="block"
  menSection.style.display="none"
  jewelSection.style.display="none"
  eleSection.style.display="none"
// console.log(section);
})

//filter by jewelry
filterByJewellery.addEventListener("click",()=>{
  filterByJewellery.className=activeClass
  changeClass(filterByMen,filterByWomen,filterAll,filterByElectronics);
  jewelSection.style.display="block"
  eleSection.style.display="none"
  womenSection.style.display="none"
  menSection.style.display="none"
})


// filter by electronics
filterByElectronics.addEventListener("click",()=>{
  filterByElectronics.className=activeClass;
  changeClass(filterByMen,filterByWomen,filterByJewellery,filterAll);

  eleSection.style.display="block"

  jewelSection.style.display="none"
  
  womenSection.style.display="none"
  menSection.style.display="none"
})

function changeClass(b1,b2,b3,b4){
  b1.className=b2.className=b3.className=b4.className="filter";
}

async function showProducts(){
  let res=await fetch("https://fakestoreapi.com/products/");
   let data=await res.json();
  
     productsArray=data;
    //  console.log(productsArray);
    showData(productsArray);
//  <div class="item">
//               <img src="tshirt.png" alt="Item" />
//               <div class="info">
//                 <div class="row">
//                   <div class="price">$100</div>
//                   <div class="sized">S,M,L</div>
//                 </div>
//                 <div class="colors">
//                   Colors:
//                   <div class="row">
//                     <div class="circle" style="background-color: #000"></div>
//                     <div class="circle" style="background-color: #4938af"></div>
//                     <div class="circle" style="background-color: #203d3e"></div>
//                   </div>
//                 </div>
//                 <div class="row">Rating:</div>
//               </div>
//               <button id="addBtn">Add to Cart</button>
//             </div> 


}
showProducts();

function showData(productsList){
  menItems.innerHTML=""
  womenItems.innerHTML=""
  jwelleryItems.innerHTML=""
  electronicItems.innerHTML=""
       console.log(productsList);

  for(let i=0;i<productsList.length;i++){
    
    let product=productsList[i];
    let image=document.createElement("img")
    image.src=product.image;

    let item=document.createElement("div");
    item.className="item";
    let info=document.createElement("div")
    info.className="info"


    let row=document.createElement("div")
    row.className="row"
    let price=document.createElement("div")
    price.className="price"
    price.innerText="$"+product.price

    let size=document.createElement("div")
    size.className="sized";
    size.innerText=randomSize();


    let colors=document.createElement("div")

    colors.innerText="Colors:"
    let c1=document.createElement("div")
    c1.className="circle"
    c1.style.backgroundColor=randomColor();
    colors.appendChild(c1);

    let c2=document.createElement("div")
    c2.className="circle"
    c2.style.backgroundColor=randomColor();
    colors.appendChild(c2);

    let c3=document.createElement("div")
    c3.className="circle"
    c3.style.backgroundColor=randomColor();
    colors.appendChild(c3);

    colors.className="colors"



    let colorsRow=document.createElement("div")
    colorsRow.className="row";
   


    let rating=document.createElement("div")
    rating.className="row"
    rating.innerText="Rating : "+product.rating.rate;
    let addBtn=document.createElement("button")
    addBtn.innerText="Add To Cart"
    addBtn.setAttribute("id","addBtn")



    row.appendChild(price)
    row.appendChild(size);


    colors.appendChild(colorsRow);

    info.appendChild(row)
    info.appendChild(colors)
    info.appendChild(rating);

    item.appendChild(image)
    item.appendChild(info)
    item.appendChild(addBtn)

   if(product.category=="men's clothing"){
    menItems.appendChild(item);
   }
   else if(product.category=="women's clothing"){
    womenItems.appendChild(item);
   }
   else if(product.category=="jewelery"){
    jwelleryItems.appendChild(item);
   }
   else if(product.category=="electronics"){
    electronicItems.appendChild(item);
   }
   }
   console.log("called");
}