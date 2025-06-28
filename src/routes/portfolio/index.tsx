import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "../index.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <>
      <div id="container">
        <h3>
          <Link href="newrelic/">IBM Streams Cloud service monitoring system</Link>
        </h3>
        <p>I renovated the old monitoring system for Streaming Analytics - the IBM Streams cloud service from collectd/Graphite/Seyren/PagerDuty to New Relic/ServiceNow/PagerDuty. In the process I developed an intimate understanding of each part of a monitoring system from data collection, storage, metrics databases, alerting thresholds, Jenkins integration, and integrating our alerts with other services via webhooks.</p>
        <h3>
          <Link href="spacepirates.html">SpacePirates</Link>
        </h3>
        <p>A physics game in which you fly your spaceship and race the other player to collect gold and deliver it to the goal (green platform). Created in C using SDL for windowing and input, and OpenGL for graphics. Rolled own physics engine.</p>
        <h3>
          <Link href="rockypoint/">Gameboy Advance zombie shooter</Link>
        </h3>
        <p>Rocky Point is a zombie shooter Gameboy Advance game. Built as a team of three at HackISU. This was my first real dive into low level programming, and it turned out pretty well. I worked on backend game logic. I also made the textures and that wicked cool font.</p>
        <p><strong>Note:</strong> the gba.js player is a GBA emulator in JavaScript. I take no credit for it</p>
        <h3>
          <Link href="RpnCalculator.html">Reverse Polish Notation Calculator</Link>
        </h3>
        <p>A Reverse Polish Notation calculator made for iOS created alongside a video lecture series from Stanford (<a href="https://itunes.apple.com/us/course/ipad-iphone-app-development/id495052415">here</a>)</p>
        <h3>
          <Link href="FactorFinder.html">FactorFinder</Link>
        </h3>
        <p>Type a number, and find the factors of the number, simple! Created using Google Web Toolkit.</p>
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
