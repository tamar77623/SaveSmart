let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');
let btn = document.getElementById('btn');
let h3 = document.getElementById('h3');
let span1 = document.getElementById('span1');
let span2 = document.getElementById('span2');
let span3 = document.getElementById('span3');
let span4 = document.getElementById('span4')
function h3text(){
    setTimeout(() => {
        h3.innerText = '';
    }, 1700);
}
btn.onclick = function(){
    if(inp1.value === ""){
        h3.innerText = 'Please Enter the original price';
        h3text()
        return;
    }
    if(inp2.value === ""){
        h3.innerText = 'Please Enter Discount percentage';
        h3text();
        return;
    }
    if(inp3.value === ""){
        h3.innerText = 'Please Enter tax rate';
        h3text();
        return;
    }
    account();
    inp1.value = '';
    inp2.value = '';
    inp3.value =''
}
function account(){
    let Discountvalue = (Number(inp1.value) * Number(inp2.value)) / 100;
    console.log(Discountvalue)
    let Priceafterdiscount = Number(inp1.value) / Discountvalue;
    console.log(Priceafterdiscount)
    let Taxvalue = Priceafterdiscount* Number(inp3.value) / 100;
    let totalprice = Priceafterdiscount + Taxvalue;
    console.log(Taxvalue);
    console.log(totalprice)
    span1.innerText = 'Discount Value: ' + Discountvalue;
    span2.innerText = 'Price after discount: ' + Priceafterdiscount;
    span3.innerText = 'Tax Value: ' + Taxvalue;
    span4.innerText = 'Total Price: ' + totalprice;
}