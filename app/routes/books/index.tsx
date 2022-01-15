import { ROUTES } from '~/routes';
import { PageSeparator } from '~/components/PageSeparator';
import { BookCardDetail } from '~/components/BookCardDetail';

export default function Books() {
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

      <div className="flex flex-col gap-8">
        <BookCardDetail
          to={`${ROUTES.books}/book-example`}
          title={'Clean Code'}
          author={'Robert C. Martin'}
          imgSrc="https://miro.medium.com/max/1103/1*PKsDuPxNoKJyJvmlLc64qg.jpeg"
          summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum."
        />

        <BookCardDetail
          to={`${ROUTES.books}/book-example`}
          title={'Atomic Habits'}
          author={'James Clear'}
          imgSrc="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529153916l/40540502._SY475_.jpg"
          summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum."
        />
      </div>
    </>
  );
}
