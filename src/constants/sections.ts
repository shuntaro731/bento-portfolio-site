export const sections = [
  { id: "profile", label: "Profile" },
  { id: "tokushima", label: "Tokushima" },
  { id: "pr", label: "PR" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const sectionIds = sections.map((section) => section.id);
const sectionIdSet = new Set<SectionId>(sectionIds);

export const isSectionId = (value: string): value is SectionId =>
  sectionIdSet.has(value as SectionId);
