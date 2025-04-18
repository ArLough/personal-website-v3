import { Metadata } from "next";
import { Section } from "../../components/layouts/Section";
import { StandardLayout } from "../../components/layouts/StandardLayout";
import NowBlock from "../../components/atoms/NowBlock";
import ExtLink from "../../components/atoms/ExtLink";

export const metadata: Metadata = {
  title: "Now",
};
export default function Now() {
  return (
    <StandardLayout title={"Now"}>
      <Section>
        What I&apos;m up to right now... updated infrequently
        <br />
        Inspired by the{" "}
        <ExtLink href="https://nownownow.com/about">now page movement</ExtLink>
      </Section>
      <NowBlock date="2024-7-13">
        <ul>
          <li>
            Working at SoFi, learning a lot about frontend web development
          </li>
          <li>Visiting National parks and exploring SLC & Utah ⛰️</li>
          <li>Trying new hobbies - currently trying bouldering</li>
        </ul>
      </NowBlock>
    </StandardLayout>
  );
}
