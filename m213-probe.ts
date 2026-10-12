export function clampPage(page: number, pages: number): number {
  if (page < 0) return 0;
  return page > pages ? pages : page;
}
