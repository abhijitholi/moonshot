import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
  <nav>
    <div className="">
      <div className="flex justify-between h-16 bg- px-10 bg-white shadow items-center">
        <div className="flex items-center space-x-8">
          {/* <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">Tailwind</h1> */}
          <div className="hidden md:flex justify-around space-x-4">
            {/* <a href="#" className="hover:text-indigo-600 text-gray-700">Home</a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">About</a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">Service</a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">Contact</a> */}
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          <Link href="/blog" className="text-gray-800 text-sm">LOGIN</Link>
          <Link href="#" className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">SIGNUP</Link>
        </div>
      </div>
    </div>
  </nav>
  <div className="h-screen bg-gray-100 flex justify-center">
    <div className="py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
      <form action="">
        <div className="mb-6">
          <label  className="block text-gray-800 font-bold">Name:</label>
          <input type="text" name="name" id="name" placeholder="username" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
        </div>

        <div>
          <label  className="block text-gray-800 font-bold">Email:</label>
          <input type="text" name="email" id="email" placeholder="@email" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />

          <Link href="#" className="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600">Forget Password</Link>
        </div>
        <button className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Login</button>
      </form>
    </div>
  </div>
</header>
    </>
  );
}
