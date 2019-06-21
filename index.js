function saveData(){
    	 	let name = document.getElementById('namef').value;
            let age = document.getElementById('agef').value;
            let email = document.getElementById('emailf').value;
            let gender = document.getElementById('t1').value;
            let city = document.getElementById('t2').value;
            let object = {
            	"name":"",
            	"age":"",
            	"email":"",
            	"gender":"",
            	"city":""
            };
            let array = []; 
            object.name = name;
            object.age = age;
            object.email = email;
            object.gender = gender;
            object.city = city;

          let p =  JSON.parse(localStorage.getItem('user'));
          console.log(p);
          if(p !=null){
          p.map(function(v){
          	array.push(v);
          });
        }
           array.push(object);
           console.log(array);
          localStorage.setItem('user',JSON.stringify(array));
          document.write("Thankyou for registration." + " " + object.name);
    	  }

function fetch(){
  let user = JSON.parse(window.localStorage.getItem('user'));
  user.map(function(i){
    let b = document.getElementById('name');
    b.value = i.name;
    let c = document.getElementById('age');
    c.value = i.age;
    let d = document.getElementById('e-mail');
    d.value = i.email;
    let e = document.getElementById('gender');
    e.value = i.gender;
    let f = document.getElementById('city');
    f.value = i.city; 
  });
  window.location.href = 'user_community.html';
}
