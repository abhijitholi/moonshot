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
    const items = data && data.items ? [...data.items] : [];
    console.log(process.env.PUBLIC_DOMAIN)  
    return (
        <>
          <h1>Blog</h1>
          {items.length > 0 ? (
            <ul>
              {items.map((item, index) => (
                <li key={`post-${index}`}>{item.name}</li>
              ))}
            </ul>
          ) : (
            <p>No blog posts available</p>
          )}
        </>
      );
    }