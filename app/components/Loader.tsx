import { useTransition } from 'remix';
import { useSpinDelay } from 'spin-delay';
import { RocketIcon } from '@radix-ui/react-icons';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

function LoaderNavigationLink() {
  const transition = useTransition();
  const { state, type, location } = transition;

  const isLoading = state === 'loading' && type === 'normalLoad';
  const showLoader = useSpinDelay(isLoading, { delay: 400, minDuration: 1000 });

  return (
    <AnimatePresence>
      {showLoader ? (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.3 }}
          className={clsx(
            'z-10 fixed right-16 bottom-8 rounded-xl border w-80 h-28 flex gap-4 items-center px-8',
            'bg-slate-800 dark:bg-white text-slate-100 dark:text-slate-800',
          )}
        >
          <RocketIcon height={48} width={48} className="motion-safe:animate-pulse flex-none" />
          <div className="flex flex-col gap-1 overflow-hidden">
            <span className="text-xl font-recursive-bold font-recursive-casual">Loading</span>
            <span className="text-sm text-gray-300 dark:text-gray-600 truncate font-recursive-semi-casual">
              path: {location?.pathname}
            </span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export { LoaderNavigationLink };
