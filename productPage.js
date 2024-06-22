let x = document.querySelector('#descriptionBox h2').innerHTML;
let y=  document.querySelector('#imageBox img').src;
let z = document.querySelectorAll('#priceBox tr')[1];
let price = z.querySelector('td span').innerHTML;
let itemObj = {
    title: x,
    source: y,
    number: 0,
    itemPrice: price
};

console.log(JSON.stringify(itemObj));

function storeToLocal()
{
    arrayOfItems = Object.keys(localStorage);
    if(!(arrayOfItems.includes(itemObj.title))) //If the user has already cleared the item from the list of items in the 'Add To Cart' Page, then if he or she comes back to this product page and presses add to cart then we would want the count of the items to go back to zero before it is incremented.
    {
        console.log('Item is not present in local storage.');
        itemObj.number =0;
    }
    itemObj.number +=1;
    localStorage.setItem(x,JSON.stringify(itemObj));
}
document.querySelector('#addToCartBtn').addEventListener('click',storeToLocal);


function helloWorld()
{
    console.log('storage has been modified');
}

window.addEventListener('storage', helloWorld);