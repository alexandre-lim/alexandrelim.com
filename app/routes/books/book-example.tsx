import { LinkArrowLeft } from '~/components/LinkArrowLeft';
import { ROUTES } from '~/routes';

export default function BookExample() {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="mb-16 inline-block">
          <LinkArrowLeft to={ROUTES.books} text={'Back to book notes'} />
        </div>

        <h2 className="text-xl md:text-4xl text-center font-recursive-bold font-recursive-semi-casual">Book title</h2>

        <article className="mt-16 flex flex-col gap-8">
          <h3 className="text-xl md:text-2xl font-recursive-semibold font-recursive-semi-casual">Notes</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Vulputate enim nulla aliquet porttitor. Lacus luctus accumsan tortor posuere ac ut
            consequat semper viverra. Viverra nam libero justo laoreet. Tortor condimentum lacinia quis vel eros.
            Fringilla urna porttitor rhoncus dolor purus non enim praesent. Nunc id cursus metus aliquam eleifend mi in.
            Ullamcorper sit amet risus nullam. Felis eget nunc lobortis mattis aliquam faucibus purus in. Pulvinar
            elementum integer enim neque. Sed libero enim sed faucibus turpis in eu mi. Scelerisque eu ultrices vitae
            auctor eu augue. Adipiscing vitae proin sagittis nisl rhoncus mattis.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Vulputate enim nulla aliquet porttitor. Lacus luctus accumsan tortor posuere ac ut
            consequat semper viverra. Viverra nam libero justo laoreet. Tortor condimentum lacinia quis vel eros.
            Fringilla urna porttitor rhoncus dolor purus non enim praesent. Nunc id cursus metus aliquam eleifend mi in.
            Ullamcorper sit amet risus nullam. Felis eget nunc lobortis mattis aliquam faucibus purus in. Pulvinar
            elementum integer enim neque. Sed libero enim sed faucibus turpis in eu mi. Scelerisque eu ultrices vitae
            auctor eu augue. Adipiscing vitae proin sagittis nisl rhoncus mattis.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Vulputate enim nulla aliquet porttitor. Lacus luctus accumsan tortor posuere ac ut
            consequat semper viverra. Viverra nam libero justo laoreet. Tortor condimentum lacinia quis vel eros.
            Fringilla urna porttitor rhoncus dolor purus non enim praesent. Nunc id cursus metus aliquam eleifend mi in.
            Ullamcorper sit amet risus nullam. Felis eget nunc lobortis mattis aliquam faucibus purus in. Pulvinar
            elementum integer enim neque. Sed libero enim sed faucibus turpis in eu mi. Scelerisque eu ultrices vitae
            auctor eu augue. Adipiscing vitae proin sagittis nisl rhoncus mattis.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Vulputate enim nulla aliquet porttitor. Lacus luctus accumsan tortor posuere ac ut
            consequat semper viverra. Viverra nam libero justo laoreet. Tortor condimentum lacinia quis vel eros.
            Fringilla urna porttitor rhoncus dolor purus non enim praesent. Nunc id cursus metus aliquam eleifend mi in.
            Ullamcorper sit amet risus nullam. Felis eget nunc lobortis mattis aliquam faucibus purus in. Pulvinar
            elementum integer enim neque. Sed libero enim sed faucibus turpis in eu mi. Scelerisque eu ultrices vitae
            auctor eu augue. Adipiscing vitae proin sagittis nisl rhoncus mattis.
          </p>
        </article>
      </div>
    </>
  );
}
