import { Link } from 'remix';
import { ROUTES } from '~/routes';

import * as Avatar from '@radix-ui/react-avatar';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import * as Separator from '@radix-ui/react-separator';

export default function Index() {
  return (
    <div className="flex flex-col gap-16 max-w-2xl mx-auto">
      <section className="flex flex-col">
        <h2 className="self-center max-w-lg leading-tight text-3xl md:text-4xl text-black dark:text-white">
          Learn&nbsp;Practice&nbsp;Give
        </h2>
        <p className="mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <div className="mt-4">
          <Link to={ROUTES.experience}>See my journey</Link>
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-xl md:text-2xl font-bold">More than a job title</h2>
        <div className="flex justify-center mb-4">
          <Avatar.Root className="flex items-center justify-center mx-auto overflow-hidden select-none w-20 h-20 rounded-full bg-black bg-opacity-5">
            <Avatar.Image className="w-full h-full object-cover" src="" alt="" />
            <Avatar.Fallback className="text-indigo-500" delayMs={600}>
              AL
            </Avatar.Fallback>
          </Avatar.Root>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <div className="mt-4">
          <Link to={ROUTES.about}>About me</Link>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-baseline">
          <h2 className="mb-8 text-xl md:text-2xl font-bold">Newest articles</h2>
          <Link to={ROUTES.blog}>See the blog</Link>
        </div>

        <div className="flex gap-8 flex-wrap md:flex-nowrap">
          <article className="border rounded-lg flex-auto shadow-md md:max-w-xs">
            <Link to={`${ROUTES.blog}/article-example`} className="block h-full p-8">
              <h3>Article Title</h3>
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

          <article className="border rounded-lg flex-auto shadow-md md:max-w-xs">
            <Link to={`${ROUTES.blog}/article-example`} className="block h-full p-8">
              <h3>Article Title</h3>
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
      </section>

      <section>
        <div className="flex justify-between items-baseline">
          <h2 className="mb-8 text-xl md:text-2xl font-bold">Always learning</h2>
          <Link to={ROUTES.growth}>See all</Link>
        </div>

        <div className='flex gap-8 flex-wrap md:flex-nowrap"'>
          <article className="w-full border rounded-lg overflow-hidden shadow-md md:max-w-xs">
            <Link to={ROUTES.growth} className="block h-full">
              <AspectRatio.Root ratio={16 / 9}>
                <img
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                  alt="Landscape photo by Tobias Tullius"
                />
              </AspectRatio.Root>

              <div className="p-8">
                <h3>Title Certificate</h3>
                <p className="my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </Link>
          </article>

          <article className="w-full border rounded-lg overflow-hidden shadow-md md:max-w-xs">
            <Link to={`${ROUTES.books}/book-example`} className="block h-full">
              <AspectRatio.Root ratio={16 / 9} className="py-2">
                <img
                  className="object-contain w-full h-full"
                  src="https://miro.medium.com/max/1103/1*PKsDuPxNoKJyJvmlLc64qg.jpeg"
                  alt="Clean Code by Robert C. Martin"
                />
              </AspectRatio.Root>
              <Separator.Root orientation="horizontal" className="h-px w-full bg-gray-200" />
              <div className="p-8">
                <h3>Clean Code by Robert C. Martin</h3>
                <p className="my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}
