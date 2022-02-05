import * as Separator from '@radix-ui/react-separator';
import { TriangleRightIcon } from '@radix-ui/react-icons';

import { Tag } from '~/components/Tag';
import { techStackTagValues } from '~/utils/tech-stack-tags';

export default function Index() {
  return (
    <>
      <div className="flex flex-col gap-16 max-w-2xl mx-auto">
        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </section>

        <section>
          <div className="flex mb-8 items-center">
            <a href="https://yousign.com/" target="_blank" rel="noreferrer noopener">
              <h2 className="text-xl md:text-2xl font-bold">Yousign</h2>
            </a>
            <Separator.Root orientation="vertical" className="h-6 w-px bg-gray-500 mx-4" />
            <p className="text-gray-700 dark:text-slate-50 text-xs md:text-base pt-1">July 2020 - Present</p>
          </div>
          <div className="w-full overflow-hidden md:max-w-xs mx-auto">
            <img
              className="object-contain w-full h-20"
              src="https://content.sifted.eu/wp-content/uploads/2020/06/03124710/YOUSIGN.png"
              alt="Yousign logo"
            />
          </div>
          <p className="my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <h3 className="my-4 font-semibold">Impacts</h3>
          <ul className="pl-4 flex flex-col gap-2">
            <li>
              <div className="flex gap-2">
                <TriangleRightIcon
                  className="text-gray-800 dark:text-slate-50 text-opacity-80 min-w-[14px]"
                  height={24}
                  width={24}
                />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <TriangleRightIcon
                  className="text-gray-800 dark:text-slate-50 text-opacity-80 min-w-[14px]"
                  height={24}
                  width={24}
                />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <TriangleRightIcon
                  className="text-gray-800 dark:text-slate-50 text-opacity-80 min-w-[14px]"
                  height={24}
                  width={24}
                />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </div>
            </li>
          </ul>
          <div className="">
            <h3 className="my-4 font-semibold">Technical Stack</h3>
            <Tag tagValue={techStackTagValues.react.value} className="bg-emerald-400 bg-opacity-60" />
            <Tag tagValue={techStackTagValues.reactQuery.value} className="bg-emerald-400 bg-opacity-60" />
            <Tag tagValue={techStackTagValues.typeScript.value} className="bg-emerald-400 bg-opacity-60" />
            <Tag tagValue={techStackTagValues.styledComponents.value} className="bg-emerald-400 bg-opacity-60" />
            <Tag tagValue={techStackTagValues.storybook.value} className="bg-emerald-400 bg-opacity-60" />
            <Tag tagValue={techStackTagValues.jest.value} className="bg-emerald-400 bg-opacity-60" />
            <Tag tagValue={techStackTagValues.reactTestingLibrary.value} className="bg-emerald-400 bg-opacity-60" />
            <Tag tagValue={techStackTagValues.cypress.value} className="bg-emerald-400 bg-opacity-60" />
            <Tag tagValue={techStackTagValues.msw.value} className="bg-emerald-400 bg-opacity-60" />
            <Tag tagValue={techStackTagValues.docker.value} className="bg-emerald-400 bg-opacity-60" />
            <Tag tagValue={techStackTagValues.aws.value} className="bg-emerald-400 bg-opacity-60" />
            <Tag tagValue={techStackTagValues.gitlab.value} className="bg-emerald-400 bg-opacity-60" />
          </div>
        </section>

        <section>
          <div className="flex mb-8 items-center">
            <a href="https://www.lemonde.fr/" target="_blank" rel="noreferrer noopener">
              <h2 className="text-xl md:text-2xl font-bold">Le&nbsp;Monde</h2>
            </a>
            <Separator.Root orientation="vertical" className="h-6 w-px bg-gray-500 mx-4" />
            <p className="text-gray-700 dark:text-slate-50 text-xs md:text-base pt-1">October 2018 - June 2020</p>
          </div>
          <div className="w-full overflow-hidden md:max-w-xs mx-auto">
            <img
              className="object-contain w-full h-20"
              src="http://www.executivechannelnetwork.fr/wp-content/uploads/2017/03/logo-monde.jpg"
              alt="Le Monde logo"
            />
          </div>
          <p className="my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </section>
      </div>
    </>
  );
}
