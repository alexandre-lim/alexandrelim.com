import { Link } from 'remix';

import { ROUTES } from '~/routes';
import { PageSeparator } from '~/components/PageSeparator';

export default function Index() {
  return (
    <>
      <div className="max-w-2xl mx-auto mb-12">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>

      <PageSeparator />

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-8">
        <article className="border rounded-lg shadow-md">
          <Link to={`${ROUTES.blog}/article-example`} className="block h-full p-8">
            <h3>Article title</h3>
            <div className="my-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
            <div>Read More</div>
          </Link>
        </article>

        <article className="border rounded-lg shadow-md">
          <Link to={`${ROUTES.blog}/article-example`} className="block h-full p-8">
            <h3>Article title</h3>
            <div className="my-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>Read More</div>
          </Link>
        </article>

        <article className="border rounded-lg shadow-md">
          <Link to={`${ROUTES.blog}/article-example`} className="block h-full p-8">
            <h3>Article title</h3>
            <div className="my-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>Read More</div>
          </Link>
        </article>
      </div>
    </>
  );
}
