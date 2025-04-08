// Promises => Pending -> Rejected / Fullfilled
// Async/Await  => 
// API   => Application Programming Interface

async function getProducts() {
    const ApiData = await fetch(`https://fakestoreapi.com/products`);

    console.log(ApiData);


    const data = await ApiData.json();

    console.log(data);
    
    

}



getProducts();