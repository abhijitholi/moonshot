import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
  <nav>
    <div class="">
      <div class="flex justify-between h-16 bg- px-10 bg-white shadow items-center">
        <div class="flex items-center space-x-8">
          {/* <h1 class="text-xl lg:text-2xl font-bold cursor-pointer">Tailwind</h1> */}
          <div class="hidden md:flex justify-around space-x-4">
            {/* <a href="#" class="hover:text-indigo-600 text-gray-700">Home</a>
            <a href="#" class="hover:text-indigo-600 text-gray-700">About</a>
            <a href="#" class="hover:text-indigo-600 text-gray-700">Service</a>
            <a href="#" class="hover:text-indigo-600 text-gray-700">Contact</a> */}
          </div>
        </div>
        <div class="flex space-x-4 items-center">
          <a href="/blog" class="text-gray-800 text-sm">LOGIN</a>
          <a href="#" class="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">SIGNUP</a>
        </div>
      </div>
    </div>
  </nav>
  <div class="h-screen bg-gray-100 flex justify-center">
    <div class="py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
      <form action="">
        <div className="mb-6">
          <label for="name" class="block text-gray-800 font-bold">Name:</label>
          <input type="text" name="name" id="name" placeholder="username" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
        </div>

        <div>
          <label for="email" class="block text-gray-800 font-bold">Email:</label>
          <input type="text" name="email" id="email" placeholder="@email" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />

          <a href="#" class="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600">Forget Password</a>
        </div>
        <butt class="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Login</butt>
      </form>
    </div>
  </div>
</header>
    </>
  );
}
