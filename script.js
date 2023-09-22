
const prodDiv = document.getElementById('products');
const search = document.getElementById('search');
const searchDiv = document.getElementById('searcharea');
const h4 = document.getElementsByTagName('h4')
var productname= [];

fetch('https://dummyjson.com/products')
.then(response =>response.json())
.then(data => data.products.forEach(element => {

    productname.push(element)
    prodDiv.innerHTML +=

    `
    <div class="card cards" style="width: 18rem;">
            <img src="${(element.images)[0]}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.description}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${element.brand}</li>
              <li class="list-group-item">${element.category}</li>
            </ul>
            <div class="card-body">
                <button type="button" class="btn btn-warning">${element.rating}⭐</button>
                <button class="btn btn-primary" type="submit">Buy Now</button>
            </div>
          </div>
    `

}))


search.addEventListener('input', (e)=>
{
    let val = e.target.value.toLowerCase()
    h4[0].style.display = 'block';
    productname.forEach(element =>{

    if((val.includes(element.title.toLowerCase()) || val.includes(element.brand.toLowerCase())))
    {
        searchDiv.innerHTML =

        `
        
        <div class="card" style="width: 18rem;">
                <img src="${(element.images)[0]}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <p class="card-text">${element.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">${element.brand}</li>
                  <li class="list-group-item">${element.category}</li>
                </ul>
                <div class="card-body">
                    <button type="button" class="btn btn-warning">${element.rating}⭐</button>
                    <button class="btn btn-primary" type="submit">Buy Now</button>
                </div>
              </div>
        `
    
    }

    })
    
})

