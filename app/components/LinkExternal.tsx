import { ExternalLinkIcon } from '@radix-ui/react-icons';

interface LinkExternalProps {
  href: string;
  value: string;
}

function LinkExternal({ href, value }: LinkExternalProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="text-blue-500 transition-shadow hover:shadow-[0_2px_0_0_rgb(59_130_246_/_var(--tw-text-opacity))]"
    >
      {value}
      <ExternalLinkIcon className="inline-block -translate-y-2 translate-x-[1px]" width={12} height={12} />
    </a>
  );
}

export { LinkExternal };
