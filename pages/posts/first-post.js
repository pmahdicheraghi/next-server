import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function firstPost() {
  return (
    <Layout>
      <div>
        <Head>
          <title>First post</title>
        </Head>
        <h1>Salam be hame</h1>
      </div>
    </Layout>
  );
}