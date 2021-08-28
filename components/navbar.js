import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useUser from '../library/useUser';

export default function Navbar() {
  const { user } = useUser();

  return (
    <nav className="w-full bg-gray-800 flex flex-wrap mx-auto sticky top-0">
      <div className="w-full mx-auto px-3">
        <div className="text-white h-full px-2 py-3 float-right hover:bg-white hover:text-black font-yekan text-md">
          <Link href="/">
            <a>
              صفحه اصلی
              <FontAwesomeIcon icon={["fas", `home`]} className="ml-1"/>
            </a>
          </Link>
        </div>
        <div className="text-white h-full px-2 py-3 float-right hover:bg-white hover:text-black font-yekan text-md">
          <Link href="/announcements">
            <a>
              اطلاعیه ها
            </a>
          </Link>
        </div>
        <div className="text-white h-full px-2 py-3 float-right hover:bg-white hover:text-black font-yekan text-md">
          <Link href="/aboutus">
            <a>
              درباره‌ی ما
            </a>
          </Link>
        </div>
        <div className="text-white my-2 px-2 pt-1 float-left hover:bg-white hover:text-black border-2 rounded-lg font-yekan truncate w-25">
          <Link href={user?.isLoggedIn ? "/profile" : "/login"}>
            <a className="text-sm">
              <FontAwesomeIcon icon={["fas", `user${user ? "" : "-plus"}`]}  className="mr-1" />
              {user?.isLoggedIn ? user.username : "ورود"}
            </a>
          </Link>
        </div>
      </div>
    </nav >
  );
}
