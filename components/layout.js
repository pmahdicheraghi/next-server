import Head from 'next/head';
import Link from 'next/link';
import useSWR from "swr";

export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  const { data, error } = useSWR('/api/designer', (url) => fetch(url).then((res) => res.json()));
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="w3-top">
        <div className="w3-bar w3-sand w3-card w3-left-align w3-large">
          <Link href="#">
            <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-sand" onClick="myFunction()" title="Toggle Navigation Menu"><i className="fa fa-bars"></i></a>
          </Link><Link href="#">
            <a className="w3-bar-item w3-button w3-padding-large w3-white">Home</a>
          </Link><Link href="#">
            <a className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 1</a>
          </Link><Link href="#">
            <a className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 2</a>
          </Link><Link href="#">
            <a className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 3</a>
          </Link><Link href="#">
            <a className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Link 4</a>
          </Link>
        </div>
        <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
          <Link href="#">
            <a className="w3-bar-item w3-button w3-padding-large">Link 1</a>
          </Link><Link href="#">
            <a className="w3-bar-item w3-button w3-padding-large">Link 2</a>
          </Link><Link href="#">
            <a className="w3-bar-item w3-button w3-padding-large">Link 3</a>
          </Link><Link href="#">
            <a className="w3-bar-item w3-button w3-padding-large">Link 4</a>
          </Link>
        </div>
      </div>
      <header className="w3-container w3-sand w3-center header">
        <style jsx>{`.header {padding:50px 16px}`}</style>
        <h1 className="w3-margin w3-jumbo">کانون فرهنگی هنری مسجد چهارده معصوم</h1>
        <p className="w3-xlarge">desined by {data.name}</p>
      </header>
      <main>{children}</main>
      {home ? (<div></div>) : (<div></div>)}
    </div>
  );
}
