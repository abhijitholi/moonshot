// 'use client'
import getDomain from "../../lib/getDomain";


// fetch casing option

//force cashing



async function getData(){
    const domain = getDomain();
    const endpoint = `${domain}/api/post`;
    const response = await fetch(endpoint);
    
    if(!response.ok){
        throw new Error('faild to fetch data');
    }

if(response.headers.get("content-type")!=="application/json"){
  
  return{items:[]}
}

 
return response.json();

}

export default async function BlogPost() {
    const data = await getData();
    const items = data && data.items ? [...data.items] : []; 
    console.log(data.items)
    return ( 
        <>
          <h1>Blog</h1>
          <p>Posts:</p>
            {items && items.map((item,idx)=>{
              return <li key={`post-${idx}`}>{item.name}</li>
            })}
      
        </>
      );
    }