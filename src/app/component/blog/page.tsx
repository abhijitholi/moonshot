// 'use client'
import getDomain from "@/app/lib/getDomain";


// fetch cashing option

//force cashing



async function getData(){
    const domain = getDomain();
    const endpoint = `${domain}/api/post`;
    
    // const res = await fetch(endpoint);

    const res = await fetch('https://fakestoreapi.com/products');
    
    if(!res.ok){
        throw new Error('faild to fetch data');
    }

// if(res.headers.get("content-type")!=="application/json"){
  
//   return{}
// }

 
return res.json(); 

}


interface Item {
  title: string;
  // add other properties if needed
}

export default async function BlogPost() {
  const data = await getData();
  const stringData = JSON.stringify(data);
  const items: Item[] = stringData ? JSON.parse(stringData) : [];
  //console.log(stringData);
  return (
    <>
      <h1>Blog</h1>
      <p>Posts:</p>
      <ul>
        {items.map((item: Item, idx: number) => {
          return <li key={`post-${idx}`}>{item.title}</li>;
        })}
      </ul>
    </>
  );
}

// export default async function BlogPost() {
//     const data = await getData();
//     const stringData = JSON.stringify(data);
//     const items = stringData && stringData ? JSON.parse(stringData) : []; 
//     console.log(stringData)
//     return ( 
//         <>
//           <h1>Blog</h1>
//           <p>Posts:</p>
//           <ul>
//       {items && items.map((item, idx) => {
//         return <li key={`post-${idx}`}>{item.title}</li>
//       })}
//     </ul>
      
//         </>
//       );
//     }