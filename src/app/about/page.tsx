import { Metadata } from "next";
import { Section } from "../../components/Section";
import { StandardLayout } from "../../components/layouts/StandardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedinIn,
	faLastfm,
	faGithub,
	faSpotify,
	faSquareLetterboxd,
} from "@fortawesome/free-brands-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import ExtLink from "../../components/atoms/ExtLink";

export const metadata: Metadata = {
	title: "About - Aidan Loughney",
};
export default function About() {
	return (
		<StandardLayout title={"About"}>
			<Section>
				Hi! I&apos;m a Software Engineer at SoFi in Borrow. Before SoFi, I was a
				student at the University of Michigan〽️ where I graduated with a degree
				in Computer Science. Previously, I interned at Amazon where I worked on
				a team in S3. If you want to know more about me or chat, drop me a
				message at{" "}
				<ExtLink href="mailto:loughneyaidan@gmail.com" hideIcon>
					loughneyaidan [at] gmail [dot] com
				</ExtLink>
			</Section>
			<Section>
				Some of my interests:
				<br />
				fintech •{" "}
				<ExtLink href="https://www.inkandswitch.com/end-user-programming/">
					end user programming
				</ExtLink>{" "}
				• user interfaces • programming languages • knowledge management tools •
				the open web • urbanism • political philosophy •{" "}
				<ExtLink href="https://en.wikipedia.org/wiki/Third_place">
					third places
				</ExtLink>{" "}
				• keyboards •{" "}
				<ExtLink href="https://maggieappleton.com/garden-history">
					digital gardens
				</ExtLink>
			</Section>
			<ul className="flex flex-row space-x-2 *:w-6 *:h-6">
				<a
					className="hover:text-[#0072b1]"
					href="https://www.linkedin.com/in/aidanloughney/"
				>
					<FontAwesomeIcon icon={faLinkedinIn} />
				</a>
				<a className="hover:text-[#2b3137]" href="https://github.com/ArLough">
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a
					className="hover:text-[#1DB954]"
					href="https://open.spotify.com/user/aidan_360"
				>
					<FontAwesomeIcon icon={faSpotify} />
				</a>
				<a
					className="hover:text-[#D51007]"
					href="https://www.last.fm/user/ARL360"
				>
					<FontAwesomeIcon icon={faLastfm} />
				</a>
				<a
					className="hover:text-[#FFC0CB]"
					href="https://www.setlist.fm/concerts/aidanloughney"
				>
					<FontAwesomeIcon icon={faTicket} />
				</a>
				<a
					className="hover:text-[#6366f1]"
					href="https://hardcover.app/@arlough"
				>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>

				</a>
				<a
					className="hover:text-[#808080]"
					href="https://letterboxd.com/arlough/"
				>
					<FontAwesomeIcon icon={faSquareLetterboxd} />
				</a>
			</ul>
		</StandardLayout>
	);
}
