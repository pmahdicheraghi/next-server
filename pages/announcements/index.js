import Layout, { siteTitle } from "../../components/layout";
import { getAnnouncementsData } from "../../library/announcementsLoader";
import Head from "next/head";
import Link from "next/link";


export async function getStaticProps() {
	const announcements = getAnnouncementsData();
	return {
		props: {
			announcements
		}
	};
}

export default function Announcements({ announcements }) {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<div>
				<ul className="">
					{announcements.map(({ id, text, title }) => (
						<li className="" key={id}>
							{title}
							<br />
							{text}
							<hr />
						</li>
					))}
				</ul>
			</div>
		</Layout>
	);
}