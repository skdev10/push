
function myAxios (method,url,body = null){
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open(method,url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = ()=>{
      if (xhr.status >= 400) {
        reject(xhr.response);
        console.log('Failed');
      } else {
        resolve(xhr.response);
      }
    };
    
    xhr.onerror= ()=>{
      console.log('Error!!!');
    }
    
    
    xhr.send(JSON.stringify(body));
  })
}

const url = 'https://jsonplaceholder.typicode.com/users';

// myAxios('GET',url);

myAxios('POST',url,{
  name:"Shazaib khan",
  job:"Software Engineer"
}).then((res)=>{
  console.log("Message From then Block",res)
}).catch((err)=>{
  console.log("Error!!!",err);
})

