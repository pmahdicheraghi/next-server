import Head from 'next/head';
import Link from 'next/link';
import Navbar from './navbar';
import swr from "swr";

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
      <header class="">
        <h1 class="">کانون فرهنگی هنری مسجد چهارده معصوم</h1>
        <p class="">desined by {data.name}</p>
      </header>
      <Navbar />
      <main>{children}</main>
      {home ? (<div></div>) : (<div></div>)}
    </div>
  );
}
