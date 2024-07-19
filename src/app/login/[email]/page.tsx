import axios from 'axios';
//import { useRouter } from 'next/navigation';
//const router = useRouter();
export default async function Email (params: { params: { email: string } }) {
    // try {
    //     const response = await axios.get(`./api/auth/${params.params.email}`);  
          
       
        
    //     if (response.status === 200) {
    //         console.log(response)
    //       setTimeout(() => {
    //         router.push(`login/${params.params.email}`);
    //       }, 1000);
    //     }
    //   } catch (error) {
    //      // Handle error
    //      console.log('Login failed:', error);
    //   }
    return (
        <>
            <h1>email {params.params.email}</h1>
        </>
    )
}