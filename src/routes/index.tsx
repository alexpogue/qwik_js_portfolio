import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.css?inline";
import ImgAlexPogueProfile from '~/assets/alex-pogue-profile.png';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <>
      <div id="container">
        <div class="image-container">
          <img src={ImgAlexPogueProfile} alt="Alex Pogue profile picture" width="150" height="150" />
        </div>
        <h1>Alex Pogue</h1>
        <ul>
          <li>Software Engineer at Mayo Clinic.</li>
          <li>
            <Link href="/resume/">Resume</Link>, <Link href="/portfolio/">Portfolio</Link>, <a href="https://github.com/alexpogue">GitHub</a>
          </li>
        </ul>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Alex Pogue",
  meta: [
    {
      name: "description",
      content: "Alex Pogue's Software Engineering Portfolio",
    },
  ],
};
