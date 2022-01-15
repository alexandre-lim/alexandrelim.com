import { ROUTES } from '~/routes';
import { PageSeparator } from '~/components/PageSeparator';
import { CourseReviewDetailCard } from '~/components/CourseReviewDetailCard';

export default function CoursesReview() {
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

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-8">
        <CourseReviewDetailCard
          to={`${ROUTES.coursesReview}/course-example`}
          title={'The Marketing Seminar'}
          author={'Seth Godin'}
          imgSrc={'https://certificates.akimbo.com/img/akimbo_certificate_share.jpg'}
          imgAlt={'The Marketing Seminar certificate'}
          ratio={4 / 2}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
       dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
       ex ea commodo consequat."
        />

        <CourseReviewDetailCard
          to={`${ROUTES.coursesReview}/course-example`}
          title={'Certificate Title'}
          author={'Author Name'}
          imgSrc={'https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80'}
          imgAlt={'Landscape photo by Tobias Tullius'}
          ratio={4 / 2}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum."
        />

        <CourseReviewDetailCard
          to={`${ROUTES.coursesReview}/course-example`}
          title={'Certificate Title'}
          author={'Author Name'}
          imgSrc={'https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80'}
          imgAlt={'Landscape photo by Tobias Tullius'}
          ratio={4 / 2}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum."
        />
      </div>
    </>
  );
}
