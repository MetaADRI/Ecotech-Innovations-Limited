import { FacebookIcon } from "@/components/icons/BrandIcons";
import { site } from "@/lib/site";

/**
 * Live Facebook Page feed via the official Page Plugin iframe.
 * Content stays fresh without any manual updates.
 */
export default function FacebookFeed({ height = 560 }: { height?: number }) {
  const src = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
    site.facebook
  )}&tabs=timeline&width=500&height=${height}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

  return (
    <div className="overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-black/5 dark:ring-white/10">
      <iframe
        src={src}
        width="100%"
        height={height}
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        loading="lazy"
        allow="encrypted-media; clipboard-write"
        title="Ecotech Innovations Facebook feed"
        className="block w-full"
      />
      <div className="flex items-center justify-between border-t border-black/5 bg-brand-mint px-5 py-3">
        <p className="flex items-center gap-2 text-sm font-medium text-brand-ink">
          <FacebookIcon className="h-4 w-4 text-brand-ink" /> Follow us for the latest updates
        </p>
        <a
          href={site.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-brand-green-dark transition-colors hover:text-brand-green"
        >
          Open Facebook →
        </a>
      </div>
    </div>
  );
}
