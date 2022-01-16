import { Link, LinkProps } from 'remix';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

interface CourseReviewDetailCardProps extends LinkProps {
  title: string;
  author: string;
  imgSrc: string;
  imgAlt: string;
  ratio: number;
  description: string;
}

function CourseReviewDetailCard({
  to,
  title,
  author,
  imgSrc,
  imgAlt,
  ratio,
  description,
}: CourseReviewDetailCardProps) {
  return (
    <article className="group w-full border rounded-lg shadow-md transition hover:-translate-y-1 p-2">
      <Link to={to} className="block h-full overflow-hidden">
        <AspectRatio.Root ratio={ratio}>
          <img className="object-cover w-full h-full rounded-t-lg" src={imgSrc} alt={imgAlt} />
        </AspectRatio.Root>

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
