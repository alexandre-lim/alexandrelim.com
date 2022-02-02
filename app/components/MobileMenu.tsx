import clsx from 'clsx';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';

import { HeaderNavLink } from './HeaderNavLink';
import { ROUTES } from '~/routes';

const MobileMenu = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className="md:hidden">
        <button className="flex-none ml-2">
          <HamburgerMenuIcon height={24} width={24} />
          <VisuallyHidden.Root>Open navigation menu</VisuallyHidden.Root>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={clsx('fixed top-0 left-0 right-0 bottom-0 flex justify-end bg-[color:var(--color-backdrop)]')}
        >
          <Dialog.Content
            aria-label="Navigation Menu"
            className="bg-[color:var(--color-background)] w-[300px] h-full p-8 flex flex-col"
          >
            <Dialog.Close asChild>
              <button
                className={clsx(
                  'block m-0 border-none bg-transparent cursor-pointer text-left placeholder-inherit',
                  'focus:outline-offset-2',
                  'absolute right-0 p-4',
                )}
              >
                <Cross2Icon height={24} width={24} />
                <VisuallyHidden.Root>Close navigation menu</VisuallyHidden.Root>
              </button>
            </Dialog.Close>
            <div className="flex-1"></div>
            <nav className="flex-1">
              <ul className="flex flex-col flex-1 gap-4">
                <li>
                  <HeaderNavLink to={ROUTES.about}>About</HeaderNavLink>
                </li>
                <li>
                  <HeaderNavLink to={ROUTES.experience}>Experience</HeaderNavLink>
                </li>
                <li>
                  <HeaderNavLink to={ROUTES.blog}>Blog</HeaderNavLink>
                </li>
                <li>
                  <HeaderNavLink to={ROUTES.books}>Book notes</HeaderNavLink>
                </li>
                <li>
                  <HeaderNavLink to={ROUTES.coursesReview}>Courses review</HeaderNavLink>
                </li>
              </ul>
            </nav>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { MobileMenu };
