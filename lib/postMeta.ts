export function splitTags(input: unknown): string[] {
  if (Array.isArray(input)) {
    return input
      .filter((t): t is string => typeof t === "string")
      .map((t) => t.trim())
      .filter(Boolean);
  }
  if (typeof input === "string") {
    return input
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
}

export function normalizeIsoDateToSlash(date: unknown): string | undefined {
  if (typeof date !== "string") return undefined;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return undefined;
  const [y, m, d] = date.split("-").map((x) => String(Number(x)));
  return `${y}/${m}/${d}`;
}

export function dateToEpochMs(date: unknown): number {
  if (!date) return Number.NEGATIVE_INFINITY;
  if (date instanceof Date) return date.getTime();

  const normalized = normalizeIsoDateToSlash(date);
  const toParse = typeof date === "string" ? date : String(date);
  const parsed = Date.parse(normalized ?? toParse);
  return Number.isFinite(parsed) ? parsed : Number.NEGATIVE_INFINITY;
}

export function normalizeFrontMatter<T extends Record<string, any> | undefined>(
  frontMatter: T,
): T {
  if (!frontMatter || typeof frontMatter !== "object") return frontMatter;

  const tags = Array.isArray(frontMatter.tags)
    ? splitTags(frontMatter.tags)
    : splitTags(frontMatter.tag);

  const normalizedDate = normalizeIsoDateToSlash(frontMatter.date);

  const needTags = tags.length > 0 && !Array.isArray(frontMatter.tags);
  const needDate = Boolean(normalizedDate) && frontMatter.date !== normalizedDate;
  if (!needTags && !needDate) return frontMatter;

  return {
    ...frontMatter,
    ...(needTags ? { tags } : null),
    ...(needDate ? { date: normalizedDate } : null),
  } as T;
}

export function hasTag(frontMatter: any, tag: string): boolean {
  if (!tag) return false;
  const fm = normalizeFrontMatter(frontMatter);
  const tags = splitTags(fm?.tags ?? fm?.tag);
  return tags.includes(tag);
}
