import { Link } from 'remix';

import { ROUTES } from '~/routes';

export default function Index() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-xl md:text-2xl font-bold">Blog</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore ma
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-8">
          <article className="border rounded-lg shadow-md">
            <Link to={ROUTES.blog} className="block h-full p-8">
              <h3>Title Article</h3>
              <div className="my-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
              <div>Read More</div>
            </Link>
          </article>

          <article className="border rounded-lg shadow-md">
            <Link to={ROUTES.blog} className="block h-full p-8">
              <h3>Title Article</h3>
              <div className="my-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div>Read More</div>
            </Link>
          </article>

          <article className="border rounded-lg shadow-md">
            <Link to={ROUTES.blog} className="block h-full p-8">
              <h3>Title Article</h3>
              <div className="my-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div>Read More</div>
            </Link>
          </article>
        </div>
      </div>
    </>
  );
}
