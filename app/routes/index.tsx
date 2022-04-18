import * as Avatar from '@radix-ui/react-avatar';

import { ROUTES } from '~/routes';
import { ButtonLink } from '~/components/ButtonLink';
import { LinkArrowRight } from '~/components/LinkArrowRight';
import { ArticleCard, ArticleHeaderTag } from '~/components/ArticleCard';
import { BookdCard } from '~/components/BookCard';
import { CourseCard } from '~/components/CourseCard';

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
          <HomePageSecondTitle title={'Articles'} />
          <LinkArrowRight to={ROUTES.blog} text={'See the blog'}></LinkArrowRight>
        </div>

        <div className="flex flex-col gap-8">
          <ArticleCard
            to={`${ROUTES.blog}/feedback-from-building-my-website-665d38aa-9021-4e8c-b3fc-1fe3e0987454`}
            headerTag={ArticleHeaderTag.h3}
            title="Feedback from building my website"
            arrowText="Read More"
            summary="Building a website from scratch in your spare time is no easy fit, even with coding skills.
            Why is that? Because it's not just about writing code.
            Here, I'll share my feedback on making my website with some pieces of advice."
          />

          <ArticleCard
            to={`${ROUTES.blog}/writing-for-myself-05223140-84e5-401b-bc76-36c5fa95c6f0`}
            headerTag={ArticleHeaderTag.h3}
            title="Writing for Myself"
            arrowText="Read More"
            summary="Writing is hard. I like the idea of writing but doing it over a long time with care is just another beast.
            There are many times I started but then stopped. This time, I'll try another approach. Writing for myself."
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
            to={`${ROUTES.books}/clean-code-8cabe006-6867-4073-8c87-5bb7c6a11dbf`}
            title={'Clean Code'}
            author={'Robert C. Martin'}
            imgSrc={'/assets/clean_code.jpeg'}
            ratio={16 / 9}
          />

          <BookdCard
            to={`${ROUTES.books}/atomic-habits-5b340c3d-66f9-455d-a0c9-2ee3e38ef13d`}
            title={'Atomic Habits'}
            author={'James Clear'}
            imgSrc={'/assets/atomic_habits.jpeg'}
            ratio={16 / 9}
          />
        </div>
      </section>

      <section>
        <div className="flex justify-between items-baseline">
          <HomePageSecondTitle title={'Course notes'} />
          <LinkArrowRight to={ROUTES.courses} text={'See course notes'}></LinkArrowRight>
        </div>

        <div className="flex gap-8 flex-wrap md:flex-nowrap">
          <CourseCard
            to={`${ROUTES.courses}/css-for-javascript-developers-981de5a4-bf64-493c-a756-ddbb6a276fcf`}
            title={'CSS for JavaScript Developers'}
            author={'Josh Comeau'}
            imgSrc={'/assets/css_for_js_certificate.png'}
            imgAlt={'CSS for JavaScript Developers certificate'}
            ratio={16 / 9}
          />

          <CourseCard
            to={`${ROUTES.courses}/the-marketing-seminar-dc2ca431-7c74-4aad-b99c-bc8bc671664e`}
            title={'The Marketing Seminar'}
            author={'Seth Godin'}
            imgSrc={'/assets/marketing_seminar_certificate.jpg'}
            imgAlt={'The Marketing Seminar certificate'}
            ratio={16 / 9}
          />
        </div>
      </section>
    </div>
  );
}
