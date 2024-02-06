// xhr request


// Client se Server pr Data Send Karna 
// AXIOS library
// Axios Promise Based

function myAxios(method, url, body = null){
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();


    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = ()=>{
      if (xhr.status >= 400) {
        reject(xhr.response);
        console.log("Failed");
      }else{
        resolve(xhr.response);
      }
    };

    xhr.onerror= ()=>{
      reject(xhr.response);
    }
    xhr.send(JSON.stringify(body));

  })
}
const url = 'https://jsonplaceholder.typicode.com/users';
// myAxios('GET',url);
myAxios('POST',url, {
  name:'Shazaib',
  job: 'Software Developer'
}).then((res)=>{
  console.log('Message From Than Block',res)
});

// function myAxios(method, url, body = null){
//   const xhr = new XMLHttpRequest();
  
  
//   xhr.open(method,url);
//   xhr.responseType = 'json';
//   xhr.setRequestHeader = 'Content/Type', 'application/json'

//   xhr.onload=()=>{
//     if (xhr.status >= 400) {
//         console.log('Failed')
//     }else{
//       console.log(xhr.response);
//     }
//     // console.log(xhr.status);
//   };
  
//   xhr.onerror = ()=>{
//     console.log("Error!!!");
//   }
//   xhr.send(JSON.stringify(body));
// }


// const url = 'https://jsonplaceholder.typicode.com/users';
// myAxios('GET',url);
// myAxios('POST',url,{
//   name:"Shazaib khan",
//   job:"Software Developer"
// });
