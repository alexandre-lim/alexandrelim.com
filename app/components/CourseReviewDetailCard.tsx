import { Link, LinkProps } from 'remix';

interface CourseReviewDetailCardProps extends LinkProps {
  title: string;
  author: string;
  imgSrc: string;
  imgAlt: string;
  description: string;
}

function CourseReviewDetailCard({ to, title, author, imgSrc, imgAlt, description }: CourseReviewDetailCardProps) {
  return (
    <article className="group w-full border rounded-lg shadow-md transition hover:-translate-y-1">
      <Link to={to} className="block h-full overflow-hidden p-2">
        <img className="object-contain w-full h-60 rounded-t-lg" src={imgSrc} alt={imgAlt} />

        <div className="p-8">
          <h2 className="group-hover:text-blue-500 text-xl font-recursive-semibold font-recursive-semi-casual">
            <span>{`${title}`}</span> by&nbsp;<span>{`${author}`}</span>
          </h2>
          <p className="my-4">{description}</p>
        </div>
      </Link>
    </article>
  );
}

export { CourseReviewDetailCard };
