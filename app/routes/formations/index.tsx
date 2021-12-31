import { Link } from 'remix';
import { ROUTES } from '~/routes';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

export default function Formations() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-xl md:text-2xl font-bold">Formations</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore ma
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-8">
          <article className="w-full rounded-lg overflow-hidden shadow-md">
            <Link to={`${ROUTES.formations}/formation-example`} className="block h-full">
              <AspectRatio.Root ratio={18 / 9}>
                <img
                  className="object-cover w-full h-full"
                  src="https://certificates.akimbo.com/img/akimbo_certificate_share.jpg"
                  alt="The Marketing Seminar certificate"
                />
              </AspectRatio.Root>

              <div className="p-8">
                <h3>The Marketing Seminar</h3>
                <p className="my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </Link>
          </article>

          <article className="w-full rounded-lg overflow-hidden shadow-md">
            <Link to={`${ROUTES.formations}/formation-example`} className="block h-full">
              <AspectRatio.Root ratio={18 / 9}>
                <img
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                  alt="Landscape photo by Tobias Tullius"
                />
              </AspectRatio.Root>

              <div className="p-8">
                <h3>Certificate Title</h3>
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

          <article className="w-full rounded-lg overflow-hidden shadow-md">
            <Link to={`${ROUTES.formations}/formation-example`} className="block h-full">
              <AspectRatio.Root ratio={18 / 9}>
                <img
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                  alt="Landscape photo by Tobias Tullius"
                />
              </AspectRatio.Root>

              <div className="p-8">
                <h3>Certificate Title</h3>
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
      </div>
    </>
  );
}
