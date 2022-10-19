import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="w-full h-96 bg-[url('https://images.unsplash.com/photo-1509785307050-d4066910ec1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1328&q=80')] bg-cover bg-center flex justify-center items-center">
      <main>
        <div className="flex flex-col justify-center items-center bg-black/30 p-4">
          <h1 className="text-center sm:text-5xl text-3xl text-white font-bold drop-shadow-lg">
            <span>Coffee to go</span>
          </h1>
          <p className="mt-5 text-center md:text-lg text-white">
            Don't queue to pay, or wait in line for your order to be ready.
            <br /> Order online while you get to the shop, pick it up and go!
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#productList"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-900 px-8 py-3 text-base font-medium text-white hover:bg-yellow-800 md:py-4 md:px-10 md:text-lg"
              >
                Buy a coffee
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link
                to="/signup"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-400 px-8 py-3 text-base font-medium text-yellow-900 hover:bg-yellow-300 md:py-4 md:px-10 md:text-lg"
              >
                Get subscription
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
