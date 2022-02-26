import * as Separator from '@radix-ui/react-separator';

import { Tag } from '~/components/Tag';
import { ListIcon } from '~/components/ListIcon';
import { techStackTagValues } from '~/utils/techStackTags';

function buildImpactList(impacts: Array<string>) {
  return impacts.map((impact, index) => (
    <li key={`${impact}_${index}`}>
      <div className="flex gap-2">
        <ListIcon />
        {impact}
      </div>
    </li>
  ));
}

function buildTechStackList(techStack: Array<string>) {
  return techStack.map((techStackValue, index) => (
    <Tag key={`${techStackValue}_${index}`} tagValue={techStackValue} className="bg-emerald-400 bg-opacity-60" />
  ));
}

export default function Index() {
  const yousignImpacts = [
    'Participated in designing features and conception',
    'Developed an Advanced Electronic Signature feature in a feature\u00A0team',
    'Maintained the application in response to users feedback and Sentry\u00A0reports',
    "Improved software quality by introducing testing strategies to accomplish the company's OKRs",
    'Contributed in the scale of the front-end guild from 3 to 10 developers',
  ];
  const yousignTechStack = [
    techStackTagValues.react.value,
    techStackTagValues.reactQuery.value,
    techStackTagValues.typeScript.value,
    techStackTagValues.styledComponents.value,
    techStackTagValues.storybook.value,
    techStackTagValues.jest.value,
    techStackTagValues.reactTestingLibrary.value,
    techStackTagValues.cypress.value,
    techStackTagValues.msw.value,
    techStackTagValues.cypress.value,
    techStackTagValues.docker.value,
    techStackTagValues.aws.value,
    techStackTagValues.gitlab.value,
  ];

  const leMondeImpacts = [
    'Implemented and maintained a tagging plan to collect data using third-party libraries like Google Analytics, Amplitude, and Pixel Facebook',
    'Managed and prioritized requirements from technical, marketing, as well as UI/UX teams',
    'Automated tasks that consume API of third-party libraries to produce data reporting',
    'Added Chartbeat A/B Testing in homepage headlines to improve the Click-through rate',
    'Developed specific pop-ups to collect qualitative and quantitative data from readers',
    'Migrated Google Tag Manager code to improve project maintenance and to use ES6+',
    'Established anti-churn strategies',
    'Integrated GDPR (General Data Protection Regulation) compliance requirements',
  ];
  const leMondeTechStack = [
    techStackTagValues.express.value,
    techStackTagValues.react.value,
    techStackTagValues.lerna.value,
    techStackTagValues.javascriptVanilla.value,
    techStackTagValues.jest.value,
    techStackTagValues.eslint.value,
    techStackTagValues.babel.value,
    techStackTagValues.prettier.value,
    techStackTagValues.sass.value,
    techStackTagValues.travis.value,
    techStackTagValues.jenkins.value,
    techStackTagValues.docker.value,
    techStackTagValues.gcp.value,
    techStackTagValues.github.value,
  ];

  const abbealImpacts = [
    'Designed and implemented inscription, authentication, and authorization features for parents, children, and admin users',
    'Developed an interface for children to create their avatar',
    'Built an API to serve static images to display an interactive map using Leaflet',
    'Participated in product and design decisions',
    'Write an article about MutationObserver',
    'Speaker at a Meetup conference gathering around 50 people about the Chain of Responsibility Design Pattern used in Express.js',
  ];
  const abbealTechStack = [
    techStackTagValues.express.value,
    techStackTagValues.react.value,
    techStackTagValues.redux.value,
    techStackTagValues.saga.value,
    techStackTagValues.jest.value,
    techStackTagValues.enzyme.value,
    techStackTagValues.cucumber.value,
    techStackTagValues.sass.value,
    techStackTagValues.storybook.value,
    techStackTagValues.eslint.value,
    techStackTagValues.babel.value,
    techStackTagValues.prettier.value,
    techStackTagValues.mongo.value,
    techStackTagValues.swagger.value,
    techStackTagValues.postman.value,
    techStackTagValues.github.value,
  ];

  const pixelCookersImpacts = [
    'Led the team for the application maintenance',
    'Developed mobile POC to make the application more responsive to keep up with the growth of mobile users',
    'Improved mobile performance with Gulp',
    'Piloted the implementation of many features for the event of the Olympic and Paralympic 2018',
    'Migrated the application from Angular 1 to Angular 2',
  ];
  const pixelCookersTechStack = [
    techStackTagValues.symfony2.value,
    techStackTagValues.twig.value,
    techStackTagValues.mariaDB.value,
    techStackTagValues.propel.value,
    techStackTagValues.angular1.value,
    techStackTagValues.angular2.value,
    techStackTagValues.tinyMCE.value,
    techStackTagValues.jquery.value,
    techStackTagValues.sass.value,
    techStackTagValues.bulma.value,
    techStackTagValues.gitlab.value,
    techStackTagValues.ansible.value,
  ];

  const kleeGroupImpacts = [
    'Used Ant to automate Java files generation by converting XML data from SoapUI',
    'Implemented a feature to read files to extract data and save them in batch in the database',
    'Developed a process to retrieve data from the database, parse them, write them in a file and upload the file on an FTP server to be consumed by a web service from Alpha',
    'Maintained ISIDOR and Natura 2000 using Mantis Bug Tracker',
    'Created SQL scripts to automate tasks',
    'Optimized performance for ISIDOR map by reducing the complexity of algorithms',
  ];
  const kleeGroupTechStack = [
    techStackTagValues.java6.value,
    techStackTagValues.java7.value,
    techStackTagValues.struts1.value,
    techStackTagValues.struts2.value,
    techStackTagValues.jsp.value,
    techStackTagValues.hibernate.value,
    techStackTagValues.postgreSQL.value,
    techStackTagValues.soap.value,
    techStackTagValues.ant.value,
    techStackTagValues.maven.value,
    techStackTagValues.tomcat.value,
    techStackTagValues.javascriptVanilla.value,
    techStackTagValues.html5.value,
    techStackTagValues.css3.value,
    techStackTagValues.svn.value,
  ];

  const atosImpacts = [
    'Improved an internal website to aid projects management',
    'Maintained the web application I.T.R.F for the Ministry of Education that administered the examination to become a civil servant in engineering and research',
    'Improved the usage of the internal social network BlueKiwi to accomplish the goal of «Zero email» by running interviews of employees',
  ];
  const atosTechStack = [
    techStackTagValues.javaEE.value,
    techStackTagValues.tomcat.value,
    techStackTagValues.php.value,
    techStackTagValues.eclipse.value,
  ];

  return (
    <>
      <div className="flex flex-col gap-16 max-w-2xl mx-auto">
        <section>
          <p className="text-justify">
            My mission is the satisfaction of my customers by <strong>delivering quality software.</strong> I've been in
            a startup, a medium-sized company, and a large company. I worked on private and public projects. I was a{' '}
            <strong>back-end, front-end, and full-stack engineer</strong> using many languages like{' '}
            <strong>Java, PHP, SQL, HTML, CSS, and JavaScript. </strong>
            Programming doesn't come easy to me. It's hard. That's why I choose to broaden my experience to learn and
            improve my craft.
          </p>
        </section>

        <section>
          <div className="flex mb-8 items-center">
            <a href="https://yousign.com/" target="_blank" rel="noreferrer noopener">
              <h2 className="text-xl md:text-2xl font-recursive-bold">Yousign</h2>
            </a>
            <Separator.Root orientation="vertical" className="h-6 w-px bg-gray-500 mx-4" />
            <p className="text-gray-700 dark:text-slate-50 text-xs md:text-base pt-1">July 2020 - Present</p>
          </div>
          <div className="w-full overflow-hidden md:max-w-xs mx-auto">
            <img className="object-contain w-full h-20" src="/assets/yousign_logo.png" alt="Yousign logo" />
          </div>
          <p className="my-8 text-justify">
            Yousign is a French startup that provides a SaaS application for eSignature. Its ambition is to become the
            leading e-signature provider in Europe for small and medium-sized businesses. After a recent raise of 30M€
            in a Series A funding round, Yousign is rapidly growing. I'm working as a{' '}
            <strong>senior front-end engineer</strong> for their product to offer{' '}
            <span className="font-recursive-bold">an excellent experience and delight their customers.</span>
          </p>
          <div className="my-8">
            <h3 className="my-4 font-recursive-semibold">Impacts</h3>
            <ul className="pl-4 flex flex-col gap-2">{buildImpactList(yousignImpacts)}</ul>
          </div>
          <div className="">
            <h3 className="my-4 font-recursive-semibold">Technical Stack</h3>
            {buildTechStackList(yousignTechStack)}
          </div>
        </section>

        <section>
          <div className="flex mb-8 items-center">
            <a href="https://www.lemonde.fr/" target="_blank" rel="noreferrer noopener">
              <h2 className="text-xl md:text-2xl font-recursive-bold">Le&nbsp;Monde</h2>
            </a>
            <Separator.Root orientation="vertical" className="h-6 w-px bg-gray-500 mx-4" />
            <p className="text-gray-700 dark:text-slate-50 text-xs md:text-base pt-1">October 2018 - June 2020</p>
          </div>
          <div className="w-full overflow-hidden md:max-w-xs mx-auto dark:bg-white">
            <img className="object-contain w-full h-20" src="/assets/lemonde_logo.jpg" alt="Le Monde logo" />
          </div>
          <p className="my-8 text-justify">
            Le Monde is a daily newspaper and is considered one of the leading newspapers in France. My mission was to
            assist the company in being more <strong>data-driven</strong> to make strategic decisions resulting in{' '}
            <strong>growth in subscriptions.</strong> The goal was to reach{' '}
            <strong>1 million subscribers by 2025.</strong>
          </p>
          <div className="my-8">
            <h3 className="my-4 font-recursive-semibold">Impacts</h3>
            <ul className="pl-4 flex flex-col gap-2">{buildImpactList(leMondeImpacts)}</ul>
          </div>
          <div className="">
            <h3 className="my-4 font-recursive-semibold">Technical Stack</h3>
            {buildTechStackList(leMondeTechStack)}
          </div>
        </section>

        <section>
          <div className="flex mb-8 items-center">
            <a href="https://www.abbeal.com/" target="_blank" rel="noreferrer noopener">
              <h2 className="text-xl md:text-2xl font-recursive-bold">Abbeal&nbsp;Valley</h2>
            </a>
            <Separator.Root orientation="vertical" className="h-6 w-px bg-gray-500 mx-4" />
            <p className="text-gray-700 dark:text-slate-50 text-xs md:text-base pt-1">March 2018 - October 2018</p>
          </div>
          <div className="w-full overflow-hidden md:max-w-xs mx-auto dark:bg-white">
            <img className="object-contain w-full h-20" src="/assets/abbeal_logo.png" alt="Abbeal logo" />
          </div>
          <p className="my-8 text-justify">
            Abbeal Valley is the <strong>Startup Studio</strong> of Abbeal. I developed Syllabo from scratch as a{' '}
            <strong>Fullstack JavaScript engineer apprentice.</strong> Syllabo is a web application for children aged
            7-14 to gain cultural knowledge by playing games using Gamification principles.
          </p>
          <div className="my-8">
            <h3 className="my-4 font-recursive-semibold">Impacts</h3>
            <ul className="pl-4 flex flex-col gap-2">{buildImpactList(abbealImpacts)}</ul>
          </div>
          <div className="">
            <h3 className="my-4 font-recursive-semibold">Technical Stack</h3>
            {buildTechStackList(abbealTechStack)}
          </div>
        </section>

        <section>
          <div className="flex mb-8 items-center">
            <a href="https://beneylu.com/school/world/" target="_blank" rel="noreferrer noopener">
              <h2 className="text-xl md:text-2xl font-recursive-bold">Pixel&nbsp;Cookers</h2>
            </a>
            <Separator.Root orientation="vertical" className="h-6 w-px bg-gray-500 mx-4" />
            <p className="text-gray-700 dark:text-slate-50 text-xs md:text-base pt-1">September 2017 - February 2018</p>
          </div>
          <div className="w-full overflow-hidden md:max-w-xs mx-auto dark:bg-white">
            <img className="object-contain w-full h-20" src="/assets/beneylu_logo.png" alt="Beneylu logo" />
          </div>
          <p className="my-8 text-justify">
            Pixel Cookers is an <strong>EdTech startup</strong> that provides a{' '}
            <span className="font-recursive-bold">digital workspace</span> called <strong>Beneylu</strong> for primary
            schools and forms a partnership with the <strong>Ministry of Education.</strong> I worked as a{' '}
            <strong>software engineer apprentice</strong> using <strong>PHP</strong> and
            <strong> Angular.</strong>
          </p>
          <div className="my-8">
            <h3 className="my-4 font-recursive-semibold">Impacts</h3>
            <ul className="pl-4 flex flex-col gap-2">{buildImpactList(pixelCookersImpacts)}</ul>
          </div>
          <div className="">
            <h3 className="my-4 font-recursive-semibold">Technical Stack</h3>
            {buildTechStackList(pixelCookersTechStack)}
          </div>
        </section>

        <section>
          <div className="flex mb-8 items-center">
            <a href="https://www.kleegroup.com/en/home" target="_blank" rel="noreferrer noopener">
              <h2 className="text-xl md:text-2xl font-recursive-bold">Klee&nbsp;Group</h2>
            </a>
            <Separator.Root orientation="vertical" className="h-6 w-px bg-gray-500 mx-4" />
            <p className="text-gray-700 dark:text-slate-50 text-xs md:text-base pt-1">February 2016 - September 2017</p>
          </div>
          <div className="w-full overflow-hidden md:max-w-xs mx-auto dark:bg-white">
            <img className="object-contain w-full h-20" src="/assets/kleegroup_logo.png" alt="Klee Group logo" />
          </div>
          <div className="my-8 text-justify">
            <p>
              Klee Group is a medium-sized IT company with around 600 employees. I worked as a{' '}
              <strong>software engineer apprentice</strong> in 3 projects using <strong>Java EE and JavaScript.</strong>{' '}
            </p>
            <p className="mt-2">
              <span className="font-recursive-bold">Project Alpha:</span> Alpha was to respond to the need of the{' '}
              <strong>Ministry of Defense</strong> to unify their purchasing Information System (IS). We also built a
              platform to act as a middleware between Alpha and the different Information Systems of the Ministry of
              Defense. We worked with Oalia and IBM France.
            </p>
            <p className="mt-2">
              <span className="font-recursive-bold">Application maintenance:</span> ISIDOR and Natura 2000 are web
              applications for the <strong>Ministry of Environment, Energy and Sea.</strong> ISIDOR is an application
              where the user can manage France's roads infrastructure projects using an interactive map. Natura 2000
              allows protecting a certain number of habitats and species representative of European biodiversity.
            </p>
          </div>
          <div className="my-8">
            <h3 className="my-4 font-recursive-semibold">Impacts</h3>
            <ul className="pl-4 flex flex-col gap-2">{buildImpactList(kleeGroupImpacts)}</ul>
          </div>
          <div className="">
            <h3 className="my-4 font-recursive-semibold">Technical Stack</h3>
            {buildTechStackList(kleeGroupTechStack)}
          </div>
        </section>

        <section>
          <div className="flex mb-8 items-center">
            <a href="https://atos.net/en/" target="_blank" rel="noreferrer noopener">
              <h2 className="text-xl md:text-2xl font-recursive-bold">AtoS</h2>
            </a>
            <Separator.Root orientation="vertical" className="h-6 w-px bg-gray-500 mx-4" />
            <p className="text-gray-700 dark:text-slate-50 text-xs md:text-base pt-1">October 2013 - April 2014</p>
          </div>
          <div className="w-full overflow-hidden md:max-w-xs mx-auto dark:bg-white">
            <img className="object-contain w-full h-20" src="/assets/atos_logo.png" alt="AtoS logo" />
          </div>
          <p className="my-8 text-justify">
            AtoS is one of the biggest IT companies in France. It’s an international company with around 120 000
            employees in 73 countries. I worked as an <strong>intern</strong> using <strong>PHP</strong> and{' '}
            <strong>Java EE</strong> with a senior team from India.
          </p>
          <div className="my-8">
            <h3 className="my-4 font-recursive-semibold">Impacts</h3>
            <ul className="pl-4 flex flex-col gap-2">{buildImpactList(atosImpacts)}</ul>
          </div>
          <div className="">
            <h3 className="my-4 font-recursive-semibold">Technical Stack</h3>
            {buildTechStackList(atosTechStack)}
          </div>
        </section>
      </div>
    </>
  );
}
