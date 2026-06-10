/**
 * cn — concatena clases condicionalmente, ignorando falsy.
 * Uso: cn('btn', isActive && 'btn-primary')
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
