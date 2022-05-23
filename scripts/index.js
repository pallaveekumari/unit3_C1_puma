//store the products array in localstorage as "products"



function Products(t,d,p,i)
{
   this.type=t;
   this.description=d;
   this.price=p;
   this.image=i;
}

function mydata()
{
    event.preventDefault

    var form=document.getElementById("products");
    var type=form.type.value;
    var description=form.desc.value;
    var price=form.price.value;
    var image=form.image.value;


    var dataarr=JSON.parse(localStorage.getItem("products")) ||[]

    var dataobj=new Products(type,description,price,image)

    dataarr.push(dataobj)

    localStorage.setItem("products",JSON.stringify(dataarr));

    form.type.value="";
    form.desc.value="";
    form.price.value="";
    form.image.value="";
}