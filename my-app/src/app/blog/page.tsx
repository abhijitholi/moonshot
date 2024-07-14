'use client'

async function getData(){
//     const endpoint = "http://localhost:3000/api/post";
//     const response = await fetch(endpoint);
    
//     if(!response.ok){
//         throw new Error('faild to fetch data');
//     }

//     const data = await response.json(); 
//     return data;

    return {items:[]}
}



export default async function BlogPost() {
    const data = await getData();
    const items = data && data.items ? [...data.items] : [];

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