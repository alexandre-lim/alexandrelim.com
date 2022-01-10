import { Link } from 'remix';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import * as Separator from '@radix-ui/react-separator';
import { ROUTES } from '~/routes';

export default function Index() {
  return (
    <>
      <div className="flex flex-col gap-16 max-w-2xl mx-auto">
        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </section>

        <section>
          <div className="flex justify-between items-baseline mb-4">
            <h2 className="text-xl md:text-2xl font-bold">Formations</h2>
            <Link to={ROUTES.formations}>See all</Link>
          </div>

          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className='flex gap-8 flex-wrap md:flex-nowrap"'>
            <article className="w-full rounded-lg shadow-md md:max-w-xs">
              <Link to={`${ROUTES.formations}/formation-example`} className="block h-full overflow-hidden">
                <AspectRatio.Root ratio={16 / 9}>
                  <img
                    className="object-cover w-full h-full"
                    src="https://certificates.akimbo.com/img/akimbo_certificate_share.jpg"
                    alt="The Marketing Seminar certificate"
                  />
                </AspectRatio.Root>

                <div className="flex justify-between p-8">
                  <h3>The Marketing Seminar</h3>
                  <span>Seth Godin</span>
                </div>
              </Link>
            </article>

            <article className="w-full rounded-lg shadow-md md:max-w-xs">
              <Link to={`${ROUTES.formations}/formation-example`} className="block h-full overflow-hidden">
                <AspectRatio.Root ratio={16 / 9}>
                  <img
                    className="object-cover w-full h-full"
                    src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                    alt="Landscape photo by Tobias Tullius"
                  />
                </AspectRatio.Root>

                <div className="flex justify-between p-8">
                  <h3>Title Certificate</h3>
                  <span>Author</span>
                </div>
              </Link>
            </article>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-baseline mb-4">
            <h2 className="text-xl md:text-2xl font-bold">Books</h2>
            <Link to={ROUTES.books}>See the library</Link>
          </div>

          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <div className='flex gap-8 flex-wrap md:flex-nowrap"'>
            <article className="w-full border rounded-lg shadow-md md:max-w-xs">
              <Link to={`${ROUTES.books}/book-example`} className="block h-full overflow-hidden">
                <AspectRatio.Root ratio={16 / 9} className="py-2">
                  <img
                    className="object-contain w-full h-full"
                    src="https://miro.medium.com/max/1103/1*PKsDuPxNoKJyJvmlLc64qg.jpeg"
                    alt="Clean Code by Robert C. Martin"
                  />
                </AspectRatio.Root>
                <Separator.Root orientation="horizontal" className="h-px w-full bg-gray-200" />
                <div className="flex justify-between p-8">
                  <h3>Clean Code</h3>
                  <span>Robert C. Martin</span>
                </div>
              </Link>
            </article>

            <article className="w-full border rounded-lg shadow-md md:max-w-xs">
              <Link to={`${ROUTES.books}/book-example`} className="block h-full overflow-hidden">
                <AspectRatio.Root ratio={16 / 9} className="py-2">
                  <img
                    className="object-contain w-full h-full"
                    src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529153916l/40540502._SY475_.jpg"
                    alt="Atomic Habits by James Clear"
                  />
                </AspectRatio.Root>
                <Separator.Root orientation="horizontal" className="h-px w-full bg-gray-200" />
                <div className="flex justify-between p-8">
                  <h3>Atomic Habits</h3>
                  <span>James Clear</span>
                </div>
              </Link>
            </article>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-baseline mb-4">
            <h2 className="text-xl md:text-2xl font-bold">Writing</h2>
            <Link to={ROUTES.blog}>See the blog</Link>
          </div>

          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <div className="flex gap-8 flex-wrap md:flex-nowrap">
            <article className="border rounded-lg flex-auto shadow-md md:max-w-xs">
              <Link to={`${ROUTES.blog}/article-example`} className="block h-full p-8">
                <h3>Title Article</h3>
                <div className="my-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div>Read More</div>
              </Link>
            </article>

            <article className="border rounded-lg flex-auto shadow-md md:max-w-xs">
              <Link to={`${ROUTES.blog}/article-example`} className="block h-full p-8">
                <h3>Title Article</h3>
                <div className="my-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div>Read More</div>
              </Link>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
