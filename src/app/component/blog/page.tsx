// 'use client'
import getDomain from "@/app/lib/getDomain";

async function getData(){
    const domain = getDomain();
    const endpoint = `${domain}/api/post`;
    
    const res = await fetch(endpoint , { cache: 'force-cache' });
    if(!res.ok){
        throw new Error('faild to fetch data');  
    } 
console.log(endpoint) 


if(res.headers.get("content-type")!=="application/json"){
  
  return{items:[]};
}

 
return res.json(); 

}




export default async function BlogPost() {
  const data = await getData();
  const stringData = JSON.stringify(data);
  const items = stringData && stringData ? [...data.items] : []; 
  //console.log(stringData)
  return ( 
      <>
        <h1>Blog</h1>
        <p>Posts:</p>
        {/* <ul>
          {items && items.map((item, idx) => {
            return <li key={`post-${idx}`}>{item.name}</li>
          })}
        </ul> */}
      </>
  );
}