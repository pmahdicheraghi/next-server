import fetchJson from "../library/fetchJson";
import Link from "next/link";
import useUser from '../library/useUser';
import Router from "next/router";
import Image from "next/image"

// layout for page

export default function Login() {
  useUser({ redirectTo: '/profile', redirectIfFound: true });

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value
    };

    try {
      fetchJson('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }).then((result) => {
        if (result.valid) {
          Router.push("/profile");
        } else {
          alert(result.message);
        }
      });
    } catch (error) {
      console.error('An unexpected error happened:', error);
    }
  }

  return (
    <div className="relative w-full h-full py-40 min-h-screen">
      <Image
        src="/images/log_back.jpg"
        layout="fill"
        objectFit="cover"
        quality={100} 
      />
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white bg-opacity-40 border-0 pt-10">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={handleSubmit} className="text-right">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-sm font-yekan mb-2"
                      htmlFor="grid-password"
                    >
                      نام کاربری
                    </label>
                    <input
                      name="username"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-black font-yekan bg-opacity-80 bg-white text-right rounded-md text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="نام کاربری"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-sm font-yekan mb-2"
                      htmlFor="grid-password"
                    >
                      گذرواژه
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-black font-yekan bg-opacity-80 bg-white text-right rounded-md text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="گذرواژه"
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        name="rememeberMe"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm text-blueGray-600 font-yekan">
                        مرا به خاطر بسپار
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blue-50 bg-opacity-90 text-3xl font-yekan font uppercase px-6 pb-4 pt-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      ورود
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="font-mitra text-lg text-black bg-white bg-opacity-50 px-2 py-1 rounded-md hover:shadow-xl"
                >
                  <small>فراموشی گذرواژه</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link href="/register">
                  <a className="font-mitra text-lg text-black bg-white bg-opacity-50 px-2 py-1 rounded-md hover:shadow-xl">
                    <small>ساخت حساب کاربری</small>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}