import * as Separator from '@radix-ui/react-separator';

export default function Index() {
  return (
    <>
      <div className="flex flex-col gap-16">
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
              <h2 className="text-xl md:text-2xl">Yousign</h2>
            </a>
            <Separator.Root orientation="vertical" className="h-6 w-px bg-gray-500 mx-4" />
            <p className="text-gray-700 text-xs md:text-base pt-1">July 2020 - Present</p>
          </div>
          <div className="w-full overflow-hidden md:max-w-xs mx-auto">
            <img
              className="object-contain w-full h-20"
              src="https://content.sifted.eu/wp-content/uploads/2020/06/03124710/YOUSIGN.png"
              alt="Yousign logo"
            />
          </div>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="">
            <div className="my-4">Technical Stack</div>
            <span className="inline-block bg-emerald-400 bg-opacity-60 text-sm border rounded-lg px-3 py-1 mr-2 mb-2">
              React
            </span>
            <span className="inline-block bg-emerald-400 bg-opacity-60 text-sm border rounded-lg px-3 py-1 mr-2 mb-2">
              React Query
            </span>
            <span className="inline-block bg-emerald-400 bg-opacity-60 text-sm border rounded-lg px-3 py-1 mr-2 mb-2">
              Typescript
            </span>
          </div>
        </section>

        <section>
          <div className="flex mb-8 items-center">
            <a href="https://www.lemonde.fr/" target="_blank" rel="noreferrer noopener">
              <h2 className="text-xl md:text-2xl">Le&nbsp;Monde</h2>
            </a>
            <Separator.Root orientation="vertical" className="h-6 w-px bg-gray-500 mx-4" />
            <p className="text-gray-700 text-xs md:text-base pt-1">October 2018 - June 2020</p>
          </div>
          <div className="w-full overflow-hidden md:max-w-xs mx-auto">
            <img
              className="object-contain w-full h-20"
              src="http://www.executivechannelnetwork.fr/wp-content/uploads/2017/03/logo-monde.jpg"
              alt="Le Monde logo"
            />
          </div>
          <p className="my-4">
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
