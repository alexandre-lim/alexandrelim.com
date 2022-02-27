import * as Avatar from '@radix-ui/react-avatar';

import { ROUTES } from '~/routes';
import { ButtonLink } from '~/components/ButtonLink';
import { LinkArrowRight } from '~/components/LinkArrowRight';
import { ArticleCard, ArticleHeaderTag } from '~/components/ArticleCard';
import { BookdCard } from '~/components/BookCard';
import { CourseReviewCard } from '~/components/CourseReviewCard';

function HomePageSecondTitle({ title }: { title: string }) {
  return <h2 className="mb-8 text-xl md:text-2xl font-recursive-bold font-recursive-semi-casual">{title}</h2>;
}

export default function Index() {
  return (
    <div className="flex flex-col gap-16 max-w-2xl mx-auto">
      <section className="flex flex-col">
        <h2 className="self-center leading-tight text-3xl sm:text-4xl md:text-5xl text-black dark:text-white font-recursive-casual font-recursive-bold">
          Learn&nbsp;Practice&nbsp;Give
        </h2>
        <p className="mt-16 text-justify">
          Inspired by the <strong>Software Craftsmanship mindset</strong>, I successfully served my clients for{' '}
          <strong>more than five&nbsp;years</strong> using a variety of programming languages. I'm focused on improving
          my craft and delivering quality software to achieve ambitious goals.
        </p>
        <div className="mt-8 mx-auto">
          <ButtonLink to={ROUTES.experience} text={'See my journey'} className="min-w-[170px] text-center" />
        </div>
      </section>

      <section>
        <HomePageSecondTitle title={'More than a job title'} />
        <div className="flex justify-center mb-8">
          <Avatar.Root className="flex items-center justify-center mx-auto overflow-hidden select-none w-20 h-20 rounded-full bg-black dark:bg-slate-100 bg-opacity-5">
            <Avatar.Image className="w-full h-full object-cover" src="" alt="" />
            <Avatar.Fallback className="text-indigo-500" delayMs={600}>
              AL
            </Avatar.Fallback>
          </Avatar.Root>
        </div>
        <p className="text-justify">
          I'm a <strong>Software Engineer living in France.</strong> But I don't limit my identity as a Software
          Engineer or any job title. Sports played a crucial role in who I am today. I like reading non-fiction books,
          and my best recommendation is Atomic Habits by James Clear. I'm more of an{' '}
          <span className="font-recursive-bold">introvert.</span> High-stimulus environments affect me like kryptonite.
        </p>
        <div className="flex">
          <div className="mt-8 mx-auto">
            <ButtonLink to={ROUTES.about} text={'About me'} className="min-w-[170px] text-center" />
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-baseline">
          <HomePageSecondTitle title={'Newest articles'} />
          <LinkArrowRight to={ROUTES.blog} text={'See the blog'}></LinkArrowRight>
        </div>

        <div className="flex gap-8 flex-wrap md:flex-nowrap">
          <ArticleCard
            to={`${ROUTES.blog}/article-example`}
            articleClassName="md:max-w-xs"
            headerTag={ArticleHeaderTag.h3}
            title="Article Title"
            arrowText="Read More"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat."
          />

          <ArticleCard
            to={`${ROUTES.blog}/article-example`}
            articleClassName="md:max-w-xs"
            headerTag={ArticleHeaderTag.h3}
            title="Article Title"
            arrowText="Read More"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
          />
        </div>
      </section>

      <section>
        <div className="flex justify-between items-baseline">
          <HomePageSecondTitle title={'Book notes'} />
          <LinkArrowRight to={ROUTES.books} text={'See book notes'}></LinkArrowRight>
        </div>

        <div className='flex gap-8 flex-wrap md:flex-nowrap"'>
          <BookdCard
            to={`${ROUTES.books}/book-example`}
            title={'Clean Code'}
            author={'Robert C. Martin'}
            imgSrc={'https://miro.medium.com/max/1103/1*PKsDuPxNoKJyJvmlLc64qg.jpeg'}
            ratio={16 / 9}
          />

          <BookdCard
            to={`${ROUTES.books}/book-example`}
            title={'Atomic Habits'}
            author={'James Clear'}
            imgSrc={
              'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529153916l/40540502._SY475_.jpg'
            }
            ratio={16 / 9}
          />
        </div>
      </section>

      <section>
        <div className="flex justify-between items-baseline">
          <HomePageSecondTitle title={'Courses review'} />
          <LinkArrowRight to={ROUTES.coursesReview} text={'See courses review'}></LinkArrowRight>
        </div>

        <div className="flex gap-8 flex-wrap md:flex-nowrap">
          <CourseReviewCard
            to={`${ROUTES.coursesReview}/course-example`}
            title={'The Marketing Seminar'}
            author={'Seth Godin'}
            imgSrc={'https://certificates.akimbo.com/img/akimbo_certificate_share.jpg'}
            imgAlt={'The Marketing Seminar certificate'}
            ratio={16 / 9}
          />

          <CourseReviewCard
            to={`${ROUTES.coursesReview}/course-example`}
            title={'The Marketing Seminar'}
            author={'Seth Godin'}
            imgSrc={'https://certificates.akimbo.com/img/akimbo_certificate_share.jpg'}
            imgAlt={'The Marketing Seminar certificate'}
            ratio={16 / 9}
          />
        </div>
      </section>
    </div>
  );
}
