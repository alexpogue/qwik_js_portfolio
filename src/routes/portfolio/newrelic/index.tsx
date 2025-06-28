import { component$, useStylesScoped$, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import styles from "../../index.css?inline";
import columnStyles from "./columns.css?inline";

import { ImageSlider } from '../../../components/image-slider/image-slider';

export const useSlideIndex = routeLoader$(({ url }) => {
  const slide = parseInt(url.searchParams.get('slide') || '0', 10);
  return isNaN(slide) ? 0 : Math.max(0, slide);
});

export default component$(() => {
  useStylesScoped$(styles);

  const slideIndex = useSlideIndex();

  const Slide1 = component$(() =>
    <>
      <div>Monitoring Infrastructure Transition from Graphite/Seyren</div>
      <div>Alex Pogue</div>
      <div>July 5, 2018</div>
    </>
  );
  const Slide2 = component$(() => 
    <>
      <div>Agenda</div>
      <ul>
        <li>Background / Rationale</li>
        <li>Phases of work</li>
        <li>Takeaways</li>
      </ul>
    </>
  );
  const Slide3 = component$(() => 
    <>
      <div>Background / Rationale</div>
      <ul>
        <li>Past few months we’ve been transitioning our monitoring infrastructure from Graphite/Seyren to New Relic</li>
        <li>Rationale: IBM consolidating to a single monitoring system for all cloud services – New Relic and TIP (Technical Integration Point)</li>
        <li>Gain complete control over monitoring and alerting of our service</li>
        <li>New Relic:
          <ul>
            <li>Integrates with TIP, Slack, PagerDuty, etc.</li>
            <li>More informative visual metrics charts and alert views</li>
          </ul>
        </li>
      </ul>
    </>
  );
  const Slide4 = component$(() => 
    <>
      <div>Why integrate with TIP?</div>
      <ul>
        <li>TIP integrates with ServiceNow:
          <ul>
            <li>CIE (customer impacting event) handling</li>
            <li>AVM (Availability Manager) integration</li>
          </ul>
        </li>
        <li>TIP integrates with TOC tooling:
          <ul>
            <li>Alert dashboards (Kibana)</li>
            <li>TOC console for their responders</li>
          </ul>
        </li>
        <li>New Relic is the recommended way to integrate with TIP</li>
      </ul>
    </>
  );
  const Slide5 = component$(() => 
    <>
      <div>Phases</div>
      <ol>
        <li>Use New Relic to send a simple subset of alerts to our existing PagerDuty – completed May 30</li>
        <li>Add alerts for system metrics (Memory, CPU, etc.) - completed June 14</li>
        <li>Expand alerts to include LDAP, Redis, Zookeeper monitors – completed June 15</li>
        <li>Integrate with TIP – completed July 9</li>
        <li>Leveraging new monitoring infrastructure for further improvements</li>
      </ol>
    </>
  );
  const Slide6 = component$(() => 
    <>
      <div>Phase 1</div>
      <div>Use New Relic to send a simple subset of alerts to our existing PagerDuty</div>
      <div>- completed May 30</div>
    </>
  );
  const Slide7 = component$(() =>  {
    useStylesScoped$(columnStyles);
    return (
      <>
        <div>Phase 1 End-to-End Big Picture</div>
        <div class="grid grid-6-container">
          <div></div>
          <div></div>
          <div>Gathering Metrics</div>
          <div>Storing Metrics</div>
          <div>Defining Alert Thresholds</div>
          <div>Firing Alerts</div>

          <div>Before:</div>
          <div class="box-it">Cloudant</div>
          <div class="box-it">collectd</div>
          <div class="box-it">Graphite</div>
          <div class="box-it">Seyren</div>
          <div class="box-it">PagerDuty</div>

          <div>After:</div>
          <div class="box-it">Cloudant</div>
          <div class="box-it">New Relic Python Agent</div>
          <div class="box-it">New Relic Insights</div>
          <div class="box-it">New Relic Alerts</div>
          <div class="box-it">PagerDuty</div>
        </div>
      </>
    )
  });
  const Slide8 = component$(() =>  {
    useStylesScoped$(columnStyles);
    return (
      <>
        <div>Gathering Metrics</div>
        <ul>
          <li>Our IBM Cloud service applications gather metrics and store them in our Cloudant database. This is where our monitoring infrastructure pulls its metrics.</li>
          <li>Before:
            <ul>
              <li>We forward these metrics to our existing monitoring system using a program called collectd running on a system in our backend
                <div class="grid grid-3-container">
                  <div class="box-it">Cloudant</div>
                  <div class="box-it">collectd</div>
                  <div class="box-it">Existing monitoring</div>
                </div>
              </li>
            </ul>
          </li>
          <li>After:
            <ul>
              <li>Replace collectd with custom New Relic Python agent
                <div class="grid grid-3-container">
                  <div class="box-it">Cloudant</div>
                  <div class="box-it">New Relic Python Agent</div>
                  <div class="box-it">New monitoring</div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </>
    );
  });
  const Slide9 = component$(() => {
    useStylesScoped$(columnStyles);
    return (
      <>
        <div>Storing Metrics</div>
        <ul>
          <li>Before: Collectd sends metrics to Graphite
            <div class="grid grid-2-container">
              <div class="box-it">collectd</div>
              <div class="box-it">Graphite</div>
            </div>
          </li>
          <li>After: Replace collectd with custom New Relic Python agent
            <div class="grid grid-2-container">
              <div class="box-it">New Relic Python Agent</div>
              <div class="box-it">New Relic Insights</div>
            </div>
          </li>
        </ul>
      </>
    );
  });
  const Slide10 = component$(() => {
    useStylesScoped$(columnStyles);
    return (
      <>
        <div>Defining Alert Thresholds</div>
        <ul>
          <li>When a metric value hits a certain threshold, we fire an alert. We need to define these thresholds</li>
          <li>Before: Graphite sends metrics to Seyren
            <div class="grid grid-2-container">
              <div class="box-it">Graphite</div>
              <div class="box-it">Seyren</div>
            </div>
          </li>
          <li>After: New Relic Insights sends metrics to New Relic alerts
            <div class="grid grid-2-container">
              <div class="box-it">New Relic Insights</div>
              <div class="box-it">New Relic Alerts</div>
            </div>
          </li>
        </ul>
      </>
    );
  });
  const Slide11 = component$(() => 
    <>
      <div>Defining Alert Thresholds</div>
      <ul>
        <li>Technical challenge: Defining alerts</li>
        <li>We currently have 105 different alerts to define</li>
        <li>New Relic allows us to define alerts via web UI
          <ul>
            <li>User friendly, but</li>
            <li>Time consuming to change alert thresholds</li>
            <li>We have to open the UI and painstakingly compare with our desired alert thresholds</li>
            <li>Can’t store alert thresholds in version control</li>
          </ul>
        </li>
        <li>Solution: Custom script that syncs alert configuration file with New Relic backend via New Relic API</li>
      </ul>
    </>
  );
  const Slide12 = component$(() => {
    useStylesScoped$(columnStyles);
    return (
      <>
        <div>Firing Alerts using PagerDuty</div>
        <ul>
          <li>Before: Seyren sends alerts to PagerDuty
            <div class="grid grid-2-container">
              <div class="box-it">Seyren</div>
              <div class="box-it">PagerDuty</div>
            </div>
          </li>
          <li>After: New Relic Alerts sends alerts to PagerDuty
            <div class="grid grid-2-container">
              <div class="box-it">New Relic Alerts</div>
              <div class="box-it">PagerDuty</div>
            </div>
          </li>
        </ul>
      </>
    );
  });
  const Slide13 = component$(() => 
    <>
      <div>Before and After: Alerts in Slack</div>
      <div>TODO: fill in images</div>
    </>
  );
  const Slide14 = component$(() => 
    <>
      <div>Before and After: View Metrics Graph</div>
      <div>TODO: fill in images</div>
    </>
  );
  const Slide15 = component$(() => 
    <>
      <div>Phase 2</div>
      <div>Add alerts for system metrics (Memory, CPU, etc.)</div>
      <div>- completed June 14</div>
    </>
  );

  return (
    <>
      <div id="container">
        <h3>
          <a href="newrelic/">IBM Streams Cloud service monitoring system</a>
        </h3>
        <p>I developed a New Relic syncing library to sync an alert configuration file with New Relic Alerts. In its development, I had to update an open source API wrapper Python library to fix alert condition fields (<a href="https://github.com/sansible/newrelic-api/pull/14">here</a>).

Rationale: IBM consolidating to a single monitoring system for all cloud services. This move would give our immediate team more control over the alerts for our service, as well as better charts and metric views. Initial alerting infrastructure:</p>
        <ImageSlider
          slides={[
            $(() => <Slide1 />),
            $(() => <Slide2 />),
            $(() => <Slide3 />),
            $(() => <Slide4 />),
            $(() => <Slide5 />),
            $(() => <Slide6 />),
            $(() => <Slide7 />),
            $(() => <Slide8 />),
            $(() => <Slide9 />),
            $(() => <Slide10 />),
            $(() => <Slide11 />),
            $(() => <Slide12 />),
            $(() => <Slide13 />),
            $(() => <Slide14 />),
            $(() => <Slide15 />),
          ]}
          initialSlide={slideIndex.value}
          width="100%"
          height="300px"
        />
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
