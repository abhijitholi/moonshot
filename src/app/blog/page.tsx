'use client'
import getDomain from "../lib/getDomain";

async function getData(){
    const domain = getDomain();
    const endpoint = `${domain}/api/post`;
    const response = await fetch(endpoint);
    
    if(!response.ok){
        throw new Error('faild to fetch data');
    }

    const data = await response.json();
    return data;

    return{items:[]}
}

export default async function BlogPost() {
    const data = await getData();
    //const items = data && data.items ? [...data.items] : []; 
    return (
        <>
          <h1>Blog</h1>

          <ul>
            {data && data.items && data.items.map((item: any) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>   
    
        </>
      );
    }