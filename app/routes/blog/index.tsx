import { ROUTES } from '~/routes';
import { PageSeparator } from '~/components/PageSeparator';
import { ArticleCard, ArticleHeaderTag } from '~/components/ArticleCard';

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
        <ArticleCard
          to={`${ROUTES.blog}/article-example`}
          headerTag={ArticleHeaderTag.h2}
          title="Article Title"
          arrowText="Read More"
          summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum."
        />

        <ArticleCard
          to={`${ROUTES.blog}/article-example`}
          headerTag={ArticleHeaderTag.h2}
          title="Article Title"
          arrowText="Read More"
          summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum."
        />

        <ArticleCard
          to={`${ROUTES.blog}/article-example`}
          headerTag={ArticleHeaderTag.h2}
          title="Article Title"
          arrowText="Read More"
          summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum."
        />
      </div>
    </>
  );
}
