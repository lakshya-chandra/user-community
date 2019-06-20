function saveData(){
	alert("redirecting");

} 	var addItem = saveData(name, image, price) {
    var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
    
    var newItem = {
        'product-name': name,
        'product-image': image,
        'product-price': price
    };
    
    oldItems.push(newItem);
    
    localStorage.setItem('itemsArray', JSON.stringify(oldItems));
};

console.log(JSON.parse(localStorage.getItem('itemsArray')));

addItem('name1', 'image1', 'price1');

console.log(JSON.parse(localStorage.getItem('itemsArray')));

addItem('name2', 'image2', 'price2');

console.log(JSON.parse(localStorage.getItem('itemsArray')));
