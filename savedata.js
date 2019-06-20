function saveData(){
	alert("redirecting");

} 	var addItem = saveData(name, age, email) {
    var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
    
    var newItem = {
        'product-name': name,
        'product-age': age,
        'product-email': email;
    }
    
    oldItems.push(newItem);
    
    localStorage.setItem('itemsArray', JSON.stringify(oldItems));
};

console.log(JSON.parse(localStorage.getItem('itemsArray')));

addItem('name1', 'age1', 'email1');

console.log(JSON.parse(localStorage.getItem('itemsArray')));

addItem('name2', 'age2', 'email2');

console.log(JSON.parse(localStorage.getItem('itemsArray')));
