import { site } from '@/lib/data';

/** Brand — logo "PC" + nombre. Reutilizado en Header y Footer. */
export function Brand() {
  return (
    <a href="#top" className="brand" aria-label={`${site.name} — inicio`}>
      <span className="brand-mark">PC</span>
      <span className="brand-name">
        {site.name}
        <small>{site.tagline}</small>
      </span>
    </a>
  );
}
