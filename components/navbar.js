import Head from 'next/head';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-600 flex flex-wrap mx-auto">
      <div className="container mx-auto items-center">
        <div className="text-white px-2 py-2 float-right hover:bg-white hover:text-black font-titr">
          <Link href="/">
            <a>
              صفحه اصلی
            </a>
          </Link>
        </div>
        <div className="text-white px-2 py-2 float-right hover:bg-white hover:text-black font-mitra">
          <Link href="/">
            <a>
              اطلاعیه ها
            </a>
          </Link>
        </div>
        <div className="text-white px-2 py-2 float-right hover:bg-white hover:text-black">
          <Link href="/">
            <a>
              درباره‌ی ما
            </a>
          </Link>
        </div>
      </div>
    </nav >
  );
}
