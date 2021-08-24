import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import Navbar from './navbar';
import swr from "swr";

const name = "کانون فرهنگی هنری مسجد چهارده معصوم";
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  const { data, error } = swr('/api/programmerData', (url) => fetch(url).then((res) => res.json()));
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="">
        <Image
          src="/images/top.jpg"
          height={400}
          width={1200}
          layout="responsive"
          alt={name}
        />
      </header>
      <Navbar />
      <main>{children}</main>
      {home ? (<div></div>) : (<div></div>)}
    </div>
  );
}
