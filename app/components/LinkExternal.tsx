import { ExternalLinkIcon } from '@radix-ui/react-icons';

interface LinkExternalProps {
  href: string;
}

const LinkExternal: React.FC<LinkExternalProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="text-blue-500 transition-shadow hover:shadow-[0_2px_0_0_rgb(59_130_246_/_var(--tw-text-opacity))]"
    >
      {children}
      <ExternalLinkIcon className="inline-block -translate-y-2 translate-x-[1px]" width={12} height={12} />
    </a>
  );
};

export { LinkExternal };
