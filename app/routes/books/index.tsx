import { Link } from 'remix';
import { ROUTES } from '~/routes';

export default function Books() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-xl md:text-2xl font-bold">Books</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore ma
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <article className="w-full border shadow-sm">
            <Link to={`${ROUTES.books}/book-example`} className="block h-full p-6 overflow-hidden">
              <div className="flex flex-col items-center gap-8 md:flex-row">
                <img
                  className="object-contain w-40"
                  src="https://miro.medium.com/max/1103/1*PKsDuPxNoKJyJvmlLc64qg.jpeg"
                  alt="Clean Code by Robert C. Martin"
                />
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">Clean Code - by Robert C. Martin</h3>
                    <div className="hidden sm:block border rounded-md p-2 text-sm bg-emerald-500 bg-opacity-50">
                      Read&nbsp;my&nbsp;notes
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div>
                  <div className="sm:hidden border rounded-md p-2 text-sm bg-emerald-500 bg-opacity-50">
                    Read&nbsp;my&nbsp;notes
                  </div>
                </div>
              </div>
            </Link>
          </article>

          <article className="w-full border shadow-sm">
            <Link to={`${ROUTES.books}/book-example`} className="block h-full p-6 overflow-hidden">
              <div className="flex flex-col items-center gap-8 md:flex-row">
                <img
                  className="object-contain w-40"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529153916l/40540502._SY475_.jpg"
                  alt="Atomic Habits by James Clear"
                />
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">Atomic Habits - by James Clear</h3>
                    <div className="hidden sm:block border rounded-md p-2 text-sm bg-emerald-500 bg-opacity-50">
                      Read&nbsp;my&nbsp;notes
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div>
                  <div className="sm:hidden border rounded-md p-2 text-sm bg-emerald-500 bg-opacity-50">
                    Read&nbsp;my&nbsp;notes
                  </div>
                </div>
              </div>
            </Link>
          </article>
        </div>
      </div>
    </>
  );
}
