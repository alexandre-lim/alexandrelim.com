import { Link } from 'remix';
import { ROUTES } from '~/routes';

export default function Index() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col">
        <h2 className="self-center max-w-lg leading-tight text-3xl md:text-4xl text-black dark:text-white">
          Big Title
        </h2>
        <p className="mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <div className="mt-3">
          <Link to={ROUTES.experience}>Know more about my experience</Link>
        </div>
      </section>
      <section>
        <h2 className="mb-2 text-2xl">More than a job title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <div className="mt-3">
          <Link to={ROUTES.about}>Learn more about me</Link>
        </div>
      </section>
      <section>
        <h2 className="mb-2 text-2xl">Recent articles</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <div className="mt-3">
          <Link to={ROUTES.blog}>See all articles</Link>
        </div>
      </section>
      <section>
        <h2 className="mb-2 text-2xl">Always learning</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <div className="mt-3">
          <Link to={ROUTES.growth}>See how I invest in myself</Link>
        </div>
      </section>
    </div>
  );
}
