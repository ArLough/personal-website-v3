import { Metadata } from "next";
import { BlockQuote } from "../../components/BlockQuote";
import { Section } from "../../components/Section";
import { StandardLayout } from "../../components/layouts/StandardLayout";
export const metadata: Metadata = {
  title: "Colophon - Aidan Loughney",
};
export default function Colophon() {
  return (
    <StandardLayout title={"Colophon"}>
      <Section>
        <p>
          {" "}
          You may be asking yourself &quot;Wait what&apos;s this page for?&quot; In short, you
          can think of this page as a mixture of a credits page and a how it was
          built page. Or as{" "}
          <a
            className="underline hover:text-hover"
            href="https://indieweb.org/colophon"
          >
            indieweb
          </a>{" "}
          describes it...
        </p>
        <BlockQuote citation={"https://indieweb.org/colophon"}>
        &quot;A colophon is a page or section, like a footer, of a site that
          describes how the site is made, with what tools, supporting what
          technologies.&quot;
        </BlockQuote>
      </Section>
      <Section title={"How it was made"}>
        This site was built with{" "}
        <a className="underline hover:text-hover" href="https://nextjs.org/">
          Next.js
        </a>
        , styled with{" "}
        <a
          className="underline hover:text-hover"
          href="https://tailwindcss.com/"
        >
          Tailwind
        </a>
        , and deployed on{" "}
        <a className="underline hover:text-hover" href="https://vercel.com/">
          Vercel
        </a>
      </Section>
      <Section title={"Inspirations"}>
        <ul>
          <li>
            - I&apos;m using Apple&apos;s New York font which was inspired by this <a className="underline hover:text-hover" href="https://matthew-jackson.com/blog/using-apples-new-york-font-in-css/">blog post</a>
          </li>
          <li>
            - Finally, the concept of this page is inspired by{" "}
            <a
              className="underline hover:text-hover"
              href="https://maggieappleton.com/colophon"
            >
              Maggie Appleton&apos;s site colophon
            </a>
          </li>
        </ul>
      </Section>
    </StandardLayout>
  );
}
