import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "../index.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <>
      <div id="container">
        <Link href="/">Home</Link><a href="resume.pdf" class="right">PDF</a>
        <h1>Alex Pogue</h1>
        <h2>Software Engineer</h2>
        <h3>Technical Skills</h3>
        <ul>
          <li>Languages: Python, JavaScript (Vue/React), Java, Swift (iOS), C, and C++</li>
          <li>Specialites: DevOps Monitoring, automation, code release, API development and usage, full stack development</li>
          <li>GitHub: github.com/alexpogue</li>
          <li>Website: alexpogue.com</li>
        </ul>
        <h3>Professional Experience</h3>
        <p>
        <strong>Software Engineer, Center for Digital Health MLOps DevOps Team</strong> (November 2021 - current)<br />
        Mayo Clinic (Rochester, MN)
        </p>
        <ul>
          <li>Innovate and bulletproof early-stage AI research projects from ideation to clinical trials.</li>
          <li>Maintain 6 Azure DevOps CI/CD pipelines to build/test/deploy docker images to a registry.</li>
          <li>Create push-button release process for AGPS AI asthma prediction tool to a Kubernetes VM.</li>
          <li>Collaborate with researchers, developers, and stakeholders to add features such as memcache (30x performance increase), Epic OAuth login, and critical bug fixes in research code.</li>
          <li>Improve code quality by creating test-driven development framework, step-through debugging process, and automated unit test runs in an otherwise non-technically complete project.</li>
        </ul>

        <p>
        <strong>Senior Software Engineer, IBM Cloud Pak for Data (CP4D) SRE and Backup/Restore Team</strong> (August 2019 - February 2021)<br />
        IBM (Rochester, MN)
        </p>
        <ul>
          <li>Developed Jenkins build automation and release process for CP4D backup/restore tooling.</li>
          <li>Automated build, scan, and delivery in Jenkins to enable push-button release.</li>
          <li>Executed two releases – security scan, approve open source, sanity test, write/publish docs.</li>
          <li>Spearheaded Jenkins adoption to improve greater SRE team’s automation processes.</li>
          <li>Managed JMeter test Jenkins jobs for 7 CP4D plugins to verify performance between releases.</li>
        </ul>
        <p>
        <strong>Software Engineer / Team Lead, IBM Streaming Analytics DevOps Team</strong> (June 2015 - August 2019)<br />
        IBM (Rochester, MN)
        </p>
        <ul>
          <li>Oversaw thousands of VM systems across 3 regions for IBM’s Streaming Analytics cloud service.</li>
          <li>Designed, implemented, and maintained entire monitoring infrastructure pipeline:<br />
          Metrics database → New Relic → PagerDuty → ServiceNow → Slack</li>
          <li>Orchestrated PagerDuty schedule, wrote runbooks, automated resolution, resolved root cause.</li>
          <li>Wrote and maintained Ansible deployment scripts to deploy to Kubernetes.</li>
          <li>Composed customer-facing tutorial articles for integrating Streaming Analytics with other cloud services via REST API, JDBC, and Kafka messaging (alexpogue.com/articles).</li>
        </ul>
        <p>
        <strong>Software Engineer Intern, Mapping Tools Team</strong> (May 2014 - August 2014)<br />
        Garmin (Olathe, KS)
        </p>
        <ul>
          <li>Extended capability of a legacy C++ application to import 79 new map file types.</li>
          <li>Integrated an open source geospatial library into existing legacy code.</li>
          <li>Collaborated with internal users to get feedback on usability and workflow.</li>
        </ul>
        <h3>Education</h3>
        <p>
        Bachelor of Science, Computer Science (graduated May 2015)<br />
        Iowa State University (Ames, IA)
        </p>
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
