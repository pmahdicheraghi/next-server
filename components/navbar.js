import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useUser from '../library/useUser';
import fetchJson from '../library/fetchJson';
import { useRouter } from 'next/router';

export default function Navbar() {
  const { user, mutateUser } = useUser();
  const router = useRouter();
  return (
    <nav className="w-full bg-gray-600 flex flex-wrap mx-auto sticky top-0">
      <div className="w-full mx-auto px-3">
        <div className="text-white h-full px-2 py-2 float-right hover:bg-white hover:text-black font-homa text-xl">
          <Link href="/">
            <a>
              صفحه اصلی
            </a>
          </Link>
        </div>
        <div className="text-white h-full px-2 py-2 float-right hover:bg-white hover:text-black font-homa text-xl">
          <Link href="/announcements">
            <a>
              اطلاعیه ها
            </a>
          </Link>
        </div>
        <FontAwesomeIcon icon="fa-solid fa-clock" />
        <div className="text-white h-full px-2 py-2 float-right hover:bg-white hover:text-black font-homa text-xl">
          <Link href="/aboutus">
            <a>
              درباره‌ی ما
            </a>
          </Link>
        </div>
        <div className="text-white my-2 px-4 py-1 float-left hover:bg-white hover:text-black border-2 rounded-full">
          <Link href={user?.isLoggedIn ? "/profile" : "/login"}>
            <a>
              <FontAwesomeIcon icon={["fas", `user${user ? "" : "-plus"}`]} />
              {user?.isLoggedIn ? " " + user.username : "  وارد شوید"}
            </a>
          </Link>
        </div>
      </div>
    </nav >
  );
}
