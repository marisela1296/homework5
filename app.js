
const req = new XMLHttpRequest(); 

req.open('GET', 'https://jsonplaceholder.typicode.com/users');

req.onload = function () { 
	if (req.status == 200) { 
		var pars= JSON.parse(req.response)
		console.log(pars); 
		console.log(pars[0].email);
		var arr=[];
		for (var i=0; i<pars.length; i++) {
			console.log(pars[i].email);
			arr.push(pars[i].email+'<br>');
		}
		document.getElementById('output').innerHTML=arr.sort();
	} else { 
		console.log('ERROR', req.statusText); 
	} 
};

req.onerror = function () { 
	console.log('Network Error'); 
}; 

req.send();

fetch  ("https://jsonplaceholder.typicode.com/users")
.then  ( response => response.json())                   
.then (data => {                                      
            const sortData = data.sort ( (a,b) => a.username.length -b.username.length);
            console.log(typeof sortData);
            sortLength( JSON.stringify(sortData));      
   })  
.catch ( error => console.log('There was an error:' , error))
function sortLength (ourData){
    var needSort = []
    var LOL = JSON.parse(ourData)
   for (i=0; i< LOL.length; i++)
                     {
                         console.log(i)
                         console.log(LOL[i].username);
                         needSort.push(LOL[i].username + '<br>');
                         console.log(needSort)
                    }

document.getElementById("output2").innerHTML = needSort.join(' ') }