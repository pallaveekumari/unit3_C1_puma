


var productsarr=JSON.parse(localStorage.getItem("products"))

productsarr.map(function(el,i)
{
    var div=document.createElement("div")
    div.setAttribute("id","divsize")

    var image=document.createElement("img")
    image.src=el.image;
    image.setAttribute("id","imagesize")

    var type=document.createElement("h2")
    type.innerText=el.type;

    var description=document.createElement("h2")
    description.innerText=el.description;

    var price=document.createElement("h2")
    price.innerText=el.price;


    var btn=document.createElement("button")
    btn.innerText="Remove product";

    
    btn.setAttribute("id","remove_product")
    btn.addEventListener("click",function()
    {
        remove(el,i)
    })

    div.append(image,type,description,price,btn)
    document.getElementById("all_products").append(div)
});

function remove(el,i)
{
    productsarr.splice(i,1)
    localStorage.setItem("products",JSON.stringify(productsarr))
    window.location.reload();
}